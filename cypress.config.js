const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '68j1qq',
  e2e: {
    "reporter": "mochawesome",
    "reporterOptions":{
      "chats":true,
"overwrite":false,
"html":false,
"json":true,
"reportDir": "cypress/reports"

}},
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
);
