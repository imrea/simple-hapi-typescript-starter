import { startServer } from './server';

async function main() {
  const server = await startServer();
  console.log(`Server running at: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

main();
