<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    const {days} = data.calUser
    // console.log(data)
    const osd = days.specialDays.split(',')
    // console.log(osd.length)
</script>

<p>{data.user.email}</p>
<p>{data.calUser}</p>

<p></p>
<p>{data.calUser?.id}</p>
<p>{data.calUser?.password}</p>
<p>{data.calUser?.days?.days}</p>
<p>{data.calUser?.days?.specialDays}</p>

<p>{days.days}</p>
<p>{days.specialDays}</p>

<p>{osd[0]}</p>
<p>{osd[1]}</p>