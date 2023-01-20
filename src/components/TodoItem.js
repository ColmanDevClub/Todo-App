import React from "react";
export default function TodoItem(props) {
  return (
    <li key={props.id} className="items">
      <input id="check" type="checkbox" isCompleted={props.isCompleted} />
      {props.content}
    </li>
  );
}
