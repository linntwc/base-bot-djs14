const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: "test",
    category: "Test",
    description: "Comando de teste.",
    type: ApplicationCommandType.ChatInput,
    
  run: async (client, interaction) => {
      interaction.reply({ content: `test.`})
    }
  }
