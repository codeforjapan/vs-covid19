const fs = require('fs')
const fetch = require('node-fetch')
const util = require('./util.js')

const fetchText = async function(url) {
  const data = await (await fetch(url)).text()
	return data
}
const fetchGoogleSpreadSheetCSV = async function(key) {
	const csvurl = `https://docs.google.com/spreadsheets/d/e/${key}/pub?gid=0&single=true&output=csv`
  const csv = await fetchText(csvurl)
  return csv
}
const makeSupport = async function() {
  const key = '2PACX-1vSFMNp5HcRNOF5MrAujEUWR1dIoX2mncMEWTbPlVAaJqKWiq831-6gnCyI7n_G8YfPqNQXrfwyVjyHL'
  const fn = '../vscovid19-data'
  const csv = await fetchGoogleSpreadSheetCSV(key)
  fs.writeFileSync(fn + '.csv', csv)
  const data = util.convertCSVtoArray(csv)
	const json = util.csv2json(data)
  console.log(json)
  fs.writeFileSync(fn + '.json', JSON.stringify(json))
  console.log(json.length)
}

const main = async function() {
  makeSupport()
}
if (require.main === module) {
  main()
}
