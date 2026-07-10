//We will not use this file anymore. 

const http = require('http');

let Tasks = [
    {id:1, name: "Instal Node js", priority:"high", completed:false}
]

const server = http.createServer((req,res) => {


    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.end('Server is running...');
    }

    if(req.method === 'GET' && req.url === '/task'){
        res.statusCode = 200;
        res.end(JSON.stringify(Tasks));
    } 

   


});


server.listen(5000,'127.0.0.1',() => {
    console.log('Server is running on port 5000');
});