module.exports =
{
  name: 'reactionrole',
  description: 'créée un message de rôle par réaction',
  async execute(message, args, Discord, client)
  {
    const channel = message.channel.id;
    const enerRole = message.guild.roles.cache.find(role => role.name ==='ener');
    const mecaRole = message.guild.roles.cache.find(role => role.name ==='meca');
    const elecRole = message.guild.roles.cache.find(role => role.name ==='elec');
    const enerEmoji = '⚛️';
    const mecaEmoji = '🌉';
    const elecEmoji = '💡';

     let embed = new Discord.MessageEmbed()
     .setTitle('Choisissez votre groupe')
     .setDescription(''
        +`${enerEmoji} pour les ener\n`
        +`${mecaEmoji} pour les meca\n`
        +`${elecEmoji} pour les elec`);

      let messageEmbed = await message.channel.send(embed);
      messageEmbed.react(enerEmoji);
      messageEmbed.react(mecaEmoji);
      messageEmbed.react(elecEmoji);

      client.on('messageReactionAdd', async(reaction, user) =>
    {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if(user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel)
      {
        if (reaction.emoji.name === enerEmoji)
        {
          await reaction.message.guild.members.cache.get(user.id).roles.add(enerRole);
        }
        if (reaction.emoji.name === mecaEmoji)
        {
          await reaction.message.guild.members.cache.get(user.id).roles.add(mecaRole);
        }
        if (reaction.emoji.name === elecEmoji)
        {
          await reaction.message.guild.members.cache.get(user.id).roles.add(elecRole);
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
      if (reaction.emoji.name === enerEmoji)
      {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(enerRole);
      }
      if (reaction.emoji.name === mecaEmoji)
      {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(mecaRole);
      }
      if (reaction.emoji.name === elecEmoji)
      {
        await reaction.message.guild.members.cache.get(user.id).roles.remove(elecRole);
      }
    }
    else
    {
      return;
    }
  });
  }
}
