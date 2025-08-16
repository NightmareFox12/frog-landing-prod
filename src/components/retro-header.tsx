'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function RetroHeader() {
  //states
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className='relative z-50 w-full'>
      <div className='bg-gradient-to-r from-green-500 to-green-700 p-[1px]'>
        <div className='relative bg-gradient-to-r from-black to-gray-900'>
          <div className='absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 transform rotate-45 -translate-x-4 -translate-y-4' />
          <div className='absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-green-400 to-green-600 transform rotate-45 translate-x-4 -translate-y-4' />
          <div className='absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-green-400 to-green-600 transform rotate-45 -translate-x-4 translate-y-4' />
          <div className='absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-green-400 to-green-600 transform rotate-45 translate-x-4 translate-y-4' />

          {/* Header content */}
          <div className='flex items-center justify-between px-4 py-3 md:px-8 md:py-4 relative z-10'>
            {/* Logo */}
            <div className='flex items-center gap-3'>
              <img src='/Logo.png' alt='FrogHack Logo' className='w-10 h-10' />
              <h1 className='text-lg md:text-8lg font-bold text-white tracking-[0.5px]'>
                FROG<span className='text-green-400'>HACK</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center gap-6'>
              <Button className='bg-gradient-to-r from-green-400 to-green-500 text-white font-bold text-sm tracking-wide px-6 py-2 border-2 border-green-300 hover:scale-105 transition-transform'>
                Coming Soon...
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant='ghost'
              className='md:hidden text-green-400 text-2xl hover:bg-transparent hover:text-green-300 hover:scale-105 transition delay-75 cursor-pointer'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </Button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className='md:hidden flex flex-col items-center gap-4 pb-4'>
              <Button className='bg-gradient-to-r from-green-400 to-green-500 text-black font-mono font-bold text-sm tracking-wide px-6 py-2 border-2 border-green-300 hover:scale-105 transition-transform'>
                Coming Soon...
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
