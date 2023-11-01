import type { PageServerLoad } from './$types';
// import { loginUser } from '$lib/user.model';

export const load: PageServerLoad = (event) => {
	//const user = event.locals.user;
	console.log('routes/(authed)/protected/+page.server.ts (LOAD users)')

  // just to check if auth works when not logged in
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
