const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports check support\e2e file also
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports , install "npm i --save-dev cypress-mochawesome-reporter"
      screenshotOnRunFailure=true;
    },
    video: true, // Enable video recording
    videosFolder: "cypress/videos", // Default folder for videos
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Spec pattern
  },
});
