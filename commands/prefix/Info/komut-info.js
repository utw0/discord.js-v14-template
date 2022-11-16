const { EmbedBuilder, codeBlock } = require("discord.js"); 

module.exports = {
  config: {
    name: "bilgi",
    description: "Bir komutun bilgilerini alın.",
    usage: "bilgi [komut]",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args) => {

    if (!args[0]) return message.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription("Lütfen bir komut adı girin.")
          .setColor("Red")
      ]
    });

    const command = client.prefix_commands.get(args[0].toLowerCase());

    if (!command) return message.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription("Üzgünüz, ancak bu komut mevcut değil.")
          .setColor("Red")
      ]
    });

    return message.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle(`Komut Bilgileri: ${command.config.name.toUpperCase()}`)
          .addFields(
            { name: 'Tanım:', value: command.config.description || "Açıklama sağlanmadı." },
            { name: 'Kullanım:', value: command.config.usage ? codeBlock('txt', command.config.usage) : "Kullanım Sağlanmadı." },
            { name: 'İzinler:', value: command.permissions.join(", ") },
            { name: 'Yalnızca geliştirici?', value: command.owner ? 'Evet' : 'Hayır' }
          )
          .setColor("Blue")
      ]
    });
    
  },
};
