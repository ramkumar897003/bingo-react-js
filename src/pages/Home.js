import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

import actions from "../redux/actions";
import Card from "../components/Card";

const Home = ({ data = [] }) => {
  const confettiRef = useRef(null);
  const { width, height } = useWindowSize();
  const [reward, setReward] = useState(false); //This is used to enable/disable rewards
  const [rightDiagonal, setRightDiagonal] = useState(false);

  useEffect(() => {
    actions.getData();
  });

  //This function is responsible to handle card click event
  const handleClick = (first, second) => {
    let newData = [...data];
    newData[first][second].done = true;
    actions.setData(newData);

    checkIfCompleted(first, second);
  };

  //This function is responsible to check if row/column/diagonal elements are completed
  const checkIfCompleted = (first, second) => {
    const rows = data[first];

    //Check if row of clicked element is completed
    const rowCompleted = rows.every((item) => {
      return item.done === true;
    });

    //Check if column of clicked element is completed
    const colCompleted = rows.every((item, key) => {
      return data[key][second].done === true;
    });

    //Check if left diagonal elements are completed
    const leftDiagonalCompleted = data.every((item, key) => {
      return first === second && data[key][key].done === true;
    });

    //Check if right diagonal elements are completed
    const rightDiagonalCompleted = data.every((item, key) => {
      return data[key][data.length - key - 1].done === true;
    });

    //Add completed class to completed row
    if (rowCompleted) {
      rows.forEach((element) => {
        document
          .querySelector(`.item-${element.id}`)
          .classList.add("completed-card-wrapper");
      });
    }

    //Add completed class to completed column
    if (colCompleted) {
      rows.forEach((element, key) => {
        document
          .querySelector(`.item-${data[key][second].id}`)
          .classList.add("completed-card-wrapper");
      });
    }

    //Add completed class to completed left diagonal
    if (leftDiagonalCompleted) {
      rows.forEach((element, key) => {
        if (first === second) {
          document
            .querySelector(`.item-${data[key][key].id}`)
            .classList.add("completed-card-wrapper");
        }
      });
    }

    //Add completed class to completed right diagonal
    if (rightDiagonalCompleted) {
      rows.forEach((element, key) => {
        document
          .querySelector(`.item-${data[key][data.length - key - 1].id}`)
          .classList.add("completed-card-wrapper");
      });
    }

    if (
      rowCompleted ||
      colCompleted ||
      leftDiagonalCompleted ||
      (rightDiagonalCompleted && !rightDiagonal)
    ) {
      showReward();
      if (rightDiagonalCompleted && !rightDiagonal) {
        setRightDiagonal(true);
      }
    }
  };

  //This function handles reward display
  const showReward = () => {
    setReward(true);
    setTimeout(() => {
      setReward(false);
    }, 1000);
  };

  const rowCenter = Math.floor(data.length && data[0].length / 2);
  const colCenter = Math.floor(data.length / 2);

  return (
    <div data-testid="home">
      <Confetti
        ref={confettiRef}
        width={width}
        height={height}
        numberOfPieces={reward ? 1000 : 0}
        recycle={false}
        onConfettiComplete={(confetti) => {
          confetti.reset();
        }}
      />
      <div className="container">
        <div className="content">
          {data.map((item, key) => (
            <div key={key} className="row">
              {item.map((child, k) => (
                <Card
                  key={child.id}
                  onClick={() => handleClick(key, k)}
                  k={k}
                  child={child}
                  colCenter={colCenter}
                  rowCenter={rowCenter}
                  index={key}
                  item={item}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.bingo.data,
  };
};

export default connect(mapStateToProps)(Home);
