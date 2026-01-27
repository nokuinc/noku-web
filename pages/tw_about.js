import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Layout>
        {/* [1] 頂部首屏｜✅ 純白背景 + 位置對齊 */}
        <section className="bg-white -mt-24 pt-20">
          <div className="container px-4 mx-auto text-center">
            {/* pt-8 確保文字與首頁 index.js 的座標完全對齊 */}
            <div className="pt-8 max-w-4xl mx-auto mb-2">
              
              <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeIn">
                NoKu LLC <br />
                <span className="text-blue-500">我們在解決什麼問題？</span>
              </h1>
              
              <p className="mt-6 text-blueGray-400 leading-loose max-w-3xl mx-auto text-xl lg:text-2xl font-medium px-4 wow animate__animated animate__fadeIn">
                在跨城市、跨國家、跨平台的生活裡，信任經常被迫\"從零開始\"。不是因為你不可靠，
                而是因為缺少一個能長期工作、可驗證、可複用的事實記錄體系。
              </p>
            </div>
          </div>
        </section>

        {/* [2] 問題定義卡片 */}
        <section className="pt-2 pb-20 bg-white">
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
              <div className="w-full lg:w-1/2 px-5 mb-12 lg:mb-0">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">NoKu 是什麼？</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  NoKu（諾庫）是一套\"信任數據機制\"，用來把真實行為轉化為可驗證的信用憑證。它強調長期有效、可遷移、可授權。
                </p>
                <div className="space-y-4">
                  {[
                    { t: "Record (記錄)", d: "記錄真實發生的履約與交易結果，形成結構化軌跡。" },
                    { t: "Verify (驗證)", d: "校驗記錄的完整性與一致性，確保可追溯、可核驗。" },
                    { t: "Attest (證明)", d: "以最小披露方式出具\"可信結論\"，不公開不必要的細節。" },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-blueGray-100 shadow-sm hover:shadow-md transition-all h-32 flex flex-col justify-center">
                      <div className="font-bold mb-1 text-xl text-blueGray-900">{x.t}</div>
                      <div className="text-blueGray-600 text-base">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-5">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">我們不做什麼？</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  我們堅持中立與客觀，通過設定清晰的業務邊界來保護信譽的真實性。我們不干預交易，只提供證據。
                </p>
                <div className="space-y-4">
                  {[
                    { t: "不做主觀評分", d: "我們不把複雜現實壓縮成單一分數；我們更重視可核驗的事實記錄。" },
                    { t: "不做交易撮合", d: "我們不成為利益相關方；保持中立性才能確保長期可信。" },
                    { t: "不當仲裁者", d: "我們不代替用戶判斷，也不替任何一方站隊；只提供證據。" },
                    { t: "不佔有你的信用", d: "信用屬於行為發生者；你擁有完全的授權權利與使用邊界。" },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 border border-blueGray-100 shadow-sm hover:shadow-md transition-all flex items-start h-[92px]">
                      <span className="text-blue-500 mr-4 mt-1">●</span>
                      <div>
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
      </Layout>
    </>
  );
};

export default About;
