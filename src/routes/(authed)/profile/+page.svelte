// src/routes/(authed)/profile/+page.svelte
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;

	const { user } = data;
	console.log('routes/(authed)/profile/+page.svelte')
</script>

<svelte:head>
	<title>User Profile page</title>
</svelte:head>

<p>{user.email}</p>


<form method="POST" action="?/logout">
  <button type="submit" name="logout" value="true">Logout</button>
</form>
