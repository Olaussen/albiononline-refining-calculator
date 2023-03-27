import React from "react";
import { PRODUCTS } from "../data";
import { pascalCase } from "../utils";

type RefiningStationProps = {
  taxValue: number;
  refineAmount: number;
  handleRefineChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTaxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RefiningStation: React.FC<RefiningStationProps> = ({
  taxValue,
  refineAmount,
  handleRefineChange,
  handleTaxChange,
}) => {
  const select = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };
  return (
    <div className="refining-station">
      <h3>Refining station</h3>
      <label htmlFor="refining-resource">Resource</label>
      <select name="refining-resource" id="refining-resource">
        <>
          {Object.keys(PRODUCTS).map((key, i) => (
            <option value={key}>{pascalCase(key)}</option>
          ))}
        </>
      </select>

      <label htmlFor="refining-station-tax">Tax</label>
      <input
        type="number"
        name="refining-station-tax"
        id="refining-station-tax"
        value={taxValue}
        min={0}
        max={9999}
        onInput={handleTaxChange}
        onClick={select}
      />

      <label htmlFor="refining-station">Amount</label>
      <input
        type="number"
        id="refining-station-amount"
        value={refineAmount}
        min={1}
        onInput={handleRefineChange}
        onClick={select}
      />
    </div>
  );
};

export default RefiningStation;
