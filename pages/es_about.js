import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Layout>
        {/* [1] 顶部首屏｜✅ 纯白背景 + 位置对齐 */}
        <section className="bg-white -mt-24 pt-20">
          <div className="container px-4 mx-auto text-center">
            {/* pt-8 确保文字与首页 index.js 的坐标完全对齐 */}
            <div className="pt-8 max-w-4xl mx-auto mb-2">
              
              <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeIn">
                NoKu LLC <br />
                <span className="text-blue-500">¿Qué Problema Estamos Resolviendo?</span>
              </h1>
              
              <p className="mt-6 text-blueGray-400 leading-loose max-w-3xl mx-auto text-xl lg:text-2xl font-medium px-4 wow animate__animated animate__fadeIn">
                A través de ciudades, países y plataformas, la confianza a menudo tiene que empezar desde cero—no porque no seas confiable,
                sino porque carecemos de un sistema de larga duración, verificable y reutilizable para registrar hechos.
              </p>
            </div>
          </div>
        </section>

        {/* [2] 问题定义卡片 */}
        <section className="pt-2 pb-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-3 -mb-6">
              {[
                { title: "La Confianza Es Demasiado Costosa", desc: "En trabajo, transacciones o comunidades desconocidas, debes demostrarte repetidamente para ganar confianza." },
                { title: "La Reputación No Puede Viajar", desc: "Los registros construidos en la Plataforma A no pueden usarse en el Escenario B. La reputación se fragmenta, obligando a las personas a empezar de nuevo." },
                { title: "Las Calificaciones No Son Hechos", desc: "Las puntuaciones se distorsionan fácilmente—emoción, manipulación, represalia, sesgo. A largo plazo, solo los hechos verificables son confiables." },
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
                  NoKu es un mecanismo de datos de confianza que convierte el comportamiento real en credenciales de confianza verificables. Está diseñado para ser duradero, portable y con permisos.
                </p>
                <div className="space-y-4">
                  {[
                    { t: "Registrar", d: "Registrar el cumplimiento y los resultados de transacciones reales para formar un rastro estructurado." },
                    { t: "Verificar", d: "Validar la integridad y consistencia para que los registros sean rastreables y auditables." },
                    { t: "Atestiguar", d: "Emitir conclusiones confiables con divulgación mínima—sin exponer detalles innecesarios." },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-blueGray-100 shadow-sm hover:shadow-md transition-all h-32 flex flex-col justify-center">
                      <div className="font-bold mb-1 text-xl text-blueGray-900">{x.t}</div>
                      <div className="text-blueGray-600 text-base">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-5">
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6 text-blueGray-900">Lo Que No Hacemos</h2>
                <p className="text-blueGray-600 leading-relaxed mb-8 text-lg min-h-[80px]">
                  Nos mantenemos neutrales y objetivos, con límites claros que protegen la credibilidad. No intervenimos en transacciones—proporcionamos evidencia.
                </p>
                <div className="space-y-4">
                  {[
                    { t: "Sin Puntuación Subjetiva", d: "No comprimimos la realidad compleja en una sola puntuación; priorizamos registros fácticos verificables." },
                    { t: "Sin Emparejamiento", d: "No nos convertimos en parte del acuerdo; la neutralidad es necesaria para la credibilidad a largo plazo." },
                    { t: "Sin Arbitraje", d: "No juzgamos por los usuarios ni tomamos partido; solo proporcionamos evidencia." },
                    { t: "Tú Posees Tu Confianza", d: "La confianza pertenece al actor. Tú controlas los permisos y límites de uso." },
                  ].map((x, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 border border-blueGray-100 shadow-sm hover:shadow-md transition-all flex items-start h-[92px]">
                      <span className="text-blue-500 mr-4 mt-1">●</span>
                      <div>
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
      </Layout>
    </>
  );
};

export default About;
