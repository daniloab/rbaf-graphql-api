import User from '../../modules/user/UserModel'
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export default {
    me: async (args, { user }) => {
        if (!user) {
            throw new Error('You are not authenticated!')
        }

        return await User.findById(user.id)
    },
    login: async (args) => {
        console.log('login')
        const user = await User.findOne({ where: { email: args.loginInput.email } })

        if (!user) {
            throw new Error('No user with that e-mail')
        }

        const valid = await bcrypt.compare(args.loginInput.password, user.password)

        if (!valid) {
            throw new Error('Incorrect password')
        }

        return jsonwebtoken.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '4h' }
        )
    },
    signup: async args => {
        console.log('login')
        const user = await User.create({
            name: args.signupIput.name,
            username: args.signupIput.username,
            email:args.signupIput.email,
            password: await bcrypt.hash(args.signupIput.password, 10)
        })

        // return json web token
        return jsonwebtoken.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '4h' }
        )
    }
}