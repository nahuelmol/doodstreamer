const  { Request } = require('./index')
const { GenerateToken, CreateUser } = require('./index')

var TOKEN = GenerateToken()

var onResponse = res => {
	console.log(res)

	res.upVideo()
	res.addSub()
}

CreateUser('newId',onResponse)

