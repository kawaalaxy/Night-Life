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
    r = Math.random()*(liste_choix.length);
    r = r - (r%1);
    liste_choix = ["Certainement pas !" , "Demande à Benji" , "N'y compte pas" , "C'est certain" , "Quel beau temps aujourd'hui, tu ne trouves pas ?" , "Demande à Clément", "Demande à ta mère" , "oui.", "Demande à Romane", "mdr xD", "Carrément", "Demande à Diane"];
    console.log(r);
    console.log(liste_choix[r]);
    message.channel.send(liste_choix[r]);
  }
}