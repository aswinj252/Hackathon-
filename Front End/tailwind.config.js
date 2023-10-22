

import flowbitePlugin from 'flowbite/plugin';
import twElementsPlugin from "tw-elements/dist/plugin.cjs";



export default {
  content: [   "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"


],
  theme: {
    extend: {},
  },
  plugins: [  flowbitePlugin,twElementsPlugin],
}

