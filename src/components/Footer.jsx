import React from "react";
import Header from "./header";
import Catalog from "./Catalog";
import Well from './../images/WellWet.svg'

const Footer = () => {
  return (

      <footer className="w-full px-20 py-12 bg-[#F2F2F2] border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          <div className="flex flex-col gap-4">
            <div className="w-80 h-20">
              <img src={Well} alt="WellWet Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="opacity-50">Holistic-корм для собак и кошек.</p>
              <p className="opacity-50">Натуральный состав и контроль качества на каждом этапе производства.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold flex mr-30">Разделы</h3>
            <div className="flex flex-col gap-1">
              <a href="#" className="text-gray-600 ">Продукты</a>
              <a href="#" className="text-gray-600 ">О корме</a>
              <a href="#" className="text-gray-600 ">Состав</a>
              <a href="#" className="text-gray-600 ">Контакты</a>
              <a href="#" className="text-gray-600 ">Партнёрам</a>
            </div>
          </div>
        </div>
        <div className="flex gap-8 mb-10 border-b border-[#6E6E73] opacity-50 pb-4"></div>
      </footer>

  );
};

export default Footer;