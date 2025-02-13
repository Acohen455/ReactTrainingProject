/* Recall how Arrow Functions work -- they take in values, and execute some code.
React components are all arrow functions (in modern react). Using classes is outdated.
We are making Functional components (ie. components from functions)
In this Component we're providing 0 arguments, which is why the arrow function is empty (ie. () => {})


export tells the compiler to export this for import to other parts of the app (ie. so it can be used in App.tsx)
const makes the component static
React.FC indicates that this is a React (F)unction (C)omponent
    In essence defining what data type this component returns
*/

export const FirstComponent:React.FC = () => {




    return(
        <>




        </>
        )


    }