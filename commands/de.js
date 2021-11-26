module.exports =
{
  name: 'dé',
  description: 'lance un dé',
  async execute(message, args)
  {
    message.channel.send(Math.random()*6 %1);
  }
}
