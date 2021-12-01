module.exports =
{
  name: 'nez',
  description: 'LE nez',
  async execute(message, args)
  {
    var date = new Date();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    if (heure == minutes)
    {
      return message.reply("Bravo !");
    }
    return message.reply(`Dommage il est ${heure}h${minutes} !`);
  }
}
