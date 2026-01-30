import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/router";

const NAV_KEYS = ["index", "services", "about", "team", "contact"];

const getPageKeyFromPath = (pathname) => {
  if (!pathname) return "index";
  if (pathname === "/" || /^\/(en|zh|tw|es)_index$/.test(pathname)) return "index";
  if (pathname === "/services" || /^\/(en|zh|tw|es)_services$/.test(pathname)) return "services";
  if (pathname === "/about" || /^\/(en|zh|tw|es)_about$/.test(pathname)) return "about";
  if (pathname === "/team" || /^\/(en|zh|tw|es)_team$/.test(pathname)) return "team";
  if (pathname === "/contact" || /^\/(en|zh|tw|es)_contact$/.test(pathname)) return "contact";
  return "index";
};

const getSectionIdsForPage = (pageKey) => {
  if (pageKey === "index") return ["hero", "ecosystem", "values"];
  return [pageKey];
};

const Header = ({ handleHidden }) => {
  const router = useRouter();
  const [scroll, setScroll] = useState(0);
  const [activeNav, setActiveNav] = useState("index");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0, ready: false });
  const navContainerRef = useRef(null);
  const linkRefs = useRef([]);
  NAV_KEYS.forEach((_, i) => {
    if (!linkRefs.current[i]) linkRefs.current[i] = { current: null };
  });

  const isEn = router.pathname === "/" || router.pathname === "/about" || router.pathname === "/services" || router.pathname === "/team" || router.pathname === "/contact" || router.pathname === "/login" || router.pathname === "/signup" || router.pathname === "/en_index" || router.pathname.startsWith("/en_");
  const isTw = router.pathname === "/tw_index" || router.pathname.startsWith("/tw_");
  const isEs = router.pathname === "/es_index" || router.pathname.startsWith("/es_");
  const isZh = router.pathname === "/zh_index" || router.pathname.startsWith("/zh_");
  const lang = isEn ? "en" : isTw ? "tw" : isEs ? "es" : isZh ? "zh" : "en";
  const I18N = {
    tw: { nav: { index: "生態", services: "服務", about: "我們", team: "團隊", contact: "聯絡" } },
    zh: { nav: { index: "生态", services: "服务", about: "我们", team: "团队", contact: "联系" } },
    en: { nav: { index: "Home", services: "Services", about: "About", team: "Team", contact: "Contact" } },
    es: { nav: { index: "Inicio", services: "Servicios", about: "Nosotros", team: "Equipo", contact: "Contacto" } },
  };

  const href = (key) => {
    if (key === "index") return isEn ? "/" : isTw ? "/tw_index" : isEs ? "/es_index" : isZh ? "/zh_index" : "/";
    return isEn ? `/${key}` : isTw ? `/tw_${key}` : isEs ? `/es_${key}` : isZh ? `/zh_${key}` : `/${key}`;
  };

  const switchLangRoute = (target) => {
    const path = router.pathname || router.asPath || "/";
    let key;
    if (path === "/" || /^\/(en|zh|tw|es)_index$/.test(path)) key = "index";
    else if (/^\/(en|zh|tw|es)_(\w+)$/.test(path)) key = path.replace(/^\/(en|zh|tw|es)_/, "");
    else if (/^\/(about|services|team|contact|login|signup)$/.test(path)) key = path.replace(/^\//, "");
    else key = path.replace(/^\//, "") || "index";

    let nextPath;
    if (target === "en") nextPath = key === "index" ? "/" : `/${key}`;
    else if (target === "tw") nextPath = key === "index" ? "/tw_index" : `/tw_${key}`;
    else if (target === "es") nextPath = key === "index" ? "/es_index" : `/es_${key}`;
    else if (target === "zh") nextPath = key === "index" ? "/zh_index" : `/zh_${key}`;
    else nextPath = router.asPath || "/";

    if (nextPath && typeof nextPath === "string") router.push(nextPath);
  };

  const updateUnderline = useCallback(() => {
    const idx = NAV_KEYS.indexOf(activeNav);
    if (idx < 0) return;
    const el = linkRefs.current[idx]?.current;
    const container = navContainerRef.current;
    if (!el || !container) return;
    const cr = container.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    setUnderlineStyle({
      left: er.left - cr.left + container.scrollLeft,
      width: er.width,
      ready: true,
    });
  }, [activeNav]);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) setScroll(scrollCheck);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [scroll]);

  useEffect(() => {
    const pageKey = getPageKeyFromPath(router.pathname);
    setActiveNav(pageKey);
  }, [router.pathname]);

  useEffect(() => {
    const pageKey = getPageKeyFromPath(router.pathname);
    const ids = getSectionIdsForPage(pageKey);

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length === 0) return;
        setActiveNav(pageKey);
      },
      { root: null, rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    const nodes = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        nodes.push(el);
      }
    });

    return () => nodes.forEach((el) => observer.unobserve(el));
  }, [router.pathname]);

  useEffect(() => {
    updateUnderline();
    const onResize = () => updateUnderline();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateUnderline]);

  useEffect(() => {
    const t = setTimeout(updateUnderline, 100);
    return () => clearTimeout(t);
  }, [activeNav, updateUnderline, router.pathname]);

  const handleNavClick = (e, key) => {
    const pageKey = getPageKeyFromPath(router.pathname);
    if (pageKey === key) {
      e.preventDefault();
      const id = key === "index" ? "hero" : key;
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinkBase =
    "relative inline-flex items-center " +
    "text-lg lg:text-xl font-semibold tracking-wide px-4 " +
    "transition-all duration-200 ease-out " +
    "hover:text-blue-600 hover:bg-blue-50/50 hover:shadow-md hover:rounded-lg " +
    "active:scale-90 active:transition-transform active:duration-150 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 ";

  return (
    <>
      <header className={scroll ? "bg-transparent sticky-bar stick" : "bg-transparent sticky-bar"}>
        <div className="container bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            <Link href="https://nokuinc.com" className="inline-flex items-center leading-none">
              <span className="relative h-9 w-[180px] sm:h-10 sm:w-[220px] lg:w-[260px]">
                <Image
                  src="/assets/imgs/logos/noku-noku.png"
                  alt="NoKu"
                  fill
                  priority
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
                  style={{ objectFit: "contain" }}
                />
              </span>
            </Link>

            <ul
              ref={navContainerRef}
              className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-14 xl:space-x-20 2xl:space-x-24 relative"
            >
              {NAV_KEYS.map((key, i) => (
                <li key={key} ref={linkRefs.current[i]} className="pt-4 pb-4">
                  <Link
                    href={href(key)}
                    onClick={(e) => handleNavClick(e, key)}
                    className={
                      navLinkBase +
                      (activeNav === key ? " text-blue-600 " : " text-blueGray-600 ")
                    }
                  >
                    {I18N[lang].nav[key]}
                  </Link>
                </li>
              ))}
              {underlineStyle.ready && (
                <div
                  className="absolute bottom-0 h-0.5 bg-blue-600 rounded-full pointer-events-none transition-all duration-200 ease-out"
                  style={{
                    left: underlineStyle.left,
                    width: underlineStyle.width,
                  }}
                />
              )}
            </ul>

            <div className="hidden lg:flex items-center space-x-4">
              <select
                value={isEn ? "en" : isTw ? "tw" : isEs ? "es" : isZh ? "zh" : "en"}
                onChange={(e) => switchLangRoute(e.target.value)}
                className="btn-primary hover-up-2"
              >
                <option value="tw">繁體中文</option>
                <option value="zh">简体中文</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>

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
