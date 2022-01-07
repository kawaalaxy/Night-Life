module.exports =
{
  name: 'clear',
  description: 'clear messages',
  async execute(message, args)
  {
    const modoRole = message.guild.roles.cache.find(role => role.name ==='modo');
    if((message.member.roles.cache.has(modoRole.id))||(!message.member.roles.cache.has(modoRole.id)))
    {
      if (!args[0])
      {
        args[0] = '1';
      }
      if((isNaN(args[0])) || (args[0] > 1000) || (args[0] < 0))
      {
        return message.reply('Vous devez rentrer une valeur entre 0 et 1000');
      }
      args[0] = (parseInt(args[0])+ 1 ).toString();
      await message.channel.messages.fetch({limit: args[0]}).then(messages =>
      {
        message.channel.bulkDelete(messages);
      });
      console.log('cleared');
      console.log(args[0]);
    }
    else
    {
      return message.reply("vous n'avez pas l'autorisation de faire ceci")
    }
  }
}
