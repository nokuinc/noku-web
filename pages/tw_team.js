import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const Team = () => {
    const [termsAgreed, setTermsAgreed] = useState(false);
    const toEmail = "nokuinc@outlook.com";

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!termsAgreed) {
            alert('請先勾選"我同意條款與條件（隱私保護）"');
            return;
        }

        const form = e.currentTarget;
        const department = form.department?.value || "";
        const role = form.querySelector('input[type="text"][placeholder="崗位"]')?.value?.trim() || "";
        const name = form.querySelector('input[type="text"][placeholder="姓名"]')?.value?.trim() || "";
        const email = form.querySelector('input[type="email"]')?.value?.trim() || "";
        const message = form.querySelector('textarea')?.value?.trim() || "";

        const subject = `NOKU Team Application | ${department}${role ? " | " + role : ""}${name ? " | " + name : ""}`;
        const body = [
            `Department: ${department || "-"}`,
            `Role: ${role || "-"}`,
            `Name: ${name || "-"}`,
            `Email: ${email || "-"}`,
            "",
            "Message:",
            message || "-",
            "",
            "----",
            "Sent from nokuinc.com team form",
        ].join("\n");

        const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    };

    return (
        <>
            <Layout>

                {/* [1] 頂部首屏｜✅ 與 index/about/services 完全同座標：-mt-24 pt-20 + container px-4 + pt-8 */}
                <section className="bg-white -mt-24 pt-20">
                    <div className="container px-4 mx-auto text-center">
                        <div className="pt-8 max-w-4xl mx-auto mb-2">
                            <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeIn break-words">
                                NoKu LLC <br />
                                <span className="text-blue-500">我們的團隊</span>
                            </h1>

                            <ul className="flex justify-center mx-auto text-gray-500 text-sm lg:text-sm pb-6 wow animate__animated animate__fadeIn">
                                <li className="inline-flex items-center">
                                    <a href="#" className="hover:text-blue-500 text-gray-800">首頁</a>
                                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </li>
                                <li className="inline-flex items-center text-gray-400">
                                    團隊
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="pt-10 pb-20 bg-blueGray-50">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-4xl mx-auto mb-12 text-center">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                值得信任的那群人
                            </span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                不只是合作夥伴 <br />
                                更像一起把事做成的自己人
                            </h2>
                            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                我們相信，真正的合作不是一次交易，<br />
                                而是彼此理解、長期信任和共同承擔。<br />
                                <br />
                                你看到的不是臨時拼湊的執行者，<br />
                                而是一群願意為長期合作承擔責任的人。
                            </p>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 py-5 md:px-5">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200" data-wow-delay=".1s">
                                    <div className="flex items-center mb-4">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                                            <p className="text-gray-500 text-xs mt-3">CTO / 首席技術官</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">
                                        我們堅持長期主義與高標準交付，用穩定的執行與優秀的技能，把細節每一步做到位。
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
                                            <p className="text-gray-500 text-xs mt-3">CDO / 首席數字官</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">
                                        我們用數據與體驗驅動決策，把複雜流程拆解成可執行的步驟，讓結果更可控。
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
                                            <p className="text-gray-500 text-xs mt-3">項目經理</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">
                                        關注節奏與交付質量，確保跨團隊/個人訂單的順暢推進，按客戶要求完成每一次服務。
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
                                            <p className="text-gray-500 text-xs mt-3">技術經理</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">
                                        以增長與協作為核心，推動平台與訂單聯動，讓團隊把正確的事情持續做深做透。
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

                {/* 下面模組保持你原本結構與中文 */}
                <section className="pt-20">
                    <div className="container text-center">
                        <div className="max-w-[90vw] sm:max-w-lg mx-auto mb-12">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                我們的團隊
                            </span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn break-words" data-wow-delay=".3s">
                                我們超棒的 <br />
                                <span className="text-blue-500">技能</span> 團隊成員
                            </h2>
                            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                技能專業/服務優秀/訂單高效，持續為客戶交付滿意結果。
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3">
                            {[
                                { img: "avatar-1.png", name: "Geraldine Tusoy", role: "EM / 工程經理", delay: ".4s" },
                                { img: "avatar-2.png", name: "Clara Kolawole", role: "TL / 技術組長", delay: ".3s" },
                                { img: "avatar-3.png", name: "Chris Fulton", role: "外勤技術員", delay: ".5s" },
                                { img: "avatar-4.png", name: "Dany Connolly", role: "外勤技術員", delay: ".7s" },
                                { img: "avatar-5.png", name: "Al-amin Bishash", role: "外勤技術員", delay: ".1s" },
                                { img: "avatar-6.png", name: "Sanuya Santa", role: "市場營銷", delay: ".3s" },
                                { img: "avatar-7.png", name: "Steven Job", role: "外勤技術員", delay: ".5s" },
                                { img: "avatar-8.png", name: "Romario", role: "外勤技術員", delay: ".7s" },
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

                {/* Contact 表單保持原中文（僅首屏已統一） */}
                <section className="pb-20">
                    <div className="container">
                        <div className="max-w-[90vw] sm:max-w-2xl lg:max-w-3xl mx-auto">
                            <div className="mb-12 text-center">
                                <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                    加入我們
                                </h2>
                                <p className="text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    我們很樂意收到你的消息
                                </p>
                            </div>

                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4 text-sm wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <span className="mr-4 font-semibold">加入團隊：</span>
                                        <label className="mr-4">
                                            <input className="mr-1" type="radio" name="department" value="1" />
                                            <span>前端</span>
                                        </label>
                                        <label>
                                            <input className="mr-1" type="radio" name="department" value="2" />
                                            <span>後端</span>
                                        </label>
                                    </div>

                                    <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="崗位" />
                                            </div>
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="姓名" />
                                            </div>
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
                                            </div>
                                            <div>
                                                <label className="flex px-2 bg-blueGray-50 rounded">
                                                    <input className="hidden" type="file" name="Choose file" />
                                                    <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                                                        瀏覽
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-1/2 px-3">
                                            <textarea className="w-full h-full p-4 text-[16px] sm:text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="留言內容..."></textarea>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <label>
                                            <input className="mr-1" type="checkbox" name="terms" value="1" checked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)} />
                                            <span className="text-sm font-semibold">我同意條款與條件（隱私保護）</span>
                                        </label>
                                        <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={!termsAgreed}>
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
