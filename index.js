const prompts = require('prompts');
const imgbbUploader = require('imgbb-uploader');
const chalk = require('chalk');

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'value',
    message: 'Filename :'
  });
 
  console.log(chalk.hex('#42f542').bold('\nUploading: ' + response.value + '\n'));
  imgbbUploader("ec45faf9b4252c56b8c658758854ee62", response.value)
  .then(img => {
    console.log(chalk.hex('#42ddf5').bold('* - Upload Complete - *'))
    console.log(chalk.hex('#4287f5').bold('Image Link: ' + img.url))
  })
  .catch(error => console.error(1))
})();