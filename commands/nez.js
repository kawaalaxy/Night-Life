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
          var liste_f = []
          for (var i = 0; i < liste_nez.length; i++)
          {
            liste_f.push(liste_nez[i][0].concat' -> ', liste_nez[i][1].toString(), ' nez\\n');
          }
          message.channel.send(liste_f);
        }
      }
    }
    else
    {
      var date = new Date();
      var heure = (date.getHours() + 1) % 24;
      var minutes = //date.getMinutes();
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
