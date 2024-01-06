import "./App.css";
import Table from "./Table";

function App() {
  const users = [
    {
      name: "Tayfun",
      surname: "Erbilen",
      email: "tayfunerbilen@gmail.com",
      age: 29,
    },
    {
      name: "Seyit Yahya",
      surname: "Kuru",
      email: "seyityahya05@gmail.com",
      age: 24,
    },
    {
      name: "Mehmet",
      surname: "Seven",
      email: "mseven@gmail.com",
      age: 29,
    },
    {
      name: "Gökhan",
      surname: "Kandemir",
      email: "gökhan@gmail.com",
      age: 35,
    },
  ];
  return (
    <div className="p-4">
      <Table
        searchable={true}
        head={[
          { name: "Ad Soyad", sortable: true },
          { name: "E-posta" },
          { name: "Yaş", sortable: true },
          { name: "İşlemler", width: 300 },
        ]}
        body={users.map((user) => [
          <div key={`${user.name} ${user.surname}`}>
            {user.name} {user.surname}
          </div>,
          user.email,
          <div key={`Yaş ${user.age}`}>{user.age}</div>,
          [
            <button className="h-8 px-4 flex items-center rounded bg-blue-600 text-white">
              Düzenle
            </button>,
            <button className="h-8 px-4 flex items-center rounded bg-red-600 text-white">
              Sil
            </button>,
          ],
        ])}
      />
    </div>
  );
}

export default App;
