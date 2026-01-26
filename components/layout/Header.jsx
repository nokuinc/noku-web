import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = ({ handleHidden }) => {
  const router = useRouter();
  const [scroll, setScroll] = useState(0);

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
    "transition-all duration-300 ease-out " +
    "hover:text-blue-600 hover:-translate-y-0.5 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
    "after:h-[2px] after:w-full after:bg-blue-500 after:scale-x-0 after:origin-left " +
    "after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <>
      {/* ✅ 去掉 mt-4：消除顶部白边 */}
      <header className={scroll ? "bg-transparent sticky-bar stick" : "bg-transparent sticky-bar"}>
        <div className="container bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            {/* Logo */}
            <Link href={href("index")} className="text-3xl font-semibold leading-none">
              <Image className="h-10" src="/assets/imgs/logos/noku-noku.png" alt="NoKu" width={125} height={40} />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-14 xl:space-x-20 2xl:space-x-24">
              <li className="pt-4 pb-4">
                <Link href={href("index")} className={navLinkClass}>
                  {isEn ? "Home" : "生态"}
                </Link>
              </li>

              <li className="pt-4 pb-4">
                <Link href={href("services")} className={navLinkClass}>
                  {isEn ? "Services" : "服务"}
                </Link>
              </li>

              <li className="pt-4 pb-4">
                <Link href={href("about")} className={navLinkClass}>
                  {isEn ? "About" : "我们"}
                </Link>
              </li>

              <li className="pt-4 pb-4">
                <Link href={href("team")} className={navLinkClass}>
                  {isEn ? "Team" : "团队"}
                </Link>
              </li>

              <li className="pt-4 pb-4">
                <Link href={href("contact")} className={navLinkClass}>
                  {isEn ? "Contact" : "联系"}
                </Link>
              </li>
            </ul>

            {/* Right Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href={href("login")} className="btn-accent hover-up-2">
                {isEn ? "Log In" : "登录"}
              </Link>

              <button type="button" onClick={toggleLangRoute} className="btn-primary hover-up-2">
                {isEn ? "中" : "EN"}
              </button>
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
