module.exports =
{
  name: 'nez',
  description: 'LE nez',
  async execute(message, args, liste_nez)
  {
    if (args[0])
    {
      if (args[0] == "liste")
      {
        if (!liste_nez[0])
        {
          message.channel.send("la liste est vide")
        }
        else
        {
          message.channel.send(liste_nez);
        }
      }
    }
    else
    {
      var date = new Date();
      var heure = (date.getHours() + 1) % 24;
      var minutes = (date.getHours() + 1) % 24;//date.getMinutes();
      var i = 0;
      if (heure == minutes)
      {
        if (liste_nez)
        {
          while (i < liste_nez.length && ( !(liste_nez[i][0] == message.author.username)))
          {
            i = i + 1;
          }
        }
        if (i == liste_nez.length)
        {
          liste_nez.push([message.author.username, 0])
        }
        liste_nez[i][1] = liste_nez[i][1] + 1;
        return message.reply("Bravo !");
      }
      return message.reply(`Dommage il est ${heure}h${minutes} !`);
    }
  }
}
