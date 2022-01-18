module.exports =
{
  name: 'liste',
  description: "affiche la liste d'attente",
  async execute(message, args, commandes, liste)
  {
    message.channel.send(liste);
  }
}
