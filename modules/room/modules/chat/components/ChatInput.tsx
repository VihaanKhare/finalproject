import { FormEvent, useState } from 'react';

import { AiOutlineSend } from 'react-icons/ai';

import { socket } from '@/common/lib/socket';

const ChatInput = () => {
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket.emit('send_msg', msg);

    setMsg('');
  };

  return (
    <form className="flex w-full items-center gap-3 mt-2" onSubmit={handleSubmit}>
      <input
        className="input w-full"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type a message..."
      />
      <button className="btn-icon h-10 w-10 bg-primary" type="submit">
        <AiOutlineSend />
      </button>
    </form>
  );
};

export default ChatInput;
