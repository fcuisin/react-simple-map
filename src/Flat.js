import React, {Component} from 'react';

class Flat extends Component {

  handleClick = () => {
    this.props.selectedFlat(this.props.index);
  }

  render() {

    return(
      <div className="card">
        <div className="card-img">
          <img src={this.props.url} alt={this.props.name}/>
        </div>
        <div className="card-description">
          <p className="card-title">{this.props.name}</p>
          <p className="card-price">{this.props.price}€</p>
        </div>
         <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    )

  }
}

export default Flat
