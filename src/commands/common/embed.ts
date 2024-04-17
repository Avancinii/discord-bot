import { APIEmbedField, ActionRowBuilder, ApplicationCommandType, ButtonBuilder, ButtonComponent, ButtonStyle, EmbedBuilder } from "discord.js";
import { Command } from "../../structs/types/Commands";
import { ProductService } from "../../service/productService";

const productService = new ProductService();

export default new Command({
    name:"embed",
    description: "reply with an embed",
    type: ApplicationCommandType.ChatInput,
    async run({ interaction }) {

        const products = await productService.getAllProducts();

        const embeds = [] as EmbedBuilder[];
        products.forEach(product => {
            const embed = new EmbedBuilder()
                .setTitle(product.name)
                .setDescription(`${product.description} [clique aqui para comprar](product.paymentUrl)`)
                .setColor("Gold")
                .setAuthor({
                    name: "Seu nome aqui",
                    iconURL: interaction.user.avatarURL() || undefined,
                    url: "https://github.com/Avancinii?tab=repositories"
                })
                .setFooter({
                    text: "Footer",
                    iconURL: "https://i.pinimg.com/736x/77/27/ab/7727ab48f7dd615e5d0b09f8a7cd43a6.jpg"
                })
                .setTimestamp()
                .setImage("product.imageUrl")//url da imagem
                .setFields([
                    { name: "Preço", value: "R$ 200,00", inline: true } 
                ]);
                embeds.push(embed);
        });        

        interaction.reply({embeds: embeds});
    }
});