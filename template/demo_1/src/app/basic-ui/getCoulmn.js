import React from "react";

export const getColumnforOrders = [
  {
    title: "No.",
    dataIndex: "number",
    key: 0,
  },
  {
    title: "Event List",
    dataIndex: "eventList",
    key: 1,
  },
  {
    title: "No. of Events Failed",
    dataIndex: "failedEvents",
    key: 2,
  },
];

export const Data = [
  {
    eventList: "Payment Charge Success",
    failedEvents: 100,
    number: 1,
  },
  {
    eventList: "Order Created",
    failedEvents: 10,
    number: 2,
  },
  {
    eventList: "Seller Order Initiated",
    failedEvents: 10,
    number: 3,
  },
  {
    eventList: "Reservation Confirmed",
    failedEvents: 90,
    number: 4,
  },
  {
    eventList: "Payment Status Update",
    failedEvents: 13,
    number: 5,
  },
  {
    eventList: "Seller Order Created",
    failedEvents: 19,
    number: 6,
  },
  {
    eventList: "Customer Order Created",
    failedEvents: 11,
    number: 7,
  },
  {
    eventList: "Shipment Status Update",
    failedEvents: 15,
    number: 8,
  },
  {
    eventList: "Seller Shipment Status Changed",
    failedEvents: 12,
    number: 9,
  },
];
