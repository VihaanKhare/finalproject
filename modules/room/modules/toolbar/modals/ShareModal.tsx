import { useEffect, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import { useRoom } from '@/common/recoil/room';
import { useModal } from '@/modules/modal';

const ShareModal = () => {
  const { id } = useRoom();
  const { closeModal } = useModal();

  const [url, setUrl] = useState('');

  useEffect(() => setUrl(window.location.href), []);

  const handleCopy = () => navigator.clipboard.writeText(url);

  return (
    <div className="card relative flex flex-col items-center text-center max-w-md w-full pt-8">
      <button onClick={closeModal} className="btn-icon absolute top-4 right-4">
        <AiOutlineClose />
      </button>
      <h2 className="text-2xl font-bold text-primary mb-2">Invite</h2>
      <h3 className="mb-2">
        Room id: <span className="inline font-bold text-primary">{id}</span>
      </h3>
      <div className="relative mt-2 w-full flex gap-2">
        <input type="text" value={url} readOnly className="input w-full" />
        <button className="btn" onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
};

export default ShareModal;
