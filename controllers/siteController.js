const path = require('path');

const homeView = (req, res) => {
    const user = {
        name: 'John',
        id: 1,
        email: 'john88@gmail.com',
        isAdmin: false
    }
    return res.render(
        path.join(__dirname, '..', 'views/pages', 'home.ejs'), {
        user: user
    });
}

module.exports = {
    homeView
};