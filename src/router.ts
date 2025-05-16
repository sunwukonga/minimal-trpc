import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
  getMessage: t.procedure
    .query(() => {
      const message = 'Hello from tRPC!';
      return message;
    }),

  setMessage: t.procedure
    .input(z.object({ message: z.string() }))
    .mutation(({ input }) => {
      return `Message received: ${input.message}`;
    }),
});

export type AppRouter = typeof appRouter;
