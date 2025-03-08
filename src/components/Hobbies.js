import React from "react";

function Hobbies() {
  // Handle the button click event
  const showHobbies = () => {
    alert(
      "My hobbies are:\nWatching Movies, Playing Chess, Diecast Collecting, Listening to Music"
    );
  };

  return (
    <section id="hobbies">
      <button className="hobby-button" onClick={showHobbies}>
        Click me to see my hobbies!
      </button>
    </section>
  );
}

export default Hobbies;
