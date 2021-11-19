import React, {Component} from 'react';
import Flat from './Flat';

class FlatsList extends Component {

  render() {
    return(

      <div>
        {this.props.flats.map(flat => <Flat name={flat.name} url={flat.imageUrl} price={flat.price} key={flat.id}/>)}
      </div>

    )
  }

}

export default FlatsList
