import React, { useRef, useEffect } from "react";
import { dataList } from "../../assets/constants";

import { useParams } from "react-router-dom";
export default function Paypal() {
  const paypal = useRef();
  const prodid=useParams();
    const proDetail=dataList.filter(x=>x.id == prodid.id);
    const product=proDetail[0];

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: product.title,
                amount: {
                  currency_code: "EUR",
                  value:product.price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}