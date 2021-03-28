module.exports =
{
  name: 'quote',
  description: "quotes if you have the specified role",
  execute(message, args)
  {
    if(message.member.roles.cache.has('825520415027363860'))
    {
      message.channel.send("J'avais eu raison, j'avais encore raison, j'avais toujours raison.");
    }
    else
    {
      message.channel.send('action non autorisée');
    }
  }
}
