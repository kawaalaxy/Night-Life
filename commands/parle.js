module.exports =
{
  name: 'parle',
  description: 'parle pour moi',
  async execute(message, args)
  {
    const modoRole = message.guild.roles.cache.find(role => role.name ==='modo');
    if(message.member.roles.cache.has(modoRole.id))
    {
      message.channel.bulkDelete(1);
      message.channel.send(args);
    }
    else
    {
      return message.reply("vous n'avez pas l'autorisation de faire ceci")
    }
  }
}
