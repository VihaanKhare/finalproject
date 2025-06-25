import { socket } from '@/common/lib/socket';
import { MessageType } from '@/common/types/global';

const Message = ({ userId, msg, username, color }: MessageType) => {
  const me = socket.id === userId;

  return (
    <div
      className={`my-2 flex gap-2 ${me ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-soft ${me ? 'bg-primary text-white' : 'bg-zinc-100 text-black'}`} style={{ wordBreak: 'break-all' }}>
        {!me && (
          <h5 style={{ color }} className="font-bold mb-1">
            {username}
          </h5>
        )}
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default Message;
