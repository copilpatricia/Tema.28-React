// De retinut ca importul CSS-ului in acest mod este posibil cu ajutorul lui Webpack.
import "./styles.css";
// In cazul in care componenta este exportata fara default, o importam folosind acolade.
import { Navigation } from "./components/Navigation";
// In cazul in care componenta este exportata default, o importam fara acolade.
import UserItem from "./components/UserItem";
import UserItemClass from "./components/UserItemClass";
import FootballClub from "./components/FootballClub";

export default function App() {
  let imgSource = "https://itschool.ro/images/logo-itschool-dark.svg";
  const firstImgWidth = "100";
  return (
    <div className="App">
      {/* Instantiem (cream) componenta Navigation, pasandu-i valorile pentru prop-uri. */}
      <Navigation
        imgSrc="https://www.adrianapostol.ro/wp-content/uploads/2020/05/maxresdefault.jpg"
        width="100"
      />
      <Navigation imgSrc={imgSource} width={firstImgWidth} />
      {/* Instantiem (cream) componenta Navigation, pasandu-i valorile pentru prop-uri. */}
      <FootballClub name="PSG" country="Franța" />
      <UserItem
        name="Lionel Messi"
        email="lionel.messi@gmail.com"
        shirtNumber="30"
        salary="165 milion/year"
      />
      <UserItem
        name="Kylian Mbappe"
        email="kylian.mbappe@gmail.com"
        shirtNumber="7"
        salary=" 63 milion/year"
      />
      <UserItem
        name="Neymar jr."
        email="neymar.jr@gmail.com"
        shirtNumber="10"
        salary="78 milion/year"
      />
      {/* Chiar daca este o clasa, componenta este creata la fel */}
      <UserItemClass name="Sergio Ramos" email="sergio.ramos@gmail.com" />
    </div>
  );
}
