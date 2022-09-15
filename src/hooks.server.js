/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	if (event.url.pathname !== '/') {
		return Response.redirect(event.origin.url, 303);
	}

	return resolve(event);
};
