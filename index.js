
const Discord = require('discord.js');
const client = new Discord.Client();

var counter = 0;

client.on('ready', () => {

    var str = `Are you ready for this g, yeah.C'mon man, I was born ready and dat.Okay, aight, boom.Big Shaq, hold tight Asnee.Scoopnum, ratnum, oosna.Hold tight the girl-dem as well.Boom.2 plus 2 is 4.Minus 1 that's 3, quick maths.Everyday man's on the block, smoke trees.See your girl in the park, that girl is a uckers.When the ting went quack-quack-quack, you man were ducking.Hold tight Asnee, he's got the pumpy.Hold tight my man, he's got the frisbee.I trap, trap, trap on the road, movin' that cornflakes.Rice Krispie, hold tight my girl Whitney (perfect).On the road doin' ten tours, allow my toes.You man thought I froze.I see a peng girl then I pose.If she's not on it, I ghost.Hah, look at your nose.What? You dickhead.Look at your nose.Nose run like garden hose, shhh, you get me.Boom, man's gonna come back in.(Yeah, yeah).You know like that.(Yeah, yeah, yeah).You're feelin' that.(Yeah, yeah, bad, bad).You dun know, I see you shiverin' and that.Don't get shook man's here, (aight) you protected-ed, yeah.(Aight, let's do it).Aight, boom.Let's go, boom.Hop out the four door with the .44.It was 1, 2, 3 and 4.Chillin' in the corridor, your dad is 44.And he's still callin' man for a draw.Let him know, when I see him, I'm gonna spin his jaw.Take man Twix by force.Send man shop by force.Your girl knows I've got the sauce, no ketchup.Just sauce, raw sauce.Boom, yo, gah.The ting goes skrrrahh.Pap, pap, ka-ka-ka.Skidiki-pap-pap.And a pu-pu-drrrr-boom.Skya.Du-du-ku-ku-pun-pun.Poom, poom.You dun know, Big Shaq.Ha, yo, yeah-yeah.Alright, fire-fire-fire in the booth.You get me, man's not hot.I tell her man's not hot, hah, cot.I tell her man's not hot.The girl told me "take off your jacket".I said "babes, man's not hot".Yo, man can never be hot.Perspiration ting, Lynx effect.Yo, you dun know.Dun know, y-you.You look a bit shook, Charlie.You look a bit hot.What's that.Y-y-ya sweating and that again.Brudda, man don't make jokes with me, Charlie.Aight, aight, aight, cool.Yeah, man, listen, you're-you're cool and that.Yeah, yeah, dun know.Do you understand what I'm saying.You're cool and that.Yeah, yeah.But I know how you look ennit.Yeah.Do you understand what I'm saying.Yeah.I don't wanna set the, you know, the goons on you.Yeah, yeah, yeah, yeah-yeah-yeah-yeah.You know like that? Aight, cool, don't take me for one of these boys and that, do you know what I'm sayin'.Man's really about it.`.split(/[,.?]+/);
    counter = 0;
    len = str.length
    setInterval(function() { client.user.setGame(str[counter]); counter = (counter+1)%len;}, 12000);

})


client.login(process.env.SNAKER_TOKEN);
