const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@context": path.resolve(__dirname, "src/context/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/src/components$1",
        "^@context(.*)$": "<rootDir>/src/context$1",
        "^@styles(.*)$": "<rootDir>/src/styles$1",
        "^@routes(.*)$": "<rootDir>/src/routes$1",
        "^@pages(.*)$": "<rootDir>/src/pages$1",
        "^@hooks(.*)$": "<rootDir>/src/hooks$1",
      },
    },
  },
};
