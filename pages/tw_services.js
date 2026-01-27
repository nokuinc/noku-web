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
              <img src={`/assets/imgs/icons/${iconFileName}.png`} alt={icon} style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain" }} />
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
      <section className="bg-white -mt-24 pt-20">
        <div className="container px-4 mx-auto pt-8 text-center">
          <div className="max-w-6xl mx-auto mb-6">
            <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-8 font-bold font-heading text-blueGray-900">
              NoKu LLC <br />
              <span className="text-blue-500">構建跨場景的可驗證信任基礎設施</span>
            </h1>

            {/* ✅ NEW: 更短、更有格調的首屏闡述（排版重做） */}
            <div className="mt-10 max-w-5xl mx-auto px-4">
              {/* 小標籤：更克制、更高級 */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blueGray-200 bg-white text-xs font-semibold tracking-widest text-blueGray-500">
                CLOSED-LOOP TRUST ECOSYSTEM
              </div>

              {/* 主句：三段式，節奏更強 */}
              <div className="mt-6 text-blueGray-700 text-xl lg:text-3xl font-medium leading-relaxed">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-blueGray-900 font-extrabold">WeXun</span> 與 <span className="text-blueGray-900 font-extrabold">YuoBo</span>
                    <span className="mx-2 text-blueGray-400">·</span>
                    記錄真實發生的職業履約與生活交易
                  </div>

                  <div className="h-px w-16 bg-blueGray-200 mx-auto lg:mx-0" />

                  <div>
                    <span className="text-blueGray-900 font-extrabold">PledgeDoc</span>
                    <span className="mx-2 text-blueGray-400">·</span>
                    將事實沉澱為<span className="text-blueGray-900 font-extrabold mx-1">可驗證 / 授權 / 複用</span>的數字證明
                  </div>

                  <div className="h-px w-16 bg-blueGray-200 mx-auto lg:mx-0" />

                  <div>
                    讓<span className="text-blueGray-900 font-extrabold mx-1">"守諾"</span>
                    成為可跨平台、跨領域流動的信用憑證
                  </div>
                </div>
              </div>

              {/* 補一句很輕的"宣言感"，可有可無但更高級 */}
              <p className="mt-5 text-blueGray-500 text-sm lg:text-base leading-relaxed">
                不做主觀評分，只做事實與證明；讓信任具備長期性與可遷移性。
              </p>
            </div>
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
            <ServiceCard title="職業履約與效率中樞" icon="WeXun" name="WeXun（微訊）" accentColor="#3b82f6" bgGradient="linear-gradient(180deg, rgba(59,130,246,0.04) 0%, #ffffff 50%)" description={{ bold: "履行職責，記錄職業身價。", normal: "每一次交付與協作，都是一次可核驗的履約存證。" }} features={["協作過程留痕，可驗證", "技能與需求精準匹配", "沉澱長期職業信用"]} />
            <ServiceCard title="生活交易與聲譽社區" icon="YuoBo" name="YuoBo（優博）" accentColor="#FF9500" bgGradient="linear-gradient(180deg, rgba(255,149,0,0.05) 0%, #ffffff 50%)" description={{ bold: "誠實交易，積累生活聲譽。", normal: "讓口碑建立在\"真實發生\"之上，而非\"主觀印象\"之上。" }} features={["真實身份與交易鏈路", "糾紛可追溯，責任更清晰", "沉澱可複用的生活信用"]} />
            <ServiceCard title="信用賬本與證明基礎設施" icon="PledgeDoc" name="PledgeDoc（諾書）" accentColor="#B8860B" bgGradient="linear-gradient(180deg, rgba(184,134,11,0.06) 0%, #ffffff 50%)" description={{ bold: "行為變資產，守諾即價值。", normal: "不裁判、不背書，只做標準化存證、出具與核驗。" }} features={["可核驗的行為存證", "跨平台信用映射", "機構級授權接口"]} />
          </div>

          <div className="max-w-6xl mx-auto text-center mt-20 px-6 py-12 rounded-3xl border border-blueGray-100 bg-blueGray-50/50">
            <div className="text-blueGray-800 leading-loose font-medium text-lg md:text-xl">
              <span className="block">
                NoKu 不僅僅是技術的堆棧，更是社會協作關係的重塑。
              </span>

              <span className="block mt-2">
                我們通過將每一次真實的履約轉化為可積累的數字資產，
                構建一個讓"守諾"產生複利效應的生態系統。
              </span>

              <span className="block mt-2">
                在這裡，誠信不再是一個抽象的口號，而是實實在在、跨場景通行的價值。
              </span>

              <span className="block mt-4 font-bold text-blueGray-900">
                <span className="block">
                  我們在做的不僅是一個工具，而是信任的複利系統：
                </span>

                <span className="block mt-2 font-normal text-blueGray-800">
                  讓守諾者在每一次互動中獲利，
                  積累長期的社會聲譽；
                </span>

                <span className="block mt-2 font-normal text-blueGray-800">
                  讓虛假者在透明的事實軌跡下無處藏身，讓信任成為數字時代最堅實的通行證。
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
