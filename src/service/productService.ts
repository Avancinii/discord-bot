import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export class ProductService { 
    async getAllProducts() {
        try {
            return prisma.product.findMany();
        } catch (error) {
            console.error(error);
            return error;
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
            console.error(error);
            return error;
        }
    }

    async createProduct(data: any) {
        try {
            return prisma.product.create({
                data: data
            });
        } catch (error) {
            console.error(error);
            return error;
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
            console.error(error);
            return error;
        }
    }
}

export default new ProductService();