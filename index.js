module.exports = process.env.GRACEFUL_COV ? require('./lib-cov/graceful') : require('./lib/graceful');