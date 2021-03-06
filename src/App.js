import React, { Component } from 'react';
import Blur from './components/Blur';
import NavButton from './components/Button';
import Nav from './components/Nav';
import Sidemenu from './components/Sidemenu';
import './App.css';

class App extends Component {  
  state = {
    open: false,
    anm_side: "anm_sidemenu_close",
    anm_btn: {
      bar1: "",
      bar2: "",
      bar3: ""
    },
    anm_blur: "",
  };

  clickHandler = () => {
    const state = this.state;
    const anm_btn = this.state.anm_btn;
    let anm_blur = this.state.anm_blur;
    this.setState({open: !state.open});
    if(state.open === false) {
      anm_btn.bar1 = "bar1";
      anm_btn.bar2 = "bar2";
      anm_btn.bar3 = "bar3";
      anm_blur = "blur_anm";
      this.setState({anm_side: "anm_sidemenu_draw",
                    anm_btn: anm_btn,
                    anm_blur: anm_blur});
    } else {
      anm_btn.bar1 = "";
      anm_btn.bar2 = "";
      anm_btn.bar3 = "";
      anm_blur = "";
      this.setState({anm_side: "anm_sidemenu_close",
                    anm_btn: anm_btn,
                    anm_blur: anm_blur});
    }
  }

  render() {
    return (
      <div>
        <Nav><NavButton click={this.clickHandler} anm={this.state.anm_btn}/></Nav>
        <Blur anm={this.state.anm_blur}/>
        <Sidemenu sd_class={this.state.anm_side}/>
      </div>
    );
  }
}

export default App;
