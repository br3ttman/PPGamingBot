// Run dotenv
//require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs=require('fs');
const questlist = fs.readFileSync("./text/questlist.txt", 'utf-8');
var arr = JSON.parse(fs.readFileSync('./commands/quests.json', 'utf8'));
const { Client, MessageEmbed } = require('discord.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = "!";
client.on("message", (message) => {	
	
	msg = message.content.toLowerCase();
		
	try {
		var objFound = arr.quests.find(obj => obj.name === message.content);
		var itemname = objFound["name"];
		var itemcode = objFound["code"];
		var tosend = itemcode;
		console.log(itemname, itemcode)
		message.author.send(itemcode); //This line sends the response in a private message
		message.reply("Guide has been sent, check you DM's")
		.then(() => console.log(`Sent a reply to ${message.author.username}`))//sends a reply to the user
		.catch(console.error);
		//message.channel.send(itemcode); This line sends response into the channel
	} catch (error) {
		console.error("No Match For Item");
	}
	
	if (message.content === 'quests') {
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('QUEST GUIDES!')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription(questlist);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }

	//message.channel.send(questlist);


  
  	if (message.content === 'about') {


	message.channel.send(about);

	}
	

});

client.login('NzQwNTE1NTU0ODkyMTg1NjQw.XyqI2g.RoYuLu2MT-kRPvmLfiovf-GdEIs');




