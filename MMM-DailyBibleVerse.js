Module.register("MMM-DailyBibleVerse", {
  defaults: {
    updateInterval: 86400000,
  },

  start: function() {
    this.verse = "Loading daily Bible verse...";
    this.sendSocketNotification("FETCH_BIBLE_VERSE");
    this.scheduleUpdate();
  },

  getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.className = "bibleVerse";
    wrapper.innerHTML = this.verse;
    return wrapper;
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification === "BIBLE_VERSE_RECEIVED") {
      this.verse = `${payload.text} - ${payload.reference}`;
      this.updateDom();
    }
  },

  scheduleUpdate: function() {
    setInterval(() => {
      this.sendSocketNotification("FETCH_BIBLE_VERSE");
    }, this.config.updateInterval);
  },

  getStyles: function() {
    return ["MMM-DailyBibleVerse.css"];
  }
});
