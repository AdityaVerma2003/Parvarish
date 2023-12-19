import React, { useRef } from 'react';
import '../donation/donation.css'


const Donation = () => {
    const form = useRef();
  return (<>
  <section id="Dcontact">
      <div className="container Dcontact-container">
        <div class="Dright">
      <h5>Donation</h5>
        <form action='https://docs.google.com/forms/d/e/1FAIpQLSf0dfbG0p-vxq_N8027dUrIVz9mTbs_j1gH6T_uQ9X7yRRUbA/formResponse' >
          <input type="text"  class ="Dfield" name="entry.144018705" placeholder="Full Name" required />
          <input type="number" class ="Dfield" name="entry.2054882568" placeholder="Phone Number"  />

          <input type="email" class = "Dfield" name="entry.1708506464" placeholder='Email'  />

          <input list="Donate" placeholder='What you want to Donate?' required name="entry.151041774" />
          <datalist id="Donate">
            <option value="Clothes" />
            <option value="Books" />
            <option value="Food" />
          </datalist>
          <input list="Donate" placeholder='Donate More?' name="entry.2133965434" />
          <datalist id="Donate">
            <option value="Clothes" />
            <option value="Books" />
            <option value="Food" />
          </datalist>
          <button type="submit" onClick={()=>{
          }} className="Dbtn">
            Submit
          </button>
        </form>
        </div>
      </div>
    </section>
  </>
  )
}

export default Donation
