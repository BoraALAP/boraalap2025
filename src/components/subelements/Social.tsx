import { Github } from '@/assets/Github';
import { Linkedin } from '@/assets/Linkedin';
import Link from 'next/link';
import React from 'react'

export const Social = () => {
  return (
    <div className="p-2 bg-light-bg dark:bg-dark-bg rounded-full flex items-center gap-2 overflow-hidden">
      <Link href="https://linkedin.com/in/boraalap">
        <Linkedin />
      </Link>
      <Link href="https://github.com/BoraALAP">
        <Github />
      </Link>
    </div>
  );
};

