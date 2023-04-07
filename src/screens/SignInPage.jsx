import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import Logo from "../assets/Logo.svg";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function SignInPage(){
    return(
        <div className="h-screen w-full xs:w-[85%] sm:w-[75%] md:w-[60%] lg:w-[50%] flex flex-col font-roboto">
            <Link to="/">
                <BsArrowLeft className="mt-6 mx-6 text-2xl"/>
            </Link>
            <img src={Logo} alt="Logo" className="h-16 w-16 ml-4 mt-12"/>
            <div className="mx-6 mt-12">
                <div className="text-2xl font-semibold">
                    Sign in
                </div>
                <div className="text-grey-text mt-2">
                    Using your beautgenics account
                </div>
                <div className="flex flex-col justify-center">
                    <input type="email" name="email" id="" placeholder="Email address/Phone" className="h-12 w-full flex items-center pl-3 text-secondary-text outline-none border border-1 border-[#E0E0E0] rounded-sm mt-5" />
                    <input type="password" name="password" id="" placeholder="Enter your password" className="h-12 w-full flex items-center pl-3 text-secondary-text outline-none border border-1 border-[#E0E0E0] rounded-sm mt-4" />
                    <div className="text-xs text-brand self-end mt-3 cursor-pointer">
                        Forgot password?
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-grey-text mt-5">
                        <input type="checkbox" name="remember-login" id="" className="w-4 h-4 accent-brand bg-brand border-brand rounded outline-2 outline-grey-text cursor-pointer" />
                        <label htmlFor="">Remember my login info</label>
                    </div>
                    <Link to="/home">
                        <Button cls="h-12 w-full bg-brand text-white mt-7 rounded-md">
                            Sign in
                        </Button>
                    </Link>
                    <div className="text-[15px] self-center mt-5">
                        Don’t have an account? <span className="text-brand cursor-pointer">Signup</span>
                    </div>
                </div>
            </div>
        </div>
    )
}