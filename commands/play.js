const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports =
{
  name: 'play',
  description: 'Rejoins et joue une vidéo',
  async execute(message, args)
  {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel)
    {
      return message.channel.send('Vous devez être en vocal pour faire ça');
    }
    if (!args.length)
    {
      return message.channel.send('Rien à lancer');
    }

    const connection = await voiceChannel.join();
    const videoFinder = async (query) =>
    {
      const videoResult = await ytSearch(query);
      return videoResult.videos[0]
    }

    const video = await videoFinder(args.join(' '));
    if (video)
    {
      const stream = ytdl(video.url, {filter: 'audioonly'});
      connection.play(stream, {seek: 0, volume: 0.1})
      .on('finish', () =>
    {
      message.reply(`***${video.title}*** fini`)
      //voiceChannel.leave();
    });
    await message.reply(`C'est parti pour ***${video.title}***`)
    }
    else
    {
      message.channel.send('Aucune vidéo trouvée');
    }
  }
}
