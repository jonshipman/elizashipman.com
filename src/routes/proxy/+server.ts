export async function GET({ fetch }) {
	const response = await fetch('https://dummyjson.com/products');
	return new Response(response.body, {});
}
