
function customRender(reactElement, container) {
    // //create DOM element
    // const domElement = document.createElement(reactElement.type)
    // //innerHTML
    // domElement.innerHTML= reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

    //make the code modular
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue 
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement= {
    //tree 
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement, mainContainer)