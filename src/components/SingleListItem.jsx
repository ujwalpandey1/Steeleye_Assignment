import React, { useState,memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  // isSelected,
  text,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(false);

  //ERROR: setSelectedIndex(index) this is a boolean type so remove index
  const handleClick = ()=>{
       setSelectedIndex((curr)=> !curr);
  }
  return (
    <li
    //remove isSelected and update selectIndex 
      style={{ backgroundColor: selectedIndex ? 'green' : 'red'}}
      onClick={handleClick}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

export default SingleListItem;