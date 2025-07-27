import React from 'react'
import QRCode from '@/assets/qrcode.png';
import Playstore from '@/assets/playstore.png';
import Appstore from '@/assets/appstore.png';
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="w-full bg-black text-white md:mt-35 md:pt-20 pt-10 mt-10 md:pb-31 pb-11 hidden lg:block">
            <div className="container mx-auto flex md:justify-between md:items-start md:flex-row flex-col justify-between">

                <div className="space-y-4">
                    <h1 className="text-2xl font-bold"><a href="/">Breez</a></h1>
                    <a href="/signup" className="block">Subscribe</a>
                    <p className="text-sm">Get 10% off your first order</p>
                </div>
                {/* Support */}
                <div className="space-y-4">
                    <h1 className="text-xl/relaxed font-bold">Support</h1>
                    <p className="text-base leading-6">1234 Granville Street, Vancouver<br />, BC V6Z 1M2, Canada</p>
                    <p className="text-base leading-6">safwatyasser49@gmail.com</p>
                    <p className="text-base leading-6">+20 015*******7</p>
                </div>

                {/* Account */}
                <div className="flex md:block justify-between px-5 md:px-2"></div>
                <div>
                    <h3 className="text-xl leading-7 font-semibold mb-4">Account</h3>
                    <ul className="space-y-4">
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-xl leading-7 font-semibold mb-4">Quick Link</h3>
                    <ul className="space-y-2">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-lg font-semibold mb-4">Download App</h3>
                    <p className="text-sm mb-4">Save $3 with App New User Only</p>
                    <div className="flex items-center gap-4 mb-4 ">
                        <div className="bg-white">
                            <Image src={QRCode} alt={"QR Code"} width={80} height={80} />
                        </div>
                        <div className="space-y-2">
                            <Image src={Playstore} alt={"Google Play"} width={128} height={40} />
                            <Image src={Appstore} alt={"App Store"} width={128} height={40} />

                        </div>
                    </div>
                    <div className="flex space-x-4 text-xl">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer