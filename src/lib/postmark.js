import postmark from 'postmark';
import { POSTMARK_API_KEY } from '$env/static/private';

console.log('API KEY');
console.log(POSTMARK_API_KEY);
const client = new postmark.ServerClient(POSTMARK_API_KEY);

export default client;
