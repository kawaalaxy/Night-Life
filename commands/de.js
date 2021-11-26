module.exports =
{
  name: 'dé',
  description: 'lance un dé',
  async execute(message, args)
  {
    if (!args[0])
    {
      args[0] = '6';
    }
    r = Math.random()*args[0];
    r = r - (r%1);
    message.channel.send(r);
  }
}
