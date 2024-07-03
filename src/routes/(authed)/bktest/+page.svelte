<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    const {days} = data.calUser
    console.log(data)
    // const osd = days.specialDays.split(',')
    // console.log(osd.length)
</script>

<p>{data.calUser[0].id} {data.calUser[0].email}</p>
<p>{data.calUser[1].id} {data.calUser[1].email}</p>

<!-- iterate thru array -->
{#each data.calUser as user}
    <p>{user.name} {user.email}</p>
    <p>{user.createdAt} {user.updatedAt}</p>
{/each}

<h3>Loading Data</h3>
<p class="blurb">You define a load function. You don't call that load function. 
Svelte does that for you as it runs your page.svelte file. That is
why you export the load function.
Your load function must return an object (plain object).
Not an array or interger or string.
If your page has a layout file that, for example,
also has a load function that returns some data, then
your export let data field in page.svelte will contain both the
the layout loaded data and your page loaded data as two objects.
data.'layout loaded object' and data.'page loaded object'</p>
<h3>Layouts</h3>
<p class="blurb">In many frameworks the layout component must be imported 
and specified in your page file. Not so in Svelte. 
Any layout in a directory that is a parent of your page directory 
will automatically wrap your page file.
By default, each layout inherits the layout above it but this can 
be overidden.
</p>

<style>
    .blurb {
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        line-height: 2rem;
        font-size: 1.5rem;
        margin-top: 2px;
    }

    h3 {
        margin-bottom: 2px;
    }
</style>