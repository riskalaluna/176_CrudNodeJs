// Middleware untuk memeriksa autentikasi
//function buat memastikan 
function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        return next();
    } else {
        res.redirect('/login');
    }
}

module.exports = { isAuthenticated };
//tadi salah penamaan commit
