import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({
  logger: true,
});

const start = async () => {
  await fastify.register(cors, {
    origin: 'http://localhost:5173',
  });

  fastify.get('/api/health', async () => {
    return { ok: true };
  });

  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server running on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();