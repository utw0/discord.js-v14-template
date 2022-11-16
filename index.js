const { Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const config = require('./config/config');
//kanka napuyon
//sus la az
//küstüm gidiom

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ],
  presence: {
    activities: [{
      name: "luhux was here baby",
      type: 0
    }],
    status: 'idle'
  }
});


require('http').createServer((req, res) => res.end('Ready.')).listen(3000);


const AuthenticationToken = config.Client.TOKEN;
if (!AuthenticationToken) {
  console.warn("[HATA] Discord botu için Kimlik Doğrulama Jetonu gereklidir!".red)
  return process.exit();
};


client.prefix_commands = new Collection();
client.slash_commands = new Collection();
client.user_commands = new Collection();
client.message_commands = new Collection();
client.modals = new Collection();
client.events = new Collection();

module.exports = client;

["prefix", "application_commands", "modals", "events", "mongoose"].forEach((file) => {
  require(`./handlers/${file}`)(client, config);
});


client.login(AuthenticationToken)
  .catch((err) => {
    console.error("[HATA] Botunuza bağlanırken bir sorun oluştu...");
    console.error("[HATA] Discord API'sinden gelen hata:" + err);
    return process.exit();
  });


process.on('unhandledRejection', async (err, promise) => {
  console.error(`[HATA] İşlenmemiş Reddetme: ${err}`.red);
  console.error(promise);
});
