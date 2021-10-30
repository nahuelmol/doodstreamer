const { CreateUser } = require('./index')

var TOKEN = '57709yuesng1zbfz7usi6'
var user = ''
var password = ''

var call = res => {

}
var onResponse = user => {
	console.log(user)

	user.addSub()

	var call = res => console.log('last res')

	user.upOnlineVideo(url, call)
	user.upLocalVideo(path, call)
	user.accountInfo(call)
	user.reports(call)

}

CreateUser(TOKEN,onResponse)



