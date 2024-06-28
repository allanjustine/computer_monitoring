/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/Request/Login.jsx', './src/Dashboard/Sidebar.jsx', './src/Request/Signup.jsx', './src/Request/Reset.jsx', './src/Request/Forgot.jsx',
      './src/Dashboard/Dashboard.jsx', './src/Dashboard/Setup/Unit.jsx', './src/Dashboard/Setup/Set.jsx', './src/Dashboard/Profile.jsx', './src/Dashboard/Computers.jsx',
      './src/Dashboard/Popup for Computers/Specs.jsx', './src/Dashboard/Popup for Computers/View.jsx', './src/Dashboard/Popup for Computers/Editview.jsx',
      './src/Dashboard/Popup for Computers/Qr.jsx', './src/Dashboard/Qrcodes.jsx', './src/Dashboard/Setup/Add.jsx', './src/Dashboard/Setup/Editset.jsx', './src/Dashboard/Extract.jsx',
      './src/Dashboard/Db2.jsx', './src/Dashboard/Codes.jsx', './src/Dashboard/Setup/User.jsx', './src/context/Loading.jsx'

    ],
    options: {
      safelist: ['class-to-keep'],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}



