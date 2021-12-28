module.exports =
{
  name: 'test',
  description: 'faire des tests',
  async execute(message, args)
  {
    let server = message.guild.id;
    console.log(server);
  }
}
