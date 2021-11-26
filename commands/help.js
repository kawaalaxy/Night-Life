module.exports =
{
  name: 'help',
  description: "liste de fonctions",
  execute(message, args, Discord)
  {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#304281')//hexcolor
    .setTitle('Help')
    .setURL('https://youtu.be/w0AOGeqOnFY')
    .setDescription('Fonctions')
    .addFields(
      {
        name: 'Fonctions disponibles pour la plèbe :', value: '.'
      },
      {
        name: '!dé', value: 'jette un dé'
      },
      {
        name: '!ping', value: 'pong'
      },
      {
        name: '!play nom de la vidéo', value: 'joue le son de la vidéo'
      },
      {
        name: '!stop', value: 'fait quitter le vocal'
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
      message.channel.send(newEmbed);
  }
}
