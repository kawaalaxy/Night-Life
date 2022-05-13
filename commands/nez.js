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
          for (var i = 0; i < liste_nez.length; i++)
          {
            message.channel.send(liste_nez[i][0] + ": " + liste_nez[i][t]);
          }
        }
      }
    }
    else
    {
      var date = new Date();
      var heure = (date.getHours() + 2) % 24;
      var minutes = date.getMinutes();//date.getMinutes();
      var i = 0;
      if (minutes == minutes)//heure = minutes
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
          liste_nez.push([message.author.username, 0, date])
        }
        else
        {
          if ((heure == (liste_nez[i][2].getHours() + 2) % 24) && (liste_nez[i][2].getDate() == date.getDate()))
          {
            return message.reply("Tu as déjà fait le nez pour cette heure !");
          }
        }
        liste_nez[i][1] = liste_nez[i][1] + 1;
        liste_nez[i][2] = date;
        return message.reply("Bravo !");
      }
      return message.reply(`Dommage il est ${heure}h${minutes} !`);
    }
  }
}
