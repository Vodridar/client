import React from 'react'
import leaf from './../images/leaf.svg'
import { ArrowRight, ChevronDown } from 'lucide-react'

const FAQ = () => {
  return (
    <div className='flex flex-col items-start p-12 gap-12'>
      <div className='flex flex-row items-start justify-between gap-6 w-[84.00rem] h-[35.50rem]'>

        <div>
          <img src={leaf} className='w-96 h-[35.50rem]'/>
        </div>

        <div className='flex flex-col items-start gap-8 w-[57.31rem] h-[35.50rem]'>

          <div className='flex flex-col items-start gap-6 h-36'>
            <span className='w-[34.88rem] h-16 font-medium text-5xl leading-[130%] text-[#1C1C1E]'>Остались вопросы?</span>
            <span className='w-[49.25rem] h-16 font-normal text-2xl leading-[130%] text-[#1C1C1E] opacity-40'>
            Мы поможем разобраться с выбором корма и ответим на вопросы о продукции WellWet.</span>
          </div>

          <div className='flex flex-col items-start gap-8 h-96'>

            <div className='flex flex-col justify-center items-start gap-4 w-[57.31rem] h-72'>
                  <div className="flex w-full gap-4">
                    <div className="bg-gray-100 rounded-xl px-5 py-4 w-[450px] text-gray-500 text-base transition-colors focus-within:bg-gray-200 cursor-text">
                      Ваше имя
                    </div>
                    <div className="bg-gray-100 rounded-xl px-5 py-4 w-[450px] text-gray-500 text-base transition-colors focus-within:bg-gray-200 cursor-text">
                      Email или телефон
                    </div>
                  </div>

                  <div className="w-full bg-gray-100 rounded-xl px-5 py-4 text-gray-500 text-base flex justify-between items-center cursor-pointer hover:bg-gray-200 transition-colors">
                    <span>Тип организации</span>
                    <ChevronDown />
                  </div>


                  <div className="w-full bg-gray-100 rounded-xl px-5 py-4 text-gray-500 text-base min-h-[120px] cursor-text">
                    Ваш вопрос или комментарий
                  </div>

              <div className='flex flex-row items-center gap-2'>
                <input type="checkbox" id="privacy" className='w-4 h-4 rounded-lg border-[1px] border-[#C7C7CC]' />
                <label htmlFor="privacy" className='text-base leading-[130%] text-[#1C1C1E]'>Согласен на обработку персональных данных</label>
              </div>

            </div>

            <div className='flex flex-row items-center py-3 px-6 gap-6 w-48 h-14 rounded-xl bg-[#FDD5E9]'>
              <span>Отправить</span>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ