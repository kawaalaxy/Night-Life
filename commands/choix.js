module.exports =
{
  name: 'choix',
  description: 'choisi entre 2 options',
  async execute(message, args)
  {
    if (!args[0] || !args.indexOf(" ou "))
    {
      return message.reply(`dis moi quoi choisir : "quelque_chose ou quelque_chose"`);
    }
    r = Math.random()*(1);
    r = r - (r%1);
    const reponse = message.content.slice(prefix.length).split(" ou ");
    message.channel.send(reponse[r]);
  }
}
