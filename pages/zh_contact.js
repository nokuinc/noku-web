import React, { useMemo } from "react";
import Layout from "../components/layout/Layout";

const Contact = () => {
  const toEmail = useMemo(() => "nokuinc@outlook.com", []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name?.value?.trim() || "";
    const email = form.email?.value?.trim() || "";
    const dept = form.dept?.value || "一般咨询";
    const region = form.region?.value || "";
    const message = form.message?.value?.trim() || "";

    const subject = `NOKU Contact | ${dept}${region ? " | " + region : ""}${name ? " | " + name : ""}`;
    const body = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Inquiry Type: ${dept}`,
      `Region: ${region || "-"}`,
      "",
      "Message:",
      message || "-",
      "",
      "----",
      "Sent from nokuinc.com (Noku LLC official website) contact form",
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
        <section id="contact" className="py-16 pt-20 sm:pt-24 lg:pt-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-3">
              {/* 左侧：联系信息 */}
              <div className="w-full lg:w-1/2 px-3 mb-10 lg:mb-0">
                <div className="max-w-md">
                  <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6">
                    联系 <span className="text-blue-600 text-3xl lg:text-5xl font-bold font-heading">Noku LLC</span>
                  </h2>

                  <p className="text-blueGray-400 leading-relaxed mb-4">
                    nokuinc.com 为 Noku LLC 全球唯一官方官网。Noku LLC 为技术与基础设施提供方，不处理或托管用户资金，不提供投资、理财或收益承诺，不介入平台交易或用户决策。
                  </p>
                  <p className="text-blueGray-500 text-sm leading-relaxed mb-8">
                    合作、尽调、合规及技术咨询的正式沟通入口。
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
                      <h4 className="font-bold text-gray-900 mb-1">电子邮件</h4>
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
                      <h4 className="font-bold text-gray-900 mb-1">运营方式</h4>
                      <p className="text-blueGray-400">
                        数字化运营，远程办公
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
                      <input
                        name="name"
                        className="w-full p-4 text-base font-semibold leading-none bg-blueGray-50 rounded outline-none"
                        type="text"
                        placeholder="姓名"
                        autoComplete="name"
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        name="email"
                        className="w-full p-4 text-base font-semibold leading-none bg-blueGray-50 rounded outline-none"
                        type="email"
                        placeholder="邮箱"
                        autoComplete="email"
                      />
                    </div>

                    <div className="mb-4 text-sm flex flex-wrap gap-6">
                      <span className="font-semibold text-blueGray-700">咨询类型：</span>
                      <label className="flex items-center">
                        <input className="mr-2" type="radio" name="dept" value="一般咨询" defaultChecked /> 一般咨询
                      </label>
                      <label className="flex items-center">
                        <input className="mr-2" type="radio" name="dept" value="技术咨询" /> 技术咨询
                      </label>
                      <label className="flex items-center">
                        <input className="mr-2" type="radio" name="dept" value="商务合作" /> 商务合作
                      </label>
                    </div>

                    <div className="mb-4">
                      <select
                        name="region"
                        className="w-full p-4 text-base font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      >
                        <option value="">地区（可选）</option>
                        <option value="亚太">亚太</option>
                        <option value="美洲">美洲</option>
                        <option value="欧洲">欧洲</option>
                        <option value="其他">其他</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <textarea
                        name="message"
                        className="w-full h-32 p-4 text-base font-semibold leading-relaxed resize-none bg-blueGray-50 rounded outline-none"
                        placeholder="留言内容"
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
                      提交信息
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
