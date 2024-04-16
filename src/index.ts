import exp from "constants";
import { ExtendedClient } from "./structs/ExtendedClient";

const client = new ExtendedClient();

client.start();

export { client }

client.on("ready", () => {
    console.log("Bot is ready!");
});

client.on("messageCreate", (message) => {
    if (message.author.id == client.user?.id) return;

    message.reply({
        content: ` Olá ${message.author.username}`
    });
});