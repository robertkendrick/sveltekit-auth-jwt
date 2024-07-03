import {getUser, getUsers} from '$lib/usercal.model'

// const data = getUser(2)


// async function getCalUser(id: number) {
//     return await getUser(id)
// }

// getCalUser(2)

import type { PageServerLoad } from './$types';
export async function load ({ params }) :Promise<PageServerLoad> {
    console.log('params: ', params)
    // const pm: number = Number(params.id)
	return await getUser(Number(params.id))
}