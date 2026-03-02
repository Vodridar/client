import React from 'react';
import Well from './../images/WellWet.svg'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full max-w-[1440] mx-auto px-12 pt-6">
      <div className="flex items-center justify-between">
        <div className="w-[116] h-[53] overflow-hidden">
          <Link to={'/'}><img src={Well} className="w-full h-full object-cover"/></Link>
        </div>

        <div className="flex gap-4">
        
          <button className="w-27.75 h-13.25 rounded-2xl bg-[#F3F4F6] text-[#1C1C1E]">Войти</button>

          <button className="w-41.25 h-13.25 rounded-2xl bg-[#06B2D3] text-white">Регистрация</button>

        </div>
      </div>
    </header>
  );
};

