<script lang="ts">
	import cookies from './cookies.webp';
</script>

<svelte:head>
	<title>ElizaShipman.com</title>
</svelte:head>

<iframe src="/proxy" title="Cookies" class="absolute inset-0 border-0 h-screen w-screen" />

<div
	class="pointer-events-none absolute bottom-0 w-screen pb-32 bg-bottom bg-repeat-x"
	style="background-image: url('{cookies}');"
/>
