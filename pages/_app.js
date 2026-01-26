import '../public/assets/css/animate.min.css'
import React, { useEffect, useState } from "react";
import Head from 'next/head'

import '../public/assets/css/tailwind-built.css'
import Preloader from '../components/elements/Preloader';
import "swiper/css";

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(false);
    const [lang, setLang] = useState('zh'); // zh | en

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        // 读取本地语言
        const savedLang = localStorage.getItem('lang');
        if (savedLang) setLang(savedLang);
    }, []);

    const toggleLang = () => {
        const next = lang === 'zh' ? 'en' : 'zh';
        setLang(next);
        localStorage.setItem('lang', next);
    };

    return (
        <>
            <Head>
                <title>NoKu</title>
            </Head>

            {!loading ? (
                <Component {...pageProps} lang={lang} toggleLang={toggleLang} />
            ) : (
                <Preloader />
            )}
        </>
    )
}

export default MyApp
