const fs = require('fs');
module.exports =
{
  name: 'pokédex',
  description: 'donne un pokémon du pokédex',
  async execute(message, args)
  {
    if (!args[0])
    {
      args[0] = 'all';
    }
    if (args[0] == '1')
    {
      taille = 151;
    }
    else if (args[0] == '2')
    {
      taille = 251;
    }
    else if (args[0] == '3')
    {
        taille = 386;
    }
    else if (args[0] == '4')
    {
        taille = 493;
    }
    else if (args[0] == '5')
    {
        taille = 649;
    }
    else if (args[0] == '6')
    {
        taille = 721;
    }
    else if (args[0] == '7')
    {
        taille = 807;
    }
    else
    {
        taille = 809;
    }
    r = Math.random()*taille;
    r = r - (r%1);
    fs.readFile('commands/pokedex_bibli.txt', 'utf8', (err, data) =>{
      if (err){
        console.error(err);
        return;
      }
      lignes = data.split('\n');
      message.channel.send(`Ton pokémon est : #${r+1} ${lignes[r]}`);
    });

  }
}
