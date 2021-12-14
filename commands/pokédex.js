const fs = require('fs');
module.exports =
{
  name: 'pokédex',
  description: 'donne un pokémon du pokédex',
  async execute(message)
  {
    r = Math.random()*151;
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
