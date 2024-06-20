import React from 'react'
import { Link } from 'react-router-dom'
const TopBar = () => {
  return (
    <div className={'xl:w-full sm:w-full min-[320px]:w-full flex justify-between items-center xl:p-4 xl:px-12 min-[400px]:p-4 min-[400px]:px-12 min-[320px]:p-3 min-[320px]:px-8 min-[260px]:p-3 min-[260px]:px-4  text-white shadow-2xl'}>
        <div className={'lg:text-2xl font-bold text-white'}>Payment X</div>
        <div>
            <ul className={'list-none flex sm:gap-4 xl:gap-8  min-[400px]:gap-4 min-[320px]:gap4-3 min-[260px]:gap-2 lg:text-lg text-black m-4 p-1 rounded-full hover:from-red-200 hover:via-gray-400 hover:to-red-200 hover:bg-gradient-to-r'}>

                <li className={' text-slate-950 block px-4 py-2 font-semibold rounded-full bg-gray-100 hover:text-slate-700'}><Link to={"/"}>Home</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default TopBar