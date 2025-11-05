import React from "react";
import UploadCSV from "../UploadCSV/UploadCSV";
import ChartComponent from "../ChartComponent/ChartComponent";
import UploadHistory from "../Components/UploadHistory";


function UploadPage() {
  return (
    <div className="upload-page">
      {/* Upload CSV Section */}
      <UploadCSV />

      {/* Charts Section */}
      <ChartComponent />

      {/* Upload History Section */}
      <UploadHistory onSelect={(id) => console.log("Selected upload:", id)} />
    </div>
  );
}

export default UploadPage;
