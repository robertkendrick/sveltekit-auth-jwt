// src/lib/user.model.ts
import { JWT_ACCESS_SECRET } from '$env/static/private';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { db } from '$lib/db';

const createUser = async (email: string, password: string, name: string) => {
	// Check if user exists
	const user = await db.user.findUnique({
		where: {
			email
		}
	});

	if (user) {
		return {
			error: 'User already exists'
		};
	}

	try {
		const user = await db.user.create({
			data: {
				email,
				password: await bcrypt.hash(password, 10),
				name,
			},
		});

		return { user };
	} catch (error) {
		return {
			error: 'Something went wrong'
		};
	}
};	// end createUser

const loginUser = async (email: string, password: string) => {
	// Check if user exists
	const user = await db.user.findUnique({
		where: {
			email
		}
	});

	if (!user) {
		return {
			error: 'Invalid credentials'
		};
	}

	// Verify the password
	const passwordIsValid = await bcrypt.compare(password, user.password);

	if (!passwordIsValid) {
		return {
			error: 'Invalid credentials'
		};
	}

	const jwtUser = {
		id: user.id,
		email: user.email
	};

	const token = jwt.sign(jwtUser, JWT_ACCESS_SECRET, {
		expiresIn: '1d'
	});

	return { token };
};	// end loginUser

export { createUser, loginUser }
