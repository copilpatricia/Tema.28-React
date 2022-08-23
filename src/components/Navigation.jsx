// Exportam functia direct, fara cuvantul cheie default.
export function Navigation(props) {
  // Extragem prop-urile care ne intereseaza.
  const { imgSrc, width } = props;

  // Functia returneaza HTML-ul ce va fi afisat pe ecran.
  return (
    <nav>
      {/* Introducem valorile prop-urilor in HTML, folosind {} */}
      <img src={imgSrc} alt="" width={width} />
      <ul>
        <li>
          <a href="#css-html">CSS/HTML</a>
        </li>
        <li>
          <a href="#javascript">JavaScript</a>
        </li>
        <li>
          <a href="#react">React</a>
        </li>
      </ul>
    </nav>
  );
}
