import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const user = locals.user;

	console.log('event.locals.user: ', user)
	console.log('user: ', user)
	return {
		user
	};
}) satisfies LayoutServerLoad;
