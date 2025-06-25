import { useEffect, useState } from 'react';

import { AiOutlineDelete } from 'react-icons/ai';
import { BsArrowsMove } from 'react-icons/bs';
import { FiCopy } from 'react-icons/fi';

import { useOptionsValue } from '@/common/recoil/options';

import { useRefs } from '../../../hooks/useRefs';
import { useBoardPosition } from '../hooks/useBoardPosition';

const SelectionBtns = () => {
  const { selection } = useOptionsValue();
  const { selectionRefs } = useRefs();
  const boardPos = useBoardPosition();

  const [boardX, setX] = useState(0);
  const [boardY, setY] = useState(0);

  useEffect(() => {
    const unsubscribe = boardPos.x.onChange(setX);
    return unsubscribe;
  }, [boardPos.x]);

  useEffect(() => {
    const unsubscribe = boardPos.y.onChange(setY);
    return unsubscribe;
  }, [boardPos.y]);

  if (!selection) return null;

  const { x, y, width, height } = selection;
  const top = Math.min(y, y + height) - 40 + boardY;
  const left = Math.min(x, x + width) + boardX;

  return (
    <div
      className="absolute top-0 left-0 z-50 flex items-center justify-center gap-3 p-2 bg-white/80 rounded-xl shadow-soft border border-border"
      style={{ top, left }}
    >
      <button
        className="btn-icon text-xl bg-primary"
        ref={(ref) => {
          if (ref && selectionRefs.current) selectionRefs.current[0] = ref;
        }}
      >
        <BsArrowsMove />
      </button>
      <button
        className="btn-icon text-xl bg-primary"
        ref={(ref) => {
          if (ref && selectionRefs.current) selectionRefs.current[1] = ref;
        }}
      >
        <FiCopy />
      </button>
      <button
        className="btn-icon text-xl bg-accent"
        ref={(ref) => {
          if (ref && selectionRefs.current) selectionRefs.current[2] = ref;
        }}
      >
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default SelectionBtns;
