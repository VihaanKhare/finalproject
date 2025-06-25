import { useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { RgbaColorPicker } from 'react-colorful';
import { BsPaletteFill } from 'react-icons/bs';
import { useClickAway } from 'react-use';

import { useOptions } from '@/common/recoil/options/options.hooks';

import { EntryAnimation } from '../animations/Entry.animations';

const ColorPicker = () => {
  const [options, setOptions] = useOptions();

  const ref = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);

  useClickAway(ref, () => setOpened(false));

  return (
    <div className="relative flex items-center" ref={ref}>
      <button
        className="btn-icon"
        onClick={() => setOpened(!opened)}
        disabled={options.mode === 'select'}
      >
        <BsPaletteFill />
      </button>
      <AnimatePresence>
        {opened && (
          <motion.div
            className="absolute left-10 mt-24 sm:left-14 bg-white rounded-xl shadow-soft border border-border p-4"
            variants={EntryAnimation}
            initial="from"
            animate="to"
            exit="from"
          >
            <h2 className="ml-3 font-semibold text-black dark:text-white mb-2">Line color</h2>
            <RgbaColorPicker
              color={options.lineColor}
              onChange={(e) => {
                setOptions({
                  ...options,
                  lineColor: e,
                });
              }}
              className="mb-5"
            />
            <h2 className="ml-3 font-semibold text-black dark:text-white mb-2">Fill color</h2>
            <RgbaColorPicker
              color={options.fillColor}
              onChange={(e) => {
                setOptions({
                  ...options,
                  fillColor: e,
                });
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorPicker;
