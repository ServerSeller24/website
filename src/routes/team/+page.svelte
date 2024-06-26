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
	<Title title="Team" subtitle="Unser Team" />
	<div class="p-4 flex gap-4 flex-wrap place-content-center">
		{#each data.team as teammember}
			<TeamMember
				date={teammember.date}
				location={teammember.location}
				name={teammember.name}
				role={teammember.role}
				text={teammember.about}
				avatar={teammember.avatar}
			/>
		{/each}
	</div>
</div>
<Footer />
