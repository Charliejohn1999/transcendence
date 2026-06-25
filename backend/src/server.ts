import Fastify from 'fastify';
import cors from '@fastify/cors';
import { prisma } from './lib/prisma';

const fastify = Fastify({
  logger: true,
});

fastify.addHook('onClose', async () => {
  await prisma.$disconnect();
});

const start = async () => {
  await prisma.$connect();

  await fastify.register(cors, {
    origin: '/api/health',
  });

  fastify.get('/api/health', async () => {
    return { ok: true };
  });

  try {
    await fastify.listen({
      port: 3000,
      host: '0.0.0.0',
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();