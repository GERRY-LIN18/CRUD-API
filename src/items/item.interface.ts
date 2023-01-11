export interface BaseItem {
    name :string
    price: number
    description :string
    image :string


    // title: string;
    // price: number;
    // description: string;
    // category: string;
    // image: string;
    // rating: {
    //     rate: string;
    //     count: string;
    // };
}

export interface Item extends BaseItem {
    id: number;
}
