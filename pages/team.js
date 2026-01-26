import React from 'react';
import Layout from '../components/layout/Layout';

const Team = () => {
    return (
        <>
            <Layout>

                {/* [1] 顶部首屏｜✅ 与 index/about/services 完全同坐标：-mt-24 pt-20 + container px-4 + pt-8 */}
                <section className="bg-white -mt-24 pt-20">
                    <div className="container px-4 mx-auto text-center">
                        <div className="pt-8 max-w-4xl mx-auto mb-2">
                            <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeIn">
                                NoKu LLC <br />
                                <span className="text-blue-500">我们的团队</span>
                            </h1>

                            <ul className="mx-auto text-gray-500 text-sm lg:text-sm pb-6 wow animate__animated animate__fadeIn">
                                <li className="inline-flex items-center">
                                    <a href="#" className="hover:text-blue-500 text-gray-800">首页</a>
                                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </li>
                                <li className="inline-flex items-center text-gray-400">

                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-blueGray-50">
                    <div className="container">
                        <div className="max-w-lg mx-auto mb-12 text-center">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                我们的负责人
                            </span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                认识你的 <span className="text-blue-500">合作伙伴</span> <br />
                                如同家人一般的团队成员
                            </h2>
                            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                客户对我们的服务非常满意。
                            </p>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 py-5 md:px-5">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200" data-wow-delay=".1s">
                                    <div className="flex items-center mb-4">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                                            <p className="text-gray-500 text-xs mt-3">CTO / 首席技术官</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">
                                        我们坚持长期主义与高标准交付，用稳定的执行与优秀的技能，把细节每一步做到位。
                                    </p>
                                    <div className="flex space-x-2">
                                        <a href="#"><img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" /></a>
                                        <a href="#"><img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 py-5 md:px-5">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200" data-wow-delay=".3s">
                                    <div className="flex items-center mb-4">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                                            <p className="text-gray-500 text-xs mt-3">CDO / 首席数字官</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">
                                        我们用数据与体验驱动决策，把复杂流程拆解成可执行的步骤，让结果更可控。
                                    </p>
                                    <div className="flex space-x-2">
                                        <a href="#"><img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" /></a>
                                        <a href="#"><img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 py-5 md:px-5">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200" data-wow-delay=".5s">
                                    <div className="flex items-center mb-4">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-3.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Chris Fulton</strong>
                                            <p className="text-gray-500 text-xs mt-3">项目经理</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">
                                        关注节奏与交付质量，确保跨团队/个人订单的顺畅推进，按客户要求完成每一次服务。
                                    </p>
                                    <div className="flex space-x-2">
                                        <a href="#"><img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" /></a>
                                        <a href="#"><img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 py-5 md:px-5">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200" data-wow-delay=".7s">
                                    <div className="flex items-center mb-4">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-4.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                                            <p className="text-gray-500 text-xs mt-3">技术经理</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">
                                        以增长与协作为核心，推动平台与订单联动，让团队把正确的事情持续做深做透。
                                    </p>
                                    <div className="flex space-x-2">
                                        <a href="#"><img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" /></a>
                                        <a href="#"><img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" /></a>
                                        <a href="#"><img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 下面模块保持你原本结构与中文 */}
                <section className="pt-20">
                    <div className="container text-center">
                        <div className="max-w-lg mx-auto mb-12">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                我们的团队
                            </span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                我们超棒的 <br />
                                <span className="text-blue-500">技能</span> 团队成员
                            </h2>
                            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                技能专业/服务优秀/订单高效，持续为客户交付满意结果。
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3">
                            {[
                                { img: "avatar-1.png", name: "Geraldine Tusoy", role: "EM / 工程经理", delay: ".4s" },
                                { img: "avatar-2.png", name: "Clara Kolawole", role: "TL / 技术组长", delay: ".3s" },
                                { img: "avatar-3.png", name: "Chris Fulton", role: "外勤技术员", delay: ".5s" },
                                { img: "avatar-4.png", name: "Dany Connolly", role: "外勤技术员", delay: ".7s" },
                                { img: "avatar-5.png", name: "Al-amin Bishash", role: "外勤技术员", delay: ".1s" },
                                { img: "avatar-6.png", name: "Sanuya Santa", role: "市场营销", delay: ".3s" },
                                { img: "avatar-7.png", name: "Steven Job", role: "外勤技术员", delay: ".5s" },
                                { img: "avatar-8.png", name: "Romario", role: "外勤技术员", delay: ".7s" },
                            ].map((p, i) => (
                                <div key={i} className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn" data-wow-delay={p.delay}>
                                    <img className="h-64 w-64 mx-auto rounded object-cover object-top" src={`/assets/imgs/placeholders/${p.img}`} alt={p.name} />
                                    <p className="mt-6"><strong className="text-md">{p.name}</strong></p>
                                    <p className="text-gray-500 text-xs mb-4">{p.role}</p>
                                    <div className="flex py-1 justify-center space-x-2">
                                        <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                        <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact 表单保持原中文（仅首屏已统一） */}
                <section className="pb-20">
                    <div className="container">
                        <div className="max-w-2xl lg:max-w-3xl mx-auto">
                            <div className="mb-12 text-center">
                                <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    联系我们！
                                </h2>
                                <p className="text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    我们很乐意收到你的消息
                                </p>
                            </div>

                            <div className="flex flex-wrap -mx-3 text-center">
                                <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <div className="leading-relaxed">
                                        <span className="text-sm text-blueGray-858">电话</span>
                                        <p>+ 1 858-868-8888</p>
                                        <p>+ 1 858-868-8888</p>
                                    </div>
                                </div>

                                <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <div className="leading-relaxed">
                                        <span className="text-sm text-blueGray-400">邮箱</span>
                                        <p>nokuinc@outlook.com.com</p>
                                        <p>nokuinc@outlook.com</p>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <div className="leading-relaxed">
                                        <span className="text-sm text-blueGray-400">地址</span>
                                        <p>11567 E Broadview Dr</p>
                                        <p>Colorado(CO), 80117</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <form>
                                    <div className="mb-4 text-sm wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <span className="mr-4 font-semibold">加入团队：</span>
                                        <label className="mr-4">
                                            <input className="mr-1" type="radio" name="department" value="1" />
                                            <span>前端</span>
                                        </label>
                                        <label>
                                            <input className="mr-1" type="radio" name="department" value="2" />
                                            <span>后端</span>
                                        </label>
                                    </div>

                                    <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="岗位" />
                                            </div>
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="姓名" />
                                            </div>
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
                                            </div>
                                            <div>
                                                <label className="flex px-2 bg-blueGray-50 rounded">
                                                    <input className="hidden" type="file" name="Choose file" />
                                                    <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                                                        浏览
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-1/2 px-3">
                                            <textarea className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="留言内容..."></textarea>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <label>
                                            <input className="mr-1" type="checkbox" name="terms" value="1" />
                                            <span className="text-sm font-semibold">我同意条款与条件（隐私保护）</span>
                                        </label>
                                        <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">
                                            提交
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
};

export default Team;
