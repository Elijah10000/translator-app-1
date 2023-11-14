/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'xs':'480px',
      'sm':'768px',
      'md':'1024px',
      'lg':'1200px',
      'xl':'1440px',
    },
    colors: {
      // https://atlas.travelport.com/235fac9ab/p/01ed18-color
      'primary-A900':'#0A121A',
      'primary-A700':'#3F464C',
      'primary-A600':'#5D6268',
      'primary-A500':'#7B7F84',
      'primary-A300':'#B7B9BB',
      'primary-A100':'#E7E7E8',
      'primary-A50':'#F9F9F9',
      'primary-A0':'#FFFFFF',

      'primary-B400': '#C7B49E',
      'primary-B300': '#E1CEB6',
      'primary-B200': '#F7E4CB',
      'primary-B100': '#FBF1E4',
      'primary-B50': '#FDF8F2',

      'secondary-A700':'#334239',
      'secondary-A600':'#405348',
      'secondary-A500':'#4E6659',
      'secondary-A50':'#EFF4F1',
      
      'accent-A700': '#1F589D',
      'accent-A600': '#296BBE',
      'accent-A500': '#368CF5',
      'accent-50': '#EEF6FE'
    },
    extend: {
      width: {
        'screen-xs':'480px',
        'screen-sm':'768px',
        'screen-md':'1024px',
        'screen-lg':'1200px',
      },
      minWidth: {
        'screen-xs':'480px',
        'screen-sm':'768px',
        'screen-md':'1024px',
        'screen-lg':'1200px',
      },
      maxWidth: {
        'screen-xs':'480px',
        'screen-sm':'768px',
        'screen-md':'1024px',
        'screen-lg':'1200px',
      }
    },
  },
  plugins: [],
}
