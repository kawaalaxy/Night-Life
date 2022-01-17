module.exports =
{
  name: 'skip',
  description: 'passe au morceau suivant',
  async execute(message, args, commandes, liste)
  {
    commandes.get('play').execute(message, args, liste, 1);
  }
}
