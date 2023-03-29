const { EmbedBuilder } = require('discord.js');

class command {
    constructor() {
        this.name = "help",
        this.description = "Affiche toutes les commandes du bot."
    }

    async execute(bot, interaction) {
        const embed = new EmbedBuilder()
        .setColor('Random')
        .addFields(
            { name: 'Général', value: `> /` + '`avatar` → Permets d\'envoyer l\'avatar de l\'utilisateur choisis.\n' + `> /` + '`help` → Affiche toutes les commandes du bot.\n' + `> /` + '`invite` → Permets d\'inviter le bot sur sont serveur.'},
            { name: 'Outils', value: `> /` + '`ping` → Permets de voir le ping du bot.'},
        )
        .setTimestamp()
        .setFooter({ text: bot.config.clients.name, iconURL: bot.config.clients.logo })

        interaction.reply({ embeds: [embed] });
    }
}

module.exports = command