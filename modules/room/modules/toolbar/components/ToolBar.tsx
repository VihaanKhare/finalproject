import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FiChevronRight } from 'react-icons/fi';
import { HiOutlineDownload } from 'react-icons/hi';
import { ImExit } from 'react-icons/im';
import { IoIosShareAlt } from 'react-icons/io';

import { CANVAS_SIZE } from '@/common/constants/canvasSize';
import { useViewportSize } from '@/common/hooks/useViewportSize';
import { useModal } from '@/modules/modal';

import { useRefs } from '../../../hooks/useRefs';
import ShareModal from '../modals/ShareModal';
import BackgroundPicker from './BackgoundPicker';
import ColorPicker from './ColorPicker';
import HistoryBtns from './HistoryBtns';
import ImagePicker from './ImagePicker';
import LineWidthPicker from './LineWidthPicker';
import ModePicker from './ModePicker';
import ShapeSelector from './ShapeSelector';

const ToolBar = () => {
  const { canvasRef, bgRef } = useRefs();
  const { openModal } = useModal();
  const { width } = useViewportSize();

  const [opened, setOpened] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (width >= 1024) setOpened(true);
    else setOpened(false);
  }, [width]);

  const handleExit = () => router.push('/');

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = CANVAS_SIZE.width;
    canvas.height = CANVAS_SIZE.height;

    const tempCtx = canvas.getContext('2d');

    if (tempCtx && canvasRef.current && bgRef.current) {
      tempCtx.drawImage(bgRef.current, 0, 0);
      tempCtx.drawImage(canvasRef.current, 0, 0);
    }

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'canvas.png';
    link.click();
  };

  const handleShare = () => openModal(<ShareModal />);

  return (
    <>
      <motion.button
        className="btn-icon absolute bottom-1/2 -left-4 z-50 h-12 w-12 rounded-full bg-primary text-2xl shadow-soft transition-none lg:hidden"
        animate={{ rotate: opened ? 0 : 180 }}
        transition={{ duration: 0.2 }}
        onClick={() => setOpened(!opened)}
      >
        <FiChevronRight />
      </motion.button>
      <motion.div
        className="absolute left-10 top-1/2 z-50 grid grid-cols-2 items-center gap-6 rounded-2xl bg-white shadow-modal p-6 text-primary 2xl:grid-cols-1 border border-border"
        animate={{
          x: opened ? 0 : -200,
          y: '-50%',
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <HistoryBtns />
        <div className="h-px w-full bg-border 2xl:hidden" />
        <div className="h-px w-full bg-border" />
        <ShapeSelector />
        <ColorPicker />
        <LineWidthPicker />
        <ModePicker />
        <ImagePicker />
        <div className="2xl:hidden"></div>
        <div className="h-px w-full bg-border 2xl:hidden" />
        <div className="h-px w-full bg-border" />
        <BackgroundPicker />
        <button className="btn-icon text-2xl" onClick={handleShare}>
          <IoIosShareAlt />
        </button>
        <button className="btn-icon text-2xl" onClick={handleDownload}>
          <HiOutlineDownload />
        </button>
        <button className="btn-icon text-xl" onClick={handleExit}>
          <ImExit />
        </button>
      </motion.div>
    </>
  );
};

export default ToolBar;
