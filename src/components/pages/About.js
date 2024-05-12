import React from 'react';
import profileimg from '../assets/New-York-Balcony-Pic.jpg';


export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        My name is Jeremiah Dorvil and I am a junior developer.

        Please enjoy some Lorem Ipsum while I update my site. <br/>
        Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy, rail fatty slash gear jammer steeps clipless rip bowl couloir bomb hole berm. Huck cruiser crank endo, sucker hole piste ripping ACL huck greasy flow face plant pinner. Japan air Skate park big ring trucks shuttle stoked rock-ectomy.
      </p>
      <img style={{
        opacity: "75%", 
        height: "100%",
        maxWidth: "250px",
        width: "100%",
        borderRadius: "800px"}}
        src={profileimg} alt="Jeremiah and his Wife" />
    </div>
  );
}
