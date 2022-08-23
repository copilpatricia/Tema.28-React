function UserItem(props) {
  // props este un obiect creat de React, care are drept chei 'atributele' de HTML folosite la crearea componentei UserItem (vezi in App.js).
  // Pentru a extrage atributele obiectului props, folosim object destructuring.
  const { name, email } = props;
  // Intr-o componenta intotdeauna este returnat un singur tag de HTML.
  // Daca avem nevoie de mai multe tag-uri de HTML, le impachetam intr-un tag principal.
  return (
    <div>
      {/* Folosim {} pentru a integra expresii de JS in taguri de HTML. */}
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// Pentru a putea fi utilizata in alte locuri, componenta este exportata.
export default UserItem;
