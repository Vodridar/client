import React from 'react';
import Product from './../images/Product.svg'
import { PawPrint } from 'lucide-react';

const Paw = (<div className='box-border flex flex-row items-center p-2 gap-2 w-8 h-8 rounded-full bg-[#C5E8EE] border-[0.8px] border-[#06B2D3] text-[#06B2D3]'>
              <PawPrint />
            </div>)

const Card_page = () => {
  return (
    <div className='flex flex-row items-start justify-between p-12 gap-8'>

      <div>
        <img src={Product} className='w-[640px] h-[834px]'/>
      </div>

      <div className='flex flex-col items-start gap-8'>
        <div className='flex flex-col gap-[16px] w-[561px]'>
          <span className='font-medium text-5xl leading-[110%] text-[#1C1C1E]'>WellWet Holistic Sensitive Low-Grain Veal</span>
          <span className='font-normal text-xl leading-[130%] text-[#1C1C1E] opacity-40'>Для взрослых собак</span>
          <span className='font-normal text-xl leading-[130%] text-[#1C1C1E]'>Holistic-корм для собак с чувствительным пищеварением.
            Натуральный состав, минимальное содержание зерновых и контроль качества на каждом этапе производства.</span>
        </div>

        <div className='flex flex-col items-start gap-6 w-[42.50rem] h-[33.50rem]'>
          <div className='box-border flex flex-row items-start p-6 gap-8 h-56 rounded-xl border-[1px] border-[#00000008] bg-[#00000005]'>
            <div className='flex flex-col items-start gap-6 w-[35.50rem] h-44'>
              <span className='font-normal text-xl leading-[130%]'>Ключевые характеристики</span>

              <span className='h-32 font-normal text-base leading-[130%] opacity-[0.54]'>Содержимое <br />
                – Натуральные источники животного белка <br />
                – Low-grain рецепт <br />
                – Без кукурузы и пшеницы <br />
                – Без искусственных красителей и ароматизаторов <br /> 
                – Подходит для ежедневного питания</span>
            </div>

            {Paw}
          </div>

          <div className='box-border flex flex-row items-center p-6 gap-8 h-20 rounded-xl border-[1px] border-[#00000008] bg-[#00000005]'>
            <div className='flex flex-col items-start gap-6'>
              <span className='w-[35.50rem] h-7 font-normal text-xl leading-[130%]'>О составе</span>
            </div>

            {Paw}
          </div>

          <div className='box-border flex flex-row items-center p-6 gap-8 h-20 rounded-xl border-[1px] border-[#00000008] bg-[#00000005]'>
             <div className='flex flex-col items-start gap-6'>
              <span className='w-[35.50rem] h-7 font-normal text-xl leading-[130%]'>Рекомендации по кормлению</span>
            </div>

            {Paw}
          </div>

          <div className='box-border flex flex-row items-center p-6 gap-8 h-20 rounded-xl border-[1px] border-[#00000008] bg-[#00000005]'>
            <div className='flex flex-col items-start gap-6'>
              <span className='w-[35.50rem] h-7 font-normal text-xl leading-[130%]'>Для кого подойдёт</span>
            </div>

            {Paw}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_page;
    