import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const Team = () => {
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        department: '',
        role: '',
        name: '',
        email: '',
        resume: null,
        message: ''
    });
    const toEmail = "nokuinc@outlook.com";

    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setFormData(prev => ({ ...prev, [name]: files[0] || null }));
            if (errors[name]) {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
        } else if (type === 'radio') {
            setFormData(prev => ({ ...prev, department: value }));
            if (errors.department) {
                setErrors(prev => ({ ...prev, department: '' }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
            if (errors[name]) {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
        }
        setSubmitStatus(null);
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.department) {
            newErrors.department = 'Por favor, selecciona un departamento';
        }
        if (!formData.role.trim()) {
            newErrors.role = 'Por favor, ingresa tu rol';
        }
        if (!formData.name.trim()) {
            newErrors.name = 'Por favor, ingresa tu nombre';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Por favor, ingresa tu correo electrónico';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Por favor, ingresa una dirección de correo electrónico válida';
        }
        if (!formData.resume) {
            newErrors.resume = 'Por favor, sube tu currículum';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Por favor, ingresa tu mensaje';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!termsAgreed) {
            return;
        }

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const subject = `NOKU Team Application | ${formData.department === '1' ? 'Frontend' : 'Backend'}${formData.role ? " | " + formData.role : ""}${formData.name ? " | " + formData.name : ""}`;
            const body = [
                `Department: ${formData.department === '1' ? 'Frontend' : 'Backend'}`,
                `Role: ${formData.role || "-"}`,
                `Name: ${formData.name || "-"}`,
                `Email: ${formData.email || "-"}`,
                `Resume: ${formData.resume ? formData.resume.name : "-"}`,
                "",
                "Message:",
                formData.message || "-",
                "",
                "----",
                "Sent from nokuinc.com team form",
            ].join("\n");

            const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailto;
            
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitStatus('success');
                setFormData({
                    department: '',
                    role: '',
                    name: '',
                    email: '',
                    resume: null,
                    message: ''
                });
                setTermsAgreed(false);
                const fileInput = document.querySelector('input[type="file"]');
                if (fileInput) fileInput.value = '';
            }, 500);
        } catch (error) {
            setIsSubmitting(false);
            setSubmitStatus('error');
        }
    };

    const isFormValid = termsAgreed && 
        formData.department && 
        formData.role.trim() && 
        formData.name.trim() && 
        formData.email.trim() && 
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
        formData.resume && 
        formData.message.trim();

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

                <section className="pt-10 pb-12 bg-blueGray-50">
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

                        <div className="flex flex-wrap items-stretch">
                            <div className="w-full md:w-1/2 py-5 md:px-5 flex">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200 flex flex-col w-full h-full" data-wow-delay=".1s">
                                    <div className="flex items-center mb-4 flex-shrink-0">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                                            <p className="text-gray-500 text-xs mt-3">CTO / Director de Tecnología</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5 flex-1 min-h-[4.5rem]">
                                        Responsable del desarrollo de la infraestructura de la plataforma NoKu, enfocándose en la arquitectura técnica a largo plazo y los estándares de implementación.
                                    </p>
                                    <div className="flex space-x-2 flex-shrink-0">
                                        <a href="#"><img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" /></a>
                                        <a href="#"><img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 py-5 md:px-5 flex">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200 flex flex-col w-full h-full" data-wow-delay=".3s">
                                    <div className="flex items-center mb-4 flex-shrink-0">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                                            <p className="text-gray-500 text-xs mt-3">CDO / Director Digital</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5 flex-1 min-h-[4.5rem]">
                                        Responsable de la estrategia digital y el diseño del sistema de la plataforma NoKu, utilizando tecnologías de datos en la implementación técnica.
                                    </p>
                                    <div className="flex space-x-2 flex-shrink-0">
                                        <a href="#"><img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" /></a>
                                        <a href="#"><img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 下面模块保持你原本结构与中文 */}
                <section className="pt-12">
                    <div className="container text-center">
                        <div className="max-w-lg mx-auto mb-12">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                Nuestro Equipo
                            </span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                Equipo de <br />
                                <span className="text-blue-500">Desarrollo</span> Central
                            </h2>
                            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                Miembros centrales que participan en el desarrollo de la infraestructura de la plataforma NoKu y proyectos relacionados.
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3">
                            {[
                                { img: "avatar-1.png", name: "Geraldine Tusoy", role: "EM / Gerente de Ingeniería", delay: ".4s" },
                                { img: "avatar-2.png", name: "Clara Kolawole", role: "TL / Líder Técnico", delay: ".3s" },
                                { img: "avatar-3.png", name: "Chris Fulton", role: "Técnico de Campo", delay: ".5s" },
                                { img: "avatar-4.png", name: "Dany Connolly", role: "Técnico de Campo", delay: ".7s" },
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
                                            <input className="mr-1" type="radio" name="department" value="1" checked={formData.department === '1'} onChange={handleInputChange} />
                                            <span>Frontend</span>
                                        </label>
                                        <label>
                                            <input className="mr-1" type="radio" name="department" value="2" checked={formData.department === '2'} onChange={handleInputChange} />
                                            <span>Backend</span>
                                        </label>
                                        {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
                                    </div>

                                    <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" name="role" placeholder="Rol" value={formData.role} onChange={handleInputChange} onBlur={validateForm} />
                                                {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                                            </div>
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleInputChange} onBlur={validateForm} />
                                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                            </div>
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleInputChange} onBlur={validateForm} />
                                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                            </div>
                                            <div>
                                                <label className="flex px-2 bg-blueGray-50 rounded">
                                                    <input className="hidden" type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleInputChange} />
                                                    <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                                                        Subir currículum
                                                    </span>
                                                </label>
                                                {formData.resume && <p className="text-xs text-blueGray-600 mt-1">{formData.resume.name}</p>}
                                                {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-1/2 px-3">
                                            <textarea className="w-full h-full p-4 text-[16px] sm:text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" name="message" placeholder="Mensaje....." value={formData.message} onChange={handleInputChange} onBlur={validateForm}></textarea>
                                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-center mb-2">
                                            <label>
                                                <input className="mr-1" type="checkbox" name="terms" value="1" checked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)} />
                                                <span className="text-sm font-semibold">Acepto los Términos y Condiciones (Privacidad)</span>
                                            </label>
                                            <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={!isFormValid || isSubmitting}>
                                                {isSubmitting ? 'Enviando...' : 'Enviar'}
                                            </button>
                                        </div>
                                        {!termsAgreed && (
                                            <p className="text-red-500 text-xs mt-1 ml-6">Por favor, acepta los términos para continuar.</p>
                                        )}
                                        {termsAgreed && !isFormValid && Object.keys(errors).length > 0 && (
                                            <p className="text-red-500 text-sm mt-2">Por favor, completa todos los campos obligatorios antes de enviar.</p>
                                        )}
                                        {submitStatus === 'success' && (
                                            <p className="text-green-500 text-sm mt-2">¡Envío exitoso! Nos pondremos en contacto contigo pronto.</p>
                                        )}
                                        {submitStatus === 'error' && (
                                            <p className="text-red-500 text-sm mt-2">Error en el envío. Por favor, inténtalo de nuevo más tarde.</p>
                                        )}
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
