module.exports =
{
  name: 'dis',
  description: 'répond',
  async execute(message, args)
  {
    if (!args[0])
    {
      return message.reply("dis moi à quoi répondre");
    }
    r = Math.random()*(16);
    r = r - (r%1);
    liste_choix = ["Certainement pas !" , "Tu peux compter là dessus !" , "Très probablement" , "Je ferais mieux de ne pas te le dire maintenant..." , "Impossible !" , "Demande à Benji" , "N'y compte pas..." , "C'est certain" , "Quel beau temps aujourd'hui, tu ne trouves pas ?" , "Demande à Clément", "Demande à ta mère" , "oui.", "Demande à Romane", "mdr xD", "Carrément !", "Demande à Diane"];
    message.channel.send(liste_choix[r]);
  }
}
