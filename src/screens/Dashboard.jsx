import React, {useState} from "react";

import UserImage from "../assets/userImage.svg";
import { FiCalendar } from "react-icons/fi";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import DashboardGrahp1 from "../assets/dashboard-graph-1.svg";
import DashboardGrahp2 from "../assets/dashboard-graph-2.svg";
import { MdOutlineContacts, MdOutlinePeople } from "react-icons/md";
import ContactGraph1 from "../assets/contact-graph-1.svg";
import ContactGraph2 from "../assets/contact-graph-2.svg";
import ContactGraph3 from "../assets/contact-graph-3.svg";
import { BsCircleFill } from "react-icons/bs";

const list = ["August", "September", "October"];

function ContactCollectionStat(props){
    return (
        <div className="flex flex-row items-center mx-2 p-2 rounded hover:bg-border cursor-pointer">
            <div className="h-10 w-10 flex items-center justify-center bg-[#F4F4F4] rounded text-2xl text-[#323232] mr-3">
                {props.children}
            </div>
            <div className="flex flex-col mr-3">
                <div className="text-lg font-medium">{props.statNumber}</div>
                <div className="text-sm text-[#5E6265]">{props.stat}</div>
            </div>
            <div className="ml-auto">
                <img src={props.statGraph} alt="contact collection graph" />
            </div>
        </div>
    )
}

export default function Dashboard(){
    const [isDDOpen, setIsDDOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("October");

    return(
        <div className="">
            <div className="flex relative">
                <div className="w-full flex flex-col items-center justify-center mx-3 my-4">
                    <img src={UserImage} alt="Profile image" className="w-20"/>
                    <div className="text-xl font-medium">Sarika Seghal</div>
                    <div className="text-sm text-light-grey-text">Senior beauty analyst</div>
                </div>
                <div className="absolute top-4 right-3">
                    <div className="h-6 relative flex flex-col items-center rounded-2xl border border-1 border-light-grey-text">
                        <button 
                            className="px-2 min-w-[4rem] h-6 box-border flex items-center justify-between gap-1 text-xs rounded-2xl tracking-wider border-light-grey-text duration-300" 
                            onClick={() => setIsDDOpen((prev) => !prev)}
                        >
                            <FiCalendar className="text-brand" />
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
            <div className="w-full h-1 bg-[#F3F3F3]"></div>
            <div className="flex flex-col mx-3 md:items-center tracking-tight">
                <div className="text-lg text-light-grey-text font-medium">Current sales</div>
                <div className="flex gap-1">
                    <div className="text-[28px] font-medium"> <span className="text-brand">$</span> 87,185</div>
                    <div className="flex items-end mb-1.5 text-green-600 text-xs"><AiFillCaretUp /> 15.65%</div>
                </div>
                <div className="text-xs text-[#5E6265]">Compared to $45,415 from Sep,2020</div>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="flex flex-col justify-center w-full max-w-[31rem] my-5 text-[#5E6265]">
                    <div className="flex items-center gap-4 md:justify-center text-xs mb-3 ml-3 md:ml-0">
                        <div className="flex items-center justify-center gap-1">
                            <BsCircleFill className="text-brand"/>
                            Current sales
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <BsCircleFill className="text-[#ED9013]"/>
                            Sales Target
                        </div>
                        <div className="flex items-center justify-center gap-1">
                            <BsCircleFill className="text-[#A82CD0]"/>
                            Last month sales
                        </div>
                    </div>
                    <img src={DashboardGrahp1} alt="sales graph" className="w-full h-52 cursor-pointer"/>
                    <div className="flex items-center justify-between text-xs mx-2">
                        <div>week 1</div>
                        <div>week 2</div>
                        <div>week 3</div>
                        <div>week 4</div>
                        <div>week 5</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-1 bg-[#F3F3F3]"></div>
            <div className="flex flex-col items-center my-5">
                <div className="flex flex-col items-center">
                    <img src={DashboardGrahp2} alt="contact collection graph" className="cursor-pointer"/>
                    <div className="text-lg text-light-grey-text">Contact collection</div>
                    <div className="flex gap-1 text-[28px] font-medium">
                        <div>17,185</div>
                        <div className="flex items-end mb-1.5 text-green-600 text-xs"><AiFillCaretUp />12.07%</div>
                    </div>
                    <div className="text-xs text-light-grey-text">Compared to 15,415 last month</div>
                </div>
                <div className="w-full flex flex-col items-center my-5">
                    <div className="flex flex-col gap-3 w-full">
                        <ContactCollectionStat statNumber="17,185" stat="Contact numbers collected" statGraph={ContactGraph1}>
                            <MdOutlineContacts />
                        </ContactCollectionStat>
                        <ContactCollectionStat statNumber="52.25%" stat="Percentage of No.s collected" statGraph={ContactGraph2}>
                            <MdOutlineContacts />
                        </ContactCollectionStat>
                        <ContactCollectionStat statNumber="25,655" stat="Customers attended" statGraph={ContactGraph3}>
                            <MdOutlinePeople />
                        </ContactCollectionStat>
                    </div>
                </div>
            </div>


        </div>
    )
}