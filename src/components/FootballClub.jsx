export default function FootballClub(props) {
  const { name, country } = props;
  return (
    <div>
      <p>{name}</p>
      <p>{country}</p>
    </div>
  );
}
