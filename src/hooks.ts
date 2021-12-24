import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({request, resolve}) => {
    // Override request method if query param exists so that we can make DELETE and PATCH requests 
    // HTML forms only support GET and POST
    if (request.query.has('_method')) {
        request.method = request.query.get('_method').toUpperCase();
    }
    const response = await resolve(request);
    return response;
}