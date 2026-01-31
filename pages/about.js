import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Layout>
        {/* [1] 顶部首屏｜✅ 纯白背景 + 位置对齐 */}
        <section id="about" className="bg-white -mt-24 pt-20">
          <div className="container px-4 mx-auto text-center">
            {/* pt-8 确保文字与首页 index.js 的坐标完全对齐 */}
            <div className="pt-8 max-w-4xl mx-auto mb-8">
              
              <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeIn">
                NOKU LLC <br />
                <span className="text-blue-500">Technology infrastructure for recording and verifying real-world actions.</span>
              </h1>
              
              <p className="mt-6 text-blueGray-400 leading-loose max-w-3xl mx-auto text-xl lg:text-2xl font-medium px-4 wow animate__animated animate__fadeIn">
                We build factual recording systems that help platforms document what has actually happened.
              </p>
            </div>
          </div>
        </section>

        {/* [2] 问题定义卡片｜lg+ 略减上方留白使与首屏更连贯 */}
        <section className="pt-8 lg:pt-4 lg:-mt-4 pb-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-3 -mb-6">
              {[
                { title: "Trust Is Too Expensive", desc: "In unfamiliar work, transactions, or communities, you must repeatedly prove yourself to earn trust." },
                { title: "Reputation Can't Travel", desc: "Records built on Platform A can't be used in Scenario B. Reputation gets siloed, forcing people to start over." },
                { title: "Ratings Aren't Facts", desc: "Scores distort easily—emotion, manipulation, retaliation, bias. In the long run, only verifiable facts are reliable." },
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
                  NoKu is a technology platform focused on building infrastructure that transforms real-world operational behavior into verifiable and reusable attestations. Our services provide standardized documentation and verification for completed actions across different domains.
                </p>
                <div className="space-y-4">
                  {[
                    { t: "Record", d: "Record real fulfillment and transaction outcomes to form a structured trail." },
                    { t: "Verify", d: "Validate integrity and consistency so records are traceable and auditable." },
                    { t: "Attest", d: "Issue trustworthy conclusions with minimal disclosure—without exposing unnecessary details." },
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
                  We remain neutral and objective, offering only factual attestation and verification. We do not handle or custody user funds, do not offer investment, wealth management, or return promises, and do not intervene in platform transactions or user decisions.
                </p>
                <div className="space-y-4">
                  {[
                    { t: "No credit scoring", d: "" },
                    { t: "No transaction facilitation", d: "" },
                    { t: "No arbitration functions", d: "" },
                    { t: "No financial services", d: "" },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl py-5 px-5 border border-blueGray-100 shadow-sm hover:shadow-md transition-all flex items-start gap-x-4">
                      <span className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0 flex-1">
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
              <p className="text-blueGray-800 text-lg leading-loose">
                NOKU LLC is a technology and infrastructure provider.<br />nokuinc.com is the sole global official website of NOKU LLC.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
