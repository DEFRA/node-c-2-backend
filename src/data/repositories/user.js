class UserRepository {
    constructor(UserModel) {
        this.User = UserModel // sequelize model for the 'users' table
    }


    async createUser(userData) {
        try {
            console.log('Adding user to database: ', userData)
            const createdUser = await this.User.create({
                name : userData.name,
                email: userData.email
            })
            console.log('User added to database: ', userData)
            return createdUser
        } catch (error) {
            console.error('Error adding user to database: ', error)
            throw error
        }
    }

    async findByEmail(email) {
        try {
            const user = await this.User.findOne({ where: { email }})
            return user
        } catch (error) {
            console.error('Error finding user by email:', error)
            return null
        }
    }

}

export { UserRepository }

