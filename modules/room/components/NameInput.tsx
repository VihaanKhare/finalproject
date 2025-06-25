import { FormEvent, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { socket } from '@/common/lib/socket';
import { useSetRoomId } from '@/common/recoil/room';
import NotFoundModal from '@/modules/home/modals/NotFound';
import { useModal } from '@/modules/modal';

const NameInput = () => {
  const setRoomId = useSetRoomId();
  const { openModal } = useModal();

  const [name, setName] = useState('');

  const router = useRouter();
  const roomId = (router.query.roomId || '').toString();

  useEffect(() => {
    if (!roomId) return;

    socket.emit('check_room', roomId);

    socket.on('room_exists', (exists) => {
      if (!exists) {
        router.push('/');
      }
    });

    // eslint-disable-next-line consistent-return
    return () => {
      socket.off('room_exists');
    };
  }, [roomId, router]);

  useEffect(() => {
    const handleJoined = (roomIdFromServer: string, failed?: boolean) => {
      if (failed) {
        router.push('/');
        openModal(<NotFoundModal id={roomIdFromServer} />);
      } else setRoomId(roomIdFromServer);
    };

    socket.on('joined', handleJoined);

    return () => {
      socket.off('joined', handleJoined);
    };
  }, [openModal, router, setRoomId]);

  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket.emit('join_room', roomId, name);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-light">
      <form className="card w-full max-w-xl flex flex-col items-center gap-8" onSubmit={handleJoinRoom}>
        <h1 className="text-5xl font-extrabold leading-tight text-primary">WhiteBoardX</h1>
        <h3 className="text-xl sm:text-2xl text-zinc-500">Real-time whiteboard</h3>

        <div className="w-full flex flex-col gap-2">
          <label className="self-start font-bold leading-tight">Enter your name</label>
          <input
            className="input w-full"
            id="room-id"
            placeholder="Username..."
            value={name}
            onChange={(e) => setName(e.target.value.slice(0, 15))}
          />
        </div>

        <button className="btn w-full" type="submit">Enter room</button>
      </form>
    </div>
  );
};

export default NameInput;
