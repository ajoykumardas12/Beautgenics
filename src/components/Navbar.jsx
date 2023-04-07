import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { AiFillBell, AiOutlineHome, AiOutlinePoweroff, AiOutlineSync } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { RiHistoryLine } from "react-icons/ri";
import { MdOutlineLeaderboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GrRefresh } from "react-icons/gr";
import ProfileImage from "../assets/userImage.svg";
import { Link, useLocation } from "react-router-dom";

function titleCase(str) {
    return str.charAt(1).toUpperCase() + str.slice(2);
}

function QuickOptions(props){
    const path = useLocation();

    return(
        <Link to={props.path} className={`flex items-center gap-3 px-3 py-2 text-sm hover:text-brand hover:bg-brand/10 cursor-pointer ${path.pathname === props.path ? "text-brand bg-brand/10" : ""}`} onClick={props.handleIsNavOpen}>
            {props.children}
        </Link>
    )
}

function NavOptions(props){
    return (
        <div className={`absolute z-10 w-[19rem] md:w-[22rem] lg:w-[25rem] bg-white rounded-br-md transform transition-all duration-700 ${ !props.navOpen && "-translate-x-[19rem] md:-translate-x-[22rem] lg:-translate-x-[25rem]"}`} id="nav-options">
            <div className="m-3 mt-2">
                <img src={ProfileImage} alt="Profile image" className="w-12 lg:w-16"/>
                <div className="text-lg md:text-lg font-medium">Sarika Seghal</div>
                <div className="text-sm md:text-base text-light-grey-text">Senior beauty analyst</div>
            </div>
            <div className="flex items-center gap-1 pl-2.5 pr-1 py-2 border-y-[0.5px] border-brand">
                <GoLocation className="text-brand" />
                <div className="line-clamp-1 text-xs md:text-sm">
                    Health & Glow, 18th Main Road, HSR, Sector  II 
                </div>
            </div>
            <div className="pb-1 border-b-[0.5px] border-brand md:text-base">
                <div className="ml-3 mt-2 mb-1 text-light-grey-text text-xs">QUICK ACCESS</div>
                <QuickOptions path="/home" handleIsNavOpen={props.handleIsNavOpen}> <AiOutlineHome />Home </QuickOptions>
                <QuickOptions > <BiShoppingBag />Sales </QuickOptions>
                <QuickOptions> <RiHistoryLine />Sales history </QuickOptions>
                <QuickOptions path="/leaderboards" handleIsNavOpen={props.handleIsNavOpen}> <MdOutlineLeaderboard />Leaderboards </QuickOptions>
                <QuickOptions path="/dashboard" handleIsNavOpen={props.handleIsNavOpen}> <RxDashboard />Dashboard </QuickOptions>
                <QuickOptions path="/" handleIsNavOpen={props.handleIsNavOpen}> <AiOutlinePoweroff />Logout </QuickOptions>
            </div>
            <div>
                <div className="mx-3 mt-2 mb-1">
                    <div className="text-xs text-light-grey-text">INVENTORY SYNC</div>
                    <div className="text-brand text-xs">Last sync at 12.15pm , 12 oct</div>
                </div>
            </div>
            <div className="mb-1">
                <QuickOptions> <AiOutlineSync />Sync now </QuickOptions>
                <QuickOptions> <GrRefresh />Refresh products </QuickOptions>
            </div>
        </div>
    )
}

export default function Navbar(props){
    const path = useLocation();

    return (
        <nav className="relative">
            <div className="h-14 w-full flex items-center text-sm bg-brand text-white">
                <FiMenu className="text-3xl ml-2 xs:ml-4 sm:ml-5 cursor-pointer" onClick={props.handleIsNavOpen} />
                <div className="w-[0.5px] h-5 bg-[#C1C6C5] mx-2 sm:mx-3"></div>
                {(path.pathname === "/home") ? (
                    <div className="flex items-center ">
                        <GoLocation className="text-lg mr-1 md:mr-2"/>
                        <div className="line-clamp-1 mr-2 text-xs xs:text-sm md:text-base">
                            Health & Glow, 18th Main Road, HSR, Sector  II 
                        </div>
                    </div>
                ) : (
                    <div className="line-clamp-1 mr-2 text-xs xs:text-sm md:text-base">
                            {titleCase(path.pathname)}
                    </div>
                )}


                <AiFillBell className="ml-auto mr-2 text-2xl cursor-pointer"/>
            </div>
            <NavOptions className="" navOpen={props.isNavOpen} handleIsNavOpen={props.handleIsNavOpen}/>
        </nav>
    )
}