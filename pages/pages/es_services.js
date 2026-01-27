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
      {/* [1] Hero */}
      <section className="bg-white -mt-24 pt-20">
        <div className="container px-4 mx-auto pt-8 text-center">
          <div className="max-w-6xl mx-auto mb-6">
            <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-8 font-bold font-heading text-blueGray-900">
              NoKu LLC <br />
              <span className="text-blue-500">Construyendo Confianza Verificable en Escenarios del Mundo Real</span>
            </h1>

            {/* Short, premium hero statement */}
            <div className="mt-10 max-w-5xl mx-auto px-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blueGray-200 bg-white text-xs font-semibold tracking-widest text-blueGray-500">
                ECOSISTEMA DE CONFIANZA DE CICLO CERRADO
              </div>

              <div className="mt-6 text-blueGray-700 text-xl lg:text-3xl font-medium leading-relaxed">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-blueGray-900 font-extrabold">WeXun</span> y{" "}
                    <span className="text-blueGray-900 font-extrabold">YuoBo</span>
                    <span className="mx-2 text-blueGray-400">·</span>
                    capturan el cumplimiento profesional real y las transacciones cotidianas
                  </div>

                  <div className="h-px w-16 bg-blueGray-200 mx-auto lg:mx-0" />

                  <div>
                    <span className="text-blueGray-900 font-extrabold">PledgeDoc</span>
                    <span className="mx-2 text-blueGray-400">·</span>
                    convierte hechos en pruebas <span className="text-blueGray-900 font-extrabold mx-1">verificables / autorizadas / reutilizables</span>
                  </div>

                  <div className="h-px w-16 bg-blueGray-200 mx-auto lg:mx-0" />

                  <div>
                    haciendo que <span className="text-blueGray-900 font-extrabold mx-1">\"cumplir promesas\"</span>
                    sea una credencial portátil a través de plataformas y dominios
                  </div>
                </div>
              </div>

              <p className="mt-5 text-blueGray-500 text-sm lg:text-base leading-relaxed">
                Sin puntuación subjetiva — solo hechos y pruebas, construidos para portabilidad a largo plazo.
              </p>
            </div>
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
              name="WeXun"
              accentColor="#3b82f6"
              bgGradient="linear-gradient(180deg, rgba(59,130,246,0.04) 0%, #ffffff 50%)"
              description={{ bold: "Entrega trabajo. Registra tu valor profesional.", normal: "Cada entrega y colaboración se convierte en un registro de cumplimiento verificable." }}
              features={["Colaboración rastreable, resultados verificables", "Coincidencia precisa de habilidades y necesidades", "Credibilidad profesional a largo plazo"]}
            />
            <ServiceCard
              title="Transacciones Cotidianas y Comunidad de Reputación"
              icon="YuoBo"
              name="YuoBo"
              accentColor="#FF9500"
              bgGradient="linear-gradient(180deg, rgba(255,149,0,0.05) 0%, #ffffff 50%)"
              description={{ bold: "Acuerdos honestos. Construye reputación en la vida real.", normal: "La reputación debe basarse en lo que realmente sucedió — no en impresiones." }}
              features={["Identidad real y rastros de transacciones", "Las disputas son rastreables, las responsabilidades más claras", "Reputación reutilizable construida sobre hechos"]}
            />
            <ServiceCard
              title="Infraestructura de Pruebas y Libro Mayor de Confianza"
              icon="PledgeDoc"
              name="PledgeDoc"
              accentColor="#B8860B"
              bgGradient="linear-gradient(180deg, rgba(184,134,11,0.06) 0%, #ffffff 50%)"
              description={{ bold: "El comportamiento se convierte en activos. Cumplir promesas crea valor.", normal: "Sin juzgar, sin respaldo — solo registro estandarizado, emisión y verificación." }}
              features={["Registros de comportamiento verificables", "Mapeo de confianza multiplataforma", "APIs de autorización de nivel institucional"]}
            />
          </div>

          <div className="max-w-6xl mx-auto text-center mt-20 px-6 py-12 rounded-3xl border border-blueGray-100 bg-blueGray-50/50">
            <div className="text-blueGray-800 leading-loose font-medium text-lg md:text-xl">
              <span className="block">
                NoKu no es solo una pila de tecnologías — es un rediseño de cómo las personas se coordinan y colaboran.
              </span>

              <span className="block mt-2">
                Al convertir el cumplimiento real en activos digitales acumulativos,
                construimos un ecosistema donde \"cumplir promesas\" se compone con el tiempo.
              </span>

              <span className="block mt-2">
                Aquí, la integridad ya no es un eslogan — se convierte en valor práctico que funciona en todos los escenarios.
              </span>

              <span className="block mt-4 font-bold text-blueGray-900">
                <span className="block">
                  Estamos construyendo más que una herramienta — un sistema de confianza compuesto:
                </span>

                <span className="block mt-2 font-normal text-blueGray-800">
                  recompensando a quienes cumplen promesas en cada interacción,
                  construyendo reputación social a largo plazo;
                </span>

                <span className="block mt-2 font-normal text-blueGray-800">
                  y haciendo que el engaño sea difícil de ocultar bajo rastros fácticos transparentes — la confianza se convierte en el pase más fuerte en la era digital.
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
