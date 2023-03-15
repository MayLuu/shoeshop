import React from "react";

const OrderDetailInfo = (props) => {
  const { order } = props;
  return (
    <div className="row mb-5 order-info-wrap">
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="">

          </span>
          <div className="text ">
            <h6 className="mb-1">Customer Info</h6>
            <p className="mb-1 card-info">
              Name : {order.user.name} <br />
              Email : <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="">

          </span>
          <div className="text">
            <h6 className="mb-1">Order info</h6>
            <p className="mb-1 card-info">
              Shipping: {order.shippingAddress.country} <br /> Pay method:{" "}
              {order.paymentMethod}
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="">
          </span>
          <div className="text">
            <h6 className="mb-1">Deliver to</h6>
            <p className="mb-1 card-info">
              City: {order.shippingAddress.city}
              <br />
              Address: {order.shippingAddress.address}
              <br /> Postal code: {order.shippingAddress.postalCode}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default OrderDetailInfo;
