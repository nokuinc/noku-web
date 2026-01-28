import React from "react";
import Layout from "../components/layout/Layout";

const styles = {
  pillRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "32px",
    marginTop: 0,
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
  const iconMap = {
    "WeXun": "wexun",
    "YuoBo": "yuobo",
    "PledgeDoc": "pledgedoc"
  };
  const iconFileName = iconMap[icon] || "pledgedoc";
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mt-6 mb-5 text-center px-4 leading-tight ${icon === "YuoBo" ? "brand-yuobo" : ""}`} style={{ color: accentColor }}>
        {title}
      </h3>
      <div className="product-card bg-white rounded-3xl border-2 h-full text-center transition-all duration-300 hover:-translate-y-2 shadow-sm" style={{ borderColor: `${accentColor}40`, background: bgGradient, paddingTop: 0, paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
        <div className="mb-5 flex justify-center">
          <a href={href} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
            <div style={{ width: "144px", height: "144px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={`/assets/imgs/icons/${iconFileName}.png`} alt={icon} style={{ width: "216px", height: "216px", objectFit: "contain", display: "block" }} />
            </div>
          </a>
        </div>
        <h4 className={`text-2xl font-bold mb-2 ${icon === "WeXun" ? "brand-wexun" : icon === "YuoBo" ? "brand-yuobo" : icon === "PledgeDoc" ? "brand-pledgedoc-gold" : ""}`}>{name}</h4>
        <p className="text-blueGray-600 text-sm leading-relaxed mb-4">
          <strong className="text-blueGray-800">{description.bold}</strong>
          <br />
          {description.normal}
        </p>
        <ul className="text-sm text-blueGray-600 space-y-2 text-left border-t border-blueGray-100 pt-4 px-4">
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
      {/* [1] 顶部首屏｜与 zh_index 首屏对齐 */}
      <section id="services" className="bg-white -mt-24 pt-20 min-h-screen pb-24">
        <div className="container px-4 mx-auto">
          <div className="pt-8 text-center">
            <div className="max-w-3xl mx-auto mb-6">
              <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading text-blueGray-900">
                NoKu LLC <br /> <span className="text-blue-500">构建跨场景的可验证信任基础设施</span>
              </h1>

              <p className="mt-4 text-blueGray-400 leading-loose max-w-2xl mx-auto text-lg">
                用于记录与验证现实行为的平台服务。
              </p>
              <p className="mt-4 text-blueGray-600 leading-relaxed max-w-2xl mx-auto text-2xl lg:text-3xl mb-8">
                我们支持记录真实行为和验证结果的技术平台，<br />
                <br />
                涵盖用工、交易与验证基础设施。<br />
                <br />
              </p>
            </div>

            <div style={styles.pillRow}>
              {["证据先于观点", "最小披露原则", "行为变得可见"].map((text) => (
                <span key={text} style={styles.pill} className="hover:border-blue-500 hover:text-blue-600 hover:shadow-2xl hover:scale-105 active:scale-95">
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* [2] 服务卡片区（不变） */}
      <section className="py-24 bg-white relative z-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <ServiceCard title="职业履约与效率中枢" icon="WeXun" name="WeXun（微讯）" accentColor="#3b82f6" bgGradient="linear-gradient(180deg, rgba(59,130,246,0.04) 0%, #ffffff 50%)" description={{ bold: "完成履约，记录结果。", normal: "用工与任务履约平台，记录已完成工作的结果，并支持事实记录与验证。" }} features={["协作过程留痕，可验证", "技能与需求精准匹配", "沉淀长期职业信用"]} />
            <ServiceCard title="生活交易与声誉社区" icon="YuoBo" name="YuoBo（优博）" accentColor="#FF9500" bgGradient="linear-gradient(180deg, rgba(255,149,0,0.05) 0%, #ffffff 50%)" description={{ bold: "诚实交易，积累生活声誉。", normal: "让口碑建立在\"真实发生\"之上，而非\"主观印象\"之上，同时支持事实记录与验证。" }} features={["真实身份与交易链路", "纠纷可追溯，责任更清晰", "沉淀可复用的生活信用"]} />
            <ServiceCard title="信用账本与证明基础设施" icon="PledgeDoc" name="PledgeDoc（诺书）" accentColor="#A88412" bgGradient="linear-gradient(180deg, rgba(168,132,18,0.06) 0%, #ffffff 50%)" description={{ bold: "完成之后，才做验证。", normal: "为已完成行为提供标准化验证和认证接口，不进行评分或担保。" }} features={["可核验的行为存证", "跨平台信用映射", "机构级授权接口"]} />
          </div>

          <div className="max-w-6xl mx-auto text-center mt-20 pt-24 pb-12 px-6 rounded-3xl border border-blueGray-100 bg-blueGray-50/50" style={{ overflow: 'visible', height: 'auto' }}>
            <div className="text-blueGray-800 font-medium text-lg md:text-xl" style={{ overflow: 'visible', height: 'auto' }}>
              <h2 className="text-4xl mb-6 font-bold font-heading text-blueGray-900" style={{ lineHeight: '1.3' }}>
                记录已发生的事实，让服务具备可验证性
              </h2>
              <p style={{ lineHeight: '1.5' }}>
                NoKu 提供平台级基础设施，使不同系统与服务能够记录、验证并复用真实发生的行为结果。<br />nokuinc.com 为 Noku LLC 全球唯一官方官网。
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
