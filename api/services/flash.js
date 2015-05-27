module.exports = {
	error : function (req, msg) {
		req.session.flash = {
			error : msg
		}
	},
	alert: function (req, msg) {
		req.session.flash = {
			alert : msg
		}
	},
	info: function (req, msg) {
		req.session.flash = {
			info : msg
		}
	},
	success: function (req, msg) {
		req.session.flash = {
			success : msg
		}
	}
}