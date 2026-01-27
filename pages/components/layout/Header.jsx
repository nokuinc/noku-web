import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = ({ handleHidden }) => {
  const router = useRouter();
  const [scroll, setScroll] = useState(0);

  const isEn = router.pathname === "/" || router.pathname === "/about" || router.pathname === "/services" || router.pathname === "/team" || router.pathname === "/contact" || router.pathname === "/login" || router.pathname === "/signup" || router.pathname === "/en_index" || router.pathname.startsWith("/en_");
  const isTw = router.pathname === "/tw_index" || router.pathname.startsWith("/tw_");
  const isEs = router.pathname === "/es_index" || router.pathname.startsWith("/es_");
  const lang = isEn ? "en" : isTw ? "tw" : isEs ? "es" : "en";
  const I18N = {
    tw: {
      nav: { index: "生態", services: "服務", about: "我們", team: "團隊", contact: "聯絡" },
      login: "登入",
    },
    en: {
      nav: { index: "Home", services: "Services", about: "About", team: "Team", contact: "Contact" },
      login: "Log In",
    },
    es: {
      nav: { index: "Inicio", services: "Servicios", about: "Nosotros", team: "Equipo", contact: "Contacto" },
      login: "Iniciar Sesión",
    },
  };

  const href = (key) => {
    if (key === "index") return isEn ? "/" : isTw ? "/tw_index" : isEs ? "/es_index" : "/";
    return isEn ? (key === "index" ? "/" : `/${key}`) : isTw ? `/tw_${key}` : isEs ? `/es_${key}` : (key === "index" ? "/" : `/${key}`);
  };

  const switchLangRoute = (target) => {
    const path = router.pathname;
    let key;
    if (path === "/") {
      key = "index";
    } else if (path === "/en_index") {
      key = "index";
    } else if (path === "/tw_index") {
      key = "index";
    } else if (path === "/es_index") {
      key = "index";
    } else if (path === "/about" || path === "/services" || path === "/team" || path === "/contact" || path === "/login" || path === "/signup") {
      key = path.replace(/^\//, "");
    } else if (path.startsWith("/en_")) {
      key = path.replace(/^\/en_/, "");
    } else if (path.startsWith("/tw_")) {
      key = path.replace(/^\/tw_/, "");
    } else if (path.startsWith("/es_")) {
      key = path.replace(/^\/es_/, "");
    } else {
      key = path.replace(/^\//, "");
    }

    let nextPath;
    if (target === "en") {
      nextPath = key === "index" ? "/" : `/${key}`;
    } else if (target === "tw") {
      nextPath = key === "index" ? "/tw_index" : `/tw_${key}`;
    } else if (target === "es") {
      nextPath = key === "index" ? "/es_index" : `/es_${key}`;
    } else {
      // 默认回退到首页
      nextPath = "/";
    }

    if (nextPath) {
      router.push(nextPath);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) setScroll(scrollCheck);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [scroll]);

  // ✅ 兼容中英文长度：字号更大，但间距做响应式，避免英文挤掉右侧按钮
  const navLinkClass =
    "relative inline-flex items-center " +
    "text-lg lg:text-xl font-semibold tracking-wide " + // 英文更友好
    "px-4 " + // 每项自身更宽（中文不挤），但不会太占宽
    "text-blueGray-600 " +
    "transition-all duration-200 ease-out " +
    "hover:text-blue-600 hover:bg-blue-50/50 hover:shadow-md hover:rounded-lg " +
    "active:scale-90 active:transition-transform active:duration-150 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1.5 " +
    "after:h-[3px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-center after:rounded-full " +
    "after:transition-transform after:duration-200 after:ease-out " +
    "hover:after:scale-x-100 focus-visible:after:scale-x-100";

  return (
    <>
      {/* ✅ 去掉 mt-4：消除顶部白边 */}
      <header className={scroll ? "bg-transparent sticky-bar stick" : "bg-transparent sticky-bar"}>
        <div className="container bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            {/* Logo */}
            <Link href="https://nokuinc.com" className="text-3xl font-semibold leading-none">
              <Image className="h-10" src="/assets/imgs/logos/noku-noku.png" alt="NoKu" width={125} height={40} />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-14 xl:space-x-20 2xl:space-x-24">
              <li className="pt-4 pb-4">
                <Link href={href("index")} className={navLinkClass}>
                  {I18N[lang].nav.index}
                </Link>
              </li>

              <li className="pt-4 pb-4">
                <Link href={href("services")} className={navLinkClass}>
                  {I18N[lang].nav.services}
                </Link>
              </li>

              <li className="pt-4 pb-4">
                <Link href={href("about")} className={navLinkClass}>
                  {I18N[lang].nav.about}
                </Link>
              </li>

              <li className="pt-4 pb-4">
                <Link href={href("team")} className={navLinkClass}>
                  {I18N[lang].nav.team}
                </Link>
              </li>

              <li className="pt-4 pb-4">
                <Link href={href("contact")} className={navLinkClass}>
                  {I18N[lang].nav.contact}
                </Link>
              </li>
            </ul>

            {/* Right Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href={href("login")} className="btn-accent hover-up-2">
                {I18N[lang].login}
              </Link>

              <select
                value={isEn ? "en" : isTw ? "tw" : isEs ? "es" : "en"}
                onChange={(e) => switchLangRoute(e.target.value)}
                className="btn-primary hover-up-2"
              >
                <option value="tw">繁體</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300"
                onClick={handleHidden}
              >
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
