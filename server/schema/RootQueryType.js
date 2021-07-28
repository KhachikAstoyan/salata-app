//@ts-check
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList } = graphql;
const OrderType = require("./OrderType");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        orders: {
            type: new GraphQLList(OrderType),
            resolve: async () => {
                return [
                    {
                        "id": "6100148cad08a28f2ffa57c3",
                        "client": {
                            "id": "6100148cad08a28f2ffa57c4",
                            "name": "Syliva Simonian",
                            "phoneNumber": "972-342-0632"
                        },
                        "dueTime": new Date("5/21/21 4:35pm").getTime(),
                        "isTakeout": false,
                        "items": [{
                            id: "6100148cad08a28f2ffa57c5",
                            ingredients: [0, 1, 2, 3, 4, 5],
                            extra: [0],
                            additionalInformation: "Dressing on the side please, thanks",
                            name: "Regular Salad",
                            audio: [],
                            quantity: 1
                        }, {
                            id: "6100148cad08a28f2ffa57c6",
                            ingredients: [1, 2, 3, 5],
                            extra: [4],
                            additionalInformation: "No dressing",
                            name: "Regular Salad",
                            audio: [],
                            quantity: 2
                        }],
                        "orderNumber": 2010767380,
                        "startTime": new Date("5/21/21 4:30pm").getTime(),
                        "status": 0,
                    }, {
                        "id": "6100148cad08a28f2ffa57c7",
                        "client": {
                            "id": "6100148cad08a28f2ffa57c8",
                            "name": "Raffi Hovagimian",
                            "phoneNumber": "856-304-9885"
                        },
                        "dueTime": new Date("5/21/21 4:40pm").getTime(),
                        "isTakeout": true,
                        "items": [{
                            id: "6100148cad08a28f2ffa57c5",
                            ingredients: [1, 2, 4, 5],
                            extra: [0],
                            additionalInformation: "Extra napkins, thanks",
                            name: "Cobb Salad",
                            audio: [],
                            quantity: 1
                        }, {
                            id: "6100148cad08a28f2ffa57c6",
                            ingredients: [2, 3, 5],
                            extra: [4],
                            additionalInformation: "Extra dressing",
                            name: "Spinach Salad",
                            audio: [],
                            quantity: 2
                        }],
                        "orderNumber": 2010767387,
                        "startTime": new Date("5/21/21 4:40pm").getTime(),
                        "status": 0,
                    }
                ]
            },
        },
    }),
});

module.exports = RootQuery;
