import React, {Component} from 'react';
import Flat from './Flat';

class FlatsList extends Component {

  render() {

    return(

      <div className="Flats-container">
        {this.props.flats.map((flat,index) =>
          <Flat index={index} name={flat.name} url={flat.imageUrl} price={flat.price} selectedFlat={this.props.selectedFlat} key={flat.id}/>
        )}
      </div>

    )
  }

}

export default FlatsList
