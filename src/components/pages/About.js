import React from 'react';

export default function About() {
  return (
    <div className = "about_me">
      <h1>About Me</h1>
      <img id="profile-img" src={require('https://i.pinimg.com/736x/32/ba/80/32ba803ae97f9693383e62356690edd6.jpg')} alt="profile-img"></img>
        <p>
        My name is Eldana Desalgne. I am currently working as a Financial Planner in Atlanta, GA.
        I graduated from the University of Georgia fall of 2020 with a Bachelor's of Science in both Consumer Economics and Financial Planning, as well as a minor in Korean Literature.
        Currently, I am attending a tech bootcamp at Georgia Tech to pursue my passion for Software Engineering.      
        </p>
    </div>
  );
}
