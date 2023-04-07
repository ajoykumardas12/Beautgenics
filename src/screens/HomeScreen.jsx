import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import { FiMessageSquare } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import UserImage from "../assets/userImage.svg";
import SalesIcon from "../assets/Sales.svg";
import SalesHistoryIcon from "../assets/Sales-history.svg";
import DashboardIcon from "../assets/Dashboard.svg";
import LeaderboardsIcon from "../assets/podium.svg";
import AttendenceIcon from "../assets/Attendence.svg";
import StockIcon from "../assets/Storage.svg";
import CouponIcon from "../assets/Coupon.svg";
import RewardsIcon from "../assets/Rewards.svg";
import WashingHandsImage from "../assets/washing-hands.svg";
import Button from "../components/Button";
import { AiFillCaretDown, AiFillCaretUp, AiFillStar, AiOutlineStar } from "react-icons/ai";
import BlogImage1 from "../assets/Blog-image-1.png";
import BlogImage2 from "../assets/sales.jpg";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";


const list = ["Trending", "Latest", "Top"];
const blogData = [
    {
        title: "How does customer service impact sales directly - A thread",
        author: "Anisha seghal",
        date: "Aug,01,2020",
        readingTime: "5 mins",
        stars: "4",
        likes: "12m",
        comments: "2.54k",
        image: BlogImage1
    },
    {
        title: "Why are sales?",
        author: "Cavid beckham",
        date: "Aug,01,2020",
        readingTime: "5 mins",
        stars: "4",
        likes: "12m",
        comments: "2.54k",
        image: BlogImage2
    },
    {
        title: "How does customer service impact sales directly - A thread",
        author: "Anisha seghal",
        date: "Aug,01,2020",
        readingTime: "5 mins",
        stars: "4",
        likes: "12m",
        comments: "2.54k",
        image: BlogImage1
    },
    {
        title: "Why are sales?",
        author: "Cavid beckham",
        date: "Aug,01,2020",
        readingTime: "5 mins",
        stars: "4",
        likes: "12m",
        comments: "2.54k",
        image: BlogImage2
    },
    {
        title: "How does customer service impact sales directly - A thread",
        author: "Anisha seghal",
        date: "Aug,01,2020",
        readingTime: "5 mins",
        stars: "4",
        likes: "12m",
        comments: "2.54k",
        image: BlogImage1
    },
    {
        title: "Why are sales?",
        author: "Cavid beckham",
        date: "Aug,01,2020",
        readingTime: "5 mins",
        stars: "4",
        likes: "12m",
        comments: "2.54k",
        image: BlogImage2
    },
    {
        title: "How does customer service impact sales directly - A thread",
        author: "Anisha seghal",
        date: "Aug,01,2020",
        readingTime: "5 mins",
        stars: "4",
        likes: "12m",
        comments: "2.54k",
        image: BlogImage1
    },
];

function UserSummary(props){
    return (
        <section className="px-5 py-6">
            <div className="text-sm md:text-base text-[#ABABAB]">Hello {props.name} !!</div>
            <div className="flex justify-between mx-1">
                <div>
                    <div className="text-lg md:text-xl">{props.position}</div>
                    <div className="h-2 w-52 sm:w-60 md:w-68 lg:w-72 bg-[#F0F0F0] rounded-md my-2">
                        <div className={`h-2 bg-brand rounded-md w-[71%]`}>
                        </div>
                    </div>
                    <div className="text-xs text-[#777777]">Target progress</div>
                </div>
                <div className="flex items-start">
                    <img src={UserImage} alt="Profile image" className="w-16"/>
                </div>
            </div>
        </section>
    )
}

function Service(props){
    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <div className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 flex items-center justify-center rounded-full bg-brand cursor-pointer">
                <img src={props.icon} alt={props.icon} className="w-[60%] h-[60%]" />
            </div>
            <div className="text-[0.6rem] md:text-xs cursor-pointer line-clamp-1">{props.serviceName}</div>
        </div>
    )
}

function BlogPost(props){
    const n = Number(props.blog.stars);
    return (
        <div className="min-w-[16rem] w-[16rem] h-60  bg-[#FAFAFA] hover:bg-border rounded-sm cursor-pointer whitespace-normal">
            <img src={props.blog.image} alt="" className="w-[16rem] h-[50%] rounded-sm"/>
            <div className="flex flex-col mx-3 my-2">
                <div className="text-sm lg:text-md">{props.blog.title}</div>
                <div className="flex items-center justify-between mt-1">
                    <div>
                        <div className="text-sm text-brand">{props.blog.author}</div>
                        <div className="flex items-center gap-1 text-secondary-text text-xs">
                            <div>{props.blog.date}</div>
                            <BsDot />
                            <div>{props.blog.readingTime}</div>
                        </div>
                        <div className="text-xs flex items-center">
                            <div className="flex">
                                {[...Array(n)].map((e, i) => <AiFillStar key={i} className="text-[#FFC107]"/>)}
                                {[...Array(5-n)].map((e, i) => <AiOutlineStar key={i} />)}
                            </div>
                            <div className="w-[0.5px] h-3 bg-[#C1C6C5] mx-2"></div>
                            <div className="flex items-center gap-1">
                                <AiFillHeart className="text-[#BD2641]"/>
                                <span>{props.blog.likes}</span>
                            </div>
                            <div className="w-[0.5px] h-3 bg-[#C1C6C5] mx-2"></div>
                            <div className="flex items-center gap-1">
                                <FiMessageSquare />
                                <span>{props.blog.comments}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <AiOutlineHeart />
                        <BsThreeDotsVertical />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function HomeScreen(){
    const [isDDOpen, setIsDDOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Trending");
    return (
        <div className="w-full font-roboto">
            <UserSummary name="Sarika" position="Senior Beauty Analyst" progress="71"/>
            <div className="w-full h-[1px] bg-[#f3f3f3]"></div>
            <div className="m-4">
                <div className="flex justify-between items-center">
                    <div className="text-lg md:text-xl">Services</div>
                    <div className="text-xs lg:text-sm mr-2 text-brand cursor-pointer">View all</div>
                </div>
                <div className="grid grid-cols-4 gap-3 mt-1">
                    <Service icon={SalesIcon} serviceName="Sales" />
                    <Service icon={SalesHistoryIcon} serviceName="Sales History" />
                    <Link to="/dashboard">
                        <Service icon={DashboardIcon} serviceName="Dashboard" />
                    </Link>
                    <Link to="/leaderboards">
                        <Service icon={LeaderboardsIcon} serviceName="Leaderboards" />
                    </Link>
                    <Service icon={AttendenceIcon} serviceName="Attendence" />
                    <Service icon={StockIcon} serviceName="Stock" />
                    <Service icon={CouponIcon} serviceName="Offers & Coupons" />
                    <Service icon={RewardsIcon} serviceName="Rewards" />
                </div>
            </div>
            <div className="w-full h-1 bg-[#F3F3F3]"></div>
            <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mx-4">
                <div className="min-w-[38%] sm:min-w-[36%] md:min-w-[33%] lg:min-w-[30%] ">
                    <img src={WashingHandsImage} alt="Washing hands" className="w-full" />
                </div>
                <div className="my-2 flex flex-col gap-1 md:gap-2">
                    <div className="text-sm sm:text-base md:text-lg font-semibold">CUSTOMER SAFETY IS OUR PRIORITY!</div>
                    <div className="text-xs sm:text-sm md:text-base text-grey-text">Follow our safety guidelines to ensure a safe experience for the Customer.</div>
                    <Button cls="h-7 sm:h-8 md:h-9 lg:h-10 px-2 w-fit bg-brand rounded-sm text-white text-xs md:text-sm cursor-pointer">
                        Safety Guidelines
                    </Button>
                </div>
            </div>
            <div className="w-full h-1 bg-[#F3F3F3]"></div>
            <div className="mx-4 my-3">
                <div className="flex justify-between items-center">
                    <div className="text-base sm:text-lg md:text-xl font-semibold">Beautician blogs</div>
                    <div className="relative flex flex-col items-center rounded-2xl border border-1 border-light-grey-text">
                        <button 
                            className="px-2 min-w-[5rem] h-6 box-border flex items-center justify-between gap-[0.5px] text-xs rounded-2xl tracking-wider border-light-grey-text duration-300" 
                            onClick={() => setIsDDOpen((prev) => !prev)}
                        >
                            {selectedOption}
                            {!isDDOpen 
                                ? <AiFillCaretDown className="text-[10px]" />
                                : <AiFillCaretUp className="text-[10px]" />
                            }
                        </button>
                        {isDDOpen && <div className="absolute top-7 flex flex-col items-start rounded-lg w-full bg-white">
                                {list.map((item, index) => 
                                    <option key={index} value={item} className="w-full p-1 rounded-md text-xs hover:bg-border cursor-pointer" onClick={(e) => {setSelectedOption(e.target.value); setIsDDOpen(false)}}>{item}</option>
                                )}
                            </div>
                        }
                    </div>
                </div>
                <div className="font-light text-xs md:text-sm my-1.5">
                    We’ve filtered the hottest blog topics for you to read , enjoy and improve your customer experience as a beauty analyst.
                </div>
                <div className="flex gap-3 w-auto overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-light-grey-text pb-0.5">
                    {blogData.map((blog, index) =>
                        <BlogPost 
                            key={index} 
                            blog={blog}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}