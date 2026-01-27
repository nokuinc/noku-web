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
                <span className="text-blue-500">What Problem Are We Solving?</span>
              </h1>
              
              <p className="mt-6 text-blueGray-400 leading-loose max-w-3xl mx-auto text-xl lg:text-2xl font-medium px-4 wow animate__animated animate__fadeIn">
                Across cities, countries, and platforms, trust often has to start from zero—not because you're unreliable,
                but because we lack a long-running, verifiable, reusable system for recording facts.
              </p>
            </div>
          </div>
        </section>

        {/* [2] 问题定义卡片 */}
        <section className="pt-2 pb-20 bg-white">
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
              <div className="w-full lg:w-1/2 px-5 mb-12 lg:mb-0">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">What is NoKu?</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  NoKu is a trust-data mechanism that turns real behavior into verifiable trust credentials. It is designed to be durable, portable, and permissioned.
                </p>
                <div className="space-y-4">
                  {[
                    { t: "Record", d: "Record real fulfillment and transaction outcomes to form a structured trail." },
                    { t: "Verify", d: "Validate integrity and consistency so records are traceable and auditable." },
                    { t: "Attest", d: "Issue trustworthy conclusions with minimal disclosure—without exposing unnecessary details." },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-blueGray-100 shadow-sm hover:shadow-md transition-all h-32 flex flex-col justify-center">
                      <div className="font-bold mb-1 text-xl text-blueGray-900">{x.t}</div>
                      <div className="text-blueGray-600 text-base">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-5">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">What We Don't Do</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  We stay neutral and objective, with clear boundaries that protect credibility. We don't intervene in transactions—we provide evidence.
                </p>
                <div className="space-y-4">
                  {[
                    { t: "No Subjective Scoring", d: "We don't compress complex reality into a single score; we prioritize verifiable factual records." },
                    { t: "No Matchmaking", d: "We don't become a party to the deal; neutrality is required for long-term credibility." },
                    { t: "No Arbitration", d: "We don't judge for users or take sides; we provide evidence only." },
                    { t: "You Own Your Trust", d: "Trust belongs to the actor. You control permissions and usage boundaries." },
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
