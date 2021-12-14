// jest.config.js
module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/index.tsx",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx",
    "!<rootDir>/node_modules/",
  ],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
