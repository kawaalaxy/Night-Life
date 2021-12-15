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
    if (args[0] == '1' || args[0] == '1G' || args[0] == '1g')
    {
      taille = 151;
    }
    else if (args[0] == '2'|| args[0] == '2G' || args[0] == '2g')
    {
      taille = 251;
    }
    else if (args[0] == '3'|| args[0] == '3G' || args[0] == '3g')
    {
        taille = 386;
    }
    else if (args[0] == '4'|| args[0] == '4G' || args[0] == '4g')
    {
        taille = 493;
    }
    else if (args[0] == '5'|| args[0] == '5G' || args[0] == '5g')
    {
        taille = 649;
    }
    else if (args[0] == '6'|| args[0] == '6G' || args[0] == '6g')
    {
        taille = 721;
    }
    else if (args[0] == '7'|| args[0] == '7G' || args[0] == '7g')
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
