// src/routes/(authed)/profile/+page.server.svelte
import type { Actions} from './$types';
import { error, redirect } from '@sveltejs/kit';

console.log('routes/(authed)/profile/+page.server.ts (No LOAD function here)')

export const actions: Actions = {
	logout: async (event) => {
		/* @migration task: add path argument */ event.cookies.delete('AuthorizationToken');

		redirect(302, '/login');
	}
};
