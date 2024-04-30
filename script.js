const Title = () => {
    return(
        <h1>TOPICS COVERED</h1>
    )
}
const Heading = () => {
    return(
        <h3>
         The following is a list all the topics we cover in the MDN learning area.
        </h3>
    )
}
const Para1 = () => {
     return(
        <>
        <a href="#" >Getting started with the Web</a>
        <p>
         Provides a practical introduction to web development for complete beginners.
        </p>
        </>
     )
}

const HTML = () => {
    return(
       <>
       <a href="#" >HTML - Structuring the web</a>
       <p>
        HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic HTML in Detail.
       </p>
       </>
    )
}
const CSS = () => {
    return(
       <>
       <a href="#" >CSS - Styling the web</a>
       <p>
        CSS is the language that we use to control our web content's style and layout, as wel as adding behaviour like anumation. This topic provides comprehensive coverage of CSS.
       </p>
       </>
    )
}


const Main = () => {
    return(
        <>
        <Title/>
        <Heading/>
        <br/>
        <Para1/>
        <br/>
        <HTML/>
        <br/>
        <CSS/>

        </>
    )
}

ReactDOM.render(<Main/>, document.querySelector('#root'))