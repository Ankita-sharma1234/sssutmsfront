import React from "react";

function StudentAllDetail() {
  const userData = JSON.parse(sessionStorage.getItem("currentUser"));
  const studentId = userData?._id;

  return <div>StudentAllDetail</div>;
}
export default StudentAllDetail;