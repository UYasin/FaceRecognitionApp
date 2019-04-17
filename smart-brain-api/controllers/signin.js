const handleSignin = (req, res, db, bcrypt) => {
		const {email, password} = req.body;
		if(!email || !password){
			return res.status(400).json('incorrect form submission');
		}
		db.select('email', 'hash').from('login')
			.where('email', '=' , req.body.email) //dont need to have req.body.email because we have destructured it above just email would suffice
			.then(data => {
				const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
				if(isValid){
				return db.select('*').from('users')
				.where('email', '=', req.body.email) //dont need to have req.body.email because we have destructured it above just email would suffice
				.then(user => {
					res.json(user[0])
				})
				.catch(err => res.status(400).json('unable to get user'))
				}else{
					if(!isValid){
						res.status(400),json('wrong credentials')
					}
				}
			})	
			.catch(err => res.status(400).json('wrong credentials'))
}

module.exports = {
	handleSignin: handleSignin
}