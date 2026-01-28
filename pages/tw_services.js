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
  const iconMap = {
    "WeXun": "wexun",
    "YuoBo": "yuobo",
    "PledgeDoc": "pledgedoc"
  };
  const iconFileName = iconMap[icon] || "pledgedoc";
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center px-4 leading-tight" style={{ color: accentColor }}>
        {title}
      </h3>
      <div className="p-8 bg-white rounded-3xl border-2 h-full text-center transition-all duration-300 hover:-translate-y-2 shadow-sm" style={{ borderColor: `${accentColor}40`, background: bgGradient }}>
        <div className="mb-8 flex justify-center">
          <a href={href} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
            <div style={{ width: "144px", height: "144px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={`/assets/imgs/icons/${iconFileName}.png`} alt={icon} style={{ width: "216px", height: "216px", objectFit: "contain", display: "block" }} />
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
      {/* [1] 頂部首屏｜✅ 純白背景 + 位置對齊 */}
      <section className="bg-white -mt-24 pt-20" style={{ overflow: 'visible' }}>
        <div className="container px-4 mx-auto pt-8 text-center" style={{ overflow: 'visible', height: 'auto' }}>
          <div className="max-w-6xl mx-auto mb-16" style={{ overflow: 'visible', height: 'auto' }}>
            <h1 className="text-3xl lg:text-5xl lg:leading-[1.3] mb-8 font-bold font-heading text-blueGray-900">
              NoKu LLC <br /> <span className="text-blue-500">構建跨場景的可驗證信任基礎設施</span>
            </h1>

            <p className="text-blueGray-400 mt-2 mb-10 text-lg leading-[1.5]">
              用於記錄與驗證現實行為的平台服務。
            </p>
            <p className="text-blueGray-600 mt-4 text-base leading-[1.5]">
              我們支持記錄真實行為和驗證結果的技術平台，涵蓋用工、交易與驗證基礎設施。
            </p>
          </div>

          <div style={styles.pillRow}>
            {["證據先於觀點", "最小披露原則", "行為變得可見"].map((text) => (
              <span key={text} style={styles.pill} className="hover:border-blue-500 hover:text-blue-600 hover:shadow-2xl hover:scale-105 active:scale-95">
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* [2] 服務卡片區（不變） */}
      <section className="py-24 bg-white relative z-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <ServiceCard title="職業履約與效率中樞" icon="WeXun" name="WeXun（微訊）" accentColor="#3b82f6" bgGradient="linear-gradient(180deg, rgba(59,130,246,0.04) 0%, #ffffff 50%)" description={{ bold: "完成履約，記錄結果。", normal: "用工與任務履約平台，記錄已完成工作的結果，並支持事實記錄與驗證。" }} features={["協作過程留痕，可驗證", "技能與需求精準匹配", "沉澱長期職業信用"]} />
            <ServiceCard title="生活交易與聲譽社區" icon="YuoBo" name="YuoBo（優博）" accentColor="#FF9500" bgGradient="linear-gradient(180deg, rgba(255,149,0,0.05) 0%, #ffffff 50%)" description={{ bold: "誠實交易，積累生活聲譽。", normal: "讓口碑建立在\"真實發生\"之上，而非\"主觀印象\"之上，同時支持事實記錄與驗證。" }} features={["真實身份與交易鏈路", "糾紛可追溯，責任更清晰", "沉澱可複用的生活信用"]} />
            <ServiceCard title="信用賬本與證明基礎設施" icon="PledgeDoc" name="PledgeDoc（諾書）" accentColor="#B8860B" bgGradient="linear-gradient(180deg, rgba(184,134,11,0.06) 0%, #ffffff 50%)" description={{ bold: "完成之後，才做驗證。", normal: "為已完成行為提供標準化驗證和認證接口，不進行評分或擔保。" }} features={["可核驗的行為存證", "跨平台信用映射", "機構級授權接口"]} />
          </div>

          <div className="max-w-6xl mx-auto text-center mt-20 px-6 py-12 rounded-3xl border border-blueGray-100 bg-blueGray-50/50" style={{ overflow: 'visible', height: 'auto' }}>
            <div className="text-blueGray-800 font-medium text-lg md:text-xl" style={{ overflow: 'visible', height: 'auto' }}>
              <h1 className="text-4xl mb-6 font-bold font-heading text-blueGray-900" style={{ lineHeight: '1.3' }}>
                記錄已發生的事實，讓服務具備可驗證性
              </h1>
              <p style={{ lineHeight: '1.5' }}>
                NoKu 提供平台級基礎設施，使不同系統與服務能夠記錄、驗證並複用真實發生的行為結果。
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
