import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
<html>
<link rel="stylesheet" href="../src/mdl/material.min.css"/>
<script src="../scr/mdl/material.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue_grey-indigo.min.css" />

<body>
 
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      
      <span class="mdl-layout-title">Panafold</span>
      
      <div class="mdl-layout-spacer"></div>
      
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" href="https://panafold.co/">About Panafold</a>
      </nav>
</div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Panafold</span>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link" href="https://panafold.co/">About Panafold</a>
    </nav>
  </div>
  
  <main>
  
<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/ff.jpeg" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/arc1.jpg" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/skywalker.jpg" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/house 1.jpg" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/dd.jpeg" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/ee.jpeg" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/ee.jpg" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/ff.jpeg" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/hh.jpeg" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/jj.jpeg" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/mm.jpeg" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/chova.png" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/house2.jpg" style="width:80%"/>
  </div>
  <div class="mdl-cell mdl-cell--4-col">
  <img class="images" src="Images/house2.png" style="width:80%"/>
  </div>
</div>
</main>
</div>
</body>

</html>
    );
  }
}

export default App;
