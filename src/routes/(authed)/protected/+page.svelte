// src/routes/(authed)/protected/+page.svelte
<script lang="ts">
	// import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;

	const { user } = data;
	console.log('routes/(authed)/protected/+page.svelte')
	console.log($page.data)
</script>

<svelte:head>
	<title>User Profile page</title>
</svelte:head>

<p>{user.email}</p>
