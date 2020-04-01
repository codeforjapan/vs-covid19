const makedata = require('./makedata.js')
const util = require('./util.js')

const main = async function() {
  for (;;) {
    await util.sleep(1000)
    if (makedata.main()) {
      console.log('updated')
    }
  }
}
if (require.main === module) {
  main()
}
