const redis = require('redis');

const client = redis.createClient({
    password: 'QsvKT68UOPxAIyjyYgtqlsPACI17VpFa',
    socket: {
        host: 'redis-15446.c212.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 15446
    }
});

client.connect()
.then(() => {
    console.log('Redis connected')
})
.catch((err) => {
    console.log(err.message)
})

module.exports = client;


