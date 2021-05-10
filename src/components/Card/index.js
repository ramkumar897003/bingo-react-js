import React from "react";
import Ripples from "react-ripples";

const Card = ({
  onClick,
  child,
  rowCenter,
  colCenter,
  index,
  k,
  item,
  empty = false,
}) => {
  const renderCard = () => {
    return (
      <div className={`card${child.done ? " card-done" : ""}`}>
        <div
          className={`${
            rowCenter === index && colCenter === k ? "" : "card-wrapper"
          }${rowCenter === index && colCenter === k ? " center" : ""} item-${
            child.id
          }`}
        >
          {rowCenter === index && colCenter === k ? null : (
            <div className="number">{index * item.length + k}</div>
          )}
          <div className={child.done ? " done" : ""}>{child.title}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      {empty ? (
        <>{renderCard()}</>
      ) : (
        <Ripples onClick={onClick} data-testid="card">
          {renderCard()}
        </Ripples>
      )}
    </>
  );
};

export default Card;
