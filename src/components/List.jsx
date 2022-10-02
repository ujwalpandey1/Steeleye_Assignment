import React,{ memo} from "react";
import SingleListItem from "../components/SingleListItem";


import PropTypes from 'prop-types';
// List Component
const WrappedListComponent = ({
    items,
  }) => {
    //Error :  incorrect syntax of setSelectedIndex
    
  
    // useEffect(() => {
    //   setSelectedIndex(null);
    // }, [items]);
  
    // const handleClick = ()=> {
        
    //   setSelectedIndex(index);
    // };
  
    return (
      <ul style={{ textAlign: 'left' }}>
        {items.map((item, index) => (
          <SingleListItem
            text={item.text}
            index={index}
            // isSelected={selectedIndex}
          />
        ))}
      </ul>
    )
  };
  

  //Error : Incoorect syntax  arrayOf and  shape syntax
  WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
    })),
  };
  
  WrappedListComponent.defaultProps = {
    items: null,
  };
  
  const List = memo(WrappedListComponent);
  
  export default List;
  
