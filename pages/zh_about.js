import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Layout>
        {/* [1] 顶部首屏｜✅ 纯白背景 + 位置对齐 */}
        <section className="bg-white -mt-24 pt-20">
          <div className="container px-4 mx-auto text-center">
            {/* pt-8 确保文字与首页 index.js 的坐标完全对齐 */}
            <div className="pt-8 max-w-4xl mx-auto mb-2">
              
              <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeIn">
                NoKu LLC <br />
                <span className="text-blue-500">我们在解决什么问题？</span>
              </h1>
              
              <p className="mt-6 text-blueGray-400 leading-loose max-w-3xl mx-auto text-xl lg:text-2xl font-medium px-4 wow animate__animated animate__fadeIn">
                在跨城市、跨国家、跨平台的生活里，信任经常被迫\"从零开始\"。不是因为你不可靠，
                而是因为缺少一个能长期工作、可验证、可复用的事实记录体系。
              </p>
            </div>
          </div>
        </section>

        {/* [2] 问题定义卡片 */}
        <section className="pt-2 pb-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-3 -mb-6">
              {[
                { title: "信任的成本太高", desc: "陌生协作、陌生交易、陌生社区中，每一次建立信任都需要重新证明自己。" },
                { title: "信用无法跨场景迁移", desc: "在 A 平台积累的记录无法在 B 场景使用，信誉被平台割裂，个人被迫重复投入。" },
                { title: "评价系统不等于事实", desc: "评分容易失真：情绪化、刷单、报复、偏见。长期来看，只有\"可核验的事实\"更可靠。" },
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

        {/* [3] NoKu 是什么 vs 我们不做什么 */}
        <section className="py-20 bg-blueGray-50">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-5">
              <div className="w-full lg:w-1/2 px-5 mb-12 lg:mb-0">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">NoKu 是什么？</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  NoKu（诺库）是一套\"信任数据机制\"，用来把真实行为转化为可验证的信用凭证。它强调长期有效、可迁移、可授权。
                </p>
                <div className="space-y-4">
                  {[
                    { t: "Record (记录)", d: "记录真实发生的履约与交易结果，形成结构化轨迹。" },
                    { t: "Verify (验证)", d: "校验记录的完整性与一致性，确保可追溯、可核验。" },
                    { t: "Attest (证明)", d: "以最小披露方式出具\"可信结论\"，不公开不必要的细节。" },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-blueGray-100 shadow-sm hover:shadow-md transition-all h-32 flex flex-col justify-center">
                      <div className="font-bold mb-1 text-xl text-blueGray-900">{x.t}</div>
                      <div className="text-blueGray-600 text-base">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-5">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">我们不做什么？</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  我们坚持中立与客观，通过设定清晰的业务边界来保护信誉的真实性。我们不干预交易，只提供证据。
                </p>
                <div className="space-y-4">
                  {[
                    { t: "不做主观评分", d: "我们不把复杂现实压缩成单一分数；我们更重视可核验的事实记录。" },
                    { t: "不做交易撮合", d: "我们不成为利益相关方；保持中立性才能确保长期可信。" },
                    { t: "不当仲裁者", d: "我们不代替用户判断，也不替任何一方站队；只提供证据。" },
                    { t: "不占有你的信用", d: "信用属于行为发生者；你拥有完全的授权权利与使用边界。" },
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
