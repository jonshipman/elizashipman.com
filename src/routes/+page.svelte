<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { DESTINATION } from '$lib/config';
	import cookies from './cookies.webp';
	import wallpaper from './wallpaper.webp';

	$: url = $page.url.origin + $page.url.pathname;
</script>

<svelte:head>
	<title>ElizaShipman.com</title>
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Eliza Shipman: Cookie Baroness" />
	<meta
		property="og:description"
		content="Fuel your adventures with Girl Scout Cookies! From Thin Mints to Peanut Butter Patties, we've got the perfect treats to keep you going all season long. Order online and get ready to sell!"
	/>
	<meta property="og:image" content="{url}favicon.ico" />

	{#if !dev}
		<meta http-equiv="refresh" content="5; url={DESTINATION}" />
	{/if}
</svelte:head>

<div
	class="w-screen min-h-screen flex items-center justify-center"
	style="background-image: url('{wallpaper}');"
>
	<div class="text-center select-none">
		<div><img src="/favicon.ico" alt="Eliza's Head" class="animate-bounce pointer-events-none" /></div>
		<div class="text-5xl">Loading</div>
	</div>
</div>

<div
	class="pointer-events-none absolute bottom-0 w-screen pb-32 bg-bottom bg-repeat-x"
	style="background-image: url('{cookies}');"
/>
