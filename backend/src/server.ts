import Fastify from 'fastify';
import cors from '@fastify/cors';
import { prisma } from './lib/prisma';
import { z } from "zod";
import bcrypt from "bcryptjs";

const fastify = Fastify({
  logger: true,
});

fastify.addHook('onClose', async () => {
  await prisma.$disconnect();
});

const start = async () => {
  await prisma.$connect();

  await fastify.register(cors, {
    origin: 'http://localhost:5173',
  });

  fastify.get('/api/health', async () => {
    return { ok: true };
  });

  type registerBody = {
    username: string;
    password: string;
    email: string;
  }

  fastify.post<{ Body:registerBody }>('/api/register',
    async (request, reply) => {
    console.log('Données reçues :', request.body);
    const {username,email,password} = request.body;
    if (!username || !email || !password){
      return reply.code(400).send({
        message: "Tous les champs sont obligatoires",
      });
    }
    if (password.length < 8){
      return reply.code(400).send({
        message: "le mot de passe est trop court",
      });
    }
    const existingUser = await prisma.user.findUnique({
      where: {email},
    });
    if(existingUser){
      return reply.code(409).send({
        message: "un compte existe déja avec cette adresse mail",
      });
    }
    const passwordHash = await bcrypt.hash(password,12);
    await prisma.user.create({
      data: {
          email,
          displayName: username,
          passwordHash,
      },
    });
    return reply.code(201).send({
      message: "Compte créer avec succès ✅",
    });
  });

  type loginBody = {
    password: string;
    email: string;
  }

  fastify.post<{ Body:loginBody }>("/api/login", async (request, reply) => {
  const {email,password} = request.body;
  const existingUser = await prisma.user.findUnique({
    where:{email},
  });
  if(!existingUser){
    return reply.code(401).send({
      message: "L'utilisateur n'existe pas",
    });
  }
  if(!existingUser || !existingUser.passwordHash){
    return reply.code(401).send({
      message: "email ou mot de passe incorrect",
    });
  }
  const passwordIsValid = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
  if(!passwordIsValid){
    return reply.code(401).send({
      message: "Email ou mot de passe incorrect",
    })
  }

  return reply.code(200).send({
    message: "Utilisateur connecté 👌",
  });
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