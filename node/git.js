const child_process = require('child_process')

const execCommand = async function(cmd) {
	return new Promise((resolve, reject) => {
		child_process.exec(cmd, function(error, stdout, stderr) {
			if (error) {
				reject(error)
			} else {
				resolve(stdout)
			}
		})
	})
}
const push = async function() {
  return await execCommand('git push')
}
const status = async function() {
  return await execCommand('git status')
}
const main = async function() {
  //push()
  console.log(await status())
}
if (require.main === module) {
  main()
}
exports.push = push

