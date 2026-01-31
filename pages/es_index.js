import { useEffect, useState } from "react";
import CounterUp from "../components/elements/Counterup";
import TextEffect from "../components/elements/TextEffect";
import Layout from "../components/layout/Layout";
import Slider1 from "../components/slider/Slider1";
import Link from "next/link";

function Home() {
  const [inViewport, setInViewport] = useState(false);

  const handleScroll = () => {
    const elements = document.getElementsByClassName("counterUp");
    if (elements.length > 0) {
      const element = elements[0];
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport && !inViewport) setInViewport(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inViewport]);

  return (
    <>
      <Layout>
        {/* [1] Hero */}
        <section
          id="hero"
          className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-20"
          style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}
        >
          <div className="container px-4 mx-auto">
            <div className="pt-8 text-center">
              <div className="max-w-3xl mx-auto mb-6">
                <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading wow animate__animated animate__fadeIn">
                  NOKU LLC <br />
                  <span className="text-blue-500">
                    Infraestructura de plataforma para trabajos, mercado y verificación.
                  </span>
                </h1>

                <p className="mt-4 text-blueGray-400 leading-loose max-w-2xl mx-auto wow animate__animated animate__fadeIn">
                  Construimos sistemas subyacentes que ayudan a las plataformas a registrar acciones reales y verificar resultados.
                </p>
              </div>

              {/* CTA */}
              <div className="mb-8 flex flex-wrap justify-center gap-[14px]">
                <a
                  href="https://wexun.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    h-12 min-w-[160px]
                    px-8
                    text-base font-semibold
                    rounded-lg
                    bg-blue-500 text-white
                    hover:bg-blue-600
                    transition
                  "
                >
                  Conocer WeXun
                </a>

                <a
                  href="https://yuobo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    h-12 min-w-[160px]
                    px-8
                    text-base font-semibold
                    rounded-lg
                    bg-white text-blueGray-800
                    border border-blueGray-200
                    hover:border-blueGray-300
                    transition
                  "
                >
                  Conocer YuoBo
                </a>
              </div>

              {/* Snapshot */}
              <div className="max-w-3xl mx-auto">
                <div className="bg-white border border-blueGray-100 shadow rounded-2xl p-6 text-left wow animate__animated animate__fadeIn">
                  <div className="text-xs font-bold uppercase tracking-widest text-blueGray-400 mb-2">
                    Instantánea del Ecosistema
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-lg font-bold text-blueGray-900">
                      <span className="brand-wexun">WeXun</span> · <span className="brand-yuobo">YuoBo</span> · <span className="brand-pledgedoc-gold">PledgeDoc</span>
                    </div>
                    <div className="text-sm text-blueGray-500 text-left">
                      WeXun / YuoBo producen hechos · PledgeDoc registra y atestigua · Divulgación mínima · Autorizable · Revocable
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* [2] Metrics */}
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center lg:justify-between gap-y-6 pt-6 pb-8">
              <div
                className="hover-up-5 flex w-full lg:w-auto justify-center wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold font-heading text-blue-600">
                      {inViewport ? <CounterUp end={100} duration={3} /> : "0"}
                    </span>
                    <span className="text-3xl font-bold font-heading text-blue-600">
                      %
                    </span>
                  </div>
                  <p className="mt-2 pb-1 text-xs sm:text-base text-blueGray-400 font-semibold uppercase leading-tight">
                    Cumplimiento Verificable
                  </p>
                </div>
              </div>

              <div
                className="hover-up-5 flex w-full lg:w-auto justify-center wow animate__animated animate__fadeIn"
                data-wow-delay=".4s"
              >
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold font-heading text-blue-600 count counterUp">
                      {inViewport ? <CounterUp end={24} duration={3} /> : "0"}
                    </span>
                    <span className="text-3xl font-bold font-heading text-blue-600">
                      /7
                    </span>
                  </div>
                  <p className="mt-2 pb-1 text-xs sm:text-base text-blueGray-400 font-semibold uppercase leading-tight">
                    Operación Continua
                  </p>
                </div>
              </div>

              <div
                className="hover-up-5 flex w-full lg:w-auto justify-center wow animate__animated animate__fadeIn"
                data-wow-delay=".6s"
              >
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold font-heading text-blue-600 count counterUp">
                      {inViewport ? <CounterUp end={50} duration={3} /> : "0"}
                    </span>
                    <span className="text-3xl font-bold font-heading text-blue-600">
                      M+
                    </span>
                  </div>
                  <p className="mt-2 pb-1 text-xs sm:text-base text-blueGray-400 font-semibold uppercase leading-tight">
                    Hechos Registrados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [3] Ecosystem */}
        <section className="py-20 bg-blueGray-50" id="ecosystem">
          <div className="container px-4 mx-auto">
            <div className="text-center mt-6 mb-6">
              <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                Matriz del Ecosistema | El Ecosistema
              </h2>
              <p className="text-blueGray-400 mt-2 text-lg leading-relaxed">
                WeXun y YuoBo producen hechos · PledgeDoc solo hace registro a
                largo plazo tras la finalización
              </p>
            </div>

            <div className="flex flex-wrap items-stretch -mx-3 text-center">
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6 flex flex-col items-stretch">
                <a href="https://wexun.com" target="_blank" rel="noopener noreferrer"
                  className="product-card flex flex-col flex-1 min-h-0 h-full bg-white shadow rounded hover-up-5 transition duration-500"
                  style={{ paddingTop: 0, paddingLeft: 48, paddingRight: 48, paddingBottom: 48 }}>
                  <img className="mx-auto mb-4" src="/assets/imgs/icons/wexun.png" alt="WeXun" style={{ width: '216px', height: '216px', objectFit: 'contain', display: 'block' }} />
                  <h3 className="mb-2 font-bold font-heading text-2xl brand-wexun">WeXun（微讯）</h3>
                  <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                    En vivo: Trabajo / Empleos / Pedidos
                  </p>
                  <div className="text-sm text-blueGray-400 leading-relaxed text-left min-h-[6rem] flex-1">
                    <p className="mb-2"><strong>Dominio:</strong> Búsqueda de empleo · Trabajo · Pedidos</p>
                    <p>Registra las tareas completadas y los resultados de cumplimiento en escenarios reales de trabajo.</p>
                  </div>
                </a>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6 flex flex-col items-stretch">
                <a href="https://yuobo.com" target="_blank" rel="noopener noreferrer"
                  className="product-card flex flex-col flex-1 min-h-0 h-full bg-white shadow rounded hover-up-5 transition duration-500"
                  style={{ paddingTop: 0, paddingLeft: 48, paddingRight: 48, paddingBottom: 48 }}>
                  <img className="mx-auto mb-4" src="/assets/imgs/icons/yuobo.png" alt="YuoBo" style={{ width: '216px', height: '216px', objectFit: 'contain', display: 'block' }} />
                  <h3 className="mb-2 font-bold font-heading text-2xl brand-yuobo">YuoBo（优博）</h3>
                  <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                    En vivo: Transacciones / Colaboración
                  </p>
                  <div className="text-sm text-blueGray-400 leading-relaxed text-left min-h-[6rem] flex-1">
                    <p className="mb-2"><strong>Dominio:</strong> Segunda mano · Colaboración · Servicios locales</p>
                    <p>Registra los resultados completados en escenarios de transacción y colaboración.</p>
                  </div>
                </a>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6 flex flex-col items-stretch">
                <a
                  href="https://pledgedoc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-card flex flex-col flex-1 min-h-0 h-full bg-white shadow rounded hover-up-5 border-2 border-pledgedoc-gold transition duration-500 text-center"
                  style={{ paddingTop: 0, paddingLeft: 48, paddingRight: 48, paddingBottom: 48 }}
                >
                  <img
                    className="mx-auto mb-4"
                    src="/assets/imgs/icons/pledgedoc.png"
                    alt="PledgeDoc"
                    style={{ width: '216px', height: '216px', objectFit: 'contain', display: 'block' }}
                  />
                  <h3 className="mb-2 font-bold font-heading text-2xl brand-pledgedoc-gold">
                    PledgeDoc（诺书）
                  </h3>
                  <p className="text-sm font-bold brand-pledgedoc-gold mb-4 uppercase tracking-widest">
                    Infraestructura: Registrar · Verificar · Atestiguar
                  </p>
                  <div className="text-sm text-blueGray-400 leading-relaxed text-left min-h-[6rem] flex-1">
                    <p className="mb-2">
                      <strong>Rol principal:</strong> Sistema de registro a largo plazo tras la completación de los hechos
                    </p>
                    <p>
                      Proporciona verificación estandarizada para acciones completadas, sin puntuación ni garantías.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* [4] Three Sentences */}
        <section className="py-20 overflow-x-hidden bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap lg:flex-nowrap items-center lg:gap-16">
              <div className="w-full lg:w-1/2">
                <div className="lg:py-6 wow animate__animated animate__fadeIn">
                  <h2 className="text-3xl font-bold font-heading mb-8">
                    Ecosistema NoKu en tres frases
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 text-blue-500 font-bold">
                        01
                      </div>
                      <p className="text-blueGray-700 font-semibold ml-2">
                        <strong>En <span className="brand-wexun">WeXun（微讯）</span>:</strong> Cumple trabajos y pedidos
                        para acumular hechos profesionales verificables.
                      </p>
                    </div>
                    <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 text-blue-500 font-bold">
                        02
                      </div>
                      <p className="text-blueGray-700 font-semibold ml-2">
                        <strong>En <span className="brand-yuobo">YuoBo（优博）</span>:</strong> Completa transacciones y
                        colaboraciones para acumular hechos de vida rastreables.
                      </p>
                    </div>
                    <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 text-blue-500 font-bold">
                        03
                      </div>
                      <p className="text-blueGray-700 font-semibold ml-2">
                        <strong>En <span className="brand-pledgedoc-gold">PledgeDoc（诺书）</span>:</strong> Registra y atestigua solo
                        tras la finalización, haciendo que los hechos sean reutilizables a largo plazo.
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 text-blueGray-400 italic">
                    Lógica: Hechos primero → Registros después → Pruebas autorizables
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-end">
                <div className="w-full max-w-[980px]">
                  <Slider1 />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [5] Values */}
        <section className="pt-28 pb-10 bg-blueGray-50" id="values" style={{ scrollMarginTop: '120px' }}>
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-4xl mb-6 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeInDown">
              Las Plataformas Funcionan · Los Hechos Ocurren · Los Registros Importan
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6 leading-loose text-blueGray-600 wow animate__animated animate__fadeIn">
                NoKu es una empresa de tecnología enfocada en construir infraestructura de registro y verificación de hechos.<br />nokuinc.com es el único sitio web oficial global de Noku LLC.
              </p>
            </div>
            <div className="mt-6 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
