import { Button, Tag } from "antd";
import React from "react";
import {
  SyncOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

export const Data = [
  {
    stage: "paymentChargeSuccess",
    count: 2,
  },
  {
    stage: "orderCreated",
    count: 2,
  },
  {
    stage: "sellerOrderInitiated",
    count: 0,
  },
  {
    stage: "reservationConfirmed",
    count: 0,
  },
  {
    stage: "paymentStatusUpdate",
    count: 0,
  },
  {
    stage: "sellerOrderCreated",
    count: 0,
  },
  {
    stage: "1PCustomerOrderCreated",
    count: 0,
  },
  {
    stage: "1PCustomerOrderAcknowledged",
    count: 0,
  },
  {
    stage: "1PShipmentStatusUpdate",
    count: 0,
  },
  {
    stage: "sellerShipmentStatusChanged",
    count: 0,
  },
  {
    stage: "sellerOrderLineDelivered",
    count: 0,
  },
];

export const cardData = [
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Orders",
    cardValue: "100",
    cardStats: "Increased by 60%",
    label: "Orders",
    graphData: [20, 40, 15, 35, 25, 50, 30],
    additionalClass: "bg-gradient-danger",
    value: "50%",
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Payments",
    cardValue: "44",
    cardStats: "Increased by 20%",
    label: "Payments",
    graphData: [50, 20, 25, 35, 20, 40, 30],
    additionalClass: "bg-gradient-info",
    value: "10%",
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Logistics",
    cardValue: "95",
    cardStats: "Decreased by 10%",
    label: "Logistics",
    graphData: [10, 10, 5, 25, 25, 50, 10],
    additionalClass: "bg-gradient-success",
    value: "20%",
  },
  {
    imgSrc: "../../assets/images/dashboard/circle.svg",
    cardTitle: "Financial",
    cardValue: "190",
    cardStats: "Increased by 12%",
    label: "Financial",
    graphData: [80, 40, 15, 55, 25, 10, 30],
    additionalClass: "bg-gradient-primary",
    value: "40%",
  },
];

export const dummmyData1 = [
  {
    "id": "822e0abe-247d-11ed-94a5-eea5670d4c75",
    "orderNumber": "238924542",
    "workflowType": "OrderFlow",
    "currentStage": "orderCreated",
    "previousStage": "paymentChargeSuccess",
    "errorFlag": true,
    "createdAd": "2022-08-25T19:24:59.169376+05:30"
  },
  {
    "id": "822e71ca-247d-11ed-94a5-eea5670d4c75",
    "orderNumber": "590284781",
    "workflowType": "OrderFlow",
    "currentStage": "orderCreated",
    "previousStage": "paymentChargeSuccess",
    "errorFlag": true,
    "createdAd": "2022-08-25T19:24:59.169376+05:30",
  }
]
export const columnsForMultiSelect = (clickHandler, clicked) => [
  {
    title: "Order Id",
    dataIndex: "id",
  },
  {
    title: "Order Number",
    dataIndex: "orderNumber",
  },
  {
    title: "Current Status",
    dataIndex: "currentStage",
  },
  {
    title: "Previous Status",
    dataIndex: "previousStage",
  },
  {
    title: "Creation Date",
    dataIndex: "createdAd",
  },
  {
    title: "Status",
    dataIndex: "resolution",
    render: (_, record) => {
      if (clicked?.[record.id] === undefined) return null
      if (clicked?.[record.id]) return <Tag icon={<SyncOutlined spin />} color="processing">processing</Tag>
      return <Tag icon={<CheckCircleOutlined />} color="success">{record?.resolution || 'Success'}</Tag>
    }
  },
  {
    title: "Action",
    render: (_, record) => (
      <Button
        style={{
          backgroundColor: "none",
          color: "#703fa0",
          fontSize: "13px",
          border: "none",
        }}
        onClick={() => {
          clickHandler(record)
        }}
      >
        Click
      </Button>
    ),
  },
];