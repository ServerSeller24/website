<script>
	import { page } from '$app/stores';
</script>

<div class="flex justify-center items-center h-screen">
	<div class="flex flex-col ring p-4 ring-secondary-500">
		<p class="text-secondary-500 text-xl text-center">Error!</p>
		<p class="text-3xl text-center">Server {$page.error?.message}</p>
	</div>
</div>
