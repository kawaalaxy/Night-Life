module.exports =
{
  name: 'reactionrole',
  description: 'créée un message de rôle par réaction',
  async execute(message, args, Discord, client)
  {
    const channel = message.channel.id;
    const spiRole = message.guild.roles.cache.find(role => role.name ==='spi');
    const cmiRole = message.guild.roles.cache.find(role => role.name ==='cmi');
    const spiEmoji = '🙂';
    const cmiEmoji = '🙃';

     let embed = new Discord.MessageEmbed()
     .setTitle('Choisissez votre groupe')
     .setDescription(''
        +`${spiEmoji} pour les spi\n`
        +`${cmiEmoji} pour les cmi`);

      let messageEmbed = await message.channel.send(embed);
      messageEmbed.react(spiEmoji);
      messageEmbed.react(cmiEmoji);

      client.on('messageReactionAdd', async(reaction, user) =>
    {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel)
      {
        if (reaction.emoji.name === spiEmoji)
        {
          await reaction.message.guild.members.cache.get(user.id).roles.add(spiRole);
        }
        if (reaction.emoji.name === cmiEmoji)
        {
          await reaction.message.guild.members.cache.get(user.id).roles.add(cmiRole);
        }
      }
      else
      {
        return;
      }
    });
    client.on('messageReactionRemove', async(reaction, user) =>
  {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id == channel)
    {
      if (reaction.emoji.name === spiEmoji)
      {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(spiRole);
      }
      if (reaction.emoji.name === cmiEmoji)
      {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(cmiRole);
      }
    }
    else
    {
      return;
    }
  });
  }
}
