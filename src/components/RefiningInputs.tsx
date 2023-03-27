import React from "react";
import { LOCATIONS, PRODUCTS } from "../data";
import { pascalCase } from "../utils";

type RefiningInputsProps = {
  taxValue: number;
  refineAmount: number;
  handleRefineChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTaxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const RefiningInputs: React.FC<RefiningInputsProps> = ({
  taxValue,
  refineAmount,
  handleRefineChange,
  handleTaxChange,
  handleLocationChange,
}) => {
  const select = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  return (
    <>
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
      <label htmlFor="refining-location">Return rate</label>
      <select id="refining-station-return-rate" onChange={handleLocationChange}>
        <>
          {Object.entries(LOCATIONS).map((entry) => (
            <option value={entry[0]}>{`${entry[0]} (${entry[1]}%)`}</option>
          ))}
        </>
      </select>
    </>
  );
};

export default RefiningInputs;
