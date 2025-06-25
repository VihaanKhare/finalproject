import { FormEvent, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { socket } from '@/common/lib/socket';
import { useSetRoomId } from '@/common/recoil/room';
import { useModal } from '@/modules/modal';

import NotFoundModal from '../modals/NotFound';

const Home = () => {
  const { openModal } = useModal();
  const setAtomRoomId = useSetRoomId();

  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const router = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor = 'white';
  }, []);

  useEffect(() => {
    socket.on('created', (roomIdFromServer) => {
      setAtomRoomId(roomIdFromServer);
      router.push(roomIdFromServer);
    });

    const handleJoinedRoom = (roomIdFromServer: string, failed?: boolean) => {
      if (!failed) {
        setAtomRoomId(roomIdFromServer);
        router.push(roomIdFromServer);
      } else {
        openModal(<NotFoundModal id={roomId} />);
      }
    };

    socket.on('joined', handleJoinedRoom);

    return () => {
      socket.off('created');
      socket.off('joined', handleJoinedRoom);
    };
  }, [openModal, roomId, router, setAtomRoomId]);

  useEffect(() => {
    socket.emit('leave_room');
    setAtomRoomId('');
  }, [setAtomRoomId]);

  const handleCreateRoom = () => {
    socket.emit('create_room', username);
  };

  const handleJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (roomId) socket.emit('join_room', roomId, username);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-light">
      <div className="card w-full max-w-xl flex flex-col items-center gap-8">
        <h1 className="text-5xl font-extrabold leading-tight text-primary">WhiteBoardX</h1>
        <h3 className="text-xl sm:text-2xl text-zinc-500">Real-time whiteboard</h3>

        <div className="w-full flex flex-col gap-2">
          <label className="self-start font-bold leading-tight">Enter your name</label>
          <input
            className="input w-full"
            id="room-id"
            placeholder="Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value.slice(0, 15))}
          />
        </div>

        <div className="h-px w-full bg-zinc-200" />

        <form className="w-full flex flex-col items-center gap-3" onSubmit={handleJoinRoom}>
          <label htmlFor="room-id" className="self-start font-bold leading-tight">Enter room id</label>
          <input
            className="input w-full"
            id="room-id"
            placeholder="Room id..."
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <button className="btn w-full" type="submit">Join</button>
        </form>

        <div className="flex w-full items-center gap-2">
          <div className="h-px w-full bg-zinc-200" />
          <p className="text-zinc-400">or</p>
          <div className="h-px w-full bg-zinc-200" />
        </div>

        <div className="w-full flex flex-col items-center gap-2">
          <h5 className="self-start font-bold leading-tight">Create new room</h5>
          <button className="btn w-full" onClick={handleCreateRoom}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
