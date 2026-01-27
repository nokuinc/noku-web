'use client'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const MobileMenu = ({ hiddenClass, handleRemove }) => {
  const router = useRouter();

  const isEn = router.pathname === "/en_index" || router.pathname.startsWith("/en_");

  const href = (key) => {
    if (key === "index") return isEn ? "/en_index" : "/";
    return isEn ? `/en_${key}` : `/${key}`;
  };

  const toggleLangRoute = () => {
    const path = router.pathname;

    let nextPath;
    if (path === "/") nextPath = "/en_index";
    else if (path === "/en_index") nextPath = "/";
    else if (path.startsWith("/en_")) nextPath = path.replace(/^\/en_/, "/");
    else nextPath = `/en_${path.replace(/^\//, "")}`;

    router.push(nextPath);
    handleRemove();
  };

  return (
    <>
      <div className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}>
        <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>

        <nav className="fixed top-0 left-0 bottom-0 flex flex-col px-6 bg-white border-r overflow-y-auto transition duration-300" style={{ width: "35vw" }}>
          <div className="flex items-center mb-8">
            <Link href={href("index")} className="flex items-center flex-shrink-0 mr-auto text-3xl font-semibold leading-none" style={{ marginTop: "20px" }}>
              <Image className="h-14 w-auto" src="/assets/imgs/logos/monst-logo.svg" alt="NoKu" width={175} height={56} />
            </Link>
            <button className="navbar-close" onClick={handleRemove} style={{ position: "absolute", top: "64px", right: "16px", zIndex: 9999, padding: "8px" }}>✕</button>
          </div>

          <ul className="mobile-menu">
            <li>
              <Link href={href("index")} className="relative block p-4 text-sm transition-all duration-200 ease-out hover:opacity-90 active:opacity-70 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100">
                {isEn ? "Home" : "生态"}
              </Link>
            </li>
            <li>
              <Link href={href("services")} className="relative block p-4 text-sm transition-all duration-200 ease-out hover:opacity-90 active:opacity-70 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100">
                {isEn ? "Services" : "服务"}
              </Link>
            </li>
            <li>
              <Link href={href("about")} className="relative block p-4 text-sm transition-all duration-200 ease-out hover:opacity-90 active:opacity-70 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100">
                {isEn ? "About" : "我们"}
              </Link>
            </li>
            <li>
              <Link href={href("team")} className="relative block p-4 text-sm transition-all duration-200 ease-out hover:opacity-90 active:opacity-70 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100">
                {isEn ? "Team" : "团队"}
              </Link>
            </li>
            <li>
              <Link href={href("contact")} className="relative block p-4 text-sm transition-all duration-200 ease-out hover:opacity-90 active:opacity-70 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100">
                {isEn ? "Contact" : "联系"}
              </Link>
            </li>
          </ul>

          {/* 语言切换按钮（B：中文显示 EN，英文显示 中） */}
          <div className="mt-6">
            <button type="button" onClick={toggleLangRoute} className="btn-primary w-full">
              {isEn ? "中" : "EN"}
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}

export default MobileMenu
