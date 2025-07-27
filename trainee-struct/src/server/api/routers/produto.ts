import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";
import type { Produto } from "@prisma/client";

export const produtoRouter = createTRPCRouter({
    create: publicProcedure
    .input(z.object({
        nome: z.string(),
        preco: z.number(),
        imagem: z.string().optional(),
        descricao: z.string(),
        especificacoes: z.string().optional(),
    }))
    .mutation(async ({input, ctx}) => {
        await ctx.db.produto.create({
            data: {
                nome: input.nome,
                preco: input.preco,
                imagem: input.imagem,
                descricao: input.descricao,
                especificacoes: input.especificacoes
            },
        });
    }),

    delete: publicProcedure
    .input(z.object({
        id: z.number(),
    }))
    .mutation(async ({input, ctx}) => {
        await ctx.db.produto.delete({
            where: {
                id: input.id
            }
        })
    }),

    update: publicProcedure
    .input(z.object({
        id: z.number(),
        nome: z.string(),
        preco: z.number(),
        imagem: z.string().optional(),
        descricao: z.string(),
        especificacoes: z.string().optional()
    }))
    .mutation(async ({input, ctx}) => {
        await ctx.db.produto.update({
            where: {
                id: input.id
            },
            data: {
                nome: input.nome,
                preco: input.preco,
                imagem: input.imagem,
                descricao: input.descricao,
                especificacoes: input.especificacoes
            }
        })
    }),

    getAll: publicProcedure
    .query(async ({ctx}) => {
        const produtos = await ctx.db.produto.findMany({
            orderBy: { createdAt: "desc" },
        });

        return produtos;
    }),

    getSearch: publicProcedure  // OBS: Por algum motivo, não consegui usar o "mode: 'insensitive'" para a consulta dos nome, por isso usei o queryRaw
    .input(z.object({
        nome: z.string(),
    }))
    .query(async ({input, ctx}) => {
        const produtos = await ctx.db.$queryRaw<Produto[]>`
            SELECT * FROM produto
            WHERE (LOWER(nome) LIKE LOWER(${'%' + input.nome + '%'})) OR (LOWER(descricao) LIKE LOWER(${'%' + input.nome + '%'}))
            ORDER BY nome ASC
        `;

        return produtos;
    }),

    getById: publicProcedure
    .input(z.object({
        id: z.number(),
    }))
    .query(async ({input, ctx}) => {
        const produto = await ctx.db.produto.findUnique({
            where: {
                id: input.id,
            },
        })

        return produto;
    })

});