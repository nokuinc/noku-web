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
                <span className="text-blue-500">Technology infrastructure for recording and verifying real-world actions.</span>
              </h1>
              
              <p className="mt-6 text-blueGray-400 leading-loose max-w-3xl mx-auto text-xl lg:text-2xl font-medium px-4 wow animate__animated animate__fadeIn">
                We build factual recording systems that help platforms record real actions that have occurred.
              </p>
            </div>
          </div>
        </section>

        {/* [2] 问题定义卡片 */}
        <section className="pt-2 pb-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-3 -mb-6">
              {[
                { title: "Trust Is Too Expensive", desc: "In unfamiliar collaboration, unfamiliar transactions, and unfamiliar communities, every time you build trust requires proving yourself again." },
                { title: "Credit Cannot Cross Scenarios", desc: "Records accumulated on Platform A cannot be used in Scenario B. Reputation is fragmented by platforms, forcing individuals to repeatedly invest." },
                { title: "Rating Systems Are Not Facts", desc: "Ratings are easily distorted: emotional, fake reviews, retaliation, bias. In the long run, only \"verifiable facts\" are more reliable." },
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
              <div className="w-full lg:w-1/2 px-5 mb-12 lg:mb-0 lg:pt-0">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">What is NoKu?</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  NoKu is a technology platform focused on building infrastructure that transforms real operational behaviors into verifiable and reusable attestations. Our services provide standardized recording and verification for completed actions across different domains.
                </p>
                <div className="space-y-4">
                  {[
                    { t: "Record (记录)", d: "Record real fulfillment and transaction outcomes that have occurred, forming structured trails." },
                    { t: "Verify (验证)", d: "Verify the integrity and consistency of records, ensuring traceability and verifiability." },
                    { t: "Attest (证明)", d: "Issue \"trustworthy conclusions\" with minimal disclosure, without revealing unnecessary details." },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl py-5 px-5 border border-blueGray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
                      <div className="font-bold mb-1 text-xl text-blueGray-900 leading-snug">{x.t}</div>
                      <div className="text-blueGray-600 text-base leading-relaxed">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-5 lg:pt-0">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">What We Don't Do</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  We adhere to neutrality and objectivity, protecting the authenticity of reputation by setting clear business boundaries. We do not intervene in transactions, we only provide evidence.
                </p>
                <div className="space-y-4">
                  {[
                    { t: "No Subjective Rating", d: "We do not compress complex reality into a single score; we value verifiable factual records more." },
                    { t: "No Transaction Matching", d: "We do not become stakeholders; maintaining neutrality ensures long-term credibility." },
                    { t: "Not Arbitrators", d: "We do not judge for users, nor do we take sides for any party; we only provide evidence." },
                    { t: "We Don't Own Your Credit", d: "Credit belongs to the actor; you have complete authorization rights and usage boundaries." },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 border border-blueGray-100 shadow-sm hover:shadow-md transition-all flex items-start h-[92px]">
                      <span className="text-blue-500 mr-4 mt-1 text-xl">●</span>
                      <div>
                        <div className="font-bold text-lg text-blueGray-900 leading-tight">{x.t}</div>
                        {x.d && <div className="text-blueGray-600 text-sm mt-1">{x.d}</div>}
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
                We don't create credit, we only preserve facts
              </h2>
              <p className="text-lg mb-8 leading-loose text-blueGray-600">
                NoKu is a technical team focused on factual recording and verification infrastructure, maintaining neutrality, restraint, and clear boundaries over the long term.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
