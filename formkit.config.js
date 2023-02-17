// formkit.config.js
import { defaultConfig } from "@formkit/vue";
import {
  createFloatingLabelsPlugin,
  createAutoAnimatePlugin,
} from "@formkit/addons";

import "@formkit/addons/css/floatingLabels";

const config = defaultConfig({
  plugins: [
    createAutoAnimatePlugin(),
    createFloatingLabelsPlugin({
      useAsDefault: true,
    }),
  ],
});

export default config;
