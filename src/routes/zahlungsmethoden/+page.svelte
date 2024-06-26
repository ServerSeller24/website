<script>
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import PaymentMethod from '$lib/payment-method.svelte';
	import PromotionContainer from '$lib/promotion-container.svelte';
	import Title from '$lib/title.svelte';
</script>

<PromotionContainer />
<Header />
<div class="max-w-5xl mx-auto pt-4 mb-16">
	<Title title="Zahlungsmethoden" subtitle="Unsere Zahlungsmethoden" />
	<div class="p-4 flex gap-4 flex-wrap place-content-center">
		<PaymentMethod type="Paypal" />
		<PaymentMethod type="Stripe" disabled={true} />
		<PaymentMethod type="PaySafeCard" />
	</div>
</div>
<Footer />
