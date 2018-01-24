const Discord = require('discord.js');
const client = new Discord.Client();

const https = require("https");

function getBalance() {

    const url = "https://explorer.grlc-bakery.fun/ext/getbalance/GfT5tBDrKEVpAw4oDEjXGMkx4anqDr3R4u";
    https.get(url, res => {
      res.setEncoding("utf8");
      let body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        try{
          body = JSON.parse(body);
          return body;
        }
        catch(error){

        }

      });
    });



}


client.on('ready', () => {

    setInterval(function() { client.user.setGame("GRLC Balance: " + getBalance()); console.log("GRLC Balance: " + getBalance())}, 100000);

})


client.login(process.env.SNAKER_TOKEN);
