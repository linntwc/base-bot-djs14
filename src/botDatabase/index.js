const { connect } = require("mongoose");

module.exports = {
  start() {
    try {
      connect(process.env.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      console.log(`🏡 | [MongoDB] Conectado ao Banco de Dados.`);
    } catch (err) {
      if (err) return console.log(`🚨 | [MongoDB]:`, err);
    }
  },
};
