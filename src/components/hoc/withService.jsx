import React from "react";
import { Consumer } from "../service-context/ServiceContrxt";

const withStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <Consumer>
        {(itemstoreService) => {
          return <Wrapped {...props} />;
        }}
      </Consumer>
    );
  };
};

export default withStoreService;