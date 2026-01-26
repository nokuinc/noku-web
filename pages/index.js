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
                {/* [1] 首页首屏｜定位（Hero） */}
                <section
                    className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-20"
                    style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}
                >
                    <div className="container px-4 mx-auto">
                        <div className="pt-8 text-center">
                            <div className="max-w-3xl mx-auto mb-6">
                                <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading wow animate__animated animate__fadeIn">
                                    NoKu LLC <br />
                                    <span className="text-blue-500">微讯 / 优博正在运行中的平台体系</span>
                                </h1>

                                <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn d-inline text-lg">
                                    运行逻辑：{" "}
                                    <div className="typewrite d-inline text-brand font-bold">
                                        <TextEffect text1="事实先发生" text2="记录再沉淀" />
                                    </div>
                                    {" "}· 诺书只在结果完成后出具可核验证明
                                </div>

                                <div className="mt-4 leading-loose max-w-2xl mx-auto wow animate__animated animate__fadeIn space-y-2">
                                    <p className="text-blueGray-900">
                                        <strong>NoKu（诺库）</strong><span className="text-blueGray-400">：不是空中楼阁的"信任概念"，而是一套正在运行的业务平台体系。</span>
                                    </p>
                                    <p className="text-blueGray-900">
                                        <strong className="text-blue-600">WeXun（微讯）</strong><span className="text-blueGray-400">：负责用工、找工与订单履约，产生真实可验证的订单结果。</span>
                                    </p>
                                    <p className="text-blueGray-900">
                                        <strong className="text-green-600">Yuobo（优博）</strong><span className="text-blueGray-400">：负责交易与合作，产生真实完成的交易结果。</span>
                                    </p>
                                    <p className="text-blueGray-900">
                                        <strong className="text-yellow-700">PledgeDoc（诺书）</strong><span className="text-blueGray-400">：仅将已发生的事实记录为可验证凭证（最小披露、可授权）。</span>
                                    </p>
                                </div>

                            {/* CTA（仅更换文案与链接，不改变结构与样式） */}
                            <div className="mb-8 flex flex-wrap justify-center gap-10">
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
                                    进入微讯
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
                                    进入优博
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
                                            WeXun · Yuobo · PledgeDoc
                                        </div>
                                        <div className="text-sm text-blueGray-500">
                                            微讯 / 优博产出事实 · 诺书记录证明 · 最小披露 · 可授权 · 可撤回
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* [2] 动态数字看板 */}
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
                                        履约可核验
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
                                        平台持续运行
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
                                        事实记录沉淀
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [3] 生态矩阵｜The Ecosystem */}
                <section className="py-20 bg-blueGray-50" id="ecosystem">
                    <div className="container px-4 mx-auto">
                        <div className="text-center mt-6 mb-16">
                            <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                                生态矩阵 | The Ecosystem
                            </h2>
                            <p className="text-blueGray-400 mt-2 text-lg leading-relaxed">
                                微讯 / 优博负责事实产生 · 诺书只做结果完成后的长期记录
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3 text-center">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <a href="https://wexun.com" target="_blank" rel="noopener noreferrer"
                                    className="block p-12 bg-white shadow rounded hover-up-5 transition duration-500 h-full">
                                    <img className="h-20 mx-auto mb-4" src="/assets/imgs/icons/WeXun.png" alt="WeXun" />
                                    <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">WeXun（微讯）</h3>
                                    <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                                        正在运行：用工 / 找工 / 订单
                                    </p>
                                    <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                                        <p className="mb-2"><strong>业务领域：</strong>找工 ｜ 用工 ｜ 订单</p>
                                        <p>以真实接单、协作与交付为核心，让履约结果可被长期验证与复用。</p>
                                    </div>
                                </a>
                            </div>

                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <a href="https://yuobo.com" target="_blank" rel="noopener noreferrer"
                                    className="block p-12 bg-white shadow rounded hover-up-5 transition duration-500 h-full">
                                    <img className="h-20 mx-auto mb-4" src="/assets/imgs/icons/YuoBo.png" alt="Yuobo" />
                                    <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">Yuobo（优博）</h3>
                                    <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                                        正在运行：交易 / 合作 / 对接
                                    </p>
                                    <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                                        <p className="mb-2"><strong>业务领域：</strong>二手 ｜ 合作 ｜ 本地服务</p>
                                        <p>以真实成交与协作为核心，把结果沉淀为可追溯事实，建立可持续口碑。</p>
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
                                        PledgeDoc（诺书）
                                    </h3>
                                    <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                                        底层机制：记录 / 验证 / 出具证明
                                    </p>
                                    <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                                        <p className="mb-2">
                                            <strong>核心定位：</strong>事实完成后的长期记录系统
                                        </p>
                                        <p>
                                            不做评分、不制造信用，只把微讯/优博等真实平台的已完成结果，
                                            转化为可核验、可授权、可撤回的证明凭证（最小披露）。
                                        </p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                {/* [4] 三句话秒懂 */}
                <section className="py-20 overflow-x-hidden bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap lg:flex-nowrap items-center lg:gap-16">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:py-6 wow animate__animated animate__fadeIn">
                                    <h2 className="text-3xl font-bold font-heading mb-8">三句话秒懂 NoKu 生态</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex-shrink-0 w-8 text-blue-500 font-bold">01</div>
                                            <p className="text-blueGray-700 font-semibold ml-2">
                                                <strong>在 WeXun（微讯）：</strong>完成用工/订单履约，沉淀可核验的职业事实。
                                            </p>
                                        </div>
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex-shrink-0 w-8 text-blue-500 font-bold">02</div>
                                            <p className="text-blueGray-700 font-semibold ml-2">
                                                <strong>在 Yuobo（优博）：</strong>完成交易/合作结果，沉淀可追溯的生活事实。
                                            </p>
                                        </div>
                                        <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                                            <div className="flex-shrink-0 w-8 text-blue-500 font-bold">03</div>
                                            <p className="text-blueGray-700 font-semibold ml-2">
                                                <strong>在 PledgeDoc（诺书）：</strong>只在结果完成后记录与出具证明，让事实可被长期复用。
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-8 text-blueGray-400 italic">
                                        对应逻辑：事实先发生 → 记录再沉淀 → 证明可授权
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

                {/* [5] 企业价值 */}
                <section className="py-20 bg-blueGray-50" id="values">
                    <div className="container px-4 mx-auto text-center">
                        <h2 className="text-4xl mb-6 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeInDown">
                            平台在运行 · 事实在发生 · 记录才有意义
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-lg mb-8 leading-loose text-blueGray-600 wow animate__animated animate__fadeIn">
                                我们不做主观评分，也不制造短期标签。价值来自真实业务的长期运行，以及结果可被核验与复用。
                            </p>
                            <p className="text-blueGray-500 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                通过 WeXun 的用工/订单履约与 Yuobo 的交易/合作结果，PledgeDoc 只负责把"已完成的事实"
                                沉淀为可验证、可授权、可撤回的记录凭证，为个人、商户与组织提供长期可用的基础记录机制。
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
