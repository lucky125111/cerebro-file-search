import { memoize } from 'cerebro-tools'

/**
 * Get google suggestions for entered query
 * @param  {String} query
 * @return {Promise}
 */
//todo move to config file
const excludeList = [
  '/tmp'
]

const { EOL } = require('os');

const getSuggestions = (query) => {
  const { exec} = require('child_process')

  return new Promise(function (resolve, reject) {
    let isPath = !query.includes('/')
    let command = `locate -i -e`
    if(isPath)
      command += ' -b'
    command += ` -L ${query}`
    if(isPath && excludeList){
      command += ' | egrep -v "^('
      command += excludeList.join('|')
      command += ')"'
    }
    command += ' | head -n 100'
    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject([err]);
      } else {
        let fileNames = stdout.split(EOL).filter(el => el)
        resolve(fileNames);
      }
    });
  });
}

export default memoize(getSuggestions, {
  length: false,
  promise: 'then',
  maxAge: 30 * 60 * 1000,
  preFetch: true
})
