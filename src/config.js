var config = {}

config.host = process.env.HOST || "[https://tridenttrackandtraceba5d1.documents.azure.com:443/]";
config.authKey = process.env.AUTH_KEY || "[ut72OQFzNM72qVHRcD68AVxQR7KK8BOqmfSTolqDiMsCYEKFSwfvV5Cfpf5LGy2IxVf9iCejORJx7QBFdt906w==]";
config.databaseId = "DevMgmtDB";
config.collectionId = "rfid";



module.exports = config;
