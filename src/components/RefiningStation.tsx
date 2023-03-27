import React from "react";
import { PRODUCTS } from "../data";
import { pascalCase } from "../utils";
import RefiningInputs from "./RefiningInputs";

type RefiningStationProps = {
  taxValue: number;
  refineAmount: number;
  handleRefineChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTaxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const RefiningStation: React.FC<RefiningStationProps> = ({
  taxValue,
  refineAmount,
  handleRefineChange,
  handleTaxChange,
  handleLocationChange,
}) => {
  return (
    <div className="refining-station">
      <h3>Refining station</h3>
      <RefiningInputs
        taxValue={taxValue}
        refineAmount={refineAmount}
        handleRefineChange={handleRefineChange}
        handleTaxChange={handleTaxChange}
        handleLocationChange={handleLocationChange}
      />
    </div>
  );
};

export default RefiningStation;
