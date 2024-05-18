import { PersonProps } from "./Person.types"

export const Person = ({name}:PersonProps) => {
    const {firstName,lastName} = name
  return (
    <div>
       <h1>My name is {firstName} {lastName} </h1> 
    </div>
  )
}
