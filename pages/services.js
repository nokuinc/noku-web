import React from "react";
import Layout from "../components/layout/Layout";

const styles = {
  pillRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "32px",
    marginTop: "60px",
  },
  pill: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "18px 48px",
    borderRadius: "9999px",
    background: "#FFFFFF",
    border: "2px solid rgba(148,163,184,0.3)",
    boxShadow: "0 10px 25px rgba(2,6,23,0.05)",
    fontSize: "18px",
    fontWeight: 700,
    color: "#0f172a",
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
  listIndent: { paddingLeft: "1.25rem" },
};

const ServiceCard = ({ title, icon, name, description, features, accentColor, bgGradient }) => {
  const href = icon === "WeXun" ? "https://wexun.com" : icon === "YuoBo" ? "https://yuobo.com" : "https://pledgedoc.com";
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center px-4 leading-tight" style={{ color: accentColor }}>
        {title}
      </h3>
      <div className="p-8 bg-white rounded-3xl border-2 h-full text-center transition-all duration-300 hover:-translate-y-2 shadow-sm" style={{ borderColor: `${accentColor}40`, background: bgGradient }}>
        <div className="mb-8 flex justify-center">
          <a href={href} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
            <div style={{ width: "144px", height: "144px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={`/assets/imgs/icons/${icon}.png`} alt={icon} style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain" }} />
            </div>
          </a>
        </div>
        <h4 className="text-2xl font-bold mb-3">{name}</h4>
        <p className="text-blueGray-600 text-sm leading-relaxed mb-6">
          <strong className="text-blueGray-800">{description.bold}</strong>
          <br />
          {description.normal}
        </p>
        <ul className="text-sm text-blueGray-600 space-y-3 text-left border-t border-blueGray-100 pt-6 px-5">
          {features.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Layout>
      {/* [1] 顶部首屏｜✅ 纯白背景 + 位置对齐 */}
      <section className="bg-white -mt-24 pt-20">
        <div className="container px-4 mx-auto pt-8 text-center">
          <div className="max-w-6xl mx-auto mb-6">
            <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-8 font-bold font-heading text-blueGray-900">
              NoKu LLC <br />
              <span className="text-blue-500">构建跨场景的可验证信任基础设施</span>
            </h1>

            {/* ✅ NEW: 更短、更有格调的首屏阐述（排版重做） */}
            <div className="mt-10 max-w-5xl mx-auto px-4">
              {/* 小标签：更克制、更高级 */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blueGray-200 bg-white text-xs font-semibold tracking-widest text-blueGray-500">
                CLOSED-LOOP TRUST ECOSYSTEM
              </div>

              {/* 主句：三段式，节奏更强 */}
              <div className="mt-6 text-blueGray-700 text-xl lg:text-3xl font-medium leading-relaxed">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-blueGray-900 font-extrabold">WeXun</span> 与 <span className="text-blueGray-900 font-extrabold">YuoBo</span>
                    <span className="mx-2 text-blueGray-400">·</span>
                    记录真实发生的职业履约与生活交易
                  </div>

                  <div className="h-px w-16 bg-blueGray-200 mx-auto lg:mx-0" />

                  <div>
                    <span className="text-blueGray-900 font-extrabold">PledgeDoc</span>
                    <span className="mx-2 text-blueGray-400">·</span>
                    将事实沉淀为<span className="text-blueGray-900 font-extrabold mx-1">可验证 / 授权 / 复用</span>的数字证明
                  </div>

                  <div className="h-px w-16 bg-blueGray-200 mx-auto lg:mx-0" />

                  <div>
                    让<span className="text-blueGray-900 font-extrabold mx-1">“守诺”</span>
                    成为可跨平台、跨领域流动的信用凭证
                  </div>
                </div>
              </div>

              {/* 补一句很轻的“宣言感”，可有可无但更高级 */}
              <p className="mt-5 text-blueGray-500 text-sm lg:text-base leading-relaxed">
                不做主观评分，只做事实与证明；让信任具备长期性与可迁移性。
              </p>
            </div>
          </div>

          <div style={styles.pillRow}>
            {["证据先于观点", "最小披露原则", "行为变得可见"].map((text) => (
              <span key={text} style={styles.pill} className="hover:border-blue-500 hover:text-blue-600 hover:shadow-2xl hover:scale-105 active:scale-95">
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* [2] 服务卡片区（不变） */}
      <section className="py-24 bg-white relative z-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <ServiceCard title="职业履约与效率中枢" icon="WeXun" name="WeXun（微讯）" accentColor="#3b82f6" bgGradient="linear-gradient(180deg, rgba(59,130,246,0.04) 0%, #ffffff 50%)" description={{ bold: "履行职责，记录职业身价。", normal: "每一次交付与协作，都是一次可核验的履约存证。" }} features={["协作过程留痕，可验证", "技能与需求精准匹配", "沉淀长期职业信用"]} />
            <ServiceCard title="生活交易与声誉社区" icon="YuoBo" name="YuoBo（优博）" accentColor="#FF9500" bgGradient="linear-gradient(180deg, rgba(255,149,0,0.05) 0%, #ffffff 50%)" description={{ bold: "诚实交易，积累生活声誉。", normal: "让口碑建立在“真实发生”之上，而非“主观印象”之上。" }} features={["真实身份与交易链路", "纠纷可追溯，责任更清晰", "沉淀可复用的生活信用"]} />
            <ServiceCard title="信用账本与证明基础设施" icon="PledgeDoc" name="PledgeDoc（诺书）" accentColor="#B8860B" bgGradient="linear-gradient(180deg, rgba(184,134,11,0.06) 0%, #ffffff 50%)" description={{ bold: "行为变资产，守诺即价值。", normal: "不裁判、不背书，只做标准化存证、出具与核验。" }} features={["可核验的行为存证", "跨平台信用映射", "机构级授权接口"]} />
          </div>

          <div className="max-w-6xl mx-auto text-center mt-20 px-6 py-12 rounded-3xl border border-blueGray-100 bg-blueGray-50/50">
            <div className="text-blueGray-800 leading-loose font-medium text-lg md:text-xl">
              <span className="block">
                NoKu 不仅仅是技术的堆栈，更是社会协作关系的重塑。
              </span>

              <span className="block mt-2">
                我们通过将每一次真实的履约转化为可积累的数字资产，
                构建一个让“守诺”产生复利效应的生态系统。
              </span>

              <span className="block mt-2">
                在这里，诚信不再是一个抽象的口号，而是实实在在、跨场景通行的价值。
              </span>

              <span className="block mt-4 font-bold text-blueGray-900">
                <span className="block">
                  我们在做的不仅是一个工具，而是信任的复利系统：
                </span>

                <span className="block mt-2 font-normal text-blueGray-800">
                  让守诺者在每一次互动中获利，
                  积累长期的社会声誉；
                </span>

                <span className="block mt-2 font-normal text-blueGray-800">
                  让虚假者在透明的事实轨迹下无处藏身，让信任成为数字时代最坚实的通行证。
                </span>
              </span>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
