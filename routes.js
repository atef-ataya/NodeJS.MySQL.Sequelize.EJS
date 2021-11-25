const fs = require('fs');
const { buffer } = require('stream/consumers');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    // if (url === '/') {
    //     res.setHeader('Content-Type', 'text/html');
    //     res.write('<html>');
    //     res.write('<head><title>Assignment 1</title></head>')
    //     res.write('<body><form action="/create" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>')
    //     res.write('</html>');
    //     return res.end();
    // }
    //process.exit();
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

    }

    // if (url === '/users' && method === 'POST') {
    //     res.setHeader('Content-Type', 'text/html');
    //     res.write('<html>');
    //     res.write('<head><title>Assignment 1</title></head>')
    //     res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
    //     res.write('</html>');
    //     return res.end();

    // }
    // if (url === '/create') {
    //     const body = [];
    //     req.on('data', (chunk) => {
    //         body.push(chunk);
    //     });
    //     req.on('end', () => {
    //         const parsedBody = Buffer.concat(body).toString();
    //         console.log(parsedBody.split('=')[1]); // username = whatever-the-user-entered
    //     });
    //     res.statusCode = 302;
    //     res.setHeader('Location', '/');
    //     res.end();
    // }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my node.js server!</h1></body>')
    res.write('</html>');
    res.end();
};

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

exports.handler = requestHandler;
exports.someText = 'Some had coded text';