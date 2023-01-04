const http = require('http');

const PORT = 3000;
const server = http.createServer();

const friends = [
  {
    id: '1',
    name: 'allen1',
  },
  {
    id: '2',
    name: 'allen2',
  },
  {
    id: '3',
    name: 'allen3',
  },
];

server.on('request', (req, res) => {
  const endpoint = req.url.split('/');
  const [, route, id] = endpoint;

  switch (route) {
    case '':
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end('default page');
      break;
    case 'friends':
      if (id) {
        const response = friends.find((friend) => friend.id === id);
        if (response) {
          res.writeHead(200, {
            'Content-Type': 'application/json',
          });
          res.end(JSON.stringify(response));
        } else {
          res.writeHead(404, {
            'Content-Type': 'text/plain',
          });
          res.end('404 Not Found');
        }
      } else {
        if (req.method === 'POST'){
            req.on('data',(data) => {
                console.log('Request:',data.toString());
                friends.push(JSON.parse(data.toString()))
                
            });
            req.pipe(res);
        } else{
            res.writeHead(200, {
                'Content-Type': 'application/json',
              });
              res.end(JSON.stringify(friends));
        }
        
      }
      break;
    case 'message':
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.end('this is message');
      break;
    default:
      res.writeHead(404, {
        'Content-Type': 'text/plain',
      });
      res.end('404 Not Found');
      break;
  }
});

server.listen(PORT, () => {
  console.log(`listen on port: ${PORT}...`);
});
