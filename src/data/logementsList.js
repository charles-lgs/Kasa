const logementList = [
  {
    identifiant: "c67ab8a7",
    titre: "Appartement cosy",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
    ],
    description:
      "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous produirez chez vous dans notre appartement.",
    hôte: {
      nom: "Nathalie Jean",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
    },
    notation: "5",
    emplacement: "Île de France - Paris 17e",
    équipements: [
      "Équipements de base",
      "Micro-Ondes",
      "Douche italienne",
      "Frigo",
      "WIFI",
    ],
    MotsClés: ["Batignolle", "Montmartre"],
  },
  {
    identifiant: "b9123946",
    titre: "Magnifique appartement proche Canal Saint Martin",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg",
    ],
    description:
      "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux-là qui souhaite se déplacer en voiture.",
    hôte: {
      nom: "L'affaire",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg",
    },
    notation: "4",
    emplacement: "Île de France - Paris 10e",
    équipements: [
      "Stationnement",
      "Sèche Cheveux",
      "Machine à laver",
      "Wi-Fi",
      "Cuisine équipée",
      "Télévision",
    ],
    MotsClés: ["Canal Saint-Martin", "République", "Appartement"],
  },
  {
    identifiant: "46d188c5",
    titre: "Studio de charme - Buttes Chaumont",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-4.jpg",
    ],
    description:
      "À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.",
    hôte: {
      nom: "Franck Maher",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg",
    },
    notation: "3",
    emplacement: "Île de France - Paris 20e",
    équipements: ["Wi-Fi", "Cuisine équipée", "Télévision", "Sèche Cheveux"],
    MotsClés: ["Les Buttes Chaumont", "Laumière", "Studio"],
  },
  {
    identifiant: "7af00cd6",
    titre: "Nid douillet au coeur du 11ème",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-4.jpg",
    ],
    description:
      "Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème. La vue sur le parc résidentiel saura vous reposer de vos longues journées de tourisme dans la capitale française. Et pour les plus fêtards d'entre vous, la rue Jean Pierre Timbaud vous permettra de découvrir la vie nocturne parisienne à seulement 5 minutes de l'appartement.",
    hôte: {
      nom: "L'affaire",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg",
    },
    notation: "3",
    emplacement: "Île de France - Paris 11e",
    équipements: [
      "Micro-Ondes",
      "Wi-Fi",
      "Chambre Séparée",
      "Climatisation",
      "Télévision",
    ],
    MotsClés: ["Parmentier", "Marais", "Parc", "Vie nocturne"],
  },
  {
    identifiant: "0979876d",
    titre: "Appartement de Standing - 10e",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-5.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-6.jpg",
    ],
    description:
      "Ce loft entièrement rénové, et équipé de meubles de luxe saura vous séduire. Idéalement situé dans le 10ème arrondissement, vous déplacer dans Paris sera un véritable jeu d'enfant.",
    hôte: {
      nom: "Franck Maher",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg",
    },
    notation: "5",
    emplacement: "Île de France - Paris 10e",
    équipements: [
      "Frigo Américain",
      "Sèche Cheveux",
      "Wi-Fi",
      "Chambre Séparée",
      "Parking",
    ],
    MotsClés: ["Goncourt", "Proche commerces"],
  },
  {
    identifiant: "f72a452f",
    titre: "Atelier d'artiste",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-5.jpg",
    ],
    description:
      "Venez vous imprégner de la culture parisienne dans cet ancien studio d'artiste décoré avec goût, au coeur de Montmartre.",
    hôte: {
      nom: "Ligne Rolland",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-3.jpg",
    },
    notation: "5",
    emplacement: "Île de France - Paris 18e",
    équipements: ["Chambre Séparée", "Parking"],
    MotsClés: ["Montmartre", "Culture", "Charme"],
  },
  {
    identifiant: "b4c67936",
    titre: "Pas cher - Studio 18ème",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-4.jpg",
    ],
    description:
      "Ce Studio entièrement fonctionnel sera votre parfait pied à terre pour toutes vos excursions parisiennes. Idéalement situé près des lignes 2 et 4, vous accédez très rapidement à tous les points touristiques de Paris.",
    hôte: {
      nom: "Hugo Perrier",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg",
    },
    notation: "3",
    emplacement: "Île de France - Paris 18e",
    équipements: [
      "Salle de bains",
      "Frigo",
      "Wi-Fi",
      "Sèche Cheveux",
      "Bureau",
      "Parking",
    ],
    MotsClés: ["Transports", "Bon marché", "18ème"],
  },
  {
    identifiant: "bc6f7112",
    titre: "Superbe appartement proche Tour Eiffel",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-5.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-6.jpg",
    ],
    description:
      "Ce superbe appartement vous surprendra par son charme. Entièrement refait à neuf, il est équipé avec goût. La taille des pièces vous fera douter que vous soyez à Paris. Mais il vous suffit de sortir pour voir que vous êtes au coeur des plus belles attractions de Paris : le Louvre, la Tour Eiffel, le Grand Palais sont à deux pas à vous de venir découvrir Paris !",
    hôte: {
      nom: "Sébastien Fournier",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-5.jpg",
    },
    notation: "5",
    emplacement: "Île de France - Paris 6e",
    équipements: [
      "Wi-Fi",
      "Sèche Cheveux",
      "Machine à laver",
      "Stationnement",
      "Lit King Size",
      "Ascenseur",
    ],
    MotsClés: ["Luxe", "Tour Eiffel", "T3", "6ème"],
  },
  {
    identifiant: "cb2f9222",
    titre: "Suite familiale",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-5.jpg",
    ],
    description:
      "Paris vous tendez les bras ! En famille ou entre amis, venez découvrir la ville de l'amour dans un appartement de goût. Vous pourrez profiter de tous les commerces seulement à quelques minutes de l'appartement. Sa proximité avec la gare Montparnasse en fait également un choix idéal pour celles et ceux qui doivent prendre un train.",
    hôte: {
      nom: "Adrien Chiran",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg",
    },
    notation: "4",
    emplacement: "Île de France - Paris 14e",
    équipements: [
      "Climatisation",
      "Machine à laver",
      "Sèche Cheveux",
      "Wi-Fi",
      "Parking",
    ],
    MotsClés: ["Montparnasse", "Commerces", "Famille"],
  },
  {
    identifiant: "d60ca600",
    titre: "Appartement moderne sur parc",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-4.jpg",
    ],
    description:
      "Respirer en plein coeur de Paris ? C'est possible ! Avec vue sur un parc résidentiel, vous pourrez ouvrir les fenêtres sans avoir à souffrir du bruit des voitures et de la pollution. Au contraire, vous pourrez écouter les oiseaux. Notre appartement est également idéalement situé au coeur du 11ème arrondissement. Proche des lignes 3 et 2, vous pourrez découvrir Paris sans effort !",
    hôte: {
      nom: "Adrien Chiran",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg",
    },
    notation: "3",
    emplacement: "Île de France - Paris 11e",
    équipements: [
      "Vue Parc",
      "Chauffage",
      "Sèche linge",
      "Sèche Cheveux",
      "Wi-Fi",
      "Ascenseur",
    ],
    MotsClés: ["Père Lachaise", "11e", "Métro 3", "Métro 2"],
  },
  {
    identifiant: "2cf259e1",
    titre: "Charmant Studio Marais",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-4.jpg",
    ],
    description:
      "Situé en plein coeur du Marais, notre studio est idéal pour les touristes en quête de découverte. Sa cuisine toute équipée est particulièrement pratique.",
    hôte: {
      nom: "Victor Moran",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-7.jpg",
    },
    notation: "4",
    emplacement: "Île de France - Paris 11e",
    équipements: ["Clic clac", "Quatre", "Sèche Cheveux", "Wi-Fi"],
    MotsClés: ["Marais", "Atelier", "Parc"],
  },
  {
    identifiant: "5323c29b",
    titre: "Studio fonctionnel République",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-3.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-5.jpg",
    ],
    description:
      "Idéalement situé à 2 pas de la place de la République, ce studio particulièrement fonctionnel est parfait pour découvrir Paris. Proche de tous les points d'intérêts grâce aux 5 lignes de métro qui sont à 5 minutes, vous pourrez rentabiliser votre temps passé à la capitale.",
    hôte: {
      nom: "Sarah Devit",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg",
    },
    notation: "3",
    emplacement: "Île de France - Paris 3e",
    équipements: [
      "Rangements",
      "Lit",
      "Sèche Cheveux",
      "Wi-Fi",
      "Télévision",
      "Bouilloire",
    ],
    MotsClés: ["Marais", "République", "Atelier", "Proche Métros", "Commerces"],
  },
  {
    identifiant: "af6d2d48",
    titre: "Bungalow dans la forêt",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-5.jpg",
    ],
    description:
      "Quittez Paris pour vous mettre au vert. À seulement 30 minutes de la Gare du Nord, venez découvrir la forêt d'Ecouen directement depuis la fenêtre de votre bungalow. Entièrement équipé, ce logement vous accueillera dans le confort, tout en vous permettant de vous détendre sur l'essentiel Le matin, ouvrez les fenêtres, et profitez du chant des oiseaux.",
    hôte: {
      nom: "Sarah Devit",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg",
    },
    notation: "5",
    emplacement: "Ile de France - Ecouen",
    équipements: [
      "SDB",
      "Cuisine équipée",
      "Toilettes sèches",
      "Frigo",
      "Bouilloire",
    ],
    MotsClés: ["Forêt", "Nature", "Musée d'Écouen"],
  },
  {
    identifiant: "7cbb378e",
    titre: "Grande Maison proche banlieue",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-2.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-5.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-6.jpg",
    ],
    description:
      "Vous un endroit pour fêter un anniversaire entre amis chercher tout en restant proche de Paris ? Ne cherchez plus ! Entièrement équipée, cette maison est l'endroit idéal pour se regrouper.",
    hôte: {
      nom: "Karen Guillet",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-9.jpg",
    },
    notation: "4",
    emplacement: "Île de France - Arnouville",
    équipements: [
      "SDB",
      "Cuisine équipée",
      "Frigo",
      "Bouilloire",
      "WIFI",
      "Télévision",
      "Cintres",
    ],
    MotsClés: ["Forêt", "Nature", "Grande maison"],
  },
  {
    identifiant: "ba55a0cc",
    titre: "Maison T5 - Le Vésinet",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-5.jpg",
    ],
    description:
      "Maison T5. Idéale pour grands groupes. 45 minutes de Paris Saint-Lazare.",
    hôte: {
      nom: "Karen Guillet",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-9.jpg",
    },
    notation: "3",
    emplacement: "Île de France - Arnouville",
    équipements: [
      "Bouilloire",
      "SDB",
      "Cuisine équipée",
      "Frigo",
      "WIFI",
      "Télévision",
      "Cintres",
      "Quatre",
      "Micro-Ondes",
      "Parking",
    ],
    MotsClés: ["Nature", "Groupe", "Maison"],
  },
  {
    identifiant: "1e181317",
    titre: "Loft de Luxe à la Défense",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-5.jpg",
    ],
    description:
      "Si vous êtes à la recherche de l'endroit idéal pour poser vos valises entre deux rdvs d'affaire, ne cherchez plus. Notre loft est l'endroit idéal. En plein coeur de la Défense, il dispose également de tous les équipements pour que vous soyez comme chez vous.",
    hôte: {
      nom: "Julie Donatella",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-10.jpg",
    },
    notation: "3",
    emplacement: "Île de France - La Défense",
    équipements: [
      "Baie vitrée",
      "Télévision",
      "Quatre",
      "Frigo",
      "Wi-Fi",
      "Micro-Ondes",
      "Parking",
    ],
    MotsClés: ["La Défense", "Loft", "Luxe"],
  },
  {
    identifiant: "1e180563",
    titre: "Charmant apt aux portes de Paris",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-5.jpg",
    ],
    description:
      "Ce charmant appartement offre des prestations de luxe, aux portes de Paris. À deux pas de la ligne 3, vous pourrez accéder à toutes les attractions touristiques dont vous avez toujours rêvées.",
    hôte: {
      nom: "Julie Donatella",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-10.jpg",
    },
    notation: "4",
    emplacement: "Île de France - Levallois",
    équipements: [
      "Télévision",
      "Quatre",
      "Frigo",
      "Hotte",
      "Wi-Fi",
      "Micro-Ondes",
    ],
    MotsClés: ["Vue Parc", "Appartement de Charme"],
  },
  {
    identifiant: "2139a317",
    titre: "Pas cher - Chambre Paris 20",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-17-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-17-1.jpg",
    ],
    description:
      "Cette chambre dispose de toutes les facilités nécessaires. Proche métro et commerces.",
    hôte: {
      nom: "Hugo Perrier",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg",
    },
    notation: "2",
    emplacement: "Île de France - Paris 20e",
    équipements: ["Bouilloire", "Wi-Fi", "Micro-Ondes"],
    MotsClés: ["Vue Parc", "Métros"],
  },
  {
    identifiant: "6ff132c6",
    titre: "Charmant studio",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-3.jpg",
    ],
    description:
      "Ce studio décoré avec goût sera votre nid douillet après une longue journée passée à découvrir Paris.",
    hôte: {
      nom: "Michel Romy",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-11.jpg",
    },
    notation: "4",
    emplacement: "Île de France - Paris 13e",
    équipements: [
      "Équipements de base",
      "Quatre",
      "Frigo",
      "Wi-Fi",
      "Micro-Ondes",
    ],
    MotsClés: ["Atelier", "Charmant", "13e"],
  },
  {
    identifiant: "cb02d69b",
    titre: "Magnifique appartement Rivoli",
    couverture:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg",
    photos: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg",
    ],
    description:
      "Au coeur du quartier historique du Marais, cet appartement est idéal pour un couple à la découverte de Paris. Situé sur la rue de Rivoli, il est à 5 minutes du Louvre.",
    hôte: {
      nom: "Nathalie Jean",
      image:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
    },
    notation: "4",
    emplacement: "Île de France - Paris 13e",
    équipements: [
      "Wi-Fi",
      "Équipements de base",
      "Micro-Ondes",
      "Frigo",
      "Baignoire",
    ],
    MotsClés: ["Louvre", "Marais", "Rivoli"],
  },
];
export default logementList;
