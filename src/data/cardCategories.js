import cardsData from './boardgameCards';

let categories = [
	{
		bgImage: 'history',
		title: 'Historia',
		id: 'history',
		description: [
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		],
		// align: 'start',
		anchor: '',
		miniImg: '', // offer_vol_letter.svg
		listData: [
			'obie były w Związku Radzieckim',
			'podobne flagi',
			'wielkie Księstwo Litewskie',
			'wspólna granica',
			'piłka nożna',
			'duże protesty',
			'nie byli na Księżycu'
		],
		cardsData: cardsData.history
	},
	{
		bgImage: 'culture',
		title: 'Kultura',
		id: 'culture',

		description: [
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		],
		align: 'end',
		anchor: '',
		miniImg: '', // offer_vol_letter.svg
		listData: [
			'pierogi',
			'barszcz czerwony',
			'bigos',
			'ziemniaki',
			'alfabet',
			'Adam Bernard Mickiewicz',
			'Konstanty Kalinowski',
			'Tadeusz Kościuszko'
		],
		cardsData: cardsData.culture
	},
	{
		bgImage: 'territory',
		title: 'Teren',
		id: 'territory',

		description: [
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		],
		align: 'start',
		anchor: '',
		miniImg: '', // offer_vol_letter.svg
		listData: [
			'Hajnówka - Język białoruski ma status języka pomocniczego obok oficjalnego języka polskiego',
			'Orla - Język białoruski ma status języka pomocniczego obok oficjalnego języka polskiego ',
			'Narewka - Język białoruski ma status języka pomocniczego obok oficjalnego języka polskiego ',
			'Czyże - Język białoruski ma status języka pomocniczego obok oficjalnego języka polskiego ',
			'Miasta partnerskie: Aleksandrów Kujawski - Slonim',
			'Miasta partnerskie: Biała Podlaska - Bieraście',
			'Miasta partnerskie: Baranavičy - Biała Podlaska',
			'Miasta partnerskie: Hrodna - Słupsk',
			'Miasta partnerskie: Białystok - Hrodna ',
			'Miasta partnerskie: Minsk - Łódź',
			'Miasta partnerskie: Homiel  - Radom',
			'Miasta partnerskie: Mahiloŭ - Włocławek',
			'Miasta partnerskie: Viciebsk - Zielona Góra',
			'Miasta partnerskie: Lida - Koszalin ',
			'Miasta partnerskie: Navapołack  - Płock ',
			'Miasta partnerskie: Pinsk - Częstochowa ',
			'Miasta partnerskie: Mazyr - Chònice',
			'Miasta partnerskie: Połack  - Gdańsk',
			'Miasta partnerskie: Orša - Mińsk Mazowiecki',
			'Miasta partnerskie: Maladziečna  - Piotrków Trybunalski',
			'Miasta partnerskie: Kobryn - Bielsk Podlaski ',
			'wspólna rzeka: Bug',
			'wspólna rzeka: Svislach',
			'kraj sąsiadujący: Ukraina',
			'kraj sąsiadujący: Litwa',
			'kraj sąsiadujący: Łotwa',
			'kraj sąsiadujący: Rosja'
		],
		cardsData: cardsData.territory
	},
	{
		bgImage: 'feast',
		title: 'Święta',
		id: 'feast',

		description: [
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		],
		align: 'end',
		anchor: '',
		miniImg: '', // offer_vol_letter.svg
		listData: [
			'Wielkanoc',
			'Święto Pracy',
			'Boże Narodzenie ',
			'Dzień Kobiet',
			'Noc Kupały',
			'Walentynki',
			'Dziady',
			'Dożynki',
			'Kolędy'
		],
		cardsData: cardsData.feasts
	}
];

export default categories;
