"use client"
import PageHead from "@/components/layout/PageHead";
import QuantityCounter from "@/components/Products/QuantityCounter";
import { useGlobalContext } from "@/context/store";
import { currencyFormat } from "@/utilities";
import Image from "next/image";

function Cart() {
    const { cart, setCart } = useGlobalContext();
    return (
        <>
            <PageHead title='Cart' />
            <div className="items-center mx-auto max-w-screen-xl py-20">

                <div className="relative overflow-x-auto mt-28 mb-28">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-lg text-gray-900 uppercase dark:text-gray-400 border-b border-lightGray">
                            <tr>
                                <th scope="col" className="px-6 py-4">

                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Subtotal
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart && cart.map(item => (
                                <tr className="bg-white dark:bg-gray-800 text-md font-bold border-b border-lightGray" key={item.id}>
                                    <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <button>X</button>
                                    </th>
                                    <td className="px-6 py-8">
                                        <div className="flex items-center">
                                            <Image src={item.images[0]} width="30" height="30" alt={item.title} />
                                            <h4 className="ms-6">{item.title}</h4>

                                        </div>
                                    </td>
                                    <td className="px-6 py-8">
                                        {currencyFormat(item.price)}
                                    </td>
                                    <td className="px-6 py-8">
                                        <QuantityCounter />
                                    </td>
                                    <td className="px-6 py-8">
                                        {currencyFormat(item.price)}
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>

                    <div className="flex">
                        <div className="mt-14 ps-28">
                            <button className="bg-blue uppercase text-white text-sm py-4 px-12 me-4">APPLY COUPON</button>
                            <button className="bg-blue uppercase text-white text-sm py-4 px-12">UPDATE CART</button>
                        </div>
                    </div>

                    <div className="grid p-8 md:p-0 md:grid-cols-2 ">

                        <div className="mt-28 ">
                            <h4 className="font-bold text-3xl tracking-widest mb-12">CART  TOTAL</h4>

                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr className="bg-white dark:bg-gray-800 text-md font-bold border-b border-lightGray">
                                        <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            SUBTOTAL
                                        </th>
                                        <td className="px-6 py-8">
                                            <div className="flex flex-col font-normal text-darkGray">
                                                {currencyFormat(150)}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 text-md font-bold border-b border-lightGray">
                                        <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            SHIPPING
                                        </th>
                                        <td className="px-6 py-8">
                                            <div className="flex flex-col">
                                                <div className="font-normal text-darkGray">Enter your address to view shipping options.</div>
                                                <p>Calculate shipping</p>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="bg-white dark:bg-gray-800 text-md font-bold border-b border-lightGray">
                                        <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            TOTAL
                                        </th>
                                        <td className="px-6 py-8">
                                            <div className="flex items-center font-normal text-darkGray">
                                                {currencyFormat(150)}
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="flex">
                        <div className="mt-14">
                            <button className="bg-blue uppercase text-white text-sm py-4 px-12 me-4">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cart;