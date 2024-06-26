<script>
	import '../app.postcss';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title
		>{$page.url.pathname.substring(1)
			? $page.url.pathname.substring(1).charAt(0).toUpperCase() +
			  $page.url.pathname.substring(1).slice(1)
			: 'Home'} | Xelo-Host</title
	>
	<meta property="og:type" content="profile" /><meta
		property="og:url"
		content={$page.url.toString()}
	/><meta property="og:title" content="Xelo-Host" /><meta
		property="og:description"
		content={$page.url.pathname.substring(1)
			? $page.url.pathname.substring(1).charAt(0).toUpperCase() +
			  $page.url.pathname.substring(1).slice(1)
			: 'Home'}
	/><meta property="og:image" content="{$page.url.toString()}favicon.png" /><meta
		name="theme-color"
		content="#2553f5"
	/>
</svelte:head>

<div class="bg-background-500 min-h-screen text-text font-quicksand selection:bg-primary-400/30">
	<slot />
</div>
