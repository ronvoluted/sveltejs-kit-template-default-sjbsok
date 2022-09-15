/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	return Response.redirect(event.url.origin, 303);
};
