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
      ecosystem: "面向多系统环境运行的基础能力层",
      services: "不介入业务流程，不参与结果判断",
      about: "仅处理在系统边界之外已完成的行为结果",
      team: "作为中立能力被集成、调用或替换",
      contact: "用于技术对接、合规评估与正式合作沟通",
    },
    tw: {
      ecosystem: "面向多系統環境運行的基礎能力層",
      services: "不介入業務流程，不參與結果判斷",
      about: "僅處理在系統邊界之外已完成的行為結果",
      team: "作為中立能力被集成、調用或替換",
      contact: "用於技術對接、合規評估與正式合作溝通",
    },
    en: {
      ecosystem: "Foundational capability layer for multi-system environments",
      services: "No involvement in business processes or outcome judgment",
      about: "Only processes completed behavioral outcomes outside system boundaries",
      team: "Integrated, invoked, or replaced as neutral capability",
      contact: "For technical integration, compliance assessment, and formal partnership communication",
    },
    es: {
      ecosystem: "Capa de capacidad fundamental para entornos multi-sistema",
      services: "Sin involucramiento en procesos de negocio ni en juicios de resultados",
      about: "Solo procesa resultados de comportamiento completados fuera de los límites del sistema",
      team: "Integrada, invocada o reemplazada como capacidad neutra",
      contact: "Para integración técnica, evaluación de cumplimiento y comunicación formal de colaboración",
    },
  };

  const pageType = getPageType();
  const tagline = taglineMap[lang]?.[pageType] || taglineMap[lang]?.ecosystem || "";

  const I18N = {
    tw: {
      companyInfoTitle: "公司資訊",
      companyName: "NOKU LLC",
      companyDesc: "註冊並營運於美國",
      contactsTitle: "聯絡方式",
      copyrightText: "NoKu 版權所有/法律主體：NOKU LLC",
    },
    zh: {
      companyInfoTitle: "公司信息",
      companyName: "NOKU LLC",
      companyDesc: "注册并运营于美国",
      contactsTitle: "联系方式",
      copyrightText: "NoKu 版权所有/法律主体：NOKU LLC",
    },
    en: {
      companyInfoTitle: "Company Information",
      companyName: "NOKU LLC",
      companyDesc: "Registered and operating in the United States",
      contactsTitle: "Contact",
      copyrightText: "NoKu All rights reserved/Legal Entity: NOKU LLC",
    },
    es: {
      companyInfoTitle: "Información de la Empresa",
      companyName: "NOKU LLC",
      companyDesc: "Registrada y operando en Estados Unidos",
      contactsTitle: "Contacto",
      copyrightText: "NoKu Todos los derechos reservados/Entidad legal: NOKU LLC",
    },
  };
  const homeHref = isEn ? "/" : isTw ? "/tw_index" : isEs ? "/es_index" : isZh ? "/zh_index" : "/";

  return (
    <>
      <section className="pt-12 pb-8">
        <div
          className="container px-4 mx-auto wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <div className="flex flex-wrap mb-8 lg:mb-10 -mx-3 text-center lg:text-left">
            {/* Logo */}
            <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
              <Link
                href={homeHref}
                className="flex items-center flex-shrink-0 mx-auto lg:mx-0 text-3xl font-semibold leading-none"
              >
                <Image
                  width={138}
                  height={40}
                  className="h-10 w-auto"
                  src="/assets/imgs/logos/noku-noku.png?v=20260131"
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
              © {new Date().getFullYear()} {I18N[lang].copyrightText}
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
