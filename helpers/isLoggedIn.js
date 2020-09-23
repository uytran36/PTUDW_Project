module.exports = function isLoggedIn(req, res, next) {
	if (!(req.session)) {
		return res.redirect('/admin');
	}
	next();
}