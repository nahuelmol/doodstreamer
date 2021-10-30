const https = require('https')

const MakeRequestUrl = (method, url, call) => {

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
	  var status = res.statusCode

	  res.on('data', data => {
	  	var result = data.toString()
	  	var result_obj = JSON.parse(result)
	  	
		console.log('MSG: ', result_obj.msg)

		console.log('request to: ', options.hostname + options.path)
	  	console.log('status: ', status)

		call(status)
		})

	})

	

	req.on('error', error => {
  		console.error(error)
  		response = error
	})

	req.end()

}


module.exports = {
	MakeRequestUrl
}