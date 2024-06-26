import type { PageServerLoad } from './$types';
import { pb } from '$js/pocketbase';
import type { TeamMember } from '$type/pocketbase';
import { POCKETBASE_URL } from '$env/static/private';

export const load: PageServerLoad = async () => {
	const records = (await pb.collection('team_members').getFullList(200 /* batch size */, {
		sort: '-created'
	})) as TeamMember[];
	for (let index = 0; index < records.length; index++) {
		const element = records[index];
		records[
			index
		].avatar = `${POCKETBASE_URL}/api/files/team_members/${element.id}/${element.avatar}?thumb=100x100`;
	}

	return {
		team: JSON.parse(JSON.stringify(records))
	};
};
