import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Footer = () => {
  const router = useRouter();
  const isEn = router.pathname === "/" || router.pathname === "/about" || router.pathname === "/services" || router.pathname === "/team" || router.pathname === "/contact" || router.pathname === "/login" || router.pathname === "/signup" || router.pathname === "/en_index" || router.pathname.startsWith("/en_");
  const isTw = router.pathname === "/tw_index" || router.pathname.startsWith("/tw_");
  const isEs = router.pathname === "/es_index" || router.pathname.startsWith("/es_");
  const lang = isEn ? "en" : isTw ? "tw" : isEs ? "es" : "en";
  const I18N = {
    tw: {
      vision: "願景：讓每一份承諾，都成為可信的長期記錄。",
      mailingAddressTitle: "寄信地址",
      mailingAddressValue: "美國州 Hidden Valley Road 359 號",
      contactsTitle: "聯絡方式",
      copyrightPrefix: "版權所有 · 技術支援 ",
    },
    en: {
      vision: "Vision: Make every commitment a trusted long-term record.",
      mailingAddressTitle: "Mailing Address",
      mailingAddressValue: "359 Hidden Valley Road, USA",
      contactsTitle: "Contacts",
      copyrightPrefix: "All rights reserved · Powered by ",
    },
    es: {
      vision: "Visión: Hacer de cada compromiso un registro confiable a largo plazo.",
      mailingAddressTitle: "Dirección Postal",
      mailingAddressValue: "359 Hidden Valley Road, USA",
      contactsTitle: "Contactos",
      copyrightPrefix: "Todos los derechos reservados · Desarrollado por ",
    },
  };
  const homeHref = isEn ? "/" : isTw ? "/tw_index" : isEs ? "/es_index" : "/";

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
                  <>{I18N[lang].vision}</>
                ) : (
                  <><strong>{I18N[lang].vision}</strong></>
                )}
              </p>
            </div>

            {/* 地址 */}
            <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                {I18N[lang].mailingAddressTitle}
              </p>
              <p className="lg:text-lg text-blueGray-400">
                {I18N[lang].mailingAddressValue}
              </p>
            </div>

            {/* 联系方式 */}
            <div className="w-full lg:w-1/5 px-3">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                {I18N[lang].contactsTitle}
              </p>
              <p className="lg:text-lg text-blueGray-400">
                <a href="mailto:nokuinc@outlook.com" className="text-blueGray-400 hover:text-blue-500">
                  nokuinc@outlook.com
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
