import { PrismaClient } from '@prisma/client';

const prisma = PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export default prisma;
