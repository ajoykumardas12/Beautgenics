import React, {useState} from "react";

import UserImage from "../assets/userImage.svg";
import { FiCalendar } from "react-icons/fi";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { MdOutlineContacts, MdOutlinePeople } from "react-icons/md";
import LeaderboardGraph from "../assets/leaderboards-graph.svg";
import { BsCircleFill, BsPlus } from "react-icons/bs";
import UserImg1 from "../assets/user1.png";
import UserImg2 from "../assets/user2.png";
import UserImg3 from "../assets/user3.png";
import UserImg4 from "../assets/user4.png";
import UserImg6 from "../assets/user6.png";
import UserImg7 from "../assets/user7.png";

const list = ["August", "September", "October"];
const leaderboardData = [
    {
        self: false,
        rank: 1,
        name: "Scarlett Johnson",
        position: "Senior beauty analyst",
        achievement: "95.58%",
        image: UserImg1,
    },
    {
        self: false,
        rank: 2,
        name: "Samantha Roberts",
        position: "Senior beauty analyst",
        achievement: "92.88%",
        image: UserImg2,
    },
    {
        self: false,
        rank: 3,
        name: "Jamie Ann",
        position: "Senior beauty analyst",
        achievement: "90.58%",
        image: UserImg3,
    },
    {
        self: false,
        rank: 4,
        name: "Angelin mathew",
        position: "Senior beauty analyst",
        achievement: "87.58%",
        image: UserImg4,
    },
    {
        self: true,
        rank: 5,
        name: "Sarika Seghal",
        position: "Senior beauty analyst",
        image: UserImage,
    },
    {
        self: false,
        rank: 6,
        name: "Jesse jaimes",
        position: "Senior beauty analyst",
        achievement: "95.58%",
        image: UserImg6,
    },
    {
        self: false,
        rank: 7,
        name: "Britney Spears",
        position: "Senior beauty analyst",
        achievement: "80.58%",
        image: UserImg7,
    },
];

function ContactCollectionStat(props){
    return (
        <div className="flex flex-col items-center flex-1 text-center p-5 rounded hover:bg-border cursor-pointer">
            <div className="h-10 w-10 flex items-center justify-center bg-[#F4F4F4] rounded text-2xl text-[#323232]">
                {props.children}
            </div>
            <div className="text-lg text-brand font-medium">{props.statNumber}</div>
            <div className="text-[10px] xs:text-xs text-[#5E6265]">{props.stat}</div>
        </div>
    )
}

function LeaderboardItem(props){
    return(
        <div className={`flex flex-col px-5 py-4 border-b-[1px] border-b-brand/20 rounded-sm ${(props.userData.self) && "bg-brand/10"}`}>
            <div className="flex flex-row items-center">
                <div className="self-start">
                    <img src={props.userData.image} alt="" className="block h-14 w-14 rounded-full" />
                </div>
                <div className="ml-5 self-start">
                    <div className="text-lg font-medium">{props.userData.name}</div>
                    <div className="text-sm text-[#5E6265]">{props.userData.position}</div>
                    {!(props.userData.self) && 
                        <div className="text-base">
                            Achievement: <span className="text-sm text-brand">{props.userData.achievement}</span>
                        </div>
                    }
                </div>
                <div className="ml-auto">#{props.userData.rank}</div>
            </div>
        </div>
    )
}

export default function leaderboards(){
    const [isDDOpen, setIsDDOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("October");
    const [selectedTimeFrame, setSelectedTimeFrame] = useState("October");

    return(
        <div>
            <div className="flex relative">
                <div className="w-full flex flex-col items-center justify-center mx-3 my-4">
                    <div className="font-medium">Rank <span className="text-brand">#5</span></div>
                    <img src={UserImage} alt="Profile image" className="w-20 mt-2"/>
                    <div className="text-xl font-medium">Sarika Seghal</div>
                    <div className="text-sm text-light-grey-text">Senior beauty analyst</div>
                </div>
                <div className="absolute top-4 right-3">
                    <div className="h-6 relative flex flex-col items-center rounded-2xl border border-1 border-light-grey-text">
                        <button 
                            className="px-2 min-w-[4rem] h-6 box-border flex items-center justify-between gap-1 text-xs rounded-2xl tracking-wider border-light-grey-text duration-300" 
                            onClick={() => setIsDDOpen((prev) => !prev)}
                        >
                            <FiCalendar className="text-brand"/>
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
            </div>
            <div className="w-full flex flex-col items-center">
                <div className="flex flex-row">
                    <ContactCollectionStat statNumber="52.25%" stat="% of Contact numbers collected">
                        <MdOutlineContacts />
                    </ContactCollectionStat>
                    <div className="w-[1.4px] h-auto my-4 bg-[#F3F3F3] rounded"></div>
                    <ContactCollectionStat statNumber="17,185" stat="Contact numbers collected">
                        <MdOutlineContacts />
                    </ContactCollectionStat>
                    <div className="w-[1.4px] h-auto my-4 bg-[#F3F3F3] rounded"></div>
                    <ContactCollectionStat statNumber="25,655" stat="Customers attended">
                        <MdOutlinePeople />
                    </ContactCollectionStat>
                </div>
            </div>
            <div className="w-full h-1 bg-[#F3F3F3]"></div>
            <div className="flex justify-between mx-4 my-2">
                <div className="flex flex-col tracking-tight">
                    <div className="text-lg text-light-grey-text">Your achievement</div>
                    <div className="flex gap-1">
                        <div className="text-[28px] font-medium"> <span className="text-brand">%</span> 85</div>
                        <div className="flex items-end mb-2 text-red-600 text-xs"><AiFillCaretDown /> 15.65%</div>
                    </div>
                    <div className="text-xs text-[#5E6265]">Compared to Sureka Angel (#1)</div>
                </div>
                <div>
                    <div className="flex items-center text-brand tracking-wider mt-2 cursor-pointer">
                        <BsPlus className="text-xl" />
                        <span className="text-xs font-medium">COMPARE</span>
                    </div>
                </div>
            </div>
            <div className="w-full h-1 bg-[#F3F3F3]"></div>
            <div className="w-full flex items-center justify-center">
                <div className="flex flex-col justify-center w-full my-5 text-[#5E6265]">
                    <div className="flex items-center ml-4 gap-4 md:ml-0 md:justify-evenly text-xs mb-3">
                        <div className="flex items-center justify-center gap-1">
                            <BsCircleFill className="text-brand"/>
                            Your achievement
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <BsCircleFill className="text-[#ED9013]"/>
                            Scalett Johnson
                        </div>
                    </div>
                    <img src={LeaderboardGraph} alt="sales graph" className="w-full h-52 cursor-pointer"/>
                    <div className="flex items-center justify-between text-xs mx-2 mb-3">
                        <div>week 1</div>
                        <div>week 2</div>
                        <div>week 3</div>
                        <div>week 4</div>
                        <div>week 5</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-1 bg-[#F3F3F3]"></div>
            <div className="w-full">
                <div className="w-full flex items-center justify-start bg-brand/10 text-light-grey-text">
                    {["October", "This week", "Today"].map((timeFrame, index) => {
                        return (
                            <div key={index} className={`p-3 cursor-pointer ${(selectedTimeFrame === timeFrame) && " border-b-4 border-b-brand text-brand"}`} onClick={() => setSelectedTimeFrame(timeFrame)}>{timeFrame}</div>
                        )
                    })}
                </div>
                <div className="flex flex-col">
                    {leaderboardData.map((user) => {
                        return(
                            <LeaderboardItem key={user.rank} userData={user} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}