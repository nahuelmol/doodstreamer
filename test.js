const  { Request } = require('./index')
const { GenerateToken, CreateUser } = require('./index')

var TOKEN = ''
var user = ''
var password = ''

var onResponse = res => {
	console.log(res)

	res.upVideo()
	res.addSub()
}

var resHandler = res => {
	console.log('res: ', res + '..')

	TOKEN = res

	if(TOKEN != ''){
		CreateUser(TOKEN,onResponse)
	}
}
GenerateToken(user,password,resHandler)



