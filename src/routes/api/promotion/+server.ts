import type { RequestHandler } from './$types';
import { pb } from '$js/pocketbase';
import type { Promotion } from '$type/pocketbase';

export const GET: RequestHandler = async () => {
	const records = (await pb.collection('promotion').getFullList(200 /* batch size */, {
		sort: '-created'
	})) as Promotion[];
	return new Response(JSON.stringify(records));
};
