import React from 'react'
import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/Subheading"
import {Link} from 'react-router-dom'
import TopBar from '../components/TopBar'
const Portfolio = () => {
    
  return (
    <div className={''}>
        <div><Front/></div>
    </div>
  )
}
function Front(){
    return <div className={'w-full h-screen overflow-x-hidden bg-gradient-to-r from-green-900 via-gray-300 to-green-900 ...'}> 
        <TopBar />
        <div className={' relative top-28 xl:h-3/6 sm:h-3/6 min-[400px]:h-2/4 min-[320px]:h-2/4  min-[260px]:h-2/4 grid m-auto   justify-center'}>
            <div className={'shadow-lg border-2 border-gray-100 bg-white/5 rounded-xl xl:w-96 sm:w-80 min-[400px]:w-60  min-[320px]:p-5 min-[300px]:p-5 min-[260px]:p-5 text-center  relative top-10 h-5/6'}>
                <div className={'xl:text-xl sm:text-base min-[400px]:text-xs min-[320px]:text-xs  relative min-[400px]:top-6 min-[260px]:top-4 font-bold'}>Payment X Section</div>
                <div className={'xl:text-xl sm:text-base min-[400px]:text-xs min-[320px]:text-xs relative min-[400px]:top-10  min-[260px]:top-6'}>
                    If you are new to here...Signup first
                </div>
                <div className={'flex justify-evenly relative min-[400px]:top-20 min-[320px]:top-20 m'}>
                    <div className={'xl:text-lg sm:text-base min-[400px]:text-xs min-[320px]:text-xs relative min-[400px]:top-16 min-[320px]:top-16 min-[260px]:top-16 text-white xl:w-24  min-[400px]:w-16 min-[320px]:w-16 p-2 rounded-lg bg-gray-900 hover:from-gray-800 hover:via-gray-600 hover:to-gray-800 hover:bg-gradient-to-r'}><Link to={'/signup'}>SignUp</Link></div>
                    <div className={'xl:text-lg sm:text-base min-[400px]:text-xs min-[320px]:text-xs relative min-[400px]:top-16 min-[320px]:top-16 min-[260px]:top-16 bg-white text-slate-900 hover:bg-slate-900 hover:text-slate-100 xl:w-24 min-[400px]:w-16 min-[320px]:w-16  p-2 rounded-lg hover:bg-gray-900'}><Link to={'/signin'}>SignIn</Link></div>
                </div>
            </div>
           
        </div>
    </div>
}
function Body(){
    
}

export default Portfolio