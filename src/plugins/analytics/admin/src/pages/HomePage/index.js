/*
 *
 * HomePage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import {
  BaseHeaderLayout,
  Box,
  Breadcrumbs,
  Button,
  Crumb,
  Layout,
  HeaderLayout,
  ContentLayout,
  Link,
} from "@strapi/design-system";
import { ArrowLeft, Pencil, Plus } from "@strapi/icons";

const HomePage = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "45px",
    marginRight: "30px",
  };

  const boxStyle = {
    width: "30%",
    height: "150px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "5px",
    backgroundColor: "white",
    color: "black",
  };
  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        title="Dashboard Pengunjung"
        subtitle={
          <Breadcrumbs label="folders">
            <Crumb>Plugins</Crumb>
            <Crumb>Dashboard Pengunjung</Crumb>
          </Breadcrumbs>
        }
        as="h2"
      />
      <div style={containerStyle}>
        <div style={boxStyle}>
          <h2>Box 1</h2>
          <p>This is a responsive box with rounded corners.</p>
        </div>
        <div style={boxStyle}>
          <h2>Box 2</h2>
          <p>Another responsive box with rounded corners.</p>
        </div>
        <div style={boxStyle}>
          <h2>Box 3</h2>
          <p>And one more responsive box with rounded corners.</p>
        </div>
      </div>
    </Box>
  );
};

export default HomePage;
