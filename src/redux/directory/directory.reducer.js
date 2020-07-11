const INITIAL_STATE = {
      sections: [
        {
            title: 'BAG',
            season: 'WINTER',
            year: '2017',
            imageUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/slider2-h16.jpg',
            id: 1,
        },
        {
            title: 'dress',
            imageUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/banner1-h16.jpg',
            id: 2,
        },
        {
            title: 'clock',
            imageUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/banner2-h16.jpg',
            id: 3,
        },
        {
            title: 'shoe',
            imageUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/banner3-h16.jpg',
            id: 4,
        },
        {
            title: 'towel',
            imageUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/banner4-h16.jpg',
            id: 5,
        },
        {
            title: 'stylish',
            imageUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/banner5-h16.jpg',
            id: 6,
        },    
        {
            title: 'skateboard spetacular',
            imageUrl: 'https://static.zara.net/photos///2020/I/0/3/p/3854/661/526/302/w/1416/3854661526_2_11_1.jpg?ts=1591349222268',
            id: 7,
            price: 250,
        },
        {
            title: 'zara-clothing',
            imageUrl: 'https://static.zara.net/photos///2020/V/0/3/p/3854/661/526/2/w/1416/3854661526_1_1_1.jpg?ts=1591091446494',
            id: 8,
            price: 480,
            linkUrl: ''
        },
        {
            title: 'zara-glass',
            imageUrl: 'https://static.zara.net/photos///2020/V/0/3/p/6887/674/300/2/w/1416/6887674300_1_1_1.jpg?ts=1591213833201',
            id: 9,
            price: 360,
            linkUrl: ''
        },
        {
            title: 'zara-pant',
            imageUrl: 'https://static.zara.net/photos///2020/I/0/3/p/6416/669/052/2/w/1416/6416669052_1_1_1.jpg?ts=1591268383031',
            id: 10,
            price: 360,
            linkUrl: ''
        },
        {
            title: 'seller',
            imageUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/banner6-h16.jpg',
            id: 11,
            linkUrl: '',
        },
        {
            title: 'arrival',
            imageUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/banner7-h16.jpg',
            id: 12,
            linkUrl: ''
        } 
      ]
}

 const directoryReducer = (state = INITIAL_STATE , action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default directoryReducer