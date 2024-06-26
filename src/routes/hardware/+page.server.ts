import type { PageServerLoad } from './$types';
import { pb } from '$js/pocketbase';
import type { Hardware } from '$type/pocketbase';

export const load: PageServerLoad = async () => {
	const records = (await pb.collection('hardware').getFullList(200 /* batch size */, {
		sort: '-created'
	})) as Hardware[];

	return {
		hardware: JSON.parse(JSON.stringify(records))
	};
};
