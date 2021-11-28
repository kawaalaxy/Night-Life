module.exports =
{
  name: 'stop',
  description: 'arrêter le bot et quitter le vocal',
  async execute(message, args)
  {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel)
    {
      return message.channel.send('vous devez être en vocal pour faire ça');
    }
    await voiceChannel.leave();
    await message.channel.send("Très bien, je m'en vais");
    await console.log("vocal quitté");
  }
}
