const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '!';
const fs = require('fs');
trn = 0;
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () =>
{
  console.log('Stranger est connecté');
});

client.on('message', message =>
{
  if(!message.content.startsWith(prefix) /*|| message.author.bot*/)
  {
    if (trn == 9 && !message.author.bot)
    {
      client.commands.get('tourne').execute(message);
    }
    else
    {
      trn = Math.random()*20;
      trn = trn - (trn%1) + 1;
      return;
    }
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping')
  {
    client.commands.get('ping').execute(message, args);
  }
  else if(command === 'parle')
  {
    client.commands.get('parle').execute(message, args);
  }
  else if(command === 'dé')
  {
    client.commands.get('dé').execute(message, args);
  }
  else if (command == 'quote')
  {
    client.commands.get('quote').execute(message, args);
  }
  else if (command == 'help')
  {
    client.commands.get('help').execute(message, args, Discord);
  }
  else if (command == 'nez')
  {
    client.commands.get('nez').execute(message, args, Discord);
  }
  else if (command == 'choix')
  {
    client.commands.get('choix').execute(message, args, Discord);
  }
  else if (command == 'dis')
  {
    client.commands.get('dis').execute(message, args, Discord);
  }
  else if (command == 'clear')
  {
    client.commands.get('clear').execute(message, args);
  }
  else if (command == 'reactionrole')
  {
    client.commands.get('clear').execute(message, "1");
    client.commands.get('reactionrole').execute(message, args, Discord, client);
  }
  else if (command == 'play')
  {
    client.commands.get('play').execute(message, args);
  }
  else if (command == 'stop')
  {
    client.commands.get('stop').execute(message, args);
  }
});














client.login(/*config.token*/process.env.TOKEN);
