*This document is the README for ft_transcendence — a 42 cursus full-stack web project built around a Werewolf-inspired multiplayer experience.*

# Transcendence

Transcendence is a full-stack web application developed as part of the 42
cursus. It combines a multiplayer Werewolf-style game with chat features, user
authentication, and tournament mechanics. The project explores modern web
development practices using TypeScript, React, Fastify, Prisma, and Docker.

## Stack

- **Frontend**: React 19 + Vite + Tailwind CSS + React Router
- **Backend**: Node.js + Fastify (TypeScript)
- **Database**: SQLite (managed via Prisma)
- **Reverse proxy**: NGINX with HTTPS (self-signed certificate)
- **Infrastructure**: Docker + Docker Compose

## Team

| Name | Role |
|------|------|
| Charlie Sarfati | (to define after kick-off) |
| Member 2 | (to complete) |
| Member 3 | (to complete) |

Roles to assign during the kick-off meeting: Product Owner, Project Manager,
Tech Lead, Developer.

## Getting started

### Prerequisites

- Docker Desktop installed and running
- Git

### Installation

Clone the repository and launch the full stack with a single command:

```bash
git clone git@github.com:Charliejohn1999/transcendence.git
cd transcendence
docker compose up --build
```

Once running, the application is available at:

- Main entry point: https://localhost
- Backend health check: https://localhost/api/health

Note: the HTTPS certificate is self-signed, so browsers will display a security
warning on first visit. This is expected — click "Advanced" then "Continue to
localhost" to proceed.

### Stopping the stack

```bash
docker compose down
```

## Project structure

```
transcendence/
├── docker-compose.yml      # Orchestration of all services
├── README.md
├── backend/                # Fastify API (TypeScript)
│   ├── Dockerfile
│   ├── package.json
│   └── src/
├── frontend/               # React SPA (TypeScript + Tailwind)
│   ├── Dockerfile
│   ├── package.json
│   └── src/
└── nginx/                  # Reverse proxy with HTTPS
    ├── Dockerfile
    └── nginx.conf
```

## Available routes

- `/` — Home page with backend health indicator
- `privacy` — Privacy Policy
- `terms` — Terms of Service
- `api/health` — Backend health check endpoint

## Conventions

### Branches

- `feature/<name>` — new feature
- `fix/<name>` — bug fix
- `chore/<name>` — technical task (config, refactoring, docs)

### Commits

This project follows the [Conventional Commits](https://www.conventionalcommits.org/)
specification. Examples:

- `feat: add user authentication`
- `fix: correct CORS configuration for development`
- `chore: update README with deployment instructions`

## License

This project is part of the 42 school curriculum and is intended for educational
purposes only.