import Header from "./header";
import Product from './../images/Product.svg'
import { Link, NavLink } from "react-router-dom";


const Card = (<div className="flex flex-col">
                    <div className="text-[#1C1C1E]  font-normal w-104.5 h-104.5">
                        <img src={Product}></img>
                    </div>
                    <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">WellWet Holistic</h3>
                    <p className="text-gray-600 w-76 mb-4">Для собак с чувствительным пищеварением</p>
                    <Link to={'a'}><button className="px-5 py-2 h-13.25 w-76 bg-[#06B2D3] text-white rounded-xl">Смотреть</button></Link>
                    </div>
                </div>)

const Catalog = () => {
    return(
        <main className="w-full flex flex-col justify-center px-12 pt-8 overflow-hidden">
            <h1 className="text-4xl font-medium text-[#1C1C1E]">Каталог товаров</h1>

            <div className="flex flex-row gap-5">
                <button className="flex mt-12 gap-8 mb-10 border-xl rounded-xl pt-3 pb-3 pl-6 pr-6 text-[#1C1C1E] bg-[#C5E8EE]">Все корма</button>
                <button className="flex mt-12 gap-8 mb-10 border-xl rounded-xl pt-3 pb-3 pl-6 pr-6 text-[#1C1C1E] bg-[#F2F2F2]">Для кошек</button>
                <button className="flex mt-12 gap-8 mb-10 border-xl rounded-xl pt-3 pb-3 pl-6 pr-6 text-[#1C1C1E] bg-[#F2F2F2]">Для собак</button>
            </div>

            
        <div className="grid grid-cols-4 gap-4 flex-col">
            
            {Card}
            {Card}
            {Card}
            {Card}
            {Card}
            {Card}
            {Card}
            {Card}

        </div>

            

    

        </main>

    );

};









export default Catalog;