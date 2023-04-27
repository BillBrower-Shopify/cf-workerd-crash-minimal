const autocannon = require('autocannon');

const url = 'http://127.0.0.1:8787/';

async function setup() {
  try {
    await fetch(url);
  } catch (e) {
    console.log('waiting for workerd to start...');
    setTimeout(setup, 1000);

    return;
  }

  start();
}

function start() {
  console.log('starting stress test - ctrl-c to stop');

  const instance = autocannon({
    url,
    connections: 10,
    duration: 180,
    pipelining: 1,
  });

  process.once('SIGINT', () => {
    instance.stop();
  });
}

setup();
