import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Layout>
        {/* [1] 頂部首屏｜✅ 純白背景 + 位置對齊 */}
        <section id="about" className="bg-white -mt-24 pt-20">
          <div className="container px-4 mx-auto text-center">
            {/* pt-8 確保文字與首頁 index.js 的座標完全對齊 */}
            <div className="pt-8 max-w-4xl mx-auto mb-8">
              
              <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeIn">
                NOKU LLC <br />
                <span className="text-blue-500">用於記錄與驗證現實行為的技術基礎設施。</span>
              </h1>
              
              <p className="mt-6 text-blueGray-400 leading-loose max-w-3xl mx-auto text-xl lg:text-2xl font-medium px-4 wow animate__animated animate__fadeIn">
                我們構建事實記錄系統，幫助平台記錄真實發生的行為。
              </p>
            </div>
          </div>
        </section>

        {/* [2] 問題定義卡片｜lg+ 略減上方留白使與首屏更連貫 */}
        <section className="pt-8 lg:pt-4 lg:-mt-4 pb-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-3 -mb-6">
              {[
                { title: "信任的成本太高", desc: "陌生協作、陌生交易、陌生社區中，每一次建立信任都需要重新證明自己。" },
                { title: "信用無法跨場景遷移", desc: "在 A 平台積累的記錄無法在 B 場景使用，信譽被平台割裂，個人被迫重複投入。" },
                { title: "評價系統不等於事實", desc: "評分容易失真：情緒化、刷單、報復、偏見。長期來看，只有\"可核驗的事實\"更可靠。" },
              ].map((item, idx) => (
                <div key={idx} className="w-full md:w-1/3 px-3 mb-6">
                  <div className="h-full bg-white rounded-2xl p-8 border-2 border-blueGray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-xl font-bold mb-6">{idx + 1}</div>
                    <h3 className="text-xl font-bold mb-4 text-blueGray-900">{item.title}</h3>
                    <p className="text-blueGray-600 leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* [3] NoKu 是什麼 vs 我們不做什麼 */}
        <section className="py-20 bg-blueGray-50">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-5">
              <div className="w-full lg:w-1/2 px-5 mb-12 lg:mb-0 lg:pt-0">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">NoKu 是什麼？</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  NoKu 是一個技術平台，專注構建將真實發生的操作行為轉化為可核驗和可複用存證的基礎設施。我們的服務為不同領域中已完成的行為提供標準化的記錄與驗證。
                </p>
                <div className="space-y-4">
                  {[
                    { t: "Record (記錄)", d: "記錄真實發生的履約與交易結果，形成結構化軌跡。" },
                    { t: "Verify (驗證)", d: "校驗記錄的完整性與一致性，確保可追溯、可核驗。" },
                    { t: "Attest (證明)", d: "以最小披露方式出具\"可信結論\"，不公開不必要的細節。" },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl py-5 px-5 border border-blueGray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
                      <div className="font-bold mb-1 text-xl text-blueGray-900 leading-snug">{x.t}</div>
                      <div className="text-blueGray-600 text-base leading-relaxed">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-5 lg:pt-0">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">我們不做什麼？</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  我們堅持中立與客觀，通過設定清晰的業務邊界來保護信譽的真實性。我們不干預交易，只提供證據。我們不處理或託管用戶資金，不提供投資、理財或收益承諾，不介入平台交易或用戶決策。
                </p>
                <div className="space-y-4">
                  {[
                    { t: "不做主觀評分", d: "我們不把複雜現實壓縮成單一分數；我們更重視可核驗的事實記錄。" },
                    { t: "不做交易撮合", d: "我們不成為利益相關方；保持中立性才能確保長期可信。" },
                    { t: "不當仲裁者", d: "我們不代替用戶判斷，也不替任何一方站隊；只提供證據。" },
                    { t: "不佔有你的信用", d: "信用屬於行為發生者；你擁有完全的授權權利與使用邊界。" },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl py-5 px-5 border border-blueGray-100 shadow-sm hover:shadow-md transition-all flex items-start gap-x-4">
                      <span className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-lg text-blueGray-900 leading-tight">{x.t}</div>
                        <div className="text-blueGray-600 text-sm mt-1">{x.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [4] Vision Statement */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl mb-6 font-bold font-heading text-blueGray-900">
                我們不創造信用，只保存事實
              </h2>
              <p className="text-lg mb-8 leading-loose text-blueGray-600">
                NoKu 是一家專注於事實記錄與驗證基礎設施的技術團隊，長期保持中立、克制與邊界清晰。<br />nokuinc.com 為 NOKU LLC 全球唯一官方官網。
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
