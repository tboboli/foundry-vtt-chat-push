console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
  console.log("CHAT-SIGNALING - init - This code runs once the Foundry VTT software begins its initialization workflow.");
});

Hooks.on("ready", function() {
  console.log("CHAT-SIGNALING - ready - This code runs once core initialization is ready and game data is available.");
});

Hooks.on("chatMessage", function(chatLog, message, chatData) {
    console.log("CHAT-SIGNALING - chatMessage " + message);
  });