import { db } from '$lib/db';


const getUser = async (id: number) => {
    
    const calUser = await db.user.findUnique({
        where: {
            id
        },
        include: {
            days: true,
          },
    })

    // console.dir('getUser(): ', calUser, { depth: null })
    console.log('getUser(): ', calUser)
    return {calUser}
}

async function getUsers() {
    const calUser = await db.user.findMany({
        include: {
            days: true,
        },
    })
    console.log('getUsers: ', calUser)
    return {calUser}
} 

export {getUser, getUsers}

// const createUser = async (email: string, password: string, name: string) => {
// 	// Check if user exists
// 	const user = await db.user.findUnique({
// 		where: {
// 			email
// 		}
// 	});

// 	if (user) {
// 		return {
// 			error: 'User already exists'
// 		};
// 	}

// 	try {
// 		const user = await db.user.create({
// 			data: {
// 				email,
// 				password: await bcrypt.hash(password, 10),
// 				name,
// 			},
// 		});

// 		return { user };
// 	} catch (error) {
// 		return {
// 			error: 'Something went wrong'
// 		};
// 	}
// };	// end createUser