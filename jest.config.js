// jest.config.js
module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/index.tsx",
    "!**/_app.tsx",
    "!**/_document.tsx",
    "!<rootDir>/node_modules/",
    "!<rootDir>/*.config.js",
    "!<rootDir>/.next/**",
    "!<rootDir>/coverage/**",
    "!<rootDir>/interface/**",
    "!<rootDir>/public/**",
    "!<rootDir>/pages/**",
    "!<rootDir>/next-env.d.ts",
  ],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
