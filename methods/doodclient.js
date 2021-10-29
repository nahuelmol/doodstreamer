const { MakeRequestUrl } = require('./requests')



const DoodClient = (id,callback) => {
	this.user = {id:id}
	this.callback = callback

	this.upVideo = () => {
		console.log('Upload video')
	}

	this.addSub = () => {
		console.log('Add subtitle')
	}

	this.accountInfo = call => {

		var url = 'https://doodapi.com/api/account/info?key=' + this.id

		const onResponse = (status) => {
			console.log('res: ', status)
			call(status)
		}

		MakeRequestUrl('GET', url, onResponse)
	}

	this.callback(this)

}

module.exports = {
	DoodClient
}