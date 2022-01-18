module.exports =
{
  name: 'liste',
  description: "affiche la liste d'attente",
  async execute(message, liste)
  {
    message.channel.send(liste);
  }
}
