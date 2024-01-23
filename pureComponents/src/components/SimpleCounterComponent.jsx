import {Component} from "react";

class SimpleCounterComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
        toggle: false,
      };
    }

    handleToggle = () => {
        this.setState((prevState) => ({
          toggle: !prevState.toggle,
        }));
    };

    handlecount = () => {
        if (this.state.toggle) {
          this.setState((prevState) => ({
            counter: prevState.counter + 1,
          }));
        }
    };

    render() {

      console.log("This is Simple Component.")

        return (
          <div>
            <h2>SIMPLE COUNTER</h2>
            <p  className='value'>{this.state.counter}</p>
            <button className="btn" onClick={this.handleToggle} >Toggle</button>
            <button onClick={this.handlecount} >Increment</button>
          </div>
        );
    }
}

export default SimpleCounterComponent;