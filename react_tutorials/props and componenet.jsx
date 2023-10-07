
function welcome(props){
 return <h1>Hello,  {props.Name}</h1>
}

function App(){
 return(
  <div>
  <welcome Name = " Mannu"/>
  <welcome Name = " Sara"/>
  <welcome Name = " Tara"/>
  </div>
 );
}
