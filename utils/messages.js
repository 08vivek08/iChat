const moment = require('moment');

function formatMessage(username, text,id) {
    return {
        id,
        username,
        text,
        time:moment().format('h:mm a')
    }
}

module.exports=formatMessage;