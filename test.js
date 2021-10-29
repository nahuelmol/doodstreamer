const { CreateUser } = require('./index')

var TOKEN = process.env.API_TOKEN || 'example token'
var user = ''
var password = ''

var call = res => {

}
var onResponse = user => {
	console.log(user)

	user.upVideo()
	user.addSub()

	var call = res => {
		console.log('last res')
	}

	user.accountInfo(call)

}

CreateUser(TOKEN,onResponse)



