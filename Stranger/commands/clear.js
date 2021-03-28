module.exports =
{
  name: 'clear',
  description: 'clear messages',
  async execute(message, args)
  {
    if((!args[0]) || (isNaN(args[0])) || (args[0] > 1000) || (args[0] < 1))
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
}
