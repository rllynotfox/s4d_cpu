const process = require('process')
const pidusage = require('pidusage')
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
var g = {}
async function main(){
	await pidusage(process.pid).then(m => {g.cpu = ((m.cpu / 10 ).toFixed(1))})
	return(g.cpu)
}

module.exports.main = main
