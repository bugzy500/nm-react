import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement('h1',{id: 'head'},'Hello world') // (element-h1,div,p, props-basically attributes,children?)

//JSX - transpiled before it reaches the JS - Parcel
//JSX has different rules for writing attributes and it is in camel case. will never have '-'
//class -> className | tabindex -> tabIndex
const jsxHeading = (
    <h1 id="heading">
    Heyyy
    </h1>)

console.log(heading,jsxHeading)

const num = 10000

//React Functional Components
const HeadingComponent = () => {
    return (
    <h1 className="first">
        <HeadingComponent2/>
        Helll yeah {num}
        {jsxHeading}
    </h1>)
}

// {} => execute any js code within this
//similar fn comp with ()
const HeadingComponent2 = () => (
<div>Heck yeah</div>
)

console.log(HeadingComponent(), HeadingComponent2())

const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(jsxHeading)
//root.render(<HeadingComponent/>)
root.render(HeadingComponent())