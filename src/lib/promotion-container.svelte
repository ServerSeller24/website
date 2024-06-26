<script lang="ts">
	import Promotion from '$lib/promotion.svelte';
	import { onMount } from 'svelte';
	import type { Promotion as TSPromotion } from '$type/pocketbase';
	let promotion_items: TSPromotion[] = [];
	onMount(async () => {
		getPromotions();
	});

	async function getPromotions() {
		const res = await fetch(`/api/promotion`);
		if (res.ok) {
			const data = await res.json();
			promotion_items = data;
		} else {
			const error = await res.json();
			console.log(error);
		}
	}
</script>

<div class=" duration-500 overflow-hidden">
	{#each promotion_items as item}
		<Promotion
			text={item.text}
			button_text={item.button_text}
			button_link={item.button_url}
			color={item.color}
			id={item.id}
		/>
	{/each}
</div>
