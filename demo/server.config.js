module.exports = {
  "port": 4210,
  "server": {
    "baseDir": "./demo/dist",
    middleware : { 1 : require('compression')()}
  }
};
