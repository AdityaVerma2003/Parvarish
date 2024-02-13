import React from 'react'
import p1 from '../../assets/scholarp.pdf'
import './more.css'

const Scholar = () => {
  return (<>
    <div className="heading">
        <h2>ScholarShips Schemes</h2>
      </div>
      <ol>
      <div className="onlytxt">
      <li>
        <p>A HANDBOOK ON  SCHOLARSHIPS AVAILABLE FOR THE STUDENTS OF ARTS AND SCIENCE COLLEGES..
            <a href={p1} download className="btn">
              Download
            </a></p>
      </li>
      </div>
      </ol>
      
  </>
  )
}

export default Scholar