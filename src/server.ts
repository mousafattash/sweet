import Fastify from 'fastify';

const app = Fastify();

app.get('/', async () => {
  return { hello: 'world' };
});

export async function startServer() {
  try {
    await app.listen({ port: 3000 });
    console.log(`Server is running at http://localhost:3000`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
