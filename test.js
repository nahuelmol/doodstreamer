const  { Request } = require('./index')
const { GenerateToken, CreateUser } = require('./index')

var Token = GenerateToken() 
var newUser = CreateUser(token)

newUser.getVideoInfo(video_id)
newUser.uploadVideo()
newUser.addSubtitle()