import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";

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
                especificacoes: input.especificacoes,
            },
        });
    }),


});