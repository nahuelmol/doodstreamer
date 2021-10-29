const { DoodClient } = require('./doodclient')
const { MakeRequestUrl } = require('./requests')

const StartSystem = () => {
	console.log('Stating system')
}

const CreateUser = (id,call) => {

	const callback = obj => {

		call(obj)
	}

	DoodClient(id,callback)

}

const GenerateToken = () => {
	var method = 'GET'
	var url = 'https://www.google.com'

	var token = MakeRequestUrl(method, url)
	
	return token
}

module.exports = {
	StartSystem,
	CreateUser,
	GenerateToken
}