function Item({name, isPacked}){
 let itemContent = name;
 if(isPacked){
  itemContent = name + "✔";

 }

 return(
  <li className = "item">
   {itemContent} </li>
 );
}

export default function packingList(){
 return(
  <section>
   <h1>Sally Ride's packing List</h1>
   <ul>
    <item
    isPacked = {true}
    name = "Space Suit"
    />
    <item
    isPacked = {true}
    name = "Helmet with a golden Leaf"
    />
    <item
    isPacked = {false}
    name = "photo of Tam"
    />
   </ul>
  </section>
 );
}