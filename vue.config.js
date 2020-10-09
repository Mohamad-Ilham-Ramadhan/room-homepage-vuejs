module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @use "sass:color";
          @import "@/assets/scss/variables.scss";
          @import "@/assets/scss/bootstrap-prep.scss";
          `,
      },
    },
  },
};
