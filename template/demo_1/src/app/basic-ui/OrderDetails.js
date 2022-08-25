import React from "react";
import { Breadcrumb, Timeline } from "antd";
import "./OrderDetails.scss";
import { useHistory } from "react-router-dom";
import { Data } from "../../constants";
import backarrow from '../../assets/images/backarrow.svg'
import { Button } from "react-bootstrap";

const OrderDetails = () => {
  const history = useHistory();

  return (
    <div className="Orders-details">
      <div className="page-header back-icn-ctn ">
        <div className="header-left-part">
          <img className="back-btn-icon"
            onClick={() => {
              history.goBack()
            }}
            src={backarrow}
            alt="back"
          />
          <h4 className="back-div-header">1P & 3P</h4>
        </div>
        <div className="header-right-part">
          <Breadcrumb separator=">" className="bread-crumb">
            <Breadcrumb.Item onClick={() => history.push('/')}>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>1P & 3P Order</Breadcrumb.Item>
          </Breadcrumb>
        </div>

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
                          // history.push(`/orderDetails?eventId=${e.eventList}`)
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
