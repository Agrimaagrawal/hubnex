/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pink':'#FF426F',
        'ablack':'#100F0F',
        'twhite':' #F4F4F4',
        'orange':'#FF5300',
        'grey':' #565656',
        'bgblack':'#0D0D0D',
        'linegreen':"#23FFF2",
     },
      fontFamily :{
        'gilroy-light': ['GilroyLight', 'sans-serif'],
        'gilroy-extrabold': ['GilroyExtraBold', 'sans-serif'],
        'gilroy-bold': ['GilroyBold', 'sans-serif'],
        'gilroy-semi-bold': ['GilroySemiBold', 'sans-serif'],
        'gilroy-regular': ['GilroyRegular', 'sans-serif'],
        'gilroy-thin': ['GilroyThin', 'sans-serif'],
        'gilroy-medium': ['GilroyMedium', 'sans-serif'],
        'gilroy-heavy': ['GilroyHeavy', 'sans-serif'],
        'gilroy-black': ['GilroyBlack', 'sans-serif'],
        'gilroy-ultra-light': ['GilroyUltraLight', 'sans-serif'],
      },
      backgroundImage: {
        'serviceLander': "url('@assets/serviceLander.png')",
        'balloonMob': "url('@assets/balloonMob.png')",
        'thanos': "url('@assets/thano.png')",
        'land': "url('@assets/testimo.png')",
        'vector2': "url('@assets/vector2.png')",
        'indusLander': "url('@assets/hero.png')",
        'manart': "url('@assets/manArt.png')",
        'cardbg': "url('@assets/cardbg.jpg')",
        'vector': "url('@assets/backgroundVector.png')",
        'moon': "url('@assets/brandMoon.png')",
        'landerImg': "url('@assets/landerImage1.png')",
        'balloon': "url('@assets/balloon.png')",
        'balloon1': "url('@assets/balloon1.png')",
        'footerImg': "url('@assets/footer.png')",
        'abouts': "url('@assets/abouts.png')",
        'earth':"url('@assets/earth.png')",
        'hands':"url('@assets/hands.png')",
        'healthindus':"url(@assets/healthindus.png)"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
