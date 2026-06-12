import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Footer() {

    return (
        <footer className={`w-full bg-footer transition-all duration-300`}>
            
            <div className="mx-auto max-w-7xl px-6 py-5">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/popshackLogoPink.svg"
                            alt="Popshack Logo"
                            loading="eager"
                            width={240}
                            height={60}
                            className="hover:opacity-80 transition-opacity"
                        />
                    </Link>

                    <div className="flex items-center gap-4 mr-16">
                        <Link href="https://facebook.com/popshackph" target="_blank">
                            <FaFacebookSquare className="text-footer-text hover:opacity-70 transition-opacity" size={30} />
                        </Link>
                        <Link href="https://instagram.com/popshack.ph" target="_blank">
                            <FaInstagram className="text-footer-text hover:opacity-70 transition-opacity" size={30} />
                        </Link>
                    </div>
                </div>

                <div className="max-w-sm mx-auto">
                    <hr className="my-4 border-footer-text/20" />
                </div>
                <p className="text-footer-text text-center font-serif text-sm">
                    © {new Date().getFullYear()} Popshack. All rights reserved.
                </p>
            </div>

        
        </footer>
    );
}