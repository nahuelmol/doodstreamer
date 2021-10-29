const { DoodClient } = require('doodclient')
const { MakeRequestUrl } = require('requests')

const StartSystem = () => {
	console.log('Stating system')
}

const Request = (method, url) => {
}

const NewDoodUser = (id) => {

	var User = DoodClient(id)

	return User
}

const GenerateToken = () => {
	var token = MakeRequestUrl()
	return token
}

module.exports = {
	StartSystem,
	Request,
	CreateUser,
	GenerateToken
}