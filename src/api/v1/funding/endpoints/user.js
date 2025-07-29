import { UserRepository } from "../../../../data/repositories/user.js"
import { userSchema } from "../schemas/user.js"
import { UserService } from "../services/user.js"
import { User } from "../../../../data/models/user.js"





const userRepository = new UserRepository(User) // Pass the User model to the repository;
const userService = new UserService(userRepository)

// Post endpoint used to create a new user
//this function is used to create a new user
async function createUser(request, h) {

    //validating the request payload against the user schema
    const { error, value } = userSchema.validate(request.payload)

    if (error) {
        return h
            .response({
                message: 'Validation error',
                details: error.details
            })
    }

    // If validation passes, create the user
    const user = await userService.createUser(value)
    console.log('User created successfully: ', user)
    return h.response(user).code(201)
}

const userRoutes = [
    {
        method: 'POST',
        path: '/api/v1/funding/create-user',
        handler: createUser,
        options: {
            description: 'Create a new user',
            notes: 'Creates a new user with the provided name and email',
            tags: ['api', 'user'],
            validate: {
                payload: userSchema
            }
        }
    }
]

export { userRoutes }