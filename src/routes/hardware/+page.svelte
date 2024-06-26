<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Hardware from '$lib/hardware.svelte';
	import Header from '$lib/header.svelte';
	import PromotionContainer from '$lib/promotion-container.svelte';
	import Title from '$lib/title.svelte';
	import type { Hardware as TSHardware } from '$type/pocketbase';

	type data = {
		hardware: TSHardware[];
	};
	export let data: data;
</script>

<PromotionContainer />
<Header />
<div class="max-w-5xl mx-auto pt-4 mb-16">
	<Title title="Hardware" subtitle="Unsere Hardware" />
	<div class="p-4 flex gap-4 flex-wrap place-content-center">
		{#each data.hardware as item}
			<Hardware cores={item.cores} disk={item.disk} name={item.name} ram={item.ram} />
		{/each}
	</div>
</div>
<Footer />
