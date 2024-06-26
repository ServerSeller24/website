import PocketBase from 'pocketbase';
import { POCKETBASE_URL } from '$env/static/private';

const pb = new PocketBase(POCKETBASE_URL);

export { pb };
