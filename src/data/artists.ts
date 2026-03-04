import heroImage from '../assets/images/lf-hero.jpg';

export interface Artist {
    slug: string;
    name: string;
    day: string;
    time: string;
    image: string | any;
    description: string;
    youtubeLink?: string;
    spotifyLink?: string;
}

export const artists: Artist[] = [
    {
        slug: 'flamingo-hitmix',
        name: 'FLAMINGO HITMIX',
        day: 'Vrijdag',
        time: 't.b.d.',
        image: heroImage,
        description: 'Rechtstreeks uit de Flamingostraat in Amsterdam komt Flamingo Hitmix. Zangeres Aliesje, een ware dance hit kameleon, wordt royaal ondersteund door Joris en Martinus op synths en drumcomputer. Samen brengen ze 90’s klassiekers met een gesuikerde beat, en doorkruisen ze het verleden en heden van floor filling club classics',
        youtubeLink: 'https://www.youtube.com/watch?v=GArMcgqB7ZQ',
        spotifyLink: 'https://open.spotify.com/artist/6vC7Z9A0Yh7K3p7lH8Q9XF' // Example link
    },
    {
        slug: 'born-a-tribe',
        name: 'Born a tribe',
        day: 'Vrijdag',
        time: 't.b.d.',
        image: heroImage,
        description: 'Informatie over Born a tribe volgt binnenkort.'
    },
    {
        slug: 'heath',
        name: 'Heath',
        day: 'Zaterdag',
        time: 'T.B.A.',
        image: heroImage,
        description: 'Informatie over Heath volgt binnenkort.'
    },
    {
        slug: 'parker-fans',
        name: 'Parker fans',
        day: 'Zaterdag',
        time: 'T.B.A.',
        image: heroImage,
        description: 'Informatie over Parker fans volgt binnenkort.'
    },
    {
        slug: 'magic-tom-yuri',
        name: 'Magic Tom & Yuri',
        day: 'Zaterdag',
        time: 'T.B.A.',
        image: heroImage,
        description: 'Informatie over Magic Tom & Yuri volgt binnenkort.'
    },
    {
        slug: 'shantel',
        name: 'Shantel',
        day: 'Zaterdag',
        time: 'n.t.b.',
        image: heroImage,
        description: 'Informatie over Shantel volgt binnenkort.',
        spotifyLink: 'https://open.spotify.com/artist/2XzV5U8KxXG9T8f8mI8yq5'
    },
    {
        slug: 'punkband-db',
        name: 'Punkband (DB)',
        day: 'Zaterdag',
        time: 't.b.d.',
        image: heroImage,
        description: 'Informatie over de punkband (DB) volgt binnenkort.'
    },
];
