// src/hooks.server.ts 
import type { Handle } from '@sveltejs/kit';
import { JWT_ACCESS_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';

import { db } from '$lib/db';

const handle: Handle = async ({ event, resolve }) => {
	console.log(`📣 NEW REQUEST IS BEING MADE FROM ${event.url.pathname}`)
	console.log('hooks.server.ts')
	const authCookie = event.cookies.get('AuthorizationToken');

	if (authCookie) {
		// Remove Bearer prefix
		const token = authCookie.split(' ')[1];

		try {
			const jwtUser = jwt.verify(token, JWT_ACCESS_SECRET);
			if (typeof jwtUser === 'string') {
				throw new Error('Something went wrong');
			}

			const user = await db.user.findUnique({
				where: {
					id: jwtUser.id
				}
			});

			if (!user) {
				throw new Error('User not found');
			}

			// create a user objext (not really session object)
			const sessionUser = {
				id: user.id,
				email: user.email
			};

			event.locals.user = sessionUser;
		} catch (error) {
			console.error(error);
		}
	}

	// return await resolve(event);
	const response = await resolve(event)
	console.log(`🔥 THE PAGE IS READY, I'M SENDING THE RESPONSE`)
	return response
};

export { handle };
