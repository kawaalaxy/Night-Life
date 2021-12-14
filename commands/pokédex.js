const fs = require('fs');
var data = "";
module.exports =
{
  name: 'pokédex',
  description: 'donne un pokémon du pokédex',
  async execute(message)
  {
    r = Math.random()*898;
    r = r - (r%1) + 1;
    fs.readFile('commands/pokedex_bibli.txt', 'utf8', (err, data) =>{
      if (err){
        console.error(err);
        return;
      }
      console.log(data);
    });
    message.channel.send(`Ton pokémon est :${data}`);
    console.log(process.cwd());
    console.log(data);
  }
}
