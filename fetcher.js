const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

const billy = myArgs[0];
const theGoat = myArgs[1];

const request = require('request');

const fs = require('fs');




const fetchPagePutIntoDoc = function(fileName, URL,) {
  console.log('Requesting data from URL...');
  
  request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
   // Print the HTML for the Google homepage.
  const textToAppend = body;

  fs.appendFile(`./data/${fileName}.txt`, textToAppend, err => {
    if (err) {
      console.error(err);
    }
    console.log('Data appended to file');
    console.log(`Downloaded and saved ${textToAppend.length} bytes to ${fileName}`)
  });

});



  
  // fs.readFile(`./data/${bre}.txt`, 'utf8', (error, data) => {
  //   if (err) {
  //     console.error(err);
  //   }
    
  
  //   if (!error) done(data);
  // });
  
};

const bombay = fetchPagePutIntoDoc(theGoat, billy);


// const appendLocalFile = data => {
//   const content = 'Some content!';

  


// };


 



// const myArgs = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

// switch (myArgs[0]) {
//   case 'insult':
//     console.log(myArgs[1], 'smells quite badly.');
//     break;
//   case 'compliment':
//     console.log(myArgs[1], 'is really cool.');
//     break;
//   default:
//     console.log('Sorry, that is not something I know how to do.');
// }