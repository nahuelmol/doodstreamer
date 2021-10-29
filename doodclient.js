const DoodClient = (id,callback) => {
	this.user = {id:id}
	this.callback = callback

	this.upVideo = () => {
		console.log('Upload video')
	}

	this.addSub = () => {
		console.log('Add subtitle')
	}

	this.callback(this)

}

module.exports = {
	DoodClient
}