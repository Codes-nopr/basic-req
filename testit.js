const req = require('./basicreq.min');
new req().getJSON('https://nekos.life/api/v2/img/baka')
.then(r => console.log(r.url))
