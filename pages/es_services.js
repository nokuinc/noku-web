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

const ServiceCard = ({ title, icon, name, description, features, accentColor, bgGradient, blankAfterTitle }) => {
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
      {blankAfterTitle && Array.from({ length: typeof blankAfterTitle === "number" ? blankAfterTitle : 1 }).map((_, i) => (
        <div key={i} className="text-lg sm:text-xl md:text-2xl block" style={{ height: "1.5em" }} aria-hidden="true" />
      ))}
      <div className="p-8 bg-white rounded-3xl border-2 h-full text-center transition-all duration-300 hover:-translate-y-2 shadow-sm" style={{ borderColor: `${accentColor}40`, background: bgGradient }}>
        <div className="service-card-logo-wrap mb-8 flex justify-center items-center" style={{ height: "216px", minHeight: "216px" }}>
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
          {description.normal2 && <><br />{description.normal2}</>}
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
      {/* [1] Hero */}
      <section className="bg-white -mt-24 pt-20">
        <div className="container px-4 mx-auto pt-8 text-center">
          <div className="max-w-6xl mx-auto mb-16">
            <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-8 font-bold font-heading text-blueGray-900">
              NoKu LLC <br /> <span className="text-blue-500">Construyendo infraestructura de confianza verificable entre escenarios</span>
            </h1>

            <p className="text-blueGray-400 mt-2 text-lg leading-relaxed">
              Servicios de plataforma para registrar y verificar acciones del mundo real.
            </p>
            <p className="text-blueGray-600 mt-4 text-base leading-relaxed">
              Apoyamos plataformas tecnológicas que registran acciones reales y verifican resultados, cubriendo empleo, transacciones e infraestructura de verificación.
            </p>
          </div>

          <div style={styles.pillRow}>
            {["Evidencia Antes que Opiniones", "Divulgación Mínima", "El Comportamiento se Hace Visible"].map((text) => (
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
              title="Centro de Cumplimiento Profesional y Eficiencia"
              icon="WeXun"
              name="WeXun（微讯）"
              accentColor="#3b82f6"
              bgGradient="linear-gradient(180deg, rgba(59,130,246,0.04) 0%, #ffffff 50%)"
              description={{ bold: "Cumplimiento completado, resultados registrados.", normal: "Plataforma de cumplimiento de empleo y tareas,", normal2: "registrando resultados de trabajo completado y apoyando el registro y verificación de hechos." }}
              features={["Proceso de colaboración con rastro, verificable", "Coincidencia precisa de habilidades y necesidades", "Crédito profesional a largo plazo acumulado"]}
              blankAfterTitle={1}
            />
            <ServiceCard
              title="Transacciones Cotidianas y Comunidad de Reputación"
              icon="YuoBo"
              name="YuoBo（优博）"
              accentColor="#FF9500"
              bgGradient="linear-gradient(180deg, rgba(255,149,0,0.05) 0%, #ffffff 50%)"
              description={{ bold: "Transacciones honestas, acumulando reputación de vida.", normal: "Dejar que la reputación se construya sobre \"lo que realmente ocurrió\" en lugar de \"impresiones subjetivas\", mientras se apoya el registro y verificación de hechos." }}
              features={["Identidad real y cadena de transacciones", "Disputas rastreables, responsabilidades más claras", "Crédito de vida reutilizable acumulado"]}
            />
            <ServiceCard
              title="Libro Mayor de Crédito e Infraestructura de Pruebas"
              icon="PledgeDoc"
              name="PledgeDoc（诺书）"
              accentColor="#B8860B"
              bgGradient="linear-gradient(180deg, rgba(184,134,11,0.06) 0%, #ffffff 50%)"
              description={{ bold: "Verificación solo después de la finalización.", normal: "Proporcionar interfaces de verificación y certificación estandarizadas para acciones completadas, sin calificación ni garantía." }}
              features={["Prueba de comportamiento verificable", "Mapeo de crédito multiplataforma", "Interfaz de autorización a nivel institucional"]}
            />
          </div>

          <div className="max-w-6xl mx-auto text-center mt-20 px-6 py-12 rounded-3xl border border-blueGray-100 bg-blueGray-50/50">
            <div className="text-blueGray-800 leading-loose font-medium text-lg md:text-xl">
              <h1 className="text-4xl mb-6 font-bold font-heading text-blueGray-900">
                Registrar lo que ha ocurrido, haciendo los servicios verificables
              </h1>
              <p>
                NoKu proporciona infraestructura a nivel de plataforma que permite a diferentes sistemas y servicios registrar, verificar y reutilizar resultados de comportamiento reales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
