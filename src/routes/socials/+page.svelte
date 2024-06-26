<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Header from '$lib/header.svelte';
	import PromotionContainer from '$lib/promotion-container.svelte';
	import TeamMember from '$lib/team-member.svelte';
	import Title from '$lib/title.svelte';
	import type { TeamMember as TSTeamMember } from '$type/pocketbase';

	type data = {
		team: TSTeamMember[];
	};

	export let data: data;
</script>

<PromotionContainer />
<Header />
<div class="max-w-5xl mx-auto pt-4 mb-16">
	<Title title="Socials" subtitle="Unsere Sozialen Medien" />
	<div class="p-4 flex gap-4 flex-wrap place-content-center">
		{#each data.socials as social}
			<Socials
				name={social.socialname}
                url={social.socialurl}
                platform={social.socialplatform}
                enabled={social.enabled}
			
			/>
		{/each}
	</div>
</div>
<Footer />
