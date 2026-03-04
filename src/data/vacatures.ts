export interface Vacature {
    slug: string;
    title: string;
    description: string;
    intro: string;
    whatYouDo: string[];
    whoYouAre: string[];
    whatYouGet: string[];
    extraInfo?: string;
    interestText: string;
    contactEmail: string;
    contactPhone?: string;
    contactName: string;
}

export const vacatures: Vacature[] = [
    {
        slug: 'organisatielid-crowd-services',
        title: 'Organisatielid Crowd Services',
        description: 'Zorg ervoor dat de bezoekers van Loungefest een optimaal weekend ervaren zonder zorgen.',
        intro: 'Wil jij ervoor zorgen dat de ongeveer 4000 bezoekers van Loungefest een optimaal weekend ervaren zonder zorgen? En wil jij altijd al jouw eigen muziekfestival organiseren? Lees dan snel verder. Als organisatielid \'Crowd Services\' draai je mee in de organisatie van Loungefest: een team van 20 enthousiaste creatievelingen tussen de 23 en 40 jaar, ieder met een eigen specialisme. Het gaat om een vrijwillige functie. We vergaderen één keer per maand met de hele organisatie. De \'zuil\' Crowd Services zorgt ervoor dat bezoekers zonder zorgen bij het festivalterrein komen, hun veiligheid op het terrein is gewaarborgd, het terrein schoon is en er afstemming plaatsvindt met gemeente en veiligheidsdiensten. Er zijn voldoende doorgroeimogelijkheden binnen Loungefest om nog meer over het festival te leren en verantwoordelijkheid op te pakken.',
        whatYouDo: [
            'Samen met beveiligers, EHBO en reddingsbrigade zorgen voor een veilig festival.',
            'Pendelbussen coördineren.',
            'Verkeersregelaars coördineren en afstemming met omliggende bedrijven.',
            'Zorgen voor een goede toe- en afstroom van bezoekers naar het festivalterrein.',
            'Coördineren dat het veld schoon blijft.',
            'Locker dienst coördineren.',
            'Zorgen for bebording op en rond het terrein.'
        ],
        extraInfo: 'Voorbereiding: Aan het einde van het jaar vinden de eerste vergaderingen plaats voor de nieuwe editie. Voor de editie van 2026 zul je samen optrekken met het organisatielid die momenteel verantwoordelijk is voor de zuil.',
        whoYouAre: [
            'Je hebt kennis van en ervaring met het organiseren van evenementen en/of je wilt je hier in ontwikkelen.',
            'Je krijgt energie van zaken organiseren en kunt op de festivaldagen snel schakelen tussen werkzaamheden.',
            'Je hebt affiniteit met muziek, cultuur en festivals.',
            'Je bent op zoek naar een leuke hobby in de vorm van vrijwilligerswerk.'
        ],
        whatYouGet: [
            'Een te gekke familie in de vorm van meer dan 200 vrijwilligers.',
            'Het jaarlijkse Loungefest vrijwilligersfeest.',
            'De mogelijkheid om jezelf persoonlijk te ontwikkelen en als professioneel festivalorganisator.',
            'Het ontwikkelen van ervaring als leidinggevende.',
            'Het organiseren van het gaafste festival van de Bollenstreek.'
        ],
        interestText: 'Kun je aan niets anders meer denken? Stuur dan meteen je CV en korte motivatie naar menno@loungefest.nl. Ook voor vragen kun je hier terecht.',
        contactEmail: 'menno@loungefest.nl',
        contactName: 'Menno'
    },
    {
        slug: 'organisatielid-horeca',
        title: 'Organisatielid Horeca',
        description: 'Heb je passie voor horeca, bier en goed eten? Altijd al willen meebouwen aan een écht muziekfestival?',
        intro: 'Heb je passie voor horeca, bier en goed eten? Altijd al willen meebouwen aan een écht muziekfestival? Dit is je kans. Als organisatielid Horeca draai je mee in de organisatie van Loungefest: een team van 20 enthousiaste creatievelingen tussen de 23 en 40 jaar, ieder met een eigen specialisme. Je krijgt alle ruimte om ideeën in te brengen en je functie zelf vorm te geven. We vergaderen één keer per maand met de hele organisatie en één keer per maand met het Horeca & Sponsoring-team (de BaVo\'s: Bar, Voedsel en Sponsoring). De functie is vrijwillig.',
        whatYouDo: [
            'Het organiseren van de barren en foodtrucks',
            'De inkoop van drank en het regelen van materialen',
            'De samenwerking met leveranciers',
            'Het begeleiden van vrijwilligers achter de bar'
        ],
        extraInfo: 'Je doet dit nooit alleen: in de eerste jaren word je volledig ingewerkt door ervaren organisatoren. Tijdens het festival zorg je voor een vlotte verkoop, kwalitatief goed bier en een soepel draaiende horeca-operatie.',
        whoYouAre: [
            'Je hebt horeca-ervaring of wil je hierin verder ontwikkelen.',
            'Sociale Hygiëne is een pré.',
            'Je hebt affiniteit met muziek, cultuur en festivals.',
            'Je zoekt een leuke, betekenisvolle hobby in de vorm van vrijwilligerswerk.'
        ],
        whatYouGet: [
            'Een fantastische familie van meer dan 200 vrijwilligers.',
            'Een jaarlijks weekend weg met de organisatie.',
            'Het befaamde Loungefest-vrijwilligersfeest.',
            'Ruimte voor professionele én persoonlijke ontwikkeling.',
            'Ervaring in leidinggeven en festivalorganisatie.',
            'De kans om het gaafste festival van de Bollenstreek mee te bouwen.'
        ],
        interestText: 'Kun je aan niets anders meer denken? Stuur dan meteen je CV en motivatie naar stijn@loungefest.nl. Ook voor vragen kun je hier terecht, of stuur een appje naar 06-13593793.',
        contactEmail: 'stijn@loungefest.nl',
        contactPhone: '06-13593793',
        contactName: 'Stijn'
    },
    {
        slug: 'organisatielid-sponsoring',
        title: 'Organisatielid Sponsoring',
        description: 'Heb je passie voor events, netwerken en merken? Altijd al willen meebouwen aan een écht muziekfestival?',
        intro: 'Heb je passie voor events, netwerken en merken? Altijd al willen meebouwen aan een écht muziekfestival? Dit is je kans. Als organisatielid Sponsoring draai je mee in de organisatie van Loungefest: een team van 20 enthousiaste creatievelingen tussen de 23 en 40 jaar, ieder met een eigen specialisme. Je krijgt alle ruimte om ideeën in te brengen en je functie zelf vorm te geven. We vergaderen één keer per maand met de hele organisatie en één keer per maand met het Horeca & Sponsoring-team (de BaVo\'s: Bar, Voedsel en Sponsoring). De functie is vrijwillig.',
        whatYouDo: [
            'Het werven van sponsoren en partners',
            'Onderhouden van contacten met bestaande sponsoren',
            'Het uitwerken van sponsorpakketten en promotionele mogelijkheden',
            'Het zorgen for een goede samenwerking tussen sponsoren en organisatie',
            'Je werkt nauw samen met de andere organisatoren en het team achter de schermen'
        ],
        extraInfo: 'Je doet dit nooit alleen: in de eerste jaren word je volledig ingewerkt door ervaren organisatoren. Tijdens het festival zorg je dat sponsoren een optimale ervaring hebben en dat alle afspraken soepel verlopen.',
        whoYouAre: [
            'Je hebt ervaring in sales, marketing of fondsenwerving, of wilt je hierin verder ontwikkelen.',
            'Je bent sociaal, communicatief sterk en houdt van netwerken.',
            'Je hebt affiniteit met muziek, cultuur en festivals.',
            'Je bent op zoek naar een leuke hobby in de vorm van vrijwilligerswerk.'
        ],
        whatYouGet: [
            'Een te gekke familie in de vorm van meer dan 200 vrijwilligers.',
            'Een jaarlijks weekend weg met de organisatie.',
            'Het befaamde Loungefest-vrijwilligersfeest.',
            'Ruimte voor professionele én persoonlijke ontwikkeling.',
            'Ervaring in projectmanagement en festivalorganisatie.',
            'De kans om het gaafste festival van de Bollenstreek mee te bouwen.'
        ],
        interestText: 'Kun je aan niets anders meer denken? Stuur dan meteen een motivatie naar ivar@loungefest.nl of stuur een appje naar 06-43214630. Ook voor vragen kun je hier terecht.',
        contactEmail: 'ivar@loungefest.nl',
        contactPhone: '06-43214630',
        contactName: 'Ivar'
    }
];
