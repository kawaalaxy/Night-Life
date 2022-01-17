module.exports =
{
  name: 'test2',
  description: 'test',
  async execute(message, args, commandes)
  {
    commandes.get('test1').execute(message, args, 1);
  }
}
