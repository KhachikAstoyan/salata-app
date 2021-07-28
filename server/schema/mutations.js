//@ts-check
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID
} = graphql;
const ItemType = require('./ItemType');
const OrderType = require('./OrderType');
const StatusType = require('./StatusType');
const mongoose = require('mongoose');
const Order = require('../models/Order');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addOrder: {
      type: OrderType,
      args: {
        dueDate: { type: GraphQLString },
        isTakeOut: { type: GraphQLBoolean }
      },
      resolve(parentValue, { dueDate, isTakeOut }) {
        return Order.create({ dueDate, isTakeOut })
      }
    },
    addItems: {
      type: OrderType,
      args: {},
      resolve(parentValue, args) {
        return;
      }
    },
    updateOrderStatus: {
      type: OrderType,
      args: {
        id: {
          type: GraphQLID
        },
        status: {
          type: StatusType
        }
      },
      async resolve(parentValue, { id, status }) {
        return await Order.findByIdAndUpdate(id, { status });
      }
    }
  }
});

module.exports = mutation;
