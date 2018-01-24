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
      body = JSON.parse(body);
      return body;
    });
  });
}

getBalance()
