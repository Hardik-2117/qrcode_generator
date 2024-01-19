import fs from "fs";
import qr from "qr-image";
import inquirer from "inquirer";


inquirer
  .prompt([
    {
        "message":"Enter the URL ",
        "name":"URL"
    }
  ])
  .then((answers) => {
    const qrcode = answers.URL
    var qr_svg = qr.image(qrcode, { type: 'png' });
qr_svg.pipe(fs.createWriteStream('qr_generator.png'));
fs.writeFile('mytextfile.txt', qrcode, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });