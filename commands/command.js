module.exports =
{
  name: 'command',
  description: "embeds",
  execute(message, args, Discord)
  {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#304281')//hexcolor
    .setTitle('Rules')
    .setURL('https://youtube.com/channel/UCIwk7B1aLpDJY94VFPIWDoA')
    .setDescription('ceci est un embed')
    .addFields(
      {
        name: 'Rule 1', value: 'Be nice'
      },
      {
        name: 'Rule 2', value: 'Be nicer'
      })
      .setImage('https://images-na.ssl-images-amazon.com/images/I/71i3BAkBLpL.jpg')
      .setFooter('Vérifier les règles du cannal');
      message.channel.send(newEmbed);
  }
}
