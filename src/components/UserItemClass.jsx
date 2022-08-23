// Pentru o componenta creata cu ajutorul unei clase, este necesar sa importam React.
import React from "react";

// Clasa extinde React.Component, adica preia funtionalitatea de componenta, creata de React.
class UserItemClass extends React.Component {
  // Metoda render este o metoda ce va fi utilizata de React. Ea returneaza HTML-ul afisat pe ecran.
  render() {
    // In cadrul claselor, prop-urile sunt accesate cu this.props.
    const { name, email } = this.props;

    return (
      <div>
        {/* Folosim {} pentru a integra expresii de JS in taguri de HTML. */}
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default UserItemClass;
