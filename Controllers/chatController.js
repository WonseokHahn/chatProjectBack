const chatController = {};
const Chat = require("../Models/chat")

chatController.saveChat = async(message, user)=>{
    const newMessage = new Chat({
        chat : message,
        user : {
            id : user._id,
            name : user.name
        }
    });
    await newMessage.save();

    return newMessage;
}

module.exports=chatController