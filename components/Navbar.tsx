"use client"
import { NAV_LINKS } from "@/constants.index"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {
    const [linkOpen, setLinkOpen] = useState(false)
    return (
        <nav className="relative">
            <div className=" flexBetween max-container padding-container relative z-30 py-5">
                <Link href={'/'} >
                    <Image src={'/hilink-logo.svg'} alt="Logo" width={74} height={29} />
                </Link>
                <ul className="hidden h-full gap-12 lg:flex ">
                    {
                        NAV_LINKS.map((link) => (
                            <Link href={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" key={link.key}>{link.label}</Link>
                        ))
                    }
                </ul>
                <div className="lg:flexCenter hidden">
                    <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
                </div>
                <Image src={"/menu.svg"} alt="menu" width={32} height={32} className=" inline-block cursor-pointer " onClick={()=>setLinkOpen(!linkOpen)} />
            </div>
            <div className={`hidden max-lg:flex h-full top-0 flex-col bg-white  fixed shadow-xl min-h-screen z-50 w-72 ${linkOpen ? "left-0" : '-left-72'} duration-300 ease-in-out`}>
                <div className="padding-container py-5">
                    <div className="flexBetween">
                        <Link href={'/'} >
                            <Image src={'/hilink-logo.svg'} alt="Logo" width={74} height={29} onClick={()=>setLinkOpen(false)}  />
                        </Link>
                        <Image onClick={()=>setLinkOpen(false)} src="/close2.svg" alt="close" width={24} height={24} className=" cursor-pointer" />

                    </div>
                    <ul className=" h-full w-full gap-12 flex flex-col mt-10 ">
                        {
                            NAV_LINKS.map((link) => (
                                <Link href={link.href} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" key={link.key} onClick={()=>setLinkOpen(false)} >{link.label}</Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar