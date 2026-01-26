const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // 确保覆盖所有组件
  ],
  theme: {
      extend: {
          colors: {
              // === 诺库 (NOKU) 核心品牌色 ===
              // 强制覆盖默认的蓝色，让所有按钮瞬间变深
              blue: {
                  50:  "#f0f9ff",
                  100: "#e0f2fe",
                  400: "#38bdf8",
                  500: "#0F172A", // <--- 核心：主按钮变成深邃的诺库蓝
                  600: "#1E293B", // <--- 悬停：变灰蓝
                  900: "#0F172A", // <--- 深色背景
              },
              // 纽库金
              nokuGold: {
                  DEFAULT: "#EAB308",
              },
          },
          fontFamily: {
              sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
          },
      }
  },
  variants: {
      extend: {}
  },
  plugins: []
};