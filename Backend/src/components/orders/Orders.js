import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Orders = (props) => {
  const { sortOrders } = props;

  return (
    <table className="table">



      <tbody>
        <tr className="th">
          <td scope="col">No</td>
          <td scope="col">Billing Name</td>
          <td scope="col">Payment method</td>
          <td scope="col">Total</td>
          <td scope="col">Payment status</td>
          <td scope="col">Date</td>
          <td>Status</td>
          <td scope="col" className="d-flex justify-content-center align-item-center">
            Action
          </td>
        </tr>
        {sortOrders.length ? (
          sortOrders.map((order, i) => (
            <tr key={order._id}>
              <td>{i + 1}</td>
              <td>
                {order.user.name}
              </td>
              <td>
                <i className="fab fa-cc-paypal"></i>

                <span>{order.paymentMethod}</span>
              </td>
              <td>${order.totalPrice}</td>
              <td>
                {order.isPaid ? (
                  <span className="badge alert-success">
                    Paid At {moment(order.paidAt).format("MMM Do YY")}
                  </span>
                ) : (
                  <span className="badge  alert-danger">
                    UnPaid
                  </span>
                )}
              </td>
              <td>{moment(order.createdAt).format("D MMM, YYYY")}</td>
              <td>
                {order.isDelivered ? (
                  <span className="badge btn-success">Delivered</span>
                ) : (
                  <span className="badge btn-dark">Not Delivered</span>
                )}
              </td>
              <td className="d-flex justify-content-center align-item-center">
                <Link to={`/order/${order._id}`} className="text-success">
                  <span className="badge detail-badge rounded-pill">
                    View detail
                  </span>
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <th colSpan={10}>
              <div className="d-flex justify-content-center col-12">
                <div className="alert alert-warning">No Orders</div>
              </div>
            </th>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Orders;
