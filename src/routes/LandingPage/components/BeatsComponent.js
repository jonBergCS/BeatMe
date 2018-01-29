import React, { Component, PropTypes } from 'react';

class BeatsComponent extends Component {
  render() {
    const { beats } = this.props
    return (
      <div>
        <ul class="list-group">
         {beats.map((beat, index) => 
          <li className='list-group-item' key={index}>
            <div class='input-group-text'>
              <input type='radio'/>
            </div>
            {beat.name}
          </li> )}
        </ul>
      </div>
    );
  }
}

BeatsComponent.propTypes = {
  beats: PropTypes.array
}

export default BeatsComponent;