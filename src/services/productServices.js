// models/Product.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async createProduct(data) {
    try {
      const createdProduct = await prisma.product.create({
        data: {
          name: data.name,
          description: data.description,
          price: data.price,
          discordChannelId: data.discordChannelId,
          discordServerId: data.discordServerId,
        },
      });
      return createdProduct;
    } catch (error) {
      throw new Error('Failed to create product');
    }
  },

  async updateProduct(id, data) {
    try {
      const updatedProduct = await prisma.product.update({
        where: {
          id: id,
        },
        data: {
          name: data.name,
          description: data.description,
          price: data.price,
        },
      });
      return updatedProduct;
    } catch (error) {
      throw new Error('Failed to update product');
    }
  },

  async deleteProduct(id) {
    try {
      const deletedProduct = await prisma.product.delete({
        where: {
          id: id,
        },
      });
      return deletedProduct;
    } catch (error) {
      throw new Error('Failed to delete product');
    }
  },

  async getProduct(id) {
    try {
      const product = await prisma.product.findUnique({
        where: {
          id: id,
        },
      });
      return product;
    } catch (error) {
      throw new Error('Failed to get product');
    }
  },

  async getAllProducts() {
    try {
      const products = await prisma.product.findMany();
      return products;
    } catch (error) {
      throw new Error('Failed to get all products');
    }
  },
};
