import React from "react";
import UploadCSV from "../UploadCSV/UploadCSV";
import ChartComponent from "../ChartComponent/ChartComponent";
import UploadHistory from "../Components/UploadHistory";

function UploadPage() {
  return (
    <>
      <UploadCSV />
      <ChartComponent />
      <UploadHistory onSelect={(id) => console.log("Selected upload:", id)} />
    </>
  );
}

export default UploadPage;


