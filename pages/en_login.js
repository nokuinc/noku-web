import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link";

const Login = () => {
    return (
        <>
            <Layout>
                <section className="relative pb-20">
                    <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto">
                        <div
                            className="flex items-center h-full wow animate__animated animate__fadeIn animated"
                            data-wow-delay=".1s"
                        >
                            <img
                                className="lg:max-w-lg mx-auto"
                                src="/assets/imgs/illustrations/space.svg"
                                alt="Monst"
                            />
                        </div>
                    </div>

                    <div className="container">
                        <div className="relative flex flex-wrap pt-12">
                            <div className="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20">
                                <div
                                    className="w-full max-w-lg mx-auto lg:mx-0 my-auto wow animate__animated animate__fadeIn animated"
                                    data-wow-delay=".3s"
                                >
                                    {/* 标题区 */}
                                    <span className="text-sm text-blueGray-400">
                                        Log In
                                    </span>
                                    <h4 className="mb-6 text-3xl">
                                        Join the Ecosystem
                                    </h4>

                                    {/* Email */}
                                    <div className="flex mb-4 px-4 bg-blueGray-50 rounded border border-gray-200">
                                        <input
                                            className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                            type="email"
                                            placeholder="Email Address"
                                        />
                                        <svg
                                            className="h-6 w-6 ml-4 my-auto text-blueGray-300"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            />
                                        </svg>
                                    </div>

                                    {/* 密码 */}
                                    <div className="flex mb-6 px-4 bg-blueGray-50 rounded border border-gray-200">
                                        <input
                                            className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                                            type="password"
                                            placeholder="Enter Password"
                                        />
                                        <button className="ml-4">
                                            <svg
                                                className="h-6 w-6 my-auto text-blueGray-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* 协议 */}
                                    <div
                                        className="float-left mb-6 wow animate__animated animate__fadeIn animated"
                                        data-wow-delay=".1s"
                                    >
                                        <label className="inline-flex text-xs">
                                            <input type="checkbox" className="form-checkbox" checked />
                                            <span className="ml-2">
                                                I have read and agree to{" "}
                                                <Link href="/about" legacyBehavior>
                                                    <a className="underline hover:text-blueGray-500">
                                                        Privacy Policy
                                                    </a>
                                                </Link>{" "}
                                                与{" "}
                                                <Link href="/about" legacyBehavior>
                                                    <a className="underline hover:text-blueGray-500">
                                                        Terms of Use
                                                    </a>
                                                </Link>
                                            </span>
                                        </label>
                                    </div>

                                    {/* Log In按钮 */}
                                    <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded">
                                        Log In
                                    </button>

                                    {/* 第三方Log In */}
                                    <p className="my-6 text-xs text-blueGray-400 text-center font-semibold">
                                        或使用以下方式Log In
                                    </p>

                                    <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center w-full px-4 py-3 mb-2 text-xs text-blueGray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded">
                                        <img
                                            className="h-6 pr-10"
                                            src="/assets/imgs/logos/facebook-sign.svg"
                                        />
                                        <span>使用 Facebook Log In</span>
                                    </button>

                                    <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center px-4 py-3 w-full text-xs text-blueGray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded">
                                        <img
                                            className="h-6 pr-10"
                                            src="/assets/imgs/logos/google-sign.svg"
                                        />
                                        <span>使用 Google Log In</span>
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Login;
