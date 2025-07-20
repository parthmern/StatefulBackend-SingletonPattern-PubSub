const Redis = require('ioredis');
const redis = new Redis();

// Simulate DB insert
async function saveToDB(batch) {
    console.log(`Saving batch to DB:`, batch);
    // imagine calling MongoDB or PostgreSQL here
}

async function batchProcessor() {
    const batchSize = 5;
    const batch = [];

    while (true) {
        const item = await redis.rpop('eventQueue'); // pop from Redis list
        if (item) {
            batch.push(JSON.parse(item));
        }

        // Save when batch size met or timeout reached
        if (batch.length >= batchSize) {
            await saveToDB(batch.splice(0, batchSize)); // flush and clear batch
        }

        // Wait a bit before next loop to avoid tight loop
        await new Promise((r) => setTimeout(r, 100));
    }
}

module.exports = batchProcessor;