import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

if(cluster.isPrimary){
  console.info(`Primary ${process.pid} is running`);
  for(let i = 0; i < os.cpus().length; i++){
    cluster.fork();
  }

  cluster.addListener("exit", (worker) => {
    console.info(`Worker ${worker.id} is exited`);
  })
}


if(cluster.isWorker){
  console.info(`Worker ${process.pid} is running`);

  const server = http.createServer((request, response) => {
    response.write(`Response from Worker ${process.pid}`);
    response.end();

    process.exit();
  })

  server.listen(3000);
}