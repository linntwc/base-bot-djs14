module.exports = async (client, message) => {
  if (message.author.bot || message.channel.type == "DM") return;
  const botPrefixo = !dbGuild ? process.env.PREFIX : guilddbGuildData?.prefix;

  const dbGuild = await client.db.guilds.findOne({_id: message.guild.id,});
  const dbUser = await client.db.users.findOne({_id: message.author.id,});

  if (!dbGuild) await client.db.guilds.create({ _id: message.guild.id });
  if (!dbUser) await client.db.users.create({ _id: message.author.id });

  if (!message.content.toLowerCase().startsWith(botPrefixo.toLowerCase())) return;
  if (!message.content.startsWith(botPrefixo)) return;

  const argsBot = message.content.slice(botPrefixo.length).trim().split(/ +/g);

  let cmdFind = argsBot.shift().toLowerCase();
  if (cmdFind.length === 0) return;
  let botCommand = client.botCommands.get(cmdFind);
  if (!botCommand) botCommand = client.botCommands.get(client.aliases.get(cmdFind));
  
  try {
    botCommand.run(client, message, argsBot);
  } catch (err) {
    console.error("🚨 | [Erro] " + err);
  }

}
  

