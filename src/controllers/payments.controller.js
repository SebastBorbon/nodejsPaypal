import axios from "axios";

export const createOrder = async (req, res) => {
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "90,5",
        },
        description: "mechanical keyboard",
      },
    ],
    aplicacion_context: {
      brand_name: "sebasCompany",
      landing_page: "LOGIN",
      user_action: "PAY_NOW",
      return_url: "http://localhost:3000/capture-order",
      cancel_url: "http://localhost:3000/cancel-order",
    },
  };
};

export const captureOrder = (req, res) => {
  res.send("capturing an order");
};

export const cancelOrder = (req, res) => {
  res.send("cancel an order");
};
