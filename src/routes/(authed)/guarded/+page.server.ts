// src/routes/(authed)/guarded/+page.server.ts
// import type { Actions, PageServerLoad } from './$types';
import type { Actions} from './$types';
import { error, redirect } from '@sveltejs/kit';

// export const load: PageServerLoad = (event) => {
// 	const user = event.locals.user;

// 	if (!user) {
// 		throw error(401, {
// 			message: 'You must be logged in to view this page'
// 		});
// 	}

// 	return {
// 		user
// 	};
// };
import type { PageServerLoad } from './$types';
// import { loginUser } from '$lib/user.model';

export const load: PageServerLoad = (event) => {
	//const user = event.locals.user;

	// if (user) {
	// 	throw redirect(302, '/guarded');
	// }
	console.log('routes/(authed)/guarded/+pageserver.ts (LOAD)')
	console.log('Fetched List of Users')
	const mockUsers = [
		{
			email: 'ff@abc.com',
			passwd: 'mypassword'
		},
		{
			email: 'hh@abc.com',
			passwd: 'aotherpassword'
		}
	]
	return {mockUsers}
};
//-----------------------------------------------------------
// action the logout
export const actions: Actions = {
	logout: async (event) => {
		/* @migration task: add path argument */ event.cookies.delete('AuthorizationToken');

		redirect(302, '/login');
	}
};
