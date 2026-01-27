import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const Footer = () => {
  const router = useRouter();
  const isEn = router.pathname === "/en_index" || router.pathname.startsWith("/en_");
  const homeHref = isEn ? "/en_index" : "/";

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
                {isEn ? (
                  <>Vision: Make every commitment a trusted long-term record.</>
                ) : (
                  <><strong>愿景：让每一份承诺，都成为可信的长期记录。</strong></>
                )}
              </p>
            </div>

            {/* 地址 */}
            <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                {isEn ? "Mailing Address" : "寄信地址"}
              </p>
              <p className="lg:text-lg text-blueGray-400">
                {isEn ? "359 Hidden Valley Road, USA" : "美国州 Hidden Valley Road 359 号"}
              </p>
            </div>

            {/* 联系方式 */}
            <div className="w-full lg:w-1/5 px-3">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                {isEn ? "Contacts" : "联系方式"}
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
              © {new Date().getFullYear()} {isEn ? "All rights reserved · Powered by " : "版权所有 · 技术支持 "}
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
