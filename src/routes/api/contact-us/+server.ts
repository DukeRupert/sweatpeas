import type { RequestHandler } from './$types';
import client from '$lib/postmark';
import { COMPANY } from '$lib/constants';

// Send an email:
export const POST: RequestHandler = async ({ request }) => {
	console.log('sending message');
	const body = await request.json();

	// Add date
	const date = new Date().toString();
	const data = { ...body, dateSent: date };

	const message = { message: 'nice try bot' };

	// Password field is hidden, reject bot attempt
	if (data.password !== '') {
		return new Response(JSON.stringify(message), {
			status: 201,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	// Send message
	try {
		const response = await client.sendEmailWithTemplate({
			TemplateId: 30129375,
			TemplateModel: data,
			From: 'logan@firefly.llc',
			To: COMPANY.contact.email,
			MessageStream: 'outbound',
			TrackOpens: true
		});

		// Success
		if (response.ErrorCode == 0) {
			return new Response(JSON.stringify(response), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		// Error
		return new Response(JSON.stringify(response), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		// Send error notification
		await client.sendEmail({
			From: 'logan@firefly.llc',
			To: 'logan@firefly.llc',

			Subject: 'FtS Website form error',
			TextBody: JSON.stringify(err)
		});

		return new Response(JSON.stringify(err), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
