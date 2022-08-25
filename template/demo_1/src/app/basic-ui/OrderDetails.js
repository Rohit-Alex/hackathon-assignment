import React from "react";
import { Timeline } from "antd";
import "./OrderDetails.scss";
import { useHistory } from "react-router-dom";
import { Data } from "../../constants";
import { Button } from "react-bootstrap";

const OrderDetails = () => {
  const history = useHistory();

  return (
    <div className="Orders-details">
      <div className="page-header ">
        <h3 className="page-title" style={{ color: "#703fa0" }}>
          1P Orders
        </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Orders</li>
            <li className="breadcrumb-item active">1p and 3P Orders</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="header-info">
                <span>
                  <h4 className="card-title event-details">Event Details</h4>
                </span>
                <span>
                  <Button className="btn-inverse-danger ">Refresh</Button>
                </span>
              </div>
              <hr />
              <div className="template-demo">
                <Timeline>
                  {Data.map((e, idx) => (
                    <React.Fragment key={idx}>
                      <Timeline.Item
                        color="green"
                        onClick={() => {
                          history.push(`/orderDetails/${e.eventList}`);
                        }}
                      >
                        <button className="btn-inverse-primary button-list">
                          <span>{e.eventList}</span>
                          <span className="badge badge-inverse-primary badge-pill numbers-id">
                            {e.failedEvents}
                          </span>
                        </button>
                      </Timeline.Item>
                    </React.Fragment>
                  ))}
                </Timeline>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
