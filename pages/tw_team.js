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
            newErrors.department = '請選擇部門';
        }
        if (!formData.role.trim()) {
            newErrors.role = '請填寫崗位';
        }
        if (!formData.name.trim()) {
            newErrors.name = '請填寫姓名';
        }
        if (!formData.email.trim()) {
            newErrors.email = '請填寫郵箱';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = '請填寫有效的郵箱地址';
        }
        if (!formData.resume) {
            newErrors.resume = '請上傳履歷';
        }
        if (!formData.message.trim()) {
            newErrors.message = '請填寫留言內容';
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
            const subject = `NOKU Team Application | ${formData.department === '1' ? '前端' : '後端'}${formData.role ? " | " + formData.role : ""}${formData.name ? " | " + formData.name : ""}`;
            const body = [
                `Department: ${formData.department === '1' ? '前端' : '後端'}`,
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

                {/* [1] 頂部首屏｜✅ 與 index/about/services 完全同座標：-mt-24 pt-20 + container px-4 + pt-8 */}
                <section className="bg-white -mt-24 pt-20">
                    <div className="container px-4 mx-auto text-center">
                        <div className="pt-8 max-w-4xl mx-auto mb-2">
                            <h1 className="text-3xl lg:text-5xl lg:leading-normal mb-3 font-bold font-heading text-blueGray-900 wow animate__animated animate__fadeIn break-words">
                                NoKu LLC <br />
                                <span className="text-blue-500">我們的團隊</span>
                            </h1>

                            <ul className="flex justify-center mx-auto text-gray-500 text-sm lg:text-sm pb-6 wow animate__animated animate__fadeIn">
                                <li className="inline-flex items-center">
                                    <a href="#" className="hover:text-blue-500 text-gray-800">首頁</a>
                                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </li>
                                <li className="inline-flex items-center text-gray-400">
                                    團隊
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="pt-10 pb-12 bg-blueGray-50">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-4xl mx-auto mb-12 text-center">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                值得信任的那群人
                            </span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                不只是合作夥伴 <br />
                                更像一起把事做成的自己人
                            </h2>
                            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                我們相信，真正的合作不是一次交易，<br />
                                而是彼此理解、長期信任和共同承擔。<br />
                                <br />
                                你看到的不是臨時拼湊的執行者，<br />
                                而是一群願意為長期合作承擔責任的人。
                            </p>
                        </div>

                        <div className="flex flex-wrap items-stretch">
                            <div className="w-full md:w-1/2 py-5 md:px-5 flex">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn border border-gray-100 hover:border-gray-200 flex flex-col w-full h-full" data-wow-delay=".1s">
                                    <div className="flex items-center mb-4 flex-shrink-0">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                                            <p className="text-gray-500 text-xs mt-3">CTO / 首席技術官</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5 flex-1 min-h-[4.5rem]">
                                        負責 NoKu 平台基礎設施開發，專注於長期技術架構與實施標準。
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
                                            <p className="text-gray-500 text-xs mt-3">CDO / 首席數字官</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5 flex-1 min-h-[4.5rem]">
                                        負責 NoKu 平台數字策略與系統設計，採用數據技術實施方案。
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

                {/* 下面模組保持你原本結構與中文 */}
                <section className="pt-12">
                    <div className="container text-center">
                        <div className="max-w-[90vw] sm:max-w-lg mx-auto mb-12">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                我們的團隊
                            </span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn break-words" data-wow-delay=".3s">
                                核心 <br />
                                <span className="text-blue-500">建設</span> 團隊
                            </h2>
                            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                參與 NoKu 平台基礎設施與相關項目建設的核心成員。
                            </p>
                        </div>

                        <div className="flex flex-wrap -mx-3">
                            {[
                                { img: "avatar-1.png", name: "Geraldine Tusoy", role: "EM / 工程經理", delay: ".4s" },
                                { img: "avatar-2.png", name: "Clara Kolawole", role: "TL / 技術組長", delay: ".3s" },
                                { img: "avatar-3.png", name: "Chris Fulton", role: "外勤技術員", delay: ".5s" },
                                { img: "avatar-4.png", name: "Dany Connolly", role: "外勤技術員", delay: ".7s" },
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

                {/* Contact 表單保持原中文（僅首屏已統一） */}
                <section className="pb-20">
                    <div className="container">
                        <div className="max-w-[90vw] sm:max-w-2xl lg:max-w-3xl mx-auto">
                            <div className="mb-12 text-center">
                                <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn break-words" data-wow-delay=".1s">
                                    加入我們
                                </h2>
                                <p className="text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    我們很樂意收到你的消息
                                </p>
                            </div>

                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4 text-sm wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <span className="mr-4 font-semibold">加入團隊：</span>
                                        <label className="mr-4">
                                            <input className="mr-1" type="radio" name="department" value="1" checked={formData.department === '1'} onChange={handleInputChange} />
                                            <span>前端</span>
                                        </label>
                                        <label>
                                            <input className="mr-1" type="radio" name="department" value="2" checked={formData.department === '2'} onChange={handleInputChange} />
                                            <span>後端</span>
                                        </label>
                                        {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department}</p>}
                                    </div>

                                    <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" name="role" placeholder="崗位" value={formData.role} onChange={handleInputChange} onBlur={validateForm} />
                                                {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                                            </div>
                                            <div className="mb-4">
                                                <input className="w-full p-4 text-[16px] sm:text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" name="name" placeholder="姓名" value={formData.name} onChange={handleInputChange} onBlur={validateForm} />
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
                                                        上傳履歷
                                                    </span>
                                                </label>
                                                {formData.resume && <p className="text-xs text-blueGray-600 mt-1">{formData.resume.name}</p>}
                                                {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-1/2 px-3">
                                            <textarea className="w-full h-full p-4 text-[16px] sm:text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" name="message" placeholder="留言內容..." value={formData.message} onChange={handleInputChange} onBlur={validateForm}></textarea>
                                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-center mb-2">
                                            <label>
                                                <input className="mr-1" type="checkbox" name="terms" value="1" checked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)} />
                                                <span className="text-sm font-semibold">我同意條款與條件（隱私保護）</span>
                                            </label>
                                            <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded disabled:opacity-50 disabled:cursor-not-allowed" type="submit" disabled={!isFormValid || isSubmitting}>
                                                {isSubmitting ? '提交中...' : '提交'}
                                            </button>
                                        </div>
                                        {!termsAgreed && (
                                            <p className="text-red-500 text-xs mt-1 ml-6">請勾選同意條款。</p>
                                        )}
                                        {termsAgreed && !isFormValid && Object.keys(errors).length > 0 && (
                                            <p className="text-red-500 text-sm mt-2">請完善所有必填資訊後再提交。</p>
                                        )}
                                        {submitStatus === 'success' && (
                                            <p className="text-green-500 text-sm mt-2">提交成功！我們會盡快與您聯繫。</p>
                                        )}
                                        {submitStatus === 'error' && (
                                            <p className="text-red-500 text-sm mt-2">提交失敗，請稍後重試。</p>
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
