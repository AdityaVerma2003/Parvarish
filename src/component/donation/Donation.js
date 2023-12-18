import React, { useRef } from 'react';
import '../donation/donation.css'


const Donation = () => {
    const form = useRef();
  return (<>
  <section id="Dcontact">
      <div className="container Dcontact-container">
        <div class="Dright">
      <h5>Donation</h5>
        <form action='https://docs.google.com/forms/d/e/1FAIpQLSe35i_3zqeXqPEhQoiMmf2-9iRgitGldfrHCxJfXZCkRZOAAg/formResponse' >
          <input type="text"  class ="Dfield" name="entry.638816101" placeholder="Full Name" required />
          <input type="number" class ="Dfield" name="entry.1146349216" placeholder="Phone Number"  />

          <input type="email" class = "Dfield" name="entry.765868520" placeholder='Email'  />

          <input list="Donate" placeholder='What you want to Donate?' required name="entry.721389076" />
          <datalist id="Donate">
            <option value="Clothes" />
            <option value="Books" />
            <option value="Food" />
          </datalist>
          <input list="Donate" placeholder='Donate More?' name="entry.1697845859" />
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