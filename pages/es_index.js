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
          className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-20"
          style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}
        >
          <div className="container px-4 mx-auto">
            <div className="pt-8 text-center">
              <div className="max-w-3xl mx-auto mb-6">
                <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading wow animate__animated animate__fadeIn">
                  NoKu LLC <br />
                  <span className="text-blue-500">
                    Un Ecosistema en Vivo Impulsado por WeXun y Yuobo
                  </span>
                </h1>

                <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn d-inline text-lg">
                  Lógica Operativa:{" "}
                  <div className="typewrite d-inline text-brand font-bold">
                    <TextEffect
                      text1="Los Hechos Primero"
                      text2="Los Registros Después"
                    />
                  </div>{" "}
                  · PledgeDoc emite pruebas verificables solo después de la finalización
                </div>

                <p className="mt-4 text-blueGray-400 leading-loose max-w-2xl mx-auto wow animate__animated animate__fadeIn">
                  NoKu no es un concepto abstracto de confianza, sino un sistema operativo real en movimiento.{" "}
                  <strong className="text-blue-600">WeXun</strong> captura el trabajo, empleos y cumplimiento de pedidos del mundo real. <strong className="text-green-600">Yuobo</strong> captura resultados reales de transacciones y colaboración. <strong className="text-yellow-700">PledgeDoc</strong> solo
                  registra hechos que han ocurrido como credenciales verificables (divulgación mínima, autorización).
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
                  Entrar a WeXun
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
                  Entrar a Yuobo
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
                      WeXun · Yuobo · PledgeDoc
                    </div>
                    <div className="text-sm text-blueGray-500">
                      Hechos Generados · Pruebas Emitidas · Divulgación Mínima ·
                      Autorizado · Revocable
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
            <div className="text-center mt-6 mb-16">
              <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                El Ecosistema
              </h2>
              <p className="text-blueGray-400 mt-2 text-lg leading-relaxed">
                WeXun y Yuobo generan hechos · PledgeDoc registra resultados
              </p>
            </div>

            <div className="flex flex-wrap -mx-3 text-center">
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <a
                  href="https://wexun.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-12 bg-white shadow rounded hover-up-5 transition duration-500 h-full"
                >
                  <img
                    className="h-20 mx-auto mb-4"
                    src="/assets/imgs/icons/wexun.png"
                    alt="WeXun"
                  />
                  <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">
                    WeXun
                  </h3>
                  <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                    En Vivo: Trabajo / Empleos / Pedidos
                  </p>
                  <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                    <p className="mb-2">
                      <strong>Dominio:</strong> Contratación · Trabajo · Pedidos
                    </p>
                    <p>
                      Capturando el cumplimiento y la entrega reales como hechos profesionales verificables a largo plazo.
                    </p>
                  </div>
                </a>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <a
                  href="https://yuobo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-12 bg-white shadow rounded hover-up-5 transition duration-500 h-full"
                >
                  <img
                    className="h-20 mx-auto mb-4"
                    src="/assets/imgs/icons/yuobo.png"
                    alt="Yuobo"
                  />
                  <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">
                    Yuobo
                  </h3>
                  <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                    En Vivo: Transacciones / Colaboración
                  </p>
                  <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                    <p className="mb-2">
                      <strong>Dominio:</strong> Mercado · Colaboración ·
                      Servicios Locales
                    </p>
                    <p>
                      Convirtiendo acuerdos y cooperación completados en hechos rastreables y reutilizables.
                    </p>
                  </div>
                </a>
              </div>

              <div className="w-full lg:w-1/3 px-3 mb-6">
                <a
                  href="https://pledgedoc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-12 bg-white shadow rounded hover-up-5 border-2 border-brand transition duration-500 h-full text-center"
                >
                  <img
                    className="h-20 mx-auto mb-4"
                    src="/assets/imgs/icons/pledgedoc.png"
                    alt="PledgeDoc"
                  />
                  <h3 className="mb-2 font-bold font-heading text-2xl text-blue-600">
                    PledgeDoc
                  </h3>
                  <p className="text-sm font-bold text-brand mb-4 uppercase tracking-widest">
                    Infraestructura: Registrar · Verificar · Atestiguar
                  </p>
                  <div className="text-sm text-blueGray-400 leading-relaxed text-left">
                    <p className="mb-2">
                      <strong>Rol Principal:</strong> Registro a largo plazo después de
                      la finalización
                    </p>
                    <p>
                      Sin puntuación, sin juicio — solo transformando resultados completados
                      en pruebas verificables, autorizadas y revocables.
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
                    NoKu en Tres Frases
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 text-blue-500 font-bold">
                        01
                      </div>
                      <p className="text-blueGray-700 font-semibold ml-2">
                        <strong>En WeXun:</strong> Completa trabajos y pedidos para
                        generar hechos profesionales verificables.
                      </p>
                    </div>
                    <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 text-blue-500 font-bold">
                        02
                      </div>
                      <p className="text-blueGray-700 font-semibold ml-2">
                        <strong>En Yuobo:</strong> Completa transacciones y
                        colaboraciones para generar hechos de vida rastreables.
                      </p>
                    </div>
                    <div className="flex items-start p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                      <div className="flex-shrink-0 w-8 text-blue-500 font-bold">
                        03
                      </div>
                      <p className="text-blueGray-700 font-semibold ml-2">
                        <strong>En PledgeDoc:</strong> Registra y atestigua solo
                        después de la finalización, haciendo que los hechos sean reutilizables con el tiempo.
                      </p>
                    </div>
                  </div>
                  <p className="mt-8 text-blueGray-400 italic">
                    Lógica: Hechos Primero → Registros Segundo → Pruebas Autorizadas
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
        <section className="py-20 bg-blueGray-50" id="values">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-4xl mb-6 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeInDown">
              Las Plataformas Funcionan · Los Hechos Ocurren · Los Registros Importan
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-8 leading-loose text-blueGray-600 wow animate__animated animate__fadeIn">
                No puntuamos subjetivamente ni creamos etiquetas a corto plazo. El valor
                proviene de operaciones reales a largo plazo y resultados verificables.
              </p>
              <p
                className="text-blueGray-500 leading-loose wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                A través del cumplimiento de WeXun y las transacciones completadas de Yuobo,
                PledgeDoc convierte hechos finalizados en registros verificables, autorizados
                y revocables — una base a largo plazo para individuos,
                comerciantes y organizaciones.
              </p>
            </div>
            <div className="mt-10 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Home;
