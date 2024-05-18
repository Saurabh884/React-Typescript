import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    firstName: "Lakhan",
    lastName: "Kumar",
  };
  const nameList = [{ first: "Saurabh", last: "Kumar" },
    {first:"Golu", last:"Singh"},
    {first:"Raman", last:"Prasad"}
  ];
  return (
    <div className="App">
      <Greet name="Saurabh"  isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>I am a heading component</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo De Caprio</Heading>
      </Oscar>
      <Button handleClick={(event,id)=>{
        console.log("Button clicked !", event,id);
        
      }} />
      <Input value="" handleChange={(event)=>console.log(event)
      }/>
      <Container styles={{border:"1px solid red", padding:"1rem"}}/>
    </div>
  );
}

export default App;
