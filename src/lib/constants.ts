import { wrench, heart, mail, job, star } from '$lib/icons';

interface Social {
	type:
		| 'facebook'
		| 'instagram'
		| 'twitter'
		| 'youtube'
		| 'yelp'
		| 'github'
		| 'tripadvisor'
		| 'foursquare'
		| 'zomato'
		| 'dribbble';
	href: string;
}

interface Logo {
	label: string;
	href: string;
	img: {
		src: string;
		alt: string;
		height: string;
		width: string;
	};
}

interface Contact {
	phone: {
		string: string;
		href: string;
	};
	location: {
		address: string;
		city: string;
		state: string;
		zip: string;
	};
	email: string;
}

interface Company {
	name: string;
	logo: Logo;
	contact: Contact;
	social: Social[];
	year: number;
	mapEmbed: string;
}

export const COMPANY: Company = {
	name: "Sweat Pea's",
	logo: {
		label: "Sweat Pea's",
		href: '/',
		img: {
			src: 'woman_winking.webp',
			alt: 'A portrait of a retro woman winking',
			height: '300',
			width: '300'
		}
	},
	contact: {
		phone: {
			string: '123-456-7890',
			href: 'tel:1234567890'
		},
		location: {
			address: '12345 151st St E.',
			city: 'Helena',
			state: 'MT',
			zip: '59601'
		},
		email: 'sweetpea.cleaners17@gmail.com'
	},
	// social: [
	// 	{ type: 'facebook', href: 'https://www.facebook.com/profile.php?id=100070776072205' },
	// 	{ type: 'instagram', href: 'https://www.instagram.com/fts_excavation/' },
	// 	{ type: 'youtube', href: 'https://m.youtube.com/channel/UC_LbjVWjiiFg3h9lB6rcvGQ' }
	// ],
	year: 2020,
	mapEmbed:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d347153.94511725573!2d-122.83725475534202!3d47.1746916080952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490fdfbb8a31aab%3A0xb896498a4891ace9!2sFtS-Excavation%2C%20LLC!5e0!3m2!1sen!2sus!4v1662738385349!5m2!1sen!2sus'
};

export const LINKS = [
	{
		label: 'Services',
		href: '#services',
		svg: wrench,
		subitems: []
	},
	{
		label: 'Contact',
		href: '#contact-us',
		svg: mail,
		subitems: []
	}
];
