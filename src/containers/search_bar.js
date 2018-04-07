import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      term: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ term : event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    {this.props.fetchWeather(this.state.term)}
    this.setState({ term : ''});
  }


  render () {
    return (
      <form 
        className="input-group"
        onSubmit={this.onFormSubmit}
      >
        <input
          className="form-control"
          value={this.state.term}
          placeholder="Get a five-day forecast in your favorite cities"
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);