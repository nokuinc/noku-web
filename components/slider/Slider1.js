import { useState } from "react";

const slides = [
  {
    img: "/assets/imgs/placeholders/img-10.jpg",
    title: "User Growth",
    subtitle: "WeXun（微讯）",
    cta: "View Details",
    link: "https://wexun.com",
  },
  {
    img: "/assets/imgs/placeholders/img-11.jpg",
    title: "Revenue Growth",
    subtitle: "YouBo（优博）",
    cta: "View Details",
    link: "https://yuobo.com",
  },
  {
    img: "/assets/imgs/placeholders/img-12.jpg",
    title: "Market Growth",
    subtitle: "PledgeDoc（诺书）",
    cta: "View Details",
    link: "https://pledgedoc.com",
  },
];

function SlideCard({ img, title, subtitle, cta, link }) {
  return (
    <div className="bg-white shadow rounded-2xl p-4 w-full max-w-[520px]">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={img}
          alt={title}
          className="block w-full h-auto object-cover transform origin-right scale-125"
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h4 className="text-xl font-bold text-blue-600 truncate">
            {title}
          </h4>
          <p className="text-sm text-blueGray-400 truncate">
            {subtitle}
          </p>
        </div>

        {/* ✅ View Details 链接按钮 */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            shrink-0
            px-4 py-2
            text-sm
            border border-blue-500
            text-blue-500
            rounded-lg
            hover:bg-blue-500 hover:text-white
            transition
          "
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

export default function Slider1() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative">
      <div className="flex justify-center">
        <SlideCard {...slides[index]} />
      </div>

      {/* Arrow controls */}
      <div className="flex justify-center mt-8">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() =>
              setIndex((i) => (i - 1 + slides.length) % slides.length)
            }
            style={{
              fontSize: 34,
              fontWeight: 900,
              lineHeight: 1,
              color: "#667085",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "10px 12px",
              userSelect: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#2563EB")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#667085")
            }
            aria-label="Previous"
          >
            ←
          </button>

          {/* 固定间距 */}
          <span style={{ display: "inline-block", width: 90 }} />

          <button
            onClick={() =>
              setIndex((i) => (i + 1) % slides.length)
            }
            style={{
              fontSize: 34,
              fontWeight: 900,
              lineHeight: 1,
              color: "#667085",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "10px 12px",
              userSelect: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#2563EB")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#667085")
            }
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
