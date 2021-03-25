import React, { Component} from 'react'

import './navbar.css'

class Navbar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg">
                <div className=" itStep-a">
                <a class="navbar-brand" href="#">
                    <img className="logoItStep" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%B0%D1%8F_%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F_%D0%A8%D0%90%D0%93.png"></img>
                </a>
                </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        
      </li>
    </ul>
    <div class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <span className="points">315 <i class="nav-icon fas fa-thumbs-up"></i></span>
            </li>
            <li class="nav-item">
                <span className="crystals">135 <i class="nav-icon fas fa-gem"></i></span>
            </li>
            <li class="nav-item">
                <span className="coins">180 <i class="nav-icon fab fa-bitcoin"></i></span>
            </li>
            <li class="nav-item">
                <span className="achievements-nav">7    <i class="nav-icon fas fa-medal"></i></span>
            </li>
        </ul>
    </div>
  </div>
</nav>
        )
    }
}

export default Navbar;