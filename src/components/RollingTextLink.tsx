import React from 'react';
import { motion } from 'framer-motion';

interface RollingLinkProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

export const RollingTextLink: React.FC<RollingLinkProps> = ({
  text,
  href,
  onClick,
  className = '',
  showArrow = false,
}) => {
  const content = (
    <motion.span
      initial="initial"
      whileHover="hover"
      className={`relative inline-block overflow-hidden cursor-pointer group py-1 ${className}`}
    >
      {/* Primary Label */}
      <motion.span
        variants={{
          initial: { y: 0 },
          hover: { y: '-100%' },
        }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="block font-medium tracking-wider text-[#d9d7d4]"
      >
        {text} {showArrow && <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>}
      </motion.span>

      {/* Rolling Duplicate Label */}
      <motion.span
        variants={{
          initial: { y: '100%' },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        aria-hidden="true"
        className="absolute inset-0 block font-medium tracking-wider text-[#d9d7d4]"
      >
        {text} {showArrow && <span className="inline-block">→</span>}
      </motion.span>

      {/* Thin Growing Underline */}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d9d7d4]/60 transition-all duration-500 group-hover:w-full" />
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
};
