class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async createUser(userData) {
        console.log('Creating user with data: ', userData)
        const user = await this.userRepository.createUser(userData)

        // only returning the necessary details to avoid exposing the internal structure of the db model
        const safeUser = {
            name: user.name,
            email: user.email
        }
        console.log('***safe user details***: ', safeUser)

        return safeUser

    }
}

export { UserService }