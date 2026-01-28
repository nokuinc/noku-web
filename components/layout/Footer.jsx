import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Footer = () => {
  const router = useRouter();
  const isEn = router.pathname === "/" || router.pathname === "/about" || router.pathname === "/services" || router.pathname === "/team" || router.pathname === "/contact" || router.pathname === "/login" || router.pathname === "/signup" || router.pathname === "/en_index" || router.pathname.startsWith("/en_");
  const isTw = router.pathname === "/tw_index" || router.pathname.startsWith("/tw_");
  const isEs = router.pathname === "/es_index" || router.pathname.startsWith("/es_");
  const isZh = router.pathname === "/zh_index" || router.pathname.startsWith("/zh_");
  const lang = isEn ? "en" : isTw ? "tw" : isEs ? "es" : isZh ? "zh" : "en";
  
  // 根据路由判断页面类型
  const getPageType = () => {
    const path = router.pathname;
    // 生态/首页
    if (path === "/" || path === "/zh_index" || path === "/tw_index" || path === "/es_index" || path === "/en_index") {
      return "ecosystem";
    }
    // 服务
    if (path === "/services" || path === "/zh_services" || path === "/tw_services" || path === "/es_services" || path === "/en_services") {
      return "services";
    }
    // 我们
    if (path === "/about" || path === "/zh_about" || path === "/tw_about" || path === "/es_about" || path === "/en_about") {
      return "about";
    }
    // 团队
    if (path === "/team" || path === "/zh_team" || path === "/tw_team" || path === "/es_team" || path === "/en_team") {
      return "team";
    }
    // 联系
    if (path === "/contact" || path === "/zh_contact" || path === "/tw_contact" || path === "/es_contact" || path === "/en_contact") {
      return "contact";
    }
    // 默认返回生态
    return "ecosystem";
  };

  // 标语映射表
  const taglineMap = {
    zh: {
      ecosystem: "WeXun / YouBo / PledgeDoc：同一事实链路",
      services: "记录 · 验证 · 证明：平台级基础能力",
      about: "我们不创造信用，只保存事实",
      team: "长期协作，边界清晰，持续交付",
      contact: "技术与合作沟通",
    },
    tw: {
      ecosystem: "WeXun / YouBo / PledgeDoc：同一事實鏈路",
      services: "記錄 · 驗證 · 證明：平台級基礎能力",
      about: "我們不創造信用，只保存事實",
      team: "長期協作，邊界清晰，持續交付",
      contact: "技術與合作溝通",
    },
    en: {
      ecosystem: "WeXun / YouBo / PledgeDoc: one factual chain",
      services: "Record · Verify · Attest: platform-level capability",
      about: "We don't create credit, we only preserve facts",
      team: "Long-term collaboration, clear boundaries, continuous delivery",
      contact: "Technical and partnership inquiries",
    },
    es: {
      ecosystem: "WeXun / YouBo / PledgeDoc: una misma cadena de hechos",
      services: "Registrar · Verificar · Atestiguar: capacidad a nivel de plataforma",
      about: "No creamos crédito; preservamos hechos",
      team: "Colaboración a largo plazo, límites claros, entrega continua",
      contact: "Consultas técnicas y de colaboración",
    },
  };

  const pageType = getPageType();
  const tagline = taglineMap[lang]?.[pageType] || taglineMap[lang]?.ecosystem || "";

  const I18N = {
    tw: {
      companyInfoTitle: "公司資訊",
      companyName: "NoKu LLC",
      companyDesc: "註冊並營運於美國",
      contactsTitle: "聯絡方式",
      copyrightPrefix: "版權所有 · 技術支援 ",
    },
    zh: {
      companyInfoTitle: "公司信息",
      companyName: "NoKu LLC",
      companyDesc: "注册并运营于美国",
      contactsTitle: "联系方式",
      copyrightPrefix: "版权所有 · 技术支持 ",
    },
    en: {
      companyInfoTitle: "Company Information",
      companyName: "NoKu LLC",
      companyDesc: "Registered and operating in the United States",
      contactsTitle: "Contact",
      copyrightPrefix: "All rights reserved · Powered by ",
    },
    es: {
      companyInfoTitle: "Información de la Empresa",
      companyName: "NoKu LLC",
      companyDesc: "Registrada y operando en Estados Unidos",
      contactsTitle: "Contacto",
      copyrightPrefix: "Todos los derechos reservados · Desarrollado por ",
    },
  };
  const homeHref = isEn ? "/" : isTw ? "/tw_index" : isEs ? "/es_index" : isZh ? "/zh_index" : "/";

  return (
    <>
      <section className="py-20">
        <div
          className="container px-4 mx-auto wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
            {/* Logo */}
            <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
              <Link
                href={homeHref}
                className="flex items-center flex-shrink-0 mx-auto lg:mx-0 text-3xl font-semibold leading-none"
              >
                <Image
                  width={120}
                  height={36}
                  className="h-9 w-auto"
                  src="/assets/imgs/logos/monst-logo.svg"
                  alt="NoKu"
                />
              </Link>
            </div>

            {/* 简介 */}
            <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
              <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
                {isEn || isEs ? (
                  <>{tagline}</>
                ) : (
                  <><strong>{tagline}</strong></>
                )}
              </p>
            </div>

            {/* 公司信息 */}
            <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                {I18N[lang].companyInfoTitle}
              </p>
              <p className="lg:text-lg text-blueGray-400">
                {I18N[lang].companyName}
              </p>
              <p className="lg:text-lg text-blueGray-400">
                {I18N[lang].companyDesc}
              </p>
            </div>

            {/* 联系方式 */}
            <div className="w-full lg:w-1/5 px-3">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                {I18N[lang].contactsTitle}
              </p>
              <p className="lg:text-lg text-blueGray-400">
                <a href="mailto:contact@nokuinc.com" className="text-blueGray-400 hover:text-blue-500">
                  contact@nokuinc.com
                </a>
              </p>
            </div>
          </div>

          {/* 底部版权 & 社交 */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <p className="text-sm text-blueGray-400">
              © {new Date().getFullYear()} {I18N[lang].copyrightPrefix}
              <Link
                className="text-blue-400"
                href="https://nokuinc.com"
                target="_blank"
              >
                nokuinc.com
              </Link>
            </p>

            <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
              <Link className="inline-block px-2" href="https://facebook.com">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  src="/assets/imgs/icons/facebook-blue.svg"
                  alt="Facebook"
                />
              </Link>
              <Link className="inline-block px-2" href="https://twitter.com">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  src="/assets/imgs/icons/twitter-blue.svg"
                  alt="Twitter"
                />
              </Link>
              <Link className="inline-block px-2" href="https://www.instagram.com">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  src="/assets/imgs/icons/instagram-blue.svg"
                  alt="Instagram"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
