// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            correct: "#4CAF50",
            misplaced: "#FFC107",
            wrong: "#F44336",
            unknown: "#222222",
          },
        },
        light: {
          colors: {
            correct: "#6CCF70",
            misplaced: "#FFD137",
            wrong: "#F46356",
            unknown: "#eeeeee",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
