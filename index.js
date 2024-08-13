          // import and export by using es module
          import  getPosts from "./postControl.js";
          import { getPostLength } from "./postControl.js";
          console.log(getPosts())
          console.log(getPostLength())
          
          
                  // to create opener by out side the browser
          console.log(process);
          
          const {generateRandomNumber, celicius} = require('./utils');
          console.log(`Random Number: ${generateRandomNumber()}`);
          
          console.log(`celicius: ${celicius(3)}`);