/* This component takes props of ChildProps type. What is that, and what is props?
*
*
* Props (short for "properties") is the data we pass (ie. send in) from a Parent Component
* ParentComponent will render a ChildComponent in its return() and pass some values to it
* These are the props that ChildComponent will receive
*
* We defined an interface (which is more like a Java Model Class than a Java interface)
*
*  */

interface ChildProps{
    color:string;
    song:string;
}

//when specifying childprops as props type, and {color, song} which are the actual values
//{color, song} is destructuring the values -- we can pass it as a variable of type childprops instead if we want
export const ChildComponent:React.FC<ChildProps> = ({color, song}) => {

    return(
        <>
            <h4>Hello from the Child Component!</h4>
            <p>My Parent's favorite color is: {color}</p> {/*use databinding to retrieve the destructured data*/}
            <h5>My Parent's favorite song is: {song}</h5>
        </>
    )
}