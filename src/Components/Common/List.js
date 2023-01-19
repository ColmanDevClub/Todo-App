import React from "react";

const List = ({items, Component}) => {
    return <>
      {items.map((item,index) => <Component {...item} index = {index}/>)}
    </>
}
export default List;