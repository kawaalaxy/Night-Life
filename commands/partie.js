module.exports =
{
  name: 'partie',
  description: 'choisi une partie',
  async execute(message, args)
  {
    message.channel.send(Math.random()*6);
  }
}
