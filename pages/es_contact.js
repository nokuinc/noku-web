import React, { useMemo } from "react";
import Layout from "../components/layout/Layout";

const Contact = () => {
  const toEmail = useMemo(() => "nokuinc@outlook.com", []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name?.value?.trim() || "";
    const email = form.email?.value?.trim() || "";
    const dept = form.dept?.value || "Consulta General";
    const region = form.region?.value || "";
    const message = form.message?.value?.trim() || "";

    const subject = `NOKU Contact | ${dept}${region ? " | " + region : ""}${name ? " | " + name : ""}`;
    const body = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Inquiry Type: ${dept}`,
      `Region: ${region || "-"}`,
      "",
      "Message:",
      message || "-",
      "",
      "----",
      "Sent from nokuinc.com (NOKU LLC official website) contact form",
    ].join("\n");

    const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <>
      <Layout>
        {/* ✅ Header 已经 fixed 了，这里不要再用 -mt-24 / pt-40 */}
        <section id="contact" className="py-16 pt-20 sm:pt-24 lg:pt-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-3">
              {/* 左侧：联系信息 */}
              <div className="w-full lg:w-1/2 px-3 mb-10 lg:mb-0">
                <div className="max-w-md">
                  <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6">
                    Contactar <span className="text-blue-600 text-3xl lg:text-5xl font-bold font-heading">NOKU LLC</span>
                  </h2>

                  <p className="text-blueGray-400 leading-relaxed mb-4">
                    nokuinc.com es el único sitio web oficial global de NOKU LLC. NOKU LLC es un proveedor de tecnología e infraestructura. No maneja ni custodia fondos de usuarios, no ofrece inversión, gestión patrimonial ni promesas de rentabilidad, y no interviene en transacciones de plataformas ni en decisiones de usuarios.
                  </p>
                  <p className="text-blueGray-500 text-sm leading-relaxed mb-8">
                    Canal oficial para alianzas, due diligence, cumplimiento normativo y consultas técnicas.
                  </p>

                  <div className="flex items-start mb-6">
                    <div className="mr-4 p-3 bg-blue-50 text-blue-600 rounded-lg">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Correo Electrónico</h4>
                      <a
                        className="text-blueGray-400 hover:underline break-all"
                        href={`mailto:${toEmail}`}
                      >
                        {toEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-blue-50 text-blue-600 rounded-lg">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Operaciones</h4>
                      <p className="text-blueGray-400">
                        Operación digital, trabajo remoto
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧：表单 */}
              <div className="w-full lg:w-1/2 px-3">
                <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-2xl border border-blueGray-100">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        name="name"
                        className="w-full p-4 text-base font-semibold leading-none bg-blueGray-50 rounded outline-none"
                        type="text"
                        placeholder="Nombre"
                        autoComplete="name"
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        name="email"
                        className="w-full p-4 text-base font-semibold leading-none bg-blueGray-50 rounded outline-none"
                        type="email"
                        placeholder="Correo"
                        autoComplete="email"
                      />
                    </div>

                    <div className="mb-4 text-sm flex flex-wrap gap-6">
                      <span className="font-semibold text-blueGray-700">Tipo de consulta:</span>
                      <label className="flex items-center">
                        <input className="mr-2" type="radio" name="dept" value="Consulta General" defaultChecked /> Consulta General
                      </label>
                      <label className="flex items-center">
                        <input className="mr-2" type="radio" name="dept" value="Consulta Técnica" /> Consulta Técnica
                      </label>
                      <label className="flex items-center">
                        <input className="mr-2" type="radio" name="dept" value="Asociación Comercial" /> Asociación Comercial
                      </label>
                    </div>

                    <div className="mb-4">
                      <select
                        name="region"
                        className="w-full p-4 text-base font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      >
                        <option value="">Región (opcional)</option>
                        <option value="Asia-Pacífico">Asia-Pacífico</option>
                        <option value="Américas">Américas</option>
                        <option value="Europa">Europa</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <textarea
                        name="message"
                        className="w-full h-32 p-4 text-base font-semibold leading-relaxed resize-none bg-blueGray-50 rounded outline-none"
                        placeholder="Mensaje"
                      />
                    </div>

                    {/* ✅ 按钮：保持你修复的强制可见逻辑 */}
                    <button
                      type="submit"
                      className="
                        w-full
                        inline-flex items-center justify-center
                        h-12
                        px-8
                        text-base font-semibold
                        rounded-lg
                        bg-blue-600
                        text-white
                        opacity-100
                        hover:bg-blue-700
                        active:bg-blue-800
                        focus:outline-none focus:ring-4 focus:ring-blue-200
                        transition
                        relative z-10
                      "
                      style={{ backgroundColor: "#2563EB", color: "#FFFFFF" }}
                    >
                      Enviar
                    </button>

                    <p className="mt-4 text-xs text-blueGray-400">
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
