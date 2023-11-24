import React from "react";
import { useNavigate } from "react-router-dom";
const PaymentPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/payment");
  };
  return (
    <div>
      <p>
        Hello Falane Tera Enrollment form mil gaya hai thodi der wait kar me
        verify kar raha details tabtak paise bhar de button daba ke neeche ki
      </p>
      <button onClick={handleClick}>Pay</button>
    </div>
  );
};

export default PaymentPage;
