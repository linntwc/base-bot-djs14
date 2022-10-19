module.exports = async (client) => {
    client.user.setStatus("online");

    let statusBot = [`Bot legal.`];
    let atividadesBot = ['LISTENING', 'PLAYING', 'WATCHING'];

      i = 0;
    setInterval(() => client.user.setActivity(`${statusBot[i++ % statusBot.length]}`, { type: `${atividadesBot[i++ % atividadesBot.length]}`}), 16000);

    console.log(`🤖 | [Bot] Conectado em ${client.user.tag}.\n👥 | [Estatísticas] ${client.guilds.cache.size.toLocaleString()} servidores | ${client.guilds.cache.map(g => g.memberCount).reduce((x, f) => x + f, 0).toLocaleString()} usuários`)
  }
