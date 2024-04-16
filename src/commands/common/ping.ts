import { ActionRowBuilder, ApplicationCommandType, ButtonBuilder, ButtonStyle, Collection } from "discord.js";
import { Command } from "../../structs/types/Commands";

export default new Command({
    name:"ping",
    description: "reply with pong",
    type: ApplicationCommandType.ChatInput,
    run({interaction}) {

        const row = new ActionRowBuilder<ButtonBuilder>({ components: [
            new ButtonBuilder({ style: ButtonStyle.Primary, label: "Clique Aqui", customId: "test-button" })
        ]})
        interaction.reply({ephemeral: true, content: "Pong!", components: [row]})
    },
    buttons: new Collection([
        ["test-button", async (interaction) => {
            interaction.update({ components: []});
        }]
    ])
})