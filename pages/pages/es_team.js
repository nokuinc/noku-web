import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const Team = () => {
    const [termsAgreed, setTermsAgreed] = useState(false);
    const toEmail = "nokuinc@outlook.com";

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!termsAgreed) {
            alert("Por favor, acepta los Términos y Condiciones antes de enviar.");
            return;
        }

        const form = e.currentTarget;
        const department = form.department?.value || "";
        const role = form.querySelector('input[type="text"][placeholder="Rol"]')?.value?.trim() || "";
        const name = form.querySelector('input[type="text"][placeholder="Nombre"]')?.value?.trim() || "";
        const email = form.querySelector('input[type="email"]')?.value?.trim() || "";
        const message = form.querySelector('textarea')?.value?.trim() || "";

        const subject = `NOKU Team Application | ${department}${role ? " | " + role : ""}${name ? " | " + name : ""}`;
        const body = [
            `Department: ${department || "-"}`,
            `Role: ${role || "-"}`,
            `Name: ${name || "-"}`,
            `Email: ${email || "-"}`,
            "",
            "Message:",
            message || "-",
            "",
            "----",
            "Sent from nokuinc.com team form",
        ].join("\n");

        const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    };

    return (
        <>
            <Layout>

                {/* [1] 顶部首屏｜✅ 与 index/about/services 完全同坐标：-mt-24 pt-20 + container px-4 + pt-8 */}
                <section className="bg-white -mt-24 pt-20">
                    <div className="container px-4 mx-auto text-center">
                        <div className="pt-8 max-w-4xl mx-auto mb-2">
                            <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeIn break-words">
                                NoKu LLC <br />
                                <span className="text-blue-500">Nuestro Equipo</span>
                            </h1>

                            <ul className="flex justify-center mx-auto text-gray-500 text-sm lg:text-sm pb-6 wow animate__animated animate__fadeIn">
                                <li className="inline-flex items-center">
                                    <a href="#" className="hover:text-blue-500 text-gray-800">Inicio</a>
                                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </li>
                                <li className="inline-flex items-center text-gray-400">
                                    Equipo
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="pt-10 pb-20 bg-blueGray-50">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-4xl mx-auto mb-12 text-center">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                Líderes
                            </span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                Más que Socios <br />
                                Personas que Hacen las Cosas Juntas
                            </h2>
                            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                Creemos que la colaboración real no es una transacción única,<br />
                                sino una relación a largo plazo construida sobre confianza, comprensión y responsabilidad compartida.<br />
                                <br />
                                Lo que ves aquí no es un grupo de ejecutores temporales,<br />
                                sino personas que están dispuestas a asumir la responsabilidad de la colaboración a largo plazo.
                            </p>
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 py-5 md:px-5">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200" data-wow-delay=".1s">
                                    <div className="flex items-center mb-4">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                                            <p className="text-gray-500 text-xs mt-3">CTO / Director de Tecnología</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">
                                        Construimos a largo plazo y entregamos con un alto estándar—ejecución constante y habilidades sólidas, hasta el último detalle.
                                    </p>
                                    <div className="flex space-x-2">
                                        <a href="#"><img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" /></a>
                                        <a href="#"><img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 py-5 md:px-5">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200" data-wow-delay=".3s">
                                    <div className="flex items-center mb-4">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                                            <p className="text-gray-500 text-xs mt-3">CDO / Director Digital</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">
                                        Usamos datos y experiencia para impulsar decisiones, descomponiendo la complejidad en pasos ejecutables para resultados más predecibles.
                                    </p>
                                    <div className="flex space-x-2">
                                        <a href="#"><img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" /></a>
                                        <a href="#"><img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 py-5 md:px-5">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200" data-wow-delay=".5s">
                                    <div className="flex items-center mb-4">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-3.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Chris Fulton</strong>
                                            <p className="text-gray-500 text-xs mt-3">Gerente de Proyecto</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">
                                        Gestionamos el ritmo y la calidad, asegurando una entrega fluida entre equipos e individuos—cumpliendo requisitos cada vez.
                                    </p>
                                    <div className="flex space-x-2">
                                        <a href="#"><img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" /></a>
                                        <a href="#"><img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 py-5 md:px-5">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200" data-wow-delay=".7s">
                                    <div className="flex items-center mb-4">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-4.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                                            <p className="text-gray-500 text-xs mt-3">Gerente de Ingeniería</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">
                                        Nos enfocamos en el crecimiento y la colaboración—alineando producto y ejecución para que el equipo pueda profundizar en el trabajo correcto.
                                    </p>
                                    <div className="flex space-x-2">
                                        <a href="#"><img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" /></a>
                                        <a href="#"><img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" /></a>
                                        <a href="#"><img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 下面模块保持你原本结构与中文 */}
                <section className="pt-20">
                    <div className="container text-center">
                        <div className="max-w-lg mx-auto mb-12">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                Nuestro Equipo
                            </span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                Nuestros Increíbles <br />
                                <span className="text-blue-500">Miembros del Equipo</span> con Habilidades
                            </h2>
                            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                Profesional Habilidoso/Servicio Excelente/Entrega Eficiente，持续为客户交付满意结果。
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3">
                            {[
                                { img: "avatar-1.png", name: "Geraldine Tusoy", role: "EM / Gerente de Ingeniería", delay: ".4s" },
                                { img: "avatar-2.png", name: "Clara Kolawole", role: "TL / Líder Técnico", delay: ".3s" },
                                { img: "avatar-3.png", name: "Chris Fulton", role: "Técnico de Campo", delay: ".5s" },
                                { img: "avatar-4.png", name: "Dany Connolly", role: "Técnico de Campo", delay: ".7s" },
                                { img: "avatar-5.png", name: "Al-amin Bishash", role: "Técnico de Campo", delay: ".1s" },
                                { img: "avatar-6.png", name: "Sanuya Santa", role: "Marketing", delay: ".3s" },
                                { img: "avatar-7.png", name: "Steven Job", role: "Técnico de Campo", delay: ".5s" },
                                { img: "avatar-8.png", name: "Romario", role: "Técnico de Campo", delay: ".7s" },
                            ].map((p, i) => (
                                <div key={i} className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn" data-wow-delay={p.delay}>
                                    <img className="h-64 w-64 mx-auto rounded object-cover object-top" src={`/assets/imgs/placeholders/${p.img}`} alt={p.name} />
                                    <p className="mt-6"><strong className="text-md">{p.name}</strong></p>
                                    <p className="text-gray-500 text-xs mb-4">{p.role}</p>
                                    <div className="flex py-1 justify-center space-x-2">
                                        <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                        <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact 表单保持原中文（仅首屏已统一） */}
                <section className="pb-20">
                    <div className="container">
                        <div className="max-w-[90vw] sm:max-w-2xl lg:max-w-3xl mx-auto">
                            <div className="mb-12 text-center">
                                <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                    Únete a Nosotros
                                </h2>
                                <p className="text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    Nos encantaría saber de ti
                                </p>
                            </div>

                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4 text-sm wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <span className="mr-4 font-semibold">Únete al Equipo：</span>
                                        <label className="mr-4">
                                            <input className="mr-1" type="radio" name="department" value="1" />
                                            <span>Frontend</span>
                                        </label>
                                        <label>
                                            <input className="mr-1" type="radio" name="department" value="2" />
                                            <span>Backend</span>
                                        </label>
                                    </div>

                                    <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Rol" />
                                            </div>
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Nombre" />
                                            </div>
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
                                            </div>
                                            <div>
                                                <label className="flex px-2 bg-blueGray-50 rounded">
                                                    <input className="hidden" type="file" name="Choose file" />
                                                    <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                                                        Examinar
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-1/2 px-3">
                                            <textarea className="w-full h-full p-4 text-[16px] sm:text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="Mensaje....."></textarea>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <label>
                                            <input className="mr-1" type="checkbox" name="terms" value="1" checked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)} />
                                            <span className="text-sm font-semibold">Acepto los Términos y Condiciones (Privacidad)</span>
                                        </label>
                                        <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={!termsAgreed}>
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
};

export default Team;
