export interface Product {
    id: number;
    title: string;
    desription: string;
    price: number;
    sku: number;
    categories: Array<string>;
    tags: Array<string>;
    images?: Array<string> | null;
}

const Products: Array<Product> = [
    {
        id: 0,
        title: "LIGTTWAVE BOARD",
        desription: "Lorem ipsum dolor sit amet, vix vero ferri causae te, ad eam congue quodsi re prehen dunt. Populo nemore viderer sed ad, duo homero libris signi fer umque ex. Et mel meis nostrum, te appa reat tacimates tractatos eos. Mel ex scripta re pudi andae, et dicat simul nec, mazim voluptua fabellas cu sit. Ex omnesque fabellas pri. Ad iudico voluptaria mel. Illud facilis sit ei, ius senserit im per diet no, ea sit facer decore volu ptatibus. Quas graecis nec ea. Id al bucius elaboraret vim, et vis labore in corrupte ad agam ridens.",
        price: 150,
        sku: 3,
        categories: ['Canoenig', 'Equipment'],
        tags: ['board', 'surf', 'suriging'],
        images: ['images/pro00.png', 'images/pro01.png', 'images/pro02.png',]
    },
    {
        id: 1,
        title: "SCUBA DIVING WETSUIT",
        desription: "Lorem ipsum dolor sit amet, vix vero ferri causae te, ad eam congue quodsi re prehen dunt. Populo nemore viderer sed ad, duo homero libris signi fer umque ex. Et mel meis nostrum, te appa reat tacimates tractatos eos. Mel ex scripta re pudi andae, et dicat simul nec, mazim voluptua fabellas cu sit. Ex omnesque fabellas pri. Ad iudico voluptaria mel. Illud facilis sit ei, ius senserit im per diet no, ea sit facer decore volu ptatibus. Quas graecis nec ea. Id al bucius elaboraret vim, et vis labore in corrupte ad agam ridens.",
        price: 160,
        sku: 3,
        categories: ['Canoenig', 'Equipment'],
        tags: ['board', 'surf', 'suriging'],
        images: ['images/pro01.png', 'images/pro01.png', 'images/pro02.png',]
    },
    {
        id: 2,
        title: "Woman’s Wetsuit Pro",
        desription: "Lorem ipsum dolor sit amet, vix vero ferri causae te, ad eam congue quodsi re prehen dunt. Populo nemore viderer sed ad, duo homero libris signi fer umque ex. Et mel meis nostrum, te appa reat tacimates tractatos eos. Mel ex scripta re pudi andae, et dicat simul nec, mazim voluptua fabellas cu sit. Ex omnesque fabellas pri. Ad iudico voluptaria mel. Illud facilis sit ei, ius senserit im per diet no, ea sit facer decore volu ptatibus. Quas graecis nec ea. Id al bucius elaboraret vim, et vis labore in corrupte ad agam ridens.",
        price: 150,
        sku: 3,
        categories: ['Scubadiving', 'Equipment'],
        tags: ['board', 'surf', 'suriging'],
        images: ['images/pro02.png', 'images/pro01.png', 'images/pro02.png',]
    },
    {
        id: 3,
        title: "Board Paddle Pair",
        desription: "Lorem ipsum dolor sit amet, vix vero ferri causae te, ad eam congue quodsi re prehen dunt. Populo nemore viderer sed ad, duo homero libris signi fer umque ex. Et mel meis nostrum, te appa reat tacimates tractatos eos. Mel ex scripta re pudi andae, et dicat simul nec, mazim voluptua fabellas cu sit. Ex omnesque fabellas pri. Ad iudico voluptaria mel. Illud facilis sit ei, ius senserit im per diet no, ea sit facer decore volu ptatibus. Quas graecis nec ea. Id al bucius elaboraret vim, et vis labore in corrupte ad agam ridens.",
        price: 100,
        sku: 3,
        categories: ['Canoenig', 'Equipment'],
        tags: ['board', 'surf', 'suriging'],
        images: ['images/pro03.png', 'images/pro01.png', 'images/pro02.png',]
    },
    {
        id: 4,
        title: "Kayak With Paddles",
        desription: "Lorem ipsum dolor sit amet, vix vero ferri causae te, ad eam congue quodsi re prehen dunt. Populo nemore viderer sed ad, duo homero libris signi fer umque ex. Et mel meis nostrum, te appa reat tacimates tractatos eos. Mel ex scripta re pudi andae, et dicat simul nec, mazim voluptua fabellas cu sit. Ex omnesque fabellas pri. Ad iudico voluptaria mel. Illud facilis sit ei, ius senserit im per diet no, ea sit facer decore volu ptatibus. Quas graecis nec ea. Id al bucius elaboraret vim, et vis labore in corrupte ad agam ridens.",
        price: 140,
        sku: 3,
        categories: ['Canoenig', 'Paddling'],
        tags: ['board', 'surf', 'suriging'],
        images: ['images/pro04.png', 'images/pro01.png', 'images/pro02.png',]
    },
    {
        id: 5,
        title: "LIGTTWAVE BOARD",
        desription: "Lorem ipsum dolor sit amet, vix vero ferri causae te, ad eam congue quodsi re prehen dunt. Populo nemore viderer sed ad, duo homero libris signi fer umque ex. Et mel meis nostrum, te appa reat tacimates tractatos eos. Mel ex scripta re pudi andae, et dicat simul nec, mazim voluptua fabellas cu sit. Ex omnesque fabellas pri. Ad iudico voluptaria mel. Illud facilis sit ei, ius senserit im per diet no, ea sit facer decore volu ptatibus. Quas graecis nec ea. Id al bucius elaboraret vim, et vis labore in corrupte ad agam ridens.",
        price: 150,
        sku: 3,
        categories: ['Equipment', 'Board'],
        tags: ['board', 'surf', 'suriging'],
        images: ['images/pro06.png', 'images/pro01.png', 'images/pro02.png',]
    }
]

export const fetchProducts = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Products)
        }, 300)
    })
}

