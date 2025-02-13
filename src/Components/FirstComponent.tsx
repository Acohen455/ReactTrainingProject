/* Recall how Arrow Functions work -- they take in values, and execute some code.
React components are all arrow functions (in modern react). Using classes is outdated.
We are making Functional components (ie. components from functions)
In this Component we're providing 0 arguments, which is why the arrow function is empty (ie. () => {})


export tells the compiler to export this for import to other parts of the app (ie. so it can be used in App.tsx)
const makes the component static
React.FC indicates that this is a React (F)unction (C)omponent
    In essence defining what data type this component returns


Worth noting there are two types of exports -- you can do a default export or a named export
Default export assumes whatever is returned is the export, and you can only have 1 default export per module
Named export allows you to export specific things and multiple per module
*/

export const FirstComponent:React.FC = () => {

    //We can define variables and logic in the space above the return()
    //The return jams together html, css, etc. into one component
    const message:string = "I am a value stored in FirstComponent, and rendered in TSX."

    //we can use {data binding} to render variable values onto our view

    return(
        <>
            <h4>Hello from FirstComponent</h4>
            <p>Data Binding: {message}</p>
        </>
        )


    }