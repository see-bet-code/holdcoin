import React from "react";
import BlockLink from "../components/BlockLink";
import {totalSizePerCrypto, averageCost } from "../utils/utils";
import { useAuth } from "../context/use-auth";

const BlockLinkContainer = ({ cryptos}) => {
    // 
  let auth = useAuth()
  const renderLinks = () => 
    cryptos.map((crypto, index) => <BlockLink key={index} crypto={crypto} averageCost={averageCost(auth.user, crypto)} size={totalSizePerCrypto(auth.user,crypto)} />);
  ;
  return (
    <div>

      {renderLinks()}
    </div>
  );
};
export default BlockLinkContainer;
