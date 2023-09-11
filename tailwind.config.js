/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:
    {

      theme: {
        extend: {
          colors: {
            coolLink: '#000',
          },
        },
      },

      keyframes: {
        customZoom: {
          '0%': {
            transform: 'scale(1.3)',
          },
          '15%': {
            transform: 'scale(1)',
          },
          '85%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(1.3)',
          },
        },
      },
      // keyframes :
      // {
      //   'Zoom' : {
      //     '0%' : { transform: scale(1.3),},

      //   '15%' : {
      //       transform: scale(1),
      //   },

      //   '85%' : {
      //       transform: scale(1),
      //   },

      //   '100%' : {
      //       transform: scale(1.3)
      //   }
      //   },

      // },

      animation:
      {
        Zoom: 'customZoom 2.5s linear infinite'
      },

      colors: {
        primary: "#4A3AFF",
        
      },

      backgroundImage: {
        Hero: "url('assets/slide-02.jpg')"
      },

      transition: {
        transition1: "width 0.3s"
      },

      boxShadow : {
        navshadow : "0px 5px 10px #999"
      },


    },

    variants: {
      extend: {
        backgroundColor: ['active'],
        width: ['hover'],
      },
    },


  },
  plugins: [],
  // plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
  // corePlugins: {
  //   // ...
  //   animations: true, // Enable animations
  // },

  // keyframes: {
  //   customZoom: {
  //     '0%': {
  //       transform: 'scale(1.3)',
  //     },
  //     '15%': {
  //       transform: 'scale(1)',
  //     },
  //     '85%': {
  //       transform: 'scale(1)',
  //     },
  //     '100%': {
  //       transform: 'scale(1.3)',
  //     },
  //   },
  // },

}

