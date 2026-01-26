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

        <nav className="fixed top-0 left-0 bottom-0 w-[30vw] flex flex-col px-6 bg-white border-r overflow-y-auto transition duration-300">
          <div className="flex items-center mb-8">
            <Link href={href("index")} className="flex items-center flex-shrink-0 mr-auto text-3xl font-semibold leading-none">
              <Image className="h-14 w-auto" src="/assets/imgs/logos/monst-logo.svg" alt="NoKu" width={175} height={56} />
            </Link>
            <button className="navbar-close" onClick={handleRemove}>✕</button>
          </div>

          <ul className="mobile-menu">
            <li>
              <Link href={href("index")} className="block p-4 text-sm">
                {isEn ? "Home" : "生态"}
              </Link>
            </li>
            <li>
              <Link href={href("services")} className="block p-4 text-sm">
                {isEn ? "Services" : "服务"}
              </Link>
            </li>
            <li>
              <Link href={href("about")} className="block p-4 text-sm">
                {isEn ? "About" : "我们"}
              </Link>
            </li>
            <li>
              <Link href={href("team")} className="block p-4 text-sm">
                {isEn ? "Team" : "团队"}
              </Link>
            </li>
            <li>
              <Link href={href("contact")} className="block p-4 text-sm">
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
