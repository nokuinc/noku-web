import ScrollToTop from "react-scroll-up";

export default function BackToTop() {
  return (
    <ScrollToTop showUnder={220}>
      <a
        id="scrollUp"
        aria-label="Back to top"
        className="
          fixed
          right-4 bottom-4
          sm:right-6 sm:bottom-6
          z-[60]
          inline-flex items-center justify-center
          w-11 h-11
          sm:w-12 sm:h-12
          rounded-full
          bg-white
          border border-blueGray-200
          text-blueGray-600
          shadow-lg
          hover:bg-blueGray-50
          hover:text-blue-600
          transition
          active:scale-[0.98]
          select-none
        "
        style={{
          // ✅ iOS 安全区（刘海/底部横条）避免压住
          bottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)",
        }}
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </a>
    </ScrollToTop>
  );
}
