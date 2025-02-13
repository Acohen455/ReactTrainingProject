import {ChildComponent} from "./ChildComponent.tsx";
import {useState} from "react";

export const ParentComponent:React.FC = () => {


    /* We can use the "useState" hook to define state
    * A state is an object that stores data related to a component
    *
    * Variables do this also -- why not use one?
    * The main advantage is that your component will re-render if there's a state change
    * If you want a value that directly affects the view, use a state object
    * If it's just a value used for something under the hood, use a regular variable
    *
    * To use a state in a component we declare:
    *       1) a variable that lets us ACCESS the state value
    *       2) A mutator (akin to a setter in Java) that lets us change the state value
    *       3) the actual "usestate" hook, which initializes state and lets us set datatype.default value
    *
    *       A hook allows you access to React's state and lifecycle methods from inside function components
    *       hooks effectively replace this.whatever and this.setwhatever()
    *
    *
    *
    * */

    //the const applies to the usestate part -- this can't be changed
    //the [] itself is effectively a map with a value:mutator pair -- we can change the value with the mutator
    //the ts-ignore is to suppress the unused mutator error
    // @ts-ignore
    const [favColor, setColor] = useState<string>("Blue")
    // @ts-ignore
    const [favSong, setSong] = useState<string>("No Quarter")

    return(
        <>
        <h3> Hello from the parent component! My child says:</h3>
        <ChildComponent color={favColor} song={favSong}/>
        </>
        )


    }