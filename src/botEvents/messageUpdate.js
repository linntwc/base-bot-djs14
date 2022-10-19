module.exports = async (client, oldMessage, newMessage) => {

    if (newMessage?.channel?.type == 'DM' || newMessage?.author?.bot) return;
    if (oldMessage.content === newMessage.content) return;

    client.emit('messageCreate', newMessage);
}

