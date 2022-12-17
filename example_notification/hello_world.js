#!/usr/bin/env node
const notifier = require("node-dbus-notifier");

const notify = new notifier.Notify({
  appName: "JavaScript",
  appIcon: "archlinux-logo",
  summary: "Hello World!",
  hints: {
    urgency: 2,
  },
  body: "This is an example notification.",
  timeout: 5000,
});

notify.addAction("Click Me", () => {
  console.log("Click Click");
});

notify.show().then(() => console.log("notify is closed"));
