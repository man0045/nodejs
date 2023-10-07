// the simplest way to define  a component is to write a javascrip function 

function welcome(props){
 return <h1>Hello, {props.name}</h1>
}

//This function is a valid React component because it accepts a single “props” (which stands for properties) 
// object argument with data and returns a React element. We call such components “function components” because
//  they are literally JavaScript functions.
class Welcome extends React.Component {
 render(){
  return <h1>Hello, {this.props.name}</h1>;
 }
}


const element = <Welcome name = "sara" />

function Welcome(props){
 return <h1>Hello , {props.name}</h1>;

}
// when react sees an element representing a user-defined component, 
// it passess JSX attributes and children to this component as a single objects
// we call this object "props" 

const root = ReactDOM.createRoot(document.getElementById('root'));

const element = <Welcome name ="sara"/>;
root.render(element);