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
            newErrors.department = 'Please select a department';
        }
        if (!formData.role.trim()) {
            newErrors.role = 'Please enter your role';
        }
        if (!formData.name.trim()) {
            newErrors.name = 'Please enter your name';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.resume) {
            newErrors.resume = 'Please upload your resume';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Please enter your message';
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
                                <span className="text-blue-500">Our Team</span>
                            </h1>

                            <ul className="flex justify-center mx-auto text-gray-500 text-sm lg:text-sm pb-6 wow animate__animated animate__fadeIn">
                                <li className="inline-flex items-center">
                                    <a href="#" className="hover:text-blue-500 text-gray-800">Home</a>
                                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </li>
                                <li className="inline-flex items-center text-gray-400">
                                    Team
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="pt-10 pb-12 bg-blueGray-50">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-4xl mx-auto mb-12 text-center">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                Leads
                            </span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                More Than Partners <br />
                                People Who Get Things Done Together
                            </h2>
                            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                We believe real collaboration is not a one-time transaction,<br />
                                but a long-term relationship built on trust, understanding, and shared responsibility.<br />
                                <br />
                                What you see here is not a group of temporary executors,<br />
                                but people who are willing to take responsibility for long-term collaboration.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-stretch">
                            <div className="w-full md:w-1/2 py-5 md:px-5 flex">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200 flex flex-col w-full h-full" data-wow-delay=".1s">
                                    <div className="flex items-center mb-4 flex-shrink-0">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                                            <p className="text-gray-500 text-xs mt-3">CTO / Chief Technology Officer</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5 flex-1 min-h-[4.5rem]">
                                        Responsible for NoKu platform infrastructure development, focusing on long-term technical architecture and implementation standards.
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
                                            <p className="text-gray-500 text-xs mt-3">CDO / Chief Digital Officer</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5 flex-1 min-h-[4.5rem]">
                                        Responsible for NoKu platform digital strategy and system design, using data technologies in technical implementation.
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
                                Our Team
                            </span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                Core <br />
                                <span className="text-blue-500">Development</span> Team
                            </h2>
                            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                Core members participating in NoKu platform infrastructure and related project development.
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3">
                            {[
                                { img: "avatar-1.png", name: "Geraldine Tusoy", role: "EM / Engineering Manager", delay: ".4s" },
                                { img: "avatar-2.png", name: "Clara Kolawole", role: "TL / Tech Lead", delay: ".3s" },
                                { img: "avatar-3.png", name: "Chris Fulton", role: "Field Technician", delay: ".5s" },
                                { img: "avatar-4.png", name: "Dany Connolly", role: "Field Technician", delay: ".7s" },
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
                                    Join Us
                                </h2>
                                <p className="text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    We'd love to hear from you
                                </p>
                            </div>

                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4 text-sm wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <span className="mr-4 font-semibold">Join the Team：</span>
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
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" name="role" placeholder="Role" value={formData.role} onChange={handleInputChange} onBlur={validateForm} />
                                                {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                                            </div>
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} onBlur={validateForm} />
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
                                                        Upload Resume
                                                    </span>
                                                </label>
                                                {formData.resume && <p className="text-xs text-blueGray-600 mt-1">{formData.resume.name}</p>}
                                                {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-1/2 px-3">
                                            <textarea className="w-full h-full p-4 text-[16px] sm:text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" name="message" placeholder="Message....." value={formData.message} onChange={handleInputChange} onBlur={validateForm}></textarea>
                                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-center mb-2">
                                            <label>
                                                <input className="mr-1" type="checkbox" name="terms" value="1" checked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)} />
                                                <span className="text-sm font-semibold">I agree to the Terms & Conditions（Privacy）</span>
                                            </label>
                                            <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={!isFormValid || isSubmitting}>
                                                {isSubmitting ? 'Submitting...' : 'Submit'}
                                            </button>
                                        </div>
                                        {!termsAgreed && (
                                            <p className="text-red-500 text-xs mt-1 ml-6">Please agree to the terms to continue.</p>
                                        )}
                                        {termsAgreed && !isFormValid && Object.keys(errors).length > 0 && (
                                            <p className="text-red-500 text-sm mt-2">Please complete all required fields before submitting.</p>
                                        )}
                                        {submitStatus === 'success' && (
                                            <p className="text-green-500 text-sm mt-2">Submission successful! We will contact you soon.</p>
                                        )}
                                        {submitStatus === 'error' && (
                                            <p className="text-red-500 text-sm mt-2">Submission failed. Please try again later.</p>
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
