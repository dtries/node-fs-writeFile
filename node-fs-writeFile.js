/* INSTRUCTIONS TO TRY IT OUT:
    Delete a .txt file if one exists and then enter "node node-fs-writeFile" without quoation marks in the CLI in the terminal. Check out the text file created. Now, try changing the text in the second agrument in the fs.writeFile function and run the code again. You will see the txt file still exists, but that the existing content was overwritten with the new content in the 2nd argument.
*/

const fs = require('fs'); /* constant set that represents the built-in file system module in node.js */

fs.writeFile('aNewFile.txt', 'Some text content', function(err){ /* will create a new file  with the name of the first argument and content consisting of the second argument. If a file with the name in the 1st argument already exists, it will OVERWRITE that file. To try */
    if (err) throw err; /* output error message, if occurs, to the terminal */
    console.log(`writeFile has been executed!`); /* message to inform us that the command did not encounter any error and thus has been executed */
});