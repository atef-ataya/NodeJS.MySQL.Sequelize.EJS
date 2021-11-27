const path = require('path');
//This will work on all OS and it will give the path to the root file
module.exports = path.dirname(process.mainModule.filename);