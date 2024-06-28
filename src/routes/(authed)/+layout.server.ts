// src/routes/(authed)/layout.server.ts
import type { LayoutServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';


// Just check if user is logged in. Else redirect to login page
export const load: LayoutServerLoad = (event) => {
	console.log('routes/(authed)/+layout.server.ts (LOAD - read user from events.locals.user)')
	console.log('Auth Layout invoked')
	const user = event.locals.user;

	if (!user) {
        redirect(303, `/login?redirectTo=${event.url.pathname}`);

		// throw error(401, {
		// 	message: 'You must be logged in to view this page'
		// });
	}

	return {
		user
	};
};

// export const actions: Actions = {
// 	logout: async (event) => {
// 		event.cookies.delete('AuthorizationToken');

// 		throw redirect(302, '/login');
// 	}
// };
