// publisher.js
const Redis = require('ioredis');
const batchProcessor = require('./worker');

const redis = new Redis();

function sendEventToQueue(event) {
    redis.lpush('eventQueue', JSON.stringify(event)); // push to Redis list
}

batchProcessor();   // ASYNC WORKER PROCESS

// simulate multiple events
setInterval(() => {
    console.log("send event to queue");
    const event = { type: 'move', player: 'p1', move: 'e4e5', timestamp: Date.now() };
    sendEventToQueue(event);
}, 500);
