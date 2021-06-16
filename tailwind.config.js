module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2196F3',
        primary_2: '#46D5B5',
        secondary: '#FAFAFA',
        tertiary: '#ACB9C2',
      },
      minWidth: {
        '30': '30px',
        '42': '42px',
        '70': '70px',
      },
      maxWidth: {
        '30': '30px',
      },
      minHeight: {
        '30': '30px',
        '42': '42px',
        '70': '70px',
      },
      maxHeight: {
        '30': '30px',
      },
      lineHeight: {
        '7.5': '1.88rem',
      },
      borderRadius: {
        'circle': '50%',
      },
      backgroundPosition: {
        'center-2': 'center center',
      },
      backgroundImage: theme => ({
        'check-mark': 'url(/public/assets/check-mark.svg)',
      }),
      keyframes: {
        radioBtn: {
          '0%': {transform: 'scale(0)'},
          '80%': {transform: 'scale(1.1)'},
          '100%': {transform: 'scale(1)'},
        }
      },
      animation: {
        animateRadioBtn: 'animateRadioBtn 0.5s'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
