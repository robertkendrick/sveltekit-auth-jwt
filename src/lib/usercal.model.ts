import { db } from '$lib/db';


const getUser = async (id: number) => {
    const user = await db.user.findUnique({
        where: {
            id
        },
        include: {
            days: true,
          },
    })
    console.dir(user, { depth: null })
    return user
}

export {getUser}

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