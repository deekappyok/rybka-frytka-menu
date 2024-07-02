interface IData {
    fish: Array<IItem>,
    main_course: Array<IItem>,
    soup: Array<IItem>,
    kids_meal: Array<IItem>,
    extras: Array<IItem>,
    cold_drinks: Array<IItem>,
    warm_drinks: Array<IItem>,
}

interface IItem {
    name: string,
    price: string,
    status: boolean,
    description?: string
}

import fs from 'fs';
const getData = {
    "fish": [
        { "name": "Fish & Chips", "description": "Morszczuk kapski 250g, Frytki, Coleslaw", "price": "37,00 zł", "status": true },
        { "name": "Dorsz", "description": "Dorsz polędwica 180–200g, frytki, surówka", "price": "35,00 zł - 43,00 zł", "status": true },
        { "name": "Miruna", "description": "Miruna 180–200g, frytki, surówka", "price": "32,00 zł - 38,00 zł", "status": true },
        { "name": "Mintaj", "description": "Mintaj 180–200g, frytki, surówka", "price": "32,00 zł - 38,00 zł", "status": true },
        { "name": "Halibut", "description": "Halibut 150–180g, frytki, surówka", "price": "39,00 zł - 45,00 zł", "status": true }
    ],
    "main_course": [
        { "name": "Schabowy panierowany 150g", "price": "26,00 zł", "status": true },
        { "name": "Pieczeń wieprzowe w sosie 150g", "price": "27,00 zł", "status": true },
        { "name": "Pierś z kurczaka panierowana 150g", "price": "26,00 zł", "status": true },
        { "name": "Pierś grillowana z kurczaka 150g", "price": "27,00 zł", "status": true },
        { "name": "Pierogi ruskie 6szt", "price": "23,00 zł", "status": true },
        { "name": "Pierogi z mięsem 6szt", "price": "23,00 zł", "status": true },
        { "name": "Pierogi z serem 6szt", "price": "23,00 zł", "status": true },
        { "name": "Placki ziemniaczane 3szt", "price": "19,00 zł", "status": true },
        { "name": "Danie dnia", "price": "25,00 zł", "status": true },
        { "name": "Stripsy 4szt", "price": "27,00 zł", "status": true },
    ],
    "soup": [
        { "name": "Zupa rybna", "price": "18,00 zł", "status": true },
        { "name": "Zupa Krem", "price": "16,00 zł", "status": true },
        { "name": "Gulaszowa", "price": "18,00 zł", "status": true }
    ],
    "kids_meal": [
        { "name": "Nuggetsu 6szt", "price": "24,00 zł", "status": true },
        { "name": "Paluszki rybne", "price": "19,00 zł", "status": true },
        { "name": "Mini rybka", "description": "Morszczuk panierowany 50g, frytki, surówka", "price": "19,00 zł", "status": true },
        { "name": "Naleśniki z jabłkami i czekoladą 2szt", "price": "16,00 zł", "status": true }
    ],
    "extras": [
        { "name": "Frytki 200g", "price": "8,00 zł", "status": true },
        { "name": "Frytki steakhouse 200g", "price": "12,00 zł", "status": true },
        { "name": "Frytki z sosem serowym", "price": "18,00 zł", "status": true },
        { "name": "Talarki 200g", "price": "15,00 zł", "status": true },
        { "name": "Ziemniaki z wody 200g", "price": "8,00 zł", "status": true },
        { "name": "Grzanki czosnkowe 3szt", "price": "11,00 zł", "status": true },
        { "name": "Sos", "description":"czosnkowy / sweet chilli / Ketchup / majonez", "price": "3,00 zł", "status": true },
        { "name": "Zestaw surówek 100g", "price": "10,00 zł", "status": true }
    ],
    "cold_drinks": [
        { "name": "Kompot", "price": "4,00 zł", "status": true },
        { "name": "Napoje butelka szklana", "price": "9,00 zł", "status": true },
        { "name": "Pepsi", "price": "9,00 zł", "status": true },
        { "name": "Sok Toma", "price": "8,00 zł", "status": true },
        { "name": "Woda", "price": "6,00 zł", "status": true },
        { "name": "Rockstar", "price": "11,00 zł", "status": true }
    ],
    "warm_drinks": [
        { "name": "Espresso", "price": "8,00 zł", "status": true },
        { "name": "Kawa czarna", "price": "10,00 zł", "status": true },
        { "name": "Kawa biała", "price": "10,00 zł", "status": true },
        { "name": "Herbata / Herbata owocowa", "price": "10,00 zł", "status": true }
    ]
};

// export all
export default getData;
export type {IData, IItem};
