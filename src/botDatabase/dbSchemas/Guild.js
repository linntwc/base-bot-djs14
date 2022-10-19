const { Schema, model } = require("mongoose");

const guildSchema = new Schema({
  _id: { type: String },
  prefix: { type: String, default: process.env.PREFIX },
})

const Guild = model("Guild", guildSchema);
module.exports = Guild;
