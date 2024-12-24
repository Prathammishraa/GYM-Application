import { Check } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricingPlans = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF_YEARLY",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 67000,
      length: 12,
    },
  ];

  return (
    <section className="pricing">
      <h1>JAI BHIM FITNESS PLANS</h1>
      <div className="wrapper">
        {pricingPlans.map((plan) => (
          <div className="card" key={plan.title}>
            <img src={plan.imgUrl} alt={plan.title} />
            <div className="title">
              <h1>{plan.title}</h1>
              <h1>PACKAGE</h1>
              <h3>Rs {plan.price}</h3>
              <p>For {plan.length} Months</p>
            </div>
            <div className="description">
            <p>
                <Check/> Equipment
              </p>
              <p>
                <Check/> All Day Free Training
              </p>
              <p>
                <Check/> Free Restroom
              </p>
              <p>
                <Check/> 24/7 Skilled Support
              </p>
              <p>
                <Check/> 20 Days Freezing Option
              </p>
              <Link to={"/"}>Join Now</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
