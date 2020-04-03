import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Navbar from "./../components/Navbar";

// Component HomeLayout
const HomeLayout = props => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
