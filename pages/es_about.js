import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Layout>
        {/* [1] 顶部首屏｜✅ 纯白背景 + 位置对齐 */}
        <section id="about" className="bg-white -mt-24 pt-20">
          <div className="container px-4 mx-auto text-center">
            {/* pt-8 确保文字与首页 index.js 的坐标完全对齐 */}
            <div className="pt-8 max-w-4xl mx-auto mb-8">
              
              <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeIn">
                NoKu LLC <br />
                <span className="text-blue-500">Infraestructura tecnológica para registrar y verificar acciones del mundo real.</span>
              </h1>
              
              <p className="mt-6 text-blueGray-400 leading-loose max-w-3xl mx-auto text-xl lg:text-2xl font-medium px-4 wow animate__animated animate__fadeIn">
                Construimos sistemas de registro factual que ayudan a las plataformas a registrar acciones reales que han ocurrido.
              </p>
            </div>
          </div>
        </section>

        {/* [2] 问题定义卡片｜lg+ 略减上方留白使与首屏更连贯 */}
        <section className="pt-8 lg:pt-4 lg:-mt-4 pb-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-3 -mb-6">
              {[
                { title: "La Confianza Es Demasiado Costosa", desc: "En colaboración desconocida, transacciones desconocidas y comunidades desconocidas, cada vez que se construye confianza requiere demostrarse a sí mismo nuevamente." },
                { title: "El Crédito No Puede Cruzar Escenarios", desc: "Los registros acumulados en la Plataforma A no pueden usarse en el Escenario B. La reputación está fragmentada por las plataformas, obligando a los individuos a invertir repetidamente." },
                { title: "Los Sistemas de Calificación No Son Hechos", desc: "Las calificaciones se distorsionan fácilmente: emocionales, reseñas falsas, represalias, sesgos. A largo plazo, solo los \"hechos verificables\" son más confiables." },
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
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">¿Qué es NoKu?</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  NoKu es una plataforma tecnológica enfocada en construir infraestructura que transforma comportamientos operativos reales en attestaciones verificables y reutilizables. Nuestros servicios proporcionan registro y verificación estandarizados para acciones completadas en diferentes dominios.
                </p>
                <div className="space-y-4">
                  {[
                    { t: "Record (记录)", d: "Registrar resultados reales de cumplimiento y transacciones que han ocurrido, formando rastros estructurados." },
                    { t: "Verify (验证)", d: "Verificar la integridad y consistencia de los registros, asegurando trazabilidad y verificabilidad." },
                    { t: "Attest (证明)", d: "Emitir \"conclusiones confiables\" con divulgación mínima, sin revelar detalles innecesarios." },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl py-5 px-5 border border-blueGray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-center">
                      <div className="font-bold mb-1 text-xl text-blueGray-900 leading-snug">{x.t}</div>
                      <div className="text-blueGray-600 text-base leading-relaxed">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-5 lg:pt-0">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">Lo Que No Hacemos</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  Adherimos a la neutralidad y objetividad, protegiendo la autenticidad de la reputación estableciendo límites comerciales claros. No intervenimos en transacciones; solo proporcionamos evidencia. No manejamos ni custodiamos fondos de usuarios, no ofrecemos inversión, gestión patrimonial ni promesas de rentabilidad, y no intervenimos en transacciones de plataformas ni en decisiones de usuarios.
                </p>
                <div className="space-y-4">
                  {[
                    { t: "No Hacemos Calificación Subjetiva", d: "No comprimimos la realidad compleja en una sola puntuación; valoramos más los registros fácticos verificables." },
                    { t: "No Hacemos Emparejamiento de Transacciones", d: "No nos convertimos en partes interesadas; mantener la neutralidad asegura credibilidad a largo plazo." },
                    { t: "No Somos Arbitradores", d: "No juzgamos por los usuarios, ni tomamos partido por ninguna parte; solo proporcionamos evidencia." },
                    { t: "No Poseemos Tu Crédito", d: "El crédito pertenece al actor; tienes derechos de autorización completos y límites de uso." },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl py-5 px-5 border border-blueGray-100 shadow-sm hover:shadow-md transition-all flex items-start gap-x-4">
                      <span className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div className="min-w-0 flex-1">
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

        {/* [4] Vision Statement */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl mb-6 font-bold font-heading text-blueGray-900">
                No creamos crédito, solo preservamos hechos
              </h2>
              <p className="text-lg mb-8 leading-loose text-blueGray-600">
                NoKu es un equipo técnico enfocado en infraestructura de registro y verificación de hechos, manteniendo neutralidad, moderación y límites claros a largo plazo.<br />nokuinc.com es el único sitio web oficial global de Noku LLC.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
