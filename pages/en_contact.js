import React, { useMemo } from "react";
import Layout from "../components/layout/Layout";

const Contact = () => {
  const toEmail = useMemo(() => "nokuinc@outlook.com", []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name?.value?.trim() || "";
    const email = form.email?.value?.trim() || "";
    const dept = form.dept?.value || "General Inquiry";
    const message = form.message?.value?.trim() || "";

    const subject = `NOKU Contact | ${dept}${name ? " | " + name : ""}`;
    const body = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Topic: ${dept}`,
      "",
      "Message:",
      message || "-",
      "",
      "----",
      "Sent from nokuinc.com contact form",
    ].join("\n");

    const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <>
      <Layout>
        {/* ✅ Header 已经 fixed 了，这里不要再用 -mt-24 / pt-40 */}
        <section className="py-16 pt-20 sm:pt-24 lg:pt-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-3">
              {/* 左侧：联系信息 */}
              <div className="w-full lg:w-1/2 px-3 mb-10 lg:mb-0">
                <div className="max-w-md">
                  <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6">
                    Contact <span className="text-blue-600 text-3xl lg:text-5xl font-bold font-heading">NoKu</span>
                  </h2>

                  <p className="text-blueGray-400 leading-relaxed mb-8">
                    Whether you’re integrating the PromiseBook protocol or exploring cross-platform, cross-region trust mechanisms,
                    we welcome serious, long-term conversations.
                  </p>

                  <div className="flex items-start mb-6">
                    <div className="mr-4 p-3 bg-blue-50 text-blue-600 rounded-lg">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <a
                        className="text-blueGray-400 hover:underline break-all"
                        href={`mailto:${toEmail}`}
                      >
                        {toEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-blue-50 text-blue-600 rounded-lg">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Digital Operations</h4>
                      <p className="text-blueGray-400">
                        Digitally Operated, Remote-first
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧：表单 */}
              <div className="w-full lg:w-1/2 px-3">
                <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-2xl border border-blueGray-100">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      {/* ✅ iOS 防放大：text-base */}
                      <input
                        name="name"
                        className="w-full p-4 text-base font-semibold leading-none bg-blueGray-50 rounded outline-none"
                        type="text"
                        placeholder="Your Name"
                        autoComplete="name"
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        name="email"
                        className="w-full p-4 text-base font-semibold leading-none bg-blueGray-50 rounded outline-none"
                        type="email"
                        placeholder="Email Address"
                        autoComplete="email"
                      />
                    </div>

                    {/* ✅ 小屏更稳：wrap + gap */}
                    <div className="mb-4 text-sm flex flex-wrap gap-6">
                      <label className="flex items-center">
                        <input
                          className="mr-2"
                          type="radio"
                          name="dept"
                          value="General Inquiry"
                          defaultChecked
                        />{" "}
                        General Inquiry
                      </label>
                      <label className="flex items-center">
                        <input
                          className="mr-2"
                          type="radio"
                          name="dept"
                          value="Business Partnership"
                        />{" "}
                        Business Partnership
                      </label>
                    </div>

                    <div className="mb-6">
                      <textarea
                        name="message"
                        className="w-full h-32 p-4 text-base font-semibold leading-relaxed resize-none bg-blueGray-50 rounded outline-none"
                        placeholder="Your Message..."
                      />
                    </div>

                    {/* ✅ 按钮：保持你修复的强制可见逻辑 */}
                    <button
                      type="submit"
                      className="
                        w-full
                        inline-flex items-center justify-center
                        h-12
                        px-8
                        text-base font-semibold
                        rounded-lg
                        bg-blue-600
                        text-white
                        opacity-100
                        hover:bg-blue-700
                        active:bg-blue-800
                        focus:outline-none focus:ring-4 focus:ring-blue-200
                        transition
                        relative z-10
                      "
                      style={{ backgroundColor: "#2563EB", color: "#FFFFFF" }}
                    >
                      Submit
                    </button>

                    <p className="mt-4 text-xs text-blueGray-400">
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
