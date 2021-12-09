module.exports =
{
  name: 'help',
  description: "liste de fonctions",
  execute(message, args, Discord)
  {
    console.log("a aidé ");
    console.log(message.author.username);
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#304281')//hexcolor
    .setTitle('Help')
    .setURL('https://youtu.be/w0AOGeqOnFY')
    .setDescription('Fonctions')
    .addFields(
      {
        name: 'Fonctions disponibles pour tous :', value: '..........................................'
      },
      {
        name: '!dé x', value: 'jette un dé à x faces'
      },
      {
        name: '!ping', value: 'pong'
      },
      {
        name: '!nez', value: 'LE nez'
      },
      {
        name: '!play nom de la vidéo', value: 'joue le son de la vidéo'
      },
      {
        name: '!stop', value: 'quitte le vocal'
      }
      ,
      {
        name: '!dis', value: 'répond à ta question'
      }
      ,
      {
        name: '!choix choix_1 ou choix_2', value: 'te dis quoi choisir entre 2 propositions'
      }
      //,{
      //  name: 'Fonctions disponibles pour les bg :', value: '.'
      //},
      //{
      //  name: '!clear x', value: 'efface x messages'
      //},
      //{
      //  name: '!parle message', value: 'dit le message'
      //}
    )
      //.setImage('')
      //.setFooter('');
      message.channel.bulkDelete(1);
      message.author.send(newEmbed);
  }
}
