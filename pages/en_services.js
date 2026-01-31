import React from "react";
import Layout from "../components/layout/Layout";

const styles = {
  pillRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "32px",
    marginTop: "36px",
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
      {/* [1] Hero */}
      <section id="services" className="bg-white -mt-24 pt-20">
        <div className="container px-4 mx-auto pt-8 text-center">
          <div className="max-w-6xl mx-auto mb-10">
            <h1 className="text-3xl lg:text-5xl lg:leading-[1.3] mb-8 font-bold font-heading text-blueGray-900">
              NOKU LLC <br /> <span className="text-blue-500">Building cross-scenario verifiable trust infrastructure</span>
            </h1>

            <p className="text-blueGray-400 mt-2 mb-10 text-lg leading-[1.5]">
              Platform services for recording and verifying real-world behavior.
            </p>
            <p className="text-blueGray-600 mt-4 text-base leading-[1.5]">
              We support technology platforms that record real behavior and verify outcomes, covering employment, transactions, and verification infrastructure.
            </p>
          </div>

          <div style={styles.pillRow}>
            {["Evidence Before Opinions", "Minimal Disclosure", "Behavior Becomes Visible"].map((text) => (
              <span key={text} style={styles.pill} className="hover:border-blue-500 hover:text-blue-600 hover:shadow-2xl hover:scale-105 active:scale-95">
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* [2] Service Cards */}
      <section className="py-24 bg-white relative z-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <ServiceCard
              title="Professional Fulfillment & Efficiency Hub"
              icon="WeXun"
              name="WeXun（微讯）"
              accentColor="#3b82f6"
              bgGradient="linear-gradient(180deg, rgba(59,130,246,0.04) 0%, #ffffff 50%)"
              description={{ bold: "Fulfillment completed, outcomes recorded.", normal: "A platform for job and task fulfillment, recording completed work outcomes and supporting factual recording and verification." }}
              features={["Collaboration process traceable, verifiable", "Precise matching of skills and needs", "Long-term professional credibility accumulated"]}
            />
            <ServiceCard
              title="Everyday Transactions & Reputation Community"
              icon="YuoBo"
              name="YuoBo（优博）"
              accentColor="#FF9500"
              bgGradient="linear-gradient(180deg, rgba(255,149,0,0.05) 0%, #ffffff 50%)"
              description={{ bold: "Honest transactions, life reputation accumulated.", normal: "Let reputation rest on \"what actually happened\" rather than \"subjective impression\", while supporting factual recording and verification." }}
              features={["Real identity and transaction trails", "Disputes traceable, responsibilities clearer", "Reusable life credibility accumulated"]}
            />
            <ServiceCard
              title="Credit Ledger & Proof Infrastructure"
              icon="PledgeDoc"
              name="PledgeDoc（诺书）"
              accentColor="#A88412"
              bgGradient="linear-gradient(180deg, rgba(168,132,18,0.06) 0%, #ffffff 50%)"
              description={{ bold: "Verification only after completion.", normal: "Standardized verification and attestation interfaces for completed actions, without scoring or guarantees." }}
              features={["Verifiable behavior attestation", "Cross-platform credit mapping", "Institution-grade authorization interfaces"]}
            />
          </div>

          <div className="max-w-6xl mx-auto text-center mt-20 px-6 py-12 rounded-3xl border border-blueGray-100 bg-blueGray-50/50">
            <div className="text-blueGray-800 leading-loose font-medium text-lg md:text-xl">
              <h2 className="text-4xl mb-6 font-bold font-heading text-blueGray-900">
                Record what has happened, making services verifiable
              </h2>
              <p>
                NoKu provides platform-level infrastructure enabling different systems and services to record, verify, and reuse real behavioral outcomes.<br />nokuinc.com is the sole global official website of NOKU LLC.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
