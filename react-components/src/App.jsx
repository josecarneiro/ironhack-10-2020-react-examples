import './App.css';

const PersonInformation = ({
  color,
  name,
  location,
  birthdate,
  pets,
  vegetarian
}) => {
  return (
    <div style={{ color: color }}>
      <h3>{name}</h3>
      <p>Location: {location}</p>
      <strong>Favorite color: {color}</strong>
      <br />
      <small>Birthdate: {birthdate.toUTCString()}</small>
      <br />
      <span>Pets: {pets.join(', ')}</span>
      <br />
      <span>This person {vegetarian ? 'is' : 'is not'} vegetarian.</span>
    </div>
  );
};

const PetInformation = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      {props.children}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <PersonInformation
        name="José"
        location="Restauradores"
        color="blue"
        birthdate={new Date(1993, 4, 13)}
        pets={['Whiskers', 'Panda', 'Pipoca']}
        vegetarian={false}
      />
      <PersonInformation
        name="Stefano"
        location="Penha de França"
        color="green"
        birthdate={new Date(1991, 3, 7)}
        pets={[]}
        vegetarian={true}
      />
      <PetInformation name="Panda">
        <span>Age: 6</span>
        <br />
        <img src="https://source.unsplash.com/200x200/?dalmatian" alt="" />
      </PetInformation>
      <PetInformation name="Whiskers">
        <span>Is a poorly behaved cat.</span>
      </PetInformation>
    </div>
  );
}

export default App;
