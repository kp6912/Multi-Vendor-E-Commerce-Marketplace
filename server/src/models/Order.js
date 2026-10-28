const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    vendorOrders: [
      {
        vendorId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Vendor",
          required: true,
        },

        items: [
          {
            productId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Product",
              required: true,
            },

            name: {
              type: String,
              required: true,
            },

            price: {
              type: Number,
              required: true,
              min: 0,
            },

            quantity: {
              type: Number,
              required: true,
              min: 1,
            },

            subtotal: {
              type: Number,
              required: true,
              min: 0,
            },
          },
        ],

        subtotal: {
          type: Number,
          required: true,
          min: 0,
        },

        status: {
          type: String,
          enum: [
            "placed",
            "packed",
            "shipped",
            "delivered",
            "cancelled",
          ],
          default: "placed",
        },
      },
    ],

    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    paymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
      default: null,
    },

    shippingAddress: {
      fullName: {
        type: String,
        required: true,
      },

      phone: {
        type: String,
        required: true,
      },

      street: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },

      state: {
        type: String,
        required: true,
      },

      pincode: {
        type: String,
        required: true,
      },

      country: {
        type: String,
        default: "India",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);