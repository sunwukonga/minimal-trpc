import express from 'express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './router';
import { createContext } from './context';

const app = express();

app.use('/trpc', createExpressMiddleware({
  router: appRouter,
  createContext,
}));

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});