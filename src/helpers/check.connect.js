"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const _SECONDS = 5000;

const countConnect = () => {
  const numConnect = mongoose.connections.length;
  console.log(`Number of connections ::>> ${numConnect}`);
};

const checkOverload = () => {
  setInterval(() => {
    const numConnect = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // Example of a connection base on number of cores
    const maxConnections = numCores * 5;

    console.log(`Active of connections ::>> ${numConnect}`);
    console.log(`Memory usage ::>> ${memoryUsage / 1024 / 1024}MB`);

    if (numConnect > maxConnections) {
      console.log(`Connections overload detected`);
    }
  }, _SECONDS);
};

module.exports = {
  countConnect,
  checkOverload,
};
