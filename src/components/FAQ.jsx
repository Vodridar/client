import React from 'react'
import leaf from './../images/leaf.svg'

const FAQ = () => {
  return (
    <div className='flex flex-col items-start p-12 gap-12'>
      <div className='flex flex-row items-start gap-6 w-[84.00rem] h-[35.50rem]'>

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

            <div className='flex flex-col justify-center items-start gap-4 h-72'>

              <div className=''>

                <div className=''>

                  <div className=''>
                
                  </div>

                  <div className=''>

                  </div>

                </div>

                <div className=''>

                </div>

                <div className=''>

                </div>

              </div>

              <div className='flex flex-row items-center gap-2'>
                <input type="checkbox" id="privacy" className='w-4 h-4 rounded-lg border-[1px] border-[#C7C7CC] ' />
                <label htmlFor="privacy" className='text-base leading-[130%] text-[#1C1C1E]'>Согласен на обработку персональных данных</label>
              </div>

            </div>

            <div className='flex flex-row'>
              <button className='items-center py-3 px-6 gap-6 w-48 h-14 rounded-xl bg-[#FDD5E9]'>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ