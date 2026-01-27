'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const MobileMenu = ({ hiddenClass, handleRemove }) => {
  const router = useRouter();

  const isEn = router.pathname === "/" || router.pathname === "/about" || router.pathname === "/services" || router.pathname === "/team" || router.pathname === "/contact" || router.pathname === "/login" || router.pathname === "/signup" || router.pathname === "/en_index" || router.pathname.startsWith("/en_");
  const isTw = router.pathname === "/tw_index" || router.pathname.startsWith("/tw_");
  const isEs = router.pathname === "/es_index" || router.pathname.startsWith("/es_");

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
    }

    router.push(nextPath);
    handleRemove();
  };

  return (
    <>
      <div className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}>
        <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>

        <nav className="fixed top-0 left-0 bottom-0 flex flex-col px-6 bg-white border-r overflow-y-auto transition duration-300" style={{ width: "45vw" }}>
          <div className="flex items-center mb-8">
            <Link href={href("index")} className="flex items-center flex-shrink-0 mr-auto text-3xl font-semibold leading-none" style={{ marginTop: "20px" }}>
              <Image className="h-14 w-auto" src="/assets/imgs/logos/monst-logo.svg" alt="NoKu" width={175} height={56} />
            </Link>
            <button className="navbar-close" onClick={handleRemove} style={{ position: "absolute", top: "64px", right: "16px", zIndex: 9999, padding: "8px" }}>✕</button>
          </div>

          <ul className="mobile-menu">
            <li>
              <Link href={href("index")} className="relative block p-4 text-sm transition-all duration-200 ease-out hover:opacity-90 active:opacity-70 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100">
                {isEn ? "Home" : isTw ? "首頁" : isEs ? "Inicio" : "Home"}
              </Link>
            </li>
            <li>
              <Link href={href("services")} className="relative block p-4 text-sm transition-all duration-200 ease-out hover:opacity-90 active:opacity-70 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100">
                {isEn ? "Services" : isTw ? "服務" : isEs ? "Servicios" : "Services"}
              </Link>
            </li>
            <li>
              <Link href={href("about")} className="relative block p-4 text-sm transition-all duration-200 ease-out hover:opacity-90 active:opacity-70 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100">
                {isEn ? "About" : isTw ? "我們" : isEs ? "Nosotros" : "About"}
              </Link>
            </li>
            <li>
              <Link href={href("team")} className="relative block p-4 text-sm transition-all duration-200 ease-out hover:opacity-90 active:opacity-70 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100">
                {isEn ? "Team" : isTw ? "團隊" : isEs ? "Equipo" : "Team"}
              </Link>
            </li>
            <li>
              <Link href={href("contact")} className="relative block p-4 text-sm transition-all duration-200 ease-out hover:opacity-90 active:opacity-70 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100">
                {isEn ? "Contact" : isTw ? "聯絡" : isEs ? "Contacto" : "Contact"}
              </Link>
            </li>
          </ul>

          {/* 语言切换下拉（B：中文显示 EN，英文显示 中） */}
          <div className="mt-6">
            <select
              value={isEn ? "en" : isTw ? "tw" : isEs ? "es" : "en"}
              onChange={(e) => switchLangRoute(e.target.value)}
              className="btn-primary w-full"
            >
              <option value="tw">繁體</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>
        </nav>
      </div>
    </>
  )
}

export default MobileMenu
