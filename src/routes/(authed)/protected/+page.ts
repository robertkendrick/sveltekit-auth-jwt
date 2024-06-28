import type { PageLoad } from './$types';
// import { loginUser } from '$lib/user.model';

/** You only need to call parent if you need the data of your parent
 *  layout(a) in the load function. If not, avoid calling it for
 *  performance reasons
 *
 *  
 *	If you have a +page.server.ts and a +page.ts, the page.svelte only 
 *  receives as data what you return from the +page.ts load (plus all data
 *  from parent layouts). That is, data returned from +page.server.ts 
 *  IS NOT automatically passed to your page.svelte. Instead, it is passed
 *  to +page.ts's load function as the data property. There you are
 *  free to decide to do with it whatever you like. For example simply
 *  return it, modify it, use it to derive other data etc.
*/

export const load: PageLoad = (event) => {
	//const user = event.locals.user;
	console.log('routes/(authed)/protected/+page.ts (LOAD protPage)')
	console.log(event);
	// data from a sibling +page.server.ts is not autonatically 
	// returned to the +page.svelte when you aso have a +page.ts
	const mockUsers = event.data.mockUsers;	// get data from +page.server.ts load

    const protPage = 'more data'
 	return {protPage, mockUsers}
};
