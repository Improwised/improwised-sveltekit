import { DATA_URL, BASE_URL } from '$env/static/private';
export const load = async () => {
	try {
		const testimonialsRes = await fetch(
			DATA_URL +
				'/items/testimonials?filter[status][_eq]=published&fields=*.*&sort=sort,-id&limit=3'
		); // Replace with correct API URLs
		const servicesRes = await fetch(
			DATA_URL + '/items/services?filter[status][_eq]=published&fields=*.*&sort=title&limit=4'
		);
		const whyUsRes = await fetch(
			DATA_URL + '/items/why_us_home?filter[status][_eq]=published&fields=*.*&sort=title'
		);

		const testimonials = await testimonialsRes.json();
		const services = await servicesRes.json();

		const whyUs = await whyUsRes.json();

		// Return the data to the page component
		return {
			testimonials,
			services,
			whyUs,
			baseUrl: BASE_URL
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			testimonials: [],
			services: [],
			whyUs: []
		};
	}
};
