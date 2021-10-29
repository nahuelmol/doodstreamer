const https = require('https')

const MakeRequestUrl = (method, url) => {

	var host = url
	var response = ''
	var URL_SPLITED = ''
	var mypath = ''

	if(url.startsWith('https://')){
		url = url.split('://')[1]
	}

	if(url.indexOf('.com/')){
		URL_SPLITED = url.split('.com')
		host = URL_SPLITED[0] + '.com'
		mypath = URL_SPLITED[1]
	}
		
	const options = {
  		hostname: host,
  		path: mypath,
  		method
	}

	const req = https.request(options, res => {
	  console.log(`statusCode: ${res.statusCode}`)
	  response = res.statusCode
	})

	req.on('error', error => {
  		console.error(error)
  		response = error
	})

	req.end()

	return response
}


module.exports = {
	MakeRequestUrl
}