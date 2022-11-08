const { ActivityType } = require('discord.js');
const slashArray = require('../main.js');

module.exports = async (client) => {
    await client.user.setStatus("online");
    await client.application.commands.set(slashArray)

    let statusBot = [`Bot legal.`];
    let atividadesBot = [ActivityType.Listening, ActivityType.Playing, ActivityType.Watching];
     
      i = 0;
    setInterval(() => client.user.setActivity(`${statusBot[i++ % statusBot.length]}`, { type: atividadesBot[i++ % atividadesBot.length]}), 2000);

    console.log(`👥 | [Estatísticas] ${client.guilds.cache.size.toLocaleString()} servidores | ${client.guilds.cache.map(g => g.memberCount).reduce((x, f) => x + f, 0).toLocaleString()} usuários\n🤖 | [Bot] Conectado em ${client.user.tag}.`)
    console.log('💠 | [Slash Commands] Comandos carregados em todas guilds.');
  }
