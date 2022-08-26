import React from "react";
import { Table } from "antd";

const TableLayout = ({
  columns = [],
  data = [],
  loading = false,
  size = "default",
  ...rest
}) => (
  <Table
    columns={columns}
    dataSource={data}
    loading={loading}
    size={size}
    {...rest}
  />
);

export default TableLayout;
