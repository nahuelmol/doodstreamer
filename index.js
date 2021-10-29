const { DoodClient } = require('./methods/doodclient')
const { MakeRequestUrl } = require('./methods/requests')

const StartSystem = () => {
	console.log('Stating system')
}

const CreateUser = (id,call) => {

	const callback = obj => {
		call(obj)
	}

	DoodClient(id,callback)

}

const GenerateToken = (user, pass, resHandler) => {
	var method = 'GET'
	var url = 'https://www.google.com'

	var call = res => {
		console.log(`statusCode: ${res}`)

		resHandler(res)
	}

	MakeRequestUrl(method, url, call)
}

module.exports = {
	StartSystem,
	CreateUser,
	GenerateToken
}