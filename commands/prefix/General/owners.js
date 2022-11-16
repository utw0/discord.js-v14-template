const { EmbedBuilder } = require("discord.js"); 

module.exports = {
  config: {
    name: "luhuxs",
    description: "Yalnızca kayıtlı sahiplerle yanıt verir.",
  },
  permissions: ['SendMessages'], // 
  owner: true,
  run: async (client, message, args, prefix, config) => {
    
    const ownersID = config.Users.OWNERS;
    if (!ownersID) return;
    
    const ownersARRAY = [];
    
    ownersID.forEach(Owner => {
      const fetchedOWNER = message.guild.members.cache.get(Owner);
      if (!fetchedOWNER) ownersARRAY.push("*Unknown*");
      ownersARRAY.push(`${fetchedOWNER}`);
    });

    message.reply({ embeds: [
      new EmbedBuilder()
        .setDescription(`Yalnızca sahipler komutu! \nOwners: **${ownersARRAY.join(", ")}**`)
        .setColor("Yellow")
    ] })
    
  },
};
