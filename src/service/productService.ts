import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProductService { 
    async getAllProducts() {
        try {
            return prisma.product.findMany();
        } catch (error) {
            throw new Error('Failed to create product');
        }
    }

    async getProductById(id: number) {
        try {
            return prisma.product.findUnique({
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw new Error('Failed to get product');
        }
    }

    async createProduct(data: any) {
        try {
            return prisma.product.create({
                data: data
            });
        } catch (error) {
            throw new Error('Failed to create product');
        }
    }

    async updateProduct(id: number, data: any) {
        try{
            return prisma.product.update({
                where: {
                    id: id
                },
                data: data
            });
        } catch (error) {
            throw new Error('Failed to update product');
        }
    }
    async deleteProduct(id: number) {
        try {
            return prisma.product.delete({
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw new Error('Failed to delete product');
        }
    } 
}