import { DATA_URL, BASE_URL } from '$env/static/private';

export const load = async () => {
	try {
		const [testimonialsRes, servicesRes, whyUsRes] = await Promise.all([
			fetch(
				`${DATA_URL}/items/testimonials?filter[status][_eq]=published&fields=*.*&sort=sort,-id&limit=3`
			),
			fetch(
				`${DATA_URL}/items/services?filter[status][_eq]=published&fields=*.*&sort=title&limit=4`
			),
			fetch(
				`${DATA_URL}/items/why_us_home?filter[status][_eq]=published&fields=*.*&sort=title`
			)
		]);

		if (!testimonialsRes.ok || !servicesRes.ok || !whyUsRes.ok) {
			throw new Error('Failed to fetch one or more resources.');
		}

		const [testimonials, services, whyUs] = await Promise.all([
			testimonialsRes.json(),
			servicesRes.json(),
			whyUsRes.json()
		]);

		return {
			testimonials,
			services,
			whyUs,
			baseUrl: BASE_URL
		};
	} catch (error) {
		console.error('Error fetching data:', error.message);
		return {
			testimonials: [],
			services: [],
			whyUs: [],
			baseUrl: BASE_URL
		};
	}
};
