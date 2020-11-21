const Discord = require("discord.js");
const client = new Discord.Client();
const token = require("./token.js");
const { fileURLToPath } = require("url");

//startup command

client.on('message', msg => {
  if (msg.content === `d!server`) {
  msg.channel.send(`This server's name is: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
}
});
client.on('message', message => {
  if (message.content === 'd!avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
    

//Message Basic Replies
client.on('message', msg => {
  if (msg.content === "quack") {
    msg.channel.send("Quack Quack!")
  }
  
  
});
client.on('message', msg => {
  if (msg.content === "Hi") {
    msg.channel.send("Hi!")
  }
  
  
});

client.on('message', msg => {
  if (msg.content === "Creeper") {
    msg.channel.send("Awww Man")
  }
  
  
});
client.on('message', msg => {
  if (msg.content === 'Hi Ducky!') {
    msg.channel.send("Hi! :D")
  }
  
  
});

client.on('message', msg => {
  if (msg.content === "Dont try it, Ducky.") {
    msg.reply("You're underestimating my POWER!")
  }
  
  
});
client.on('message', msg => {
  if (msg.content.includes("Cbster's Channel")) {
    msg.reply([
        "It seems like you are looking for Cbster's CHANNEL!",
        "Here is the link:",
        "https://www.youtube.com/channel/UCtDQClt0IT7U6L7NhTpL8cA"
    ])
  }
  
  
});
client.on('message', msg => {
  if (msg.content.startsWith(`d!ban`)) {
    msg.reply("Sorry, i can't. But it would be fun.")
  }
  
  
});
client.on('message', msg => {
  if (msg.content === "General Kenobi") {
    msg.channel.send("Hello there")
  }
  
  
});
client.on('message', msg => {
  if (msg.content === "general Kenobi") {
    msg.channel.send("Hello there")
  }
  
  
});
client.on('message', msg => {
  if (msg.content === "General kenobi") {
    msg.channel.send("Hello there")
  }
  
  
});
client.on('message', msg => {
  if (msg.content === "Eliminate") {
    msg.channel.send("Initiating destruction on 3, 2, 1... Snipers deployed... MISSION FAILED!")
  }
  
  
});
client.on('message', msg => {
  if (msg.content === 'eliminate') {
    msg.channel.send("Initiating destruction on 3, 2, 1... Snipers deployed... MISSION FAILED!")
  }
  
  
});
client.on('message', msg => {
  if (msg.content === 'What are you Ducky?') {
    msg.channel.send("I'm a dumb bot. Designed to answer messages. ;(")
  }
  
  
});
client.on('message', msg => {
  if (msg.content.startsWith("d!duck")) {
    msg.channel.send("https://www.peta.org/wp-content/uploads/2016/06/iStock_000015316532_thierry-vialard-602x399.jpg")
  }
  if (msg.content.startsWith("d!ping")) {
    msg.reply("@here")
  }
  
  if (msg.content === 'No u'){
    msg.channel.send("No u!")
  }
  if (msg.content === 'no u'){
    msg.channel.send("No u!")
  }   
  if (msg.content === 'd!piggy'){
    msg.channel.send("https://lafeber.com/mammals/wp-content/uploads/guinea-pig-px-2146091-900.jpg")
}
});


//extra stuff
//WIP!!!



client.login(token);