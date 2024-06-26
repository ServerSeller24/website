<script lang="ts">
	import { resetPromotions } from '$js/promotion';
</script>

<div class="p-8">
	<button
		on:click={resetPromotions}
		class="p-2 border border-background-300 hover:bg-background-400 rounded-xl"
		>Reset Promotion Banners</button
	>
</div>
