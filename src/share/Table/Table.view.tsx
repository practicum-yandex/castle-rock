import React, { TableHTMLAttributes } from "react";

import { Component } from "@/utils/components";

import { CustomTable } from "./Table.styles";

type Props = TableHTMLAttributes<HTMLTableElement>;

const Table: Component<Props> = (props) => <CustomTable {...props} />;

export default Table;
