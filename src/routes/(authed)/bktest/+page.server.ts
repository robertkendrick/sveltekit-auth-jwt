import {getUser, getUsers} from '$lib/usercal.model'

// const data = getUser(2)


// async function getCalUser(id: number) {
//     return await getUser(id)
// }

// getCalUser(2)

import type { PageServerLoad } from './$types';
// export async function load ({ params }) :Promise<PageServerLoad> {
export async function load ({ params }) {
	return await getUsers()
}