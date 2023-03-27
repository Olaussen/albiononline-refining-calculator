import React, { useState } from "react";
import RefiningLocation from "./RefiningInputs";
import RefiningStation from "./RefiningStation";

const RefiningSettings = () => {
  const [taxValue, setTaxValue] = useState(0);
  const [refineAmount, setRefineAmount] = useState(1);

  const handleTaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaxValue(Number(e.target.value));
  };

  const handleRefineAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRefineAmount(Number(e.target.value));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="profile">
      <div className="refining-settings">
        <RefiningStation
          taxValue={taxValue}
          refineAmount={refineAmount}
          handleRefineChange={handleRefineAmountChange}
          handleTaxChange={handleTaxChange}
          handleLocationChange={handleLocationChange}
        />
      </div>
    </div>
  );
};

export default RefiningSettings;
