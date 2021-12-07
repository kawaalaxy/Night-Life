module.exports =
{
  name: 'choix',
  description: 'fait un choix',
  async execute(message, args)
  {
    if (!args[0])
    {
      return message.reply("dis moi quoi choisir");
    }
    r = Math.random()*6;
    r = r - (r%1);
    liste_choix = ["Certainement pas !", "oui.", "Demande à Romane", "mdr xD", "Carrément", "Demande à Diane"];
    message.channel.send(liste_choix[r]);
  }
}
