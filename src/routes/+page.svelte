<script lang="ts">
	import { page } from '$app/stores';
	import cookies from './cookies.webp';

	$: url = $page.url.origin + $page.url.pathname;
</script>

<svelte:head>
	<title>ElizaShipman.com</title>
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Eliza Shipman: Cookie Baroness" />
	<meta
		property="og:description"
		content="Fuel your adventures with Girl Scout Cookies! From Thin Mints to Tagalongs, we've got the perfect treats to keep you going all season long. Order online and get ready to sell!"
	/>
	<meta property="og:image" content="{url}favicon.ico" />
</svelte:head>

<iframe src="https://digitalcookie.girlscouts.org/scout/eliza502362" title="Cookies" class="absolute inset-0 border-0 h-screen w-screen" />

<div
	class="pointer-events-none absolute bottom-0 w-screen pb-32 bg-bottom bg-repeat-x"
	style="background-image: url('{cookies}');"
/>
