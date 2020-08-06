// Run dotenv
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fs=require('fs');
const help = fs.readFileSync("./text/help.txt", 'utf-8');
const about = fs.readFileSync("./text/about.txt", 'utf-8');
var arr = JSON.parse(fs.readFileSync('./commands/crafting.json', 'utf8'));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {	
	try {
		var objFound = arr.recipe.find(obj => obj.name === message.content);
		var itemname = objFound["name"];
		var itemcode = objFound["code"];
		var tosend = itemcode;
		console.log(itemname, itemcode)
		//message.author.send(itemcode); //This line sends the response in a private message
		message.reply(itemcode)
		.then(() => console.log(`Sent a reply to ${message.author.username}`))
		.catch(console.error);
		//message.channel.send(itemcode); This line sends response into the channel
	} catch (error) {
		console.error("No Match For Item");
	}
const { Client, MessageEmbed } = require('discord.js');
	
	if (message.content === 'help') {
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('CRAFTING RECIPES!')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription(help);
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
	
	
	
	//if (message.content === 'help') {


	//message.channel.send(help);

	//}
  
  	if (message.content === 'about') {


	message.channel.send(about);

	}
	

});

client.login(process.env.DISCORD_TOKEN);




