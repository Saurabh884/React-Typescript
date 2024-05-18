type GreetProps = {
    name:string,
    messageCount?: number,//optional prop
    isLoggedIn:boolean
}

export const Greet = (props:GreetProps) => {
    const { messageCount = 1} = props
  return (
    <div>
       
     <h2> {props.isLoggedIn ? `Welcome ${props.name} ! You have ${messageCount} new unread messages`:'Welcome Guest !'} </h2>  
   </div>
  )
}
