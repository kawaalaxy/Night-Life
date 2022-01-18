module.exports =
{
  name: 'liste',
  description: "affiche la liste d'attente",
  async execute(message, liste)
  {
    result = []
    for (var i = 0; i < liste.length; i++) {
      result.push(liste[i].title);
    }
    message.channel.send(result);
  }
}
