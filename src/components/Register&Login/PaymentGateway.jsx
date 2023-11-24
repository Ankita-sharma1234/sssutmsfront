import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      reject(false);
    };
    document.body.appendChild(script);
  });
}

function Payment() {
  const navigate = useNavigate();
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const response = await fetch("http://localhost:7786/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 5000 }),
    });

    const data = await response.json();
    const { order, amount } = data;

    var options = {
      key: "rzp_test_2G5Su3ZxT2Ol3Q",
      amount: amount,
      currency: "INR",
      name: "Satya Sai University",
      description: "Ankitaaaaaaaa",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: function (response) {
        navigate("/studentDashboard");
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Ankita Sharma",
        email: "ankitasharma162002@gmail.com",
        contact: "9165366240",
      },
      notes: {
        address: "Sehore",
      },
      theme: {
        color: "#3399cc",
      },
      method: {
        upi: true,
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  useEffect(() => {
    displayRazorpay();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="App-link" onClick={displayRazorpay}>
          Learn React
        </button>
      </header>
    </div>
  );
}

export default Payment;
