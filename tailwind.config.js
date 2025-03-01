/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Inter:["Inter", "system-ui"]
      },
      fontSize:{
       24:"24px",
       16:"16px",
       14:"14px",
       13:"13px",
       12:"12px"

      },
      colors:{
        h_blue:"#0CA4FA1A",
        bg_gry:"#F8FAFC",
        purple:"rgba(255, 3, 76, 0.12)",
        t_purple:'rgba(255, 3, 76, 1)',
        t_gray:'rgba(203, 213, 225, 1)',
        text_g:"rgba(71, 85, 105, 1)",
        text_b:"rgba(15, 23, 42, 1)",
        reg_bg:"rgba(241, 245, 249, 1)",
        reg_blue:"rgba(12, 164, 250, 1)",
        reg_gray:"rgba(30, 41, 59, 1)"
      },
      width:{
        710:"710px",
        432:"432px",
        420:"420px",
        115:"115px",
        112:"112px",
        53:"53px",
        42:"42px"
      },
      height:{
        336:"336px",
        320:"320px",
        88:"88px",
        48:"48px",
        42:"42px",
        32:"32px"
      },
      padding:{
        124:"124px"
      }
    },
  },
  plugins: [],
}