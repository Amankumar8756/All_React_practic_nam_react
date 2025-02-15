 
 // this is for one div
 const aman = React.createElement("h1",{id: "aman", xyz: "abc"}
, "Hello aman you came to on react now ! wow");


//i want to create nested div for container
/*
 <div id= "parent">
      <div id="child">
         <h1> i am from h1 tag </h1>
      </div>
   </div>    
*/

const aman2 = React.createElement("div",
     {id: "parent"},
     React.createElement("div",
        {id:"child"},
        [React.createElement("h1",{},"Hi I am from h1 Tag !"),React.createElement("h2",{},"Hi I am from h2 Tag !")]
        
     )
);

console.log(aman2);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(aman2);