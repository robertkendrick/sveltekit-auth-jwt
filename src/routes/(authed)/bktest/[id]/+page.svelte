<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    const {calUser} = data
    // console.log(data)
    let osd = calUser?.days?.specialDays.split(',')
    if (osd === undefined) osd=['11','22']
    // console.log(osd.length)
</script>

<p>{data.user.email}</p>

<p>{data.calUser?.id}</p>
<p>{data.calUser?.password}</p>
<p>{data.calUser?.days?.days}</p>
<p>{data.calUser?.days?.specialDays}</p>

<p>{calUser?.days?.days}</p>
<p>{calUser?.days?.specialDays}</p>

<p>{osd[0]}</p>
<p>{osd[1]}</p>