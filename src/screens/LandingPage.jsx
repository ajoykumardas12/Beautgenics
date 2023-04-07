import React from "react";
import Logo from "../assets/Logo.svg";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="w-full xs:w-[85%] sm:w-[75%] md:w-[60%] lg:w-[50%] flex flex-col mt-24 font-roboto">
            <img className="h-16 w-16 mx-3" src={Logo} alt="Logo" />
            <div className="mx-6">
                <div className="flex flex-col text-3xl font-semibold mt-10 mb-1">
                    <span>Welcome to</span>
                    <span className="text-brand">Beautgenics</span>
                </div>
                <div className="font-inter text-secondary-text text-base mb-10">
                    An app where you can manage all your Beauty Analyst activties & much
                    more...
                </div>
                <div className="text-light-grey-text mb-3">Let’s get started...</div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <Button cls="w-full h-14 bg-button-grey border-2 border-[#E0E0E0]">
                        <FcGoogle />
                        Continue with Google
                    </Button>
                    <Button cls="w-full h-14 bg-black border-2 border-[#E0E0E0] text-white">
                        <BsApple />
                        Continue with apple
                    </Button>
                    <Link className="text-sm" to="/login">
                        Already have an account? <span className="text-brand cursor-pointer">Sign in</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
