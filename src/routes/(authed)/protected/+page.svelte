// src/routes/(authed)/protected/+page.svelte
<script lang="ts">
	// import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;

	const { user } = data;
	const { mockUsers } = data;
	const { protPage } = data;
	console.log('routes/(authed)/protected/+page.svelte')
	console.log($page.data)
</script>

<svelte:head>
	<title>Protected page</title>
</svelte:head>

<p>{user.email}</p>
<div>
	<li>{$page.data.user.email}</li>
	<li>{$page.data.protPage}</li>
	{#each $page.data.mockUsers as item}
	<li>{item.email}  --  {item.passwd}</li>
	{/each}
</div>

{#each mockUsers as theUser}
  <p>{theUser.email} -- {theUser.passwd}</p>
{/each}

