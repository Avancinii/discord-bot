// bot.js
const Discord = require('discord.js');
const client = new Discord.Client();
const productService = require('../src/services/productServices');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (message) => {
  if (message.content.startsWith('!product')) {
    try {
      const productId = 1; // Supondo que o comando !product seja seguido pelo ID do produto
      const product = await productService.getProduct(productId);

      const embed = new Discord.MessageEmbed()
        .setTitle(product.name)
        .setDescription(product.description)
        .addField('Preço', product.price)
        // Adicione outros campos conforme necessário
        .setColor('#0099ff')
        .setTimestamp();

      // Adicione um botão de compra
      const buyButton = new Discord.MessageButton()
        .setStyle('LINK')
        .setLabel('Comprar')
        .setURL('https://example.com/checkout'); // URL de checkout do MercadoPago

      const messageComponent = new Discord.MessageActionRow().addComponents(buyButton);

      // Envie o embed com o botão de compra
      message.channel.send({ embeds: [embed], components: [messageComponent] });
    } catch (error) {
      console.error('Erro ao processar o comando !product:', error);
      message.channel.send('Erro ao processar o comando !product');
    }
  }
});

client.login('SEU_TOKEN_DO_BOT_DISCORD');
