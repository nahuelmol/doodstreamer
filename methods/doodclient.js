const { MakeRequestUrl } = require('./requests')



const DoodClient = (id,callback) => {
	this.id = id
	this.callback = callback

	this.upOnlineVideo = (path,call) => {
		var videopath = path
		var url = 'https://doodapi.com/api/upload/server?key=' + this.id +'&url='+ videopath

		const onResponse = status => {
			call(status)
		}

		MakeRequestUrl('GET',url,onResponse)

		console.log('Upload video')
	}

	this.upLocalVideo = (path,call) => {
		var videopath = path
		var url = 'https://doodapi.com/api/upload/server?key=' + this.id +'&file='+ videopath

		const onResponse = status => {
			call(status)
		}

		MakeRequestUrl('GET',url,onResponse)

		console.log('Upload video')
	}

	this.addSub = () => {
		console.log('Add subtitle')
	}

	this.reports = call => {
		var url = 'https://doodapi.com/api/account/stats?key=' + this.id

		const onResponse = status => {
			call(status)
		}

		MakeRequestUrl('GET', url, onReponse)
	}

	this.accountInfo = call => {

		var url = 'https://doodapi.com/api/account/info?key=' + this.id

		const onResponse = status => {
			call(status)
		}

		MakeRequestUrl('GET', url, onResponse)
	}

	this.callback(this)

}

module.exports = {
	DoodClient
}