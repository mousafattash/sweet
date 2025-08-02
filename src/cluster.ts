import cluster from 'cluster';
import { cpus } from 'os';
import { startServer } from './server';

const numCPUs = cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} exited`);
    cluster.fork(); // optional: restart dead workers
  });
} else {
  console.log(`Worker ${process.pid} started`);
  startServer();
}
