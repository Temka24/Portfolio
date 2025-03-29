'use client'
import React, { useState } from "react";
import Image from "next/image";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Navbar: React.FC = () => {

    const [activeMenu, setActiveMenu] = useState<number>(1)

    return (
        <>
            <div className="fixed flex justify-start gap-[200px] items-center font-[500] pt-[50px] text-[20px] z-[100]">
                <div className="flex justify-center items-center gap-[20px] pl-[70px]">
                    <div className="h-[60px] w-[60px] ">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            height={100}
                            width={100}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        thxdeadshotxht@gmail.com
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-[40px] ">
                    <a href="#home" onClick={() => setActiveMenu(1)} className={`before:content-[''] before:absolute before:h-[3.5px] before:hover:w-[100%] before:transition-[0.3s] before:bg-gradient-to-r from-[#9500ff] to-[#eee] relative before:top-[25px] before:rounded-[10px] ${activeMenu === 1 ? 'before:w-[100%]' : 'before:w-0'}`}>Home</a>
                    <a href="#service" onClick={() => setActiveMenu(2)} className={`before:content-[''] before:absolute before:h-[3.5px] before:hover:w-[100%] before:transition-[0.3s] before:bg-gradient-to-r from-[#9500ff] to-[#eee] relative before:top-[25px] before:rounded-[10px] ${activeMenu === 2 ? 'before:w-[100%]' : 'before:w-0'}`}>Services</a>
                    <a href="#project" onClick={() => setActiveMenu(3)} className={`before:content-[''] before:absolute before:h-[3.5px] before:hover:w-[100%] before:transition-[0.3s] before:bg-gradient-to-r from-[#9500ff] to-[#eee] relative before:top-[25px] before:rounded-[10px] ${activeMenu === 3 ? 'before:w-[100%]' : 'before:w-0'}`}>Project</a>
                    <a href="#skill" onClick={() => setActiveMenu(4)} className={`before:content-[''] before:absolute before:h-[3.5px] before:hover:w-[100%] before:transition-[0.3s] before:bg-gradient-to-r from-[#9500ff] to-[#eee] relative before:top-[25px] before:rounded-[10px] ${activeMenu === 4 ? 'before:w-[100%]' : 'before:w-0'}`}>Skiil</a>
                    <a href="#contact" onClick={() => setActiveMenu(5)} className={`before:content-[''] before:absolute before:h-[3.5px] before:hover:w-[100%] before:transition-[0.3s] before:bg-gradient-to-r from-[#9500ff] to-[#eee] relative before:top-[25px] before:rounded-[10px] ${activeMenu === 5 ? 'before:w-[100%]' : 'before:w-0'}`}>Contact</a>
                    <div className="sunny">
                        <WbSunnyIcon sx={{ fontSize: "40px" }} />
                    </div>
                    <a href="#contact" className="navlistBtn" onClick={() => setActiveMenu(5)}>Hire Me!</a>
                </div>
            </div>
        </>
    )
}

export default Navbar;