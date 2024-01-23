import  { PureComponent } from 'react';

class PureCounterComponent extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            toggle: false,
        };
    }

    handleSetToggle = () =>{
        this.setState((prevState) => ({
            toggle: !prevState.toggle,
        }));
    };



  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }
  };


  render() {
    const { counter, toggle } = this.state;

    return (
      <div>
        <h2>Pure Component</h2>
        <p>{counter}</p>
            <button className='togbtn' onClick={this.handleSetToggle}>Toggle</button>
            <button onClick={this.handleIncrement} disabled={!toggle}>
          Increment
        </button>
      </div>
    );
  }
}

export default PureCounterComponent;
