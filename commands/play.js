const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
var queue = [];

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
    console.log('nombre de personnes en vocal :')
    console.log(message.member.voice.channel.members.size);

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
      if (message.member.voice.channel.members.size != 1)
      {
        message.channel.send(`!play ***${video.title}***`);
        message.channel.send('!clear');
      }
      else
      {
        voiceChannel.leave();
        message.channel.send("Très bien, je m'en vais");
        console.log("vocal quitté");
        console.log("était seul en vocal");
      }

      //voiceChannel.leave();
    });
    if (message.author.bot)
    {
      await message.channel.send(`C'est parti pour ***${video.title}***`)
    }
    else
    {
      await message.reply(`C'est parti pour ***${video.title}***`)
    }
    }
    else
    {
      message.channel.send('Aucune vidéo trouvée');
    }
  }
}
