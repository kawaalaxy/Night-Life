module.exports =
{
  name: 'liste',
  description: "affiche la liste d'attente",
  async execute(message, liste)
  {
    if (liste == [])
    {
      message.channel.send("la liste est vide")
    }
    else
    {
      result = []
      for (var i = 0; i < liste.length; i++)
      {
        result.push(`1 : ${liste[i].title}`);
      }
      message.channel.send(result);
    }
  }
}
