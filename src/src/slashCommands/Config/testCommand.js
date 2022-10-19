

module.exports = {
    name: "test",
    category: "Test",
    description: "Comando de teste.",
    
  run: async (client, interaction) => {
      interaction.reply({ content: `batata.`})
    }
  }