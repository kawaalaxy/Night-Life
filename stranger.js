const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '!';
const fs = require('fs');
trn = 0;
liste = [];
liste_nez = [];
test_1 = 0;
skip = 0;
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
      trn = Math.random()*50;
      trn = trn - (trn%1) + 1;
      return;
    }
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  let server = message.guild.id;
  if(command === 'ping')
  {
    client.commands.get('ping').execute(message, args);
  }
  else if(command === 'parle' && server == "757635152175431810")
  {
    client.commands.get('parle').execute(message, args);
  }
  else if(command === 'dé')
  {
    client.commands.get('dé').execute(message, args);
  }
  else if (command == 'help' && server == "757635152175431810")
  {
    client.commands.get('help').execute(message, args, Discord);
  }
  else if (command == 'nez')
  {
    client.commands.get('nez').execute(message, args, liste_nez, Discord);
  }
  else if (command == 'choix')
  {
    client.commands.get('choix').execute(message, args, Discord);
  }
  else if (command == 'dis')
  {
    client.commands.get('dis').execute(message, args, Discord);
  }
  else if (command == 'pokédex')
  {
    client.commands.get('pokédex').execute(message, args, Discord);
  }
  else if (command == 'clear')
  {
    client.commands.get('clear').execute(message, args);
  }
  else if (command == 'reactionrole' && server == "757635152175431810")
  {
    client.commands.get('clear').execute(message, "1");
    client.commands.get('reactionrole').execute(message, args, Discord, client);
  }
  else if (command == 'play')
  {
    client.commands.get('play').execute(message, args, liste, skip);
  }
  else if (command == 'stop')
  {
    client.commands.get('stop').execute(message, args, liste);
  }
  else if (command == 'skip')
  {
    client.commands.get('skip').execute(message, args, client.commands, liste);
  }
  else if (command == 'liste')
  {
    client.commands.get('liste').execute(message, liste);
  }
  else if (command == 'test')
  {
    client.commands.get('test').execute(message, args);
  }
  else if (command == 'test1')
  {
    client.commands.get('test1').execute(message, args, test_1 = 0);
  }
  else if (command == 'test2')
  {
    client.commands.get('test2').execute(message, args, client.commands);
  }
});














client.login(/*config.token*/process.env.TOKEN);
