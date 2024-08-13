          //  writable file


          const fs = require('fs');
          const file = fs.createWriteStream('./big.file');
          
          for(let i=0; i<= 1e6; i++) {
            file.write("hello mr Urban pac")
          }
          
          file.end();
        
        
          // by creating server
        
        
          const fs = require('fs');
        const server = require('http').createServer();
        
        server.on('request', (req, res) => {
          fs.readFile('./big.file', (err, data) => {
            if (err) throw err;
          
            res.end(data);
          });
        });
        
        server.listen(8000);