import React from 'react'
import Image from 'next/image'



const Footer = () => {
    return (
        <footer className="bg-black text-white pt-12 pb-40">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="grid grid-cols-2 gap-4 sm:gap-14 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-12 text-sm font-semibold text-gray-900 uppercase">About</h2>
                            <ul className="text-gray-200 text-xs">
                                <p>Bloowatch is specialized software for watersports schools (surfing, kitesurfing, sailing, and diving) and outdoor activity providers skiing, climbing</p>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                            <ul className="text-xs">
                                <li className="mb-8">
                                    <a href="https://flowbite.com/" className="hover:underline">156-677-124-442-2887</a>
                                </li>
                                <li className="mb-8">
                                    <a href="https://tailwindcss.com/" className="hover:underline"> wave@bloowatch.com</a>
                                </li>
                                <li className="mb-8">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Spain</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Usefull links</h2>
                            <ul className="text-xs">
                                <li className="mb-8">
                                    <a href="https://flowbite.com/" className="hover:underline">About us</a>
                                </li>
                                <li className="mb-8">
                                    <a href="https://tailwindcss.com/" className="hover:underline">History</a>
                                </li>
                                <li className="mb-8">
                                    <a href="https://tailwindcss.com/" className="hover:underline">Contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Instagram</h2>
                            <ul className="flex">
                                <li className="mb-8">
                                    <a href="https://flowbite.com/" className="hover:underline">
                                        <Image src="/images/instagram/insta00.png" width={64} height={64} alt="instagram" />
                                    </a>
                                </li>
                                <li className="mb-8">
                                    <a href="https://tailwindcss.com/" className="hover:underline">
                                        <Image src="/images/instagram/insta01.png" width={64} height={64} alt="instagram" />
                                    </a>
                                </li>
                                <li className="mb-8">
                                    <a href="https://tailwindcss.com/" className="hover:underline">
                                        <Image src="/images/instagram/insta02.png" width={64} height={64} alt="instagram" />
                                    </a>
                                </li>
                                <li className="mb-8">
                                    <a href="https://tailwindcss.com/" className="hover:underline">
                                        <Image src="/images/instagram/insta03.png" width={64} height={64} alt="instagram" />
                                    </a>
                                </li>
                                <li className="mb-8">
                                    <a href="https://tailwindcss.com/" className="hover:underline">
                                        <Image src="/images/instagram/insta04.png" width={64} height={64} alt="instagram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;