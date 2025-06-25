import { AiOutlineClose } from 'react-icons/ai';

import { useModal } from '@/modules/modal';

const NotFoundModal = ({ id }: { id: string }) => {
  const { closeModal } = useModal();

  return (
    <div className="card relative flex flex-col items-center text-center max-w-md w-full">
      <button onClick={closeModal} className="btn-icon absolute top-4 right-4">
        <AiOutlineClose />
      </button>
      <h2 className="text-2xl font-bold text-primary mb-2">
        Room with id "{id}" does not exist or is full!
      </h2>
      <h3 className="text-zinc-500">Try to join room later.</h3>
    </div>
  );
};

export default NotFoundModal;
