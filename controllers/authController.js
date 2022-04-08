const path = require('path');

const login = (req, res) => {
    return res.render(
        path.join(__dirname, '..', 'views/pages', 'login.ejs'));
}

module.exports = {
    login
}