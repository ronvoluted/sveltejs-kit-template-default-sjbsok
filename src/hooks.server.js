/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	if (event.url.pathname === 'potato') {
		return Response.redirect(event.url.origin, 303);
	}

	return resolve(event);
};
