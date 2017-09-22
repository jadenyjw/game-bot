
const Discord = require('discord.js');
const client = new Discord.Client();

var counter = 0;

client.on('ready', () => {

    var str = `Somebody once told me the world is gonna roll me, I aint the sharpest tool in the shed. She was looking kind of dumb with her finger and her thumb in the shape of an L on her forehead. Well, the years start coming and they dont stop coming, fed to the rules and I hit the ground running. Didnt make sense not to live for fun, your brain gets smart, but your head gets dumb. So much to do, so much to see, so whats wrong with taking the back streets? Youll never know if you dont go,youll never shine if you dont go. Hey now, youre an all star, get your game on, go play. Hey now, youre a rock star, get the show on, get paid. All that glitters is gold, only shooting stars break the mold. Its a cool place, and they say it gets colder, youre bundled up now, wait til you get older but the media men beg to differ, judging by the hole in the satellite picture. The ice we skate is getting pretty thin, the waters getting warm so you might as well swim. My worlds on fire, how bout yours? Thats the way I like it and Ill never get bored. Hey now, youre an all star, get your game on, go play. Hey now, youre a rock star, get the show on, get paid. All that glitters is gold, only shooting stars break the mold. Hey now, youre an all star, get your game on, go play. Hey now, youre a rock star, get the show on, get paid. All that glitters is gold, only shooting stars... Somebody once asked, could I spare some change for gas, I need to get myself away from this place. I said yep, what a concept. I could use a little fuel myself, and we could all use a little chaaange. Well, the years start coming and they dont stop coming, fed to the rules and I hit the ground running. Didnt make sense not to live for fun, your brain gets smart, but your head gets dumb. So much to do, so much to see, so whats wrong with taking the back streets? Youll never know if you dont go, youll never shine if you dont glow. Hey now, youre an all star, get your game on, go play. Hey now, youre a rock star, get the show on, get paid. All that glitters is gold, only shooting stars break the mold. All that glitters is gold, only shooting stars break the mold.`.split(" ");
    counter = 0;
    len = str.length
    setInterval(function() { client.user.setGame(str[counter]).catch(e => {console.log(e)}); counter = (counter+1)%len;}, 12000);

})


client.login(process.env.SNAKER_TOKEN);
