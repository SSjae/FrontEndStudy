// 미리 만들어져 있는 os, path 내장 모듈
const os = require("os");
const path = require("path");

const System = {
    info: () => {
        console.log("os.version ===> " + os.version);
        console.log("os.srch() ===> " + os.arch());
        console.log("os.homedir() ===> " + os.homedir());
        console.log("os.hostname() ===> " + os.hostname());    
        console.log("os.totalmem() ===> " + os.totalmem());    
        console.log("os.freemem() ===> " + os.freemem());
        console.log("os.uptime() ===> " + os.uptime());
        console.log("os.networkInterfaces() ===> ");
        console.log(os.networkInterfaces())
    },
    path: () => {
        console.log("path.join() ===> " + path.join("c:/", "programs", "text.txt"));
        console.log("path.dirname() ===> " + path.dirname("c:/programs/test.txt"));
        console.log("path.basename() ===> " + path.basename("c:/program/test.txt"));
        console.log("path.extname() ===> " + path.extname("c:/programs/test.txt"));
    }
}

module.exports = System;

// 위와 같은 의미
// const System = module.exports =  {

// }