module.exports =
{
  name: 'dé',
  description: 'lance un dé',
  async execute(message, args)
  {
    r = Math.random()*6;
    r = r - (r%1);
    message.channel.send(r);
  }
}
