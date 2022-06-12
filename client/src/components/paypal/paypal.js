import React, { useRef, useEffect } from "react";
import { dataList } from "../../assets/constants";
import { useParams } from "react-router-dom";

export default function Paypal() {
  const paypal = useRef();
  const prdid=useParams();
  const prDetail=dataList.filter(x=>x.id == prdid.id);
  const item=prDetail[0];

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "plat",
                amount: {
                  currency_code: "EUR",
                  value: item.price,
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