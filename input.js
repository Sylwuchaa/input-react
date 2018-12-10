class App extends React.Component {

  state = {
    value: ""
  }

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    })
  }
  handleButtonReset = () => {
    this.setState({
      value: ""
    })
  }

  render() {
    return (
      <>
      <input onChange={this.handleInputChange} placeholder="wpisz..." type="text" />
      <button className="btn" onClick={this.handleButtonReset}>Reset</button>
      <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));