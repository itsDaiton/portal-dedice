# Portál Dědice
Jsme tým z **Vysoké školy ekonomické v Praze**, který ve spolupráci s firmou **Applifting** vytvořil inovativní platformu Portál dědice. Naším cílem bylo zjednodušit a zpřístupnit proces pozůstalostního řízení pro všechny zúčastněné strany.

## Description
Portál dědice je inovativní platforma, která propojuje dědice a notáře na jednom místě. Cílem je zjednodušit a urychlit proces pozůstalostního řízení prostřednictvím online prostředí.

Na Portálu dědice můžete provést předběžné šetření online, komunikovat s notářem pomocí chatu a efektivně spravovat dědické řízení. Díky nástroji „Nachytřovadlo“ vás platforma provede celým procesem krok za krokem, poskytne jasné instrukce a pomůže vám lépe porozumět jednotlivým fázím dědického řízení.

S Portálem dědice šetříte čas, snižujete administrativní zátěž a máte jistotu, že vše probíhá v souladu s právními předpisy.

*Portál dědice – Váš spolehlivý nástroj v náročných životních situacích.*

## Authors
- David Poslušný
- Šimon Kubín
- Peter Sekelský
- Michal Dub
- Petr Cafourek
- Alisher Nurmatov

## Monorepo Overview

This repository contains three workspaces:

1. **backend** – Node.js server with GraphQL support
2. **frontend** – React-based SPA client application
3. **shared** – Shared logic and utilities

## Tech Stack

- Node.js + TypeScript + Drizzle ORM
- React SPA + Chakra UI 3
- GraphQL and Apollo Server
- MySQL
- Yarn
- Docker (optional)

## Project Requirements

To work with this repository, ensure the following requirements are met:

### System Requirements

- **Node.js**: Version 16.x or higher.
- **Yarn**: Version 1.22 or higher.
- **MySQL**: Version 8.x or higher.
- **Docker** (optional): For containerized deployment and testing.

### Installation Requirements

First download and install [Node.js](https://nodejs.org/en/download/) version described in [`./.nvmrc`](./.nvmrc) manually, or use a Node version manager like [nvm](https://github.com/nvm-sh/nvm), [nvm-windows](https://github.com/coreybutler/nvm-windows) or [fnm](https://github.com/Schniz/fnm).

1. Clone the repository:

   ```bash
   git clone https://github.com/itsDaiton/portal-dedice.git
   cd portal-dedice
   ```

2. Install dependencies for all workspaces using Yarn workspaces:

   ```bash
   corepack enable
   yarn install
   ```

3. Set up the MySQL database:

   - Create a new database for the application.
   - Update the `.env` files in the `backend` and `frontend` workspaces with your database credentials.

4. Run database migrations (if applicable) and seed your database:

   ```bash
   yarn workspace backend db:migrate
   yarn workspace backend db:seed
   ```

5. Start the development servers:
   - Backend: `yarn workspace backend start`
   - Frontend: `yarn workspace frontend dev`

### Recommended Tools

- **VS Code**: Recommended editor for development.
- **Docker Compose**: To simplify containerized setup.
- **GraphQL Playground**: For testing backend API endpoints.

### Additional Notes

- Ensure your system's firewall allows MySQL connections.
- Use `.env.example` as a template to create `.env` files in each workspace.
- For production setup, consider using Docker for consistent environment configuration.

## Domains

- [dev-frontend-team03-vse.handson.pro](http://dev-frontend-team03-vse.handson.pro)
- [dev-backend-team03-vse.handson.pro](http://dev-backend-team03-vse.handson.pro)
