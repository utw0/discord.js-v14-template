const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "luhux",
    type: 3,
    run: async (client, interaction, config) => {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription('luhuxseksibiri')
            ],
            ephemeral: true
        })
    },
};
