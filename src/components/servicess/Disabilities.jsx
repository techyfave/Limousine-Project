import React from "react";
import Buttons from "../button/Buttons";
import { Link } from "react-router-dom";

function Disabilities() {
  return (
    <div className="bg-primary text-white p-4">
      <h2 className="pt-4">Discount For People With Disabilities</h2>
      <p className="fs-5">
        We are committed to ensuring our services are accessible to everyone. To
        support individuals with disabilities, we offer a 10% discount on all
        limousine hire services. This discount is available to all customers who
        identify as having a disability. To redeem this discount, simply provide
        a valid proof of disability at the time of booking.
      </p>

      <div className="d-flex justify-content-between flex-wrap">
        <div className="px-3 lh-sm">
          <p className="text-decoration-underline lh-sm pt-3">How to Redeem:</p>
          <p className="lh-sm">
            Call us at <Link>+1-610-938-1411</Link>, and mention your
            eligibility for the 10% discount.
          </p>
          <p className="lh-sm">
            Please have your proof of disability ready for our representative.
          </p>
          <p>
            <Link>Terms and Conditions Apply.</Link>
          </p>
        </div>

        <div className="d-flex align-items-center px-4">
          <Buttons text="Apply now !!!" btnStyle="btn-bg" />
        </div>
      </div>
    </div>
  );
}

export default Disabilities;

/*Including a discount for people with disabilities is a wonderful initiative! Here’s a suggestion on how to structure that section and where to place it on your limousine hire website.

Section Structure
1. Title:
Discount for People with Disabilities

2. Introduction:
We are committed to ensuring our services are accessible to everyone. To support individuals with disabilities, we offer a 10% discount on all limousine hire services.

3. Qualified Customers:
This discount is available to all customers who identify as having a disability. To redeem this discount, simply provide a valid proof of disability at the time of booking.

4. How to Redeem:

Online Bookings:
Simply enter the code DISABILITY10 at checkout.
Upload your proof of disability in the designated section.
Phone Bookings:
Call us at [phone number], and mention your eligibility for the 10% discount.
Please have your proof of disability ready for our representative.
5. Terms and Conditions:

The discount cannot be combined with other promotions or discounts.
Proof of disability must be provided to qualify.
The discount applies only to the rental fee and not to additional services or fees.
Page Suggestions
Home Page: Include a brief mention with a link to the detailed section, so visitors can easily see your commitment to accessibility.
Booking Page: Have a note on this page that reminds customers about the discount when they are making a booking.
About Us / Accessibility Page: Create a dedicated section on your About Us or an Accessibility page that discusses your commitment to inclusivity and details about the discount.
Additional Tips
Consider adding an image or icon representing accessibility to make the section visually appealing.
Ensure that the discount is prominent enough to catch attention but fits well with the overall design of your website. */
