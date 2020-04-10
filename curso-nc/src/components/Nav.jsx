
import React from "react";

// Style
import '../assets/styles/nav';

class Menu extends React.Component {

    render()   {
        return(
          <div>
              <nav style={nav}>
                  <ul>
                      <li style={li}> <a style={a} href=""> Inicio</a></li>
                      <li style={li}> <a style={a} href=""> Menu 1</a></li>
                      <li style={li}> <a style={a} href=""> Menu 2</a></li>
                      <li style={li}> <a style={a} href=""> Menu 3</a></li>
                      <li style={li}> <a style={a} href=""> Menu 4</a></li>
                  </ul>
              </nav>
          </div>
        )
    } 
}


const nav = {
    backgroundColor: '#B3B0C2'
}


const li = {

    display: 'inline-block',
    margin: '15px',
    backgroundColor: '#B3B0C2'
    
}

const a ={
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    fontSize: '18px',
    color: 'white'
}

export default Menu;
