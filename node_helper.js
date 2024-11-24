const NodeHelper = require("node_helper");
let fetch;
import('node-fetch').then(module => {
    fetch = module.default;
});

module.exports = NodeHelper.create({
  // Called when the node helper is started
  start: function() {
    console.log("Node helper for DailyBibleVerse started.");
  },

  // Function to fetch a random Bible verse from the API
  fetchBibleVerse: async function() {
    try {
      const response = await fetch("https://beta.ourmanna.com/api/v1/get/?format=json");
      const data = await response.json();
      const verse = {
        text: data.verse.details.text,
        reference: data.verse.details.reference
      };
      this.sendSocketNotification("BIBLE_VERSE_RECEIVED", verse);
    } catch (error) {
      console.error("Error fetching Bible verse:", error);
    }
  },

  // Receive notification from the main module and trigger fetch
  socketNotificationReceived: function(notification) {
    if (notification === "FETCH_BIBLE_VERSE") {
      this.fetchBibleVerse();
    }
  }
});
