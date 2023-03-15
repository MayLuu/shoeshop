import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import moment from "moment";

const LatestOrder = (props) => {
  const { loading, error, orders } = props;
  return (
    <div className="card-body">
      <h5 className="card-title">New orders</h5>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr className="table-header">
                <td>No</td>
                <td>Billing name</td>
                <td>Payment method</td>
                <td>Total</td>
                <td>Payment status</td>
                <td>Date</td>
                <td>View detail</td>
              </tr>

              {orders.slice(0, 10).map((order, i) => (
                <tr key={order._id}>
                  <td>
                    {i + 1}
                  </td>
                  <td>
                    {order.user?.name}
                  </td>
                  <td>
                    <i className="fab fa-cc-paypal"></i>

                    <span>{order.paymentMethod}</span>
                  </td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      <span className="badge  alert-success">
                        Paid At {moment(order.paidAt).format("D MMM, YYYY")}
                      </span>
                    ) : (
                      <span className="badge  alert-danger">
                        Not Paid
                      </span>
                    )}
                  </td>
                  <td>{moment(order.createdAt).calendar()}</td>
                  <td className="d-flex justify-content-start align-item-center">
                    <Link to={`/order/${order._id}`} className="text-success">
                      <span className="badge detail-badge rounded-pill">
                        View detail
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LatestOrder;
