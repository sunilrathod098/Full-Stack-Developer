/*Here we create our own render like this
customRender(reactElement, reactContainer)
and execute code*/

function customRender(reactElement, reactContainer){
    
    //This code is correct the way of writing code is not correct
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute("href", reactElement.props.href)
    domElement.setAttribute("target", reactElement.props.target)
    reactContainer.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        }
        reactContainer.appendChild(domElement)
    
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const reactContainer = document.querySelector('#root')

customRender(reactElement, reactContainer)



/* This render is restricted in JSX that is
render should be only like this ".render()" */
ReactDOM.createRoot(document.getElementById('root')).render(
    <Function />
)

