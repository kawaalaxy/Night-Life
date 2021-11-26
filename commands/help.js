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
    .setDescription('Fonctions disponibles pour la plèbe')
    .addFields(
      {
        name: '!dé', value: 'jette un dé'
      },
      {
        name: '!ping', value: 'pong'
      },
      {
        name: '!play nom de la vidéo', value: 'joue le son de la vidéo'
      })
      //.setImage('')
      //.setFooter('');
      message.channel.send(newEmbed);
  }
}
