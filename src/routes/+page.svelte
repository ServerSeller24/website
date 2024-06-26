<script>
	import Features from '$lib/features.svelte';
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import HeroText from '$lib/hero-text.svelte';
	import Hero from '$lib/hero.svelte';
	import PromotionContainer from '$lib/promotion-container.svelte';
</script>

<PromotionContainer />
<Header />
<div class="max-w-5xl mx-auto pt-32">
	<Hero />
	<HeroText />
	<div class="mb-8">
		<Features />
	</div>
</div>
<Footer />
