const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
var queue = [];

module.exports =
{
  name: 'play',
  description: 'Rejoins et joue une vidéo',
  async execute(message, args, liste, skip)
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
    if (!message.author.bot && !skip)
    {
      liste.push(video);
    }
    if (skip)
    {
      liste.shift();
    }
    else {
      console.log("author bot, liste.length :")
      console.log(liste.length);
    }
    console.log(liste);
    if (message.author.bot || liste.length == 1)
    {
      console.log(liste[0]);
    }
    console.log(liste);
    if ((liste[0] && liste.length == 1) || (liste[0] && message.author.bot) || (liste[0] && skip))
    {
      const stream = ytdl(liste[0].url, {filter: 'audioonly'});
      connection.play(stream, {seek: 0, volume: 0.1})
      .on('finish', () =>
    {
      if (message.member.voice.channel.members.size != 1 && liste.length > 1)
      {
        liste.shift();
        skip = 0;
        message.channel.send(`!play ***${liste[0].title}***`);
        message.channel.send('!clear');
      }
      else
      {
        liste.shift();
        voiceChannel.leave();
        message.channel.send("Très bien, je m'en vais");
        console.log("vocal quitté");
      }

      //voiceChannel.leave();
    });
    if (message.author.bot)
    {
      await message.channel.send(`C'est parti pour ***${video.title}***`)
    }
    else
    {
      if (!skip)
      {
        await message.reply(`C'est parti pour ***${video.title}***`)
      }
      else
      {
        message.channel.send("morceau passé");
      }
    }
    }
    else
    {
      if (liste[0])
      {
        message.channel.send(`***${video.title}*** ajouté à la liste d'attente`)
      }
      else
      {
        message.channel.send('Aucune vidéo trouvée');
      }

    }
  }
}
