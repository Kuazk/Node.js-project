const path = require('path')

exports.getMessages = (req, res) => {
    
    res.sendFile(path.join(__dirname,'..', 'public','skimountain.jpg'))
    //res.send('<ul><li>HELLO ALLEN! </li></ul>');
};

exports.updateMessage = (req, res) => {
    console.log('Updating message...');
    res.status(204).end();
};
