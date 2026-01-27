import { useEffect, useState } from 'react'
import CounterUp from "../components/elements/Counterup"
import TextEffect from "../components/elements/TextEffect"
import Layout from "../components/layout/Layout"
import Slider1 from "../components/slider/Slider1"
import Link from "next/link"

function Home() {
    const [inViewport, setInViewport] = useState(false);

    const handleScroll = () => {
        const elements = document.getElementsByClassName("counterUp");
        if (elements.length > 0) {
            const element = elements[0];
            const rect = element.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (isInViewport && !inViewport) setInViewport(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [inViewport]);

    return (
        <>
            <Layout>
                {/* [1] 首頁首屏｜定位（Hero） */}
                <section
                    className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-20"
                    style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}
                >
                    <div className="container px-4 mx-auto">
                        <div className="pt-8 text-center">
                            <div className="max-w-3xl mx-auto mb-6">
                                <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading wow animate__animated animate__fadeIn">
                                    NoKu LLC <br />
                                    <span className="text-blue-500">微訊 / 優博正在運行中的平台體系</span>
                                </h1>

                                <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn d-inline text-lg">
                                    運行邏輯：{" "}
                                    <div className="typewrite d-inline text-brand font-bold">
                                        <TextEffect text1="事實先發生" text2="記錄再沉澱" />
                                    </div>
                                    {" "}· 諾書只在結果完成後出具可核驗證明
                                </div>

                                <div className="mt-4 leading-loose max-w-2xl mx-auto wow animate__animated animate__fadeIn space-y-2">
                                    <p className="text-blueGray-900">
                                        <strong>NoKu（諾庫）</strong><span className="text-blueGray-400">：不是空中樓閣的"信任概念"，而是一套正在運行的業務平台體系。</span>
                                    </p>
                                    <p className="text-blueGray-900">
                                        <strong className="text-blue-600">WeXun（微訊）</strong><span className="text-blueGray-400">：負責用工、找工與訂單履約，產生真實可驗證的訂單結果。</span>
                                    </p>
                                    <p className="text-blueGray-900">
                                        <strong className="text-green-600">YuoBo（優博）</strong><span className="text-blueGray-400">：負責交易與合作，產生真實完成的交易結果。</span>
                                    </p>
                                    <p className="text-blueGray-900">
                                        <strong className="text-yellow-700">PledgeDoc（諾書）</strong><span className="text-blueGray-400">：僅將已發生的事實記錄為可驗證憑證（最小披露、可授權）。</span>
                                    </p>
                                </div>

                            {/* CTA（僅更換文案與連結，不改變結構與樣式） */}
                            <div className="mb-8 flex flex-wrap justify-center gap-[14px]">
                                <a
                                    href="https://wexun.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                      inline-flex items-center justify-center
                                      h-12 min-w-[160px]
                                      px-8
                                      text-base font-semibold
                                      rounded-lg
                                      bg-blue-500 text-white
                                      hover:bg-blue-600
                                      transition
                                    "
                                >
                                    進入微訊
                                </a>

                                <a
                                    href="https://yuobo.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                      inline-flex items-center justify-center
                                      h-12 min-w-[160px]
                                      px-8
                                      text-base font-semibold
                                      rounded-lg
                                      bg-white text-blueGray-800
                                      border border-blueGray-200
                                      hover:border-blueGray-300
                                      transition
                                    "
                                >
                                    進入優博
                                </a>
                            </div>

                            {/* Snapshot */}
                            <div className="max-w-3xl mx-auto">
                                <div className="bg-white border border-blueGray-100 shadow rounded-2xl p-6 text-left wow animate__animated animate__fadeIn">
                                    <div className="text-xs font-bold uppercase tracking-widest text-blueGray-400 mb-2">
                                        Ecosystem Snapshot
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <div className="text-lg font-bold text-blueGray-900">
                                            WeXun · YuoBo · PledgeDoc
                                        </div>
                                        <div className="text-sm text-blueGray-500">
                                            微訊 / 優博產出事實 · 諾書記錄證明 · 最小披露 · 可授權 · 可撤回
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* [2] 動態數字看板 */}
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap justify-center lg:justify-between gap-y-6 pt-6 pb-8">
                            <div className="hover-up-5 flex w-full lg:w-auto justify-center wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold font-heading text-blue-600">
                                            {inViewport ? <CounterUp end={100} duration={3} /> : "0"}
                                        </span>
                                        <span className="text-3xl font-bold font-heading text-blue-600">%</span>
                                    </div>
                                    <p className="mt-2 pb-1 text-xs sm:text-base text-blueGray-400 font-semibold uppercase leading-tight">
                                        履約可核驗
                                    </p>
                                </div>
                            </div>

                            <div className="hover-up-5 flex w-full lg:w-auto justify-center wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold font-heading text-blue-600 count counterUp">
                                            {inViewport ? <CounterUp end={24} duration={3} /> : "0"}
                                        </span>
                                        <span className="text-3xl font-bold font-heading text-blue-600">/7</span>
                                    </div>
                                    <p className="mt-2 pb-1 text-xs sm:text-base text-blueGray-400 font-semibold uppercase leading-tight">
                                        平台持續運行
                                    </p>
                                </div>
                            </div>

                            <div className="hover-up-5 flex w-full lg:w-auto justify-center wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold font-heading text-blue-600 count counterUp">
                                            {inViewport ? <CounterUp end={50} duration={3} /> : "0"}
                                        </span>
                                        <span className="text-3xl font-bold font-heading text-blue-600">M+</span>
                                    </div>
                                    <p className="mt-2 pb-1 text-xs sm:text-base text-blueGray-400 font-semibold uppercase leading-tight">
                                        事實記錄沉澱
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [3] 生態矩陣｜The Ecosystem */}
                <section className="py-20 bg-blueGray-50" id="ecosystem">
                    <div className="container px-4 mx-auto">
                        <div className="text-center mt-6 mb-16">
                            <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                                生態矩陣 | The Ecosystem
                            </h2>
                            <p className="text-blueGray-400 mt-2 text-lg leading-relaxed">
                                微訊 / 優博負責事實產生 · 諾書只做結果完成後的長期記錄
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3 text-center">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <a href="https://wexun.com" target="_blank" rel="noopener noreferrer"
                                    className="block p-12 bg-white shadow rounded hover-up-5 transition duration-500 h-full">
                                    <img className="h-20 mx-auto mb-4" src="/assets/imgs/icons/wexun.png" alt="WeXun" />
                                    <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">WeXun（微訊）</h3>
                                    <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                                        正在運行：用工 / 找工 / 訂單
                                    </p>
                                    <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                                        <p className="mb-2"><strong>業務領域：</strong>找工 ｜ 用工 ｜ 訂單</p>
                                        <p>以真實接單、協作與交付為核心，讓履約結果可被長期驗證與複用。</p>
                                    </div>
                                </a>
                            </div>

                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <a href="https://yuobo.com" target="_blank" rel="noopener noreferrer"
                                    className="block p-12 bg-white shadow rounded hover-up-5 transition duration-500 h-full">
                                    <img className="h-20 mx-auto mb-4" src="/assets/imgs/icons/yuobo.png" alt="YuoBo" />
                                    <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">YuoBo（優博）</h3>
                                    <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                                        正在運行：交易 / 合作 / 對接
                                    </p>
                                    <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                                        <p className="mb-2"><strong>業務領域：</strong>二手 ｜ 合作 ｜ 本地服務</p>
                                        <p>以真實成交與協作為核心，把結果沉澱為可追溯事實，建立可持續口碑。</p>
                                    </div>
                                </a>
                            </div>

                            <div className="w-full lg:w-1/3 px-3 mb-6">
                                <a
                                    href="https://www.PledgeDoc.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-12 bg-white shadow rounded hover-up-5 border-2 border-brand transition duration-500 h-full text-center"
                                >
                                    <img
                                        className="h-20 mx-auto mb-4"
                                        src="/assets/imgs/icons/pledgedoc.png"
                                        alt="PledgeDoc"
                                    />
                                    <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">
                                        PledgeDoc（諾書）
                                    </h3>
                                    <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                                        底層機制：記錄 / 驗證 / 出具證明
                                    </p>
                                    <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                                        <p className="mb-2">
                                            <strong>核心定位：</strong>事實完成後的長期記錄系統
                                        </p>
                                        <p>
                                            不做評分、不製造信用，只把微訊/優博等真實平台的已完成結果，
                                            轉化為可核驗、可授權、可撤回的證明憑證（最小披露）。
                                        </p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                {/* [4] 三句話秒懂 */}
                <section className="py-20 overflow-x-hidden bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap lg:flex-nowrap items-center lg:gap-16">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:py-6 wow animate__animated animate__fadeIn">
                                    <h2 className="text-3xl font-bold font-heading mb-8">三句話秒懂 NoKu 生態</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex-shrink-0 w-8 text-blue-500 font-bold">01</div>
                                            <p className="text-blueGray-700 font-semibold ml-2">
                                                <strong>在 WeXun（微訊）：</strong>完成用工/訂單履約，沉澱可核驗的職業事實。
                                            </p>
                                        </div>
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex-shrink-0 w-8 text-blue-500 font-bold">02</div>
                                            <p className="text-blueGray-700 font-semibold ml-2">
                                                <strong>在 YuoBo（優博）：</strong>完成交易/合作結果，沉澱可追溯的生活事實。
                                            </p>
                                        </div>
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex-shrink-0 w-8 text-blue-500 font-bold">03</div>
                                            <p className="text-blueGray-700 font-semibold ml-2">
                                                <strong>在 PledgeDoc（諾書）：</strong>只在結果完成後記錄與出具證明，讓事實可被長期複用。
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-8 text-blueGray-400 italic">
                                        對應邏輯：事實先發生 → 記錄再沉澱 → 證明可授權
                                    </p>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-end">
                                <div className="w-full max-w-[980px]">
                                    <Slider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [5] 企業價值 */}
                <section className="py-20 bg-blueGray-50" id="values">
                    <div className="container px-4 mx-auto text-center">
                        <h2 className="text-4xl mb-6 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeInDown">
                            平台在運行 · 事實在發生 · 記錄才有意義
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg mb-8 leading-loose text-blueGray-600 wow animate__animated animate__fadeIn">
                                我們不做主觀評分，也不製造短期標籤。價值來自真實業務的長期運行，以及結果可被核驗與複用。
                            </p>
                            <p className="text-blueGray-500 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                通過 WeXun 的用工/訂單履約與 YuoBo 的交易/合作結果，PledgeDoc 只負責把"已完成的事實"
                                沉澱為可驗證、可授權、可撤回的記錄憑證，為個人、商戶與組織提供長期可用的基礎記錄機制。
                            </p>
                        </div>
                        <div className="mt-10 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Home;
