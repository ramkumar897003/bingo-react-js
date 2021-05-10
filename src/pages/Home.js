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
  const [leftDiagonal, setLeftDiagonal] = useState(false);

  const rowCenter = Math.floor(data.length && data[0].length / 2);
  const colCenter = Math.floor(data.length / 2);

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
    const centerElement = data[rowCenter][colCenter].id;

    //Check if row of clicked element is completed
    const rowCompleted = rows
      .filter((item) => item.id !== centerElement)
      .every((item) => {
        return item.done === true;
      });

    //Check if column of clicked element is completed
    const colsArr = [];
    rows.forEach((item, key) => {
      colsArr.push(data[key][second]);
    });
    const colCompleted = colsArr
      .filter((item) => item.id !== centerElement)
      .every((item, key) => {
        return item.done === true;
      });

    //Check if left diagonal elements are completed
    const leftArr = [];
    data.forEach((item, key) => {
      leftArr.push(data[key][key]);
    });

    const leftDiagonalCompleted = leftArr
      .filter((item) => item.id !== centerElement)
      .every((item, key) => {
        return item.done === true;
      });

    //Check if right diagonal elements are completed
    const rightArr = [];
    data.forEach((item, key) => {
      rightArr.push(data[key][data.length - key - 1]);
    });
    const rightDiagonalCompleted = rightArr
      .filter((item) => item.id !== centerElement)
      .every((item, key) => {
        return item.done === true;
      });

    //Add completed class to completed row
    if (rowCompleted) {
      rows.forEach((element) => {
        if (element.id !== centerElement) {
          document
            .querySelector(`.item-${element.id}`)
            .classList.add("completed-card-wrapper");
        }
      });
    }

    //Add completed class to completed column
    if (colCompleted) {
      rows.forEach((element, key) => {
        if (data[key][second].id !== centerElement) {
          document
            .querySelector(`.item-${data[key][second].id}`)
            .classList.add("completed-card-wrapper");
        }
      });
    }

    //Add completed class to completed left diagonal
    if (leftDiagonalCompleted) {
      rows.forEach((element, key) => {
        if (first === second && data[key][key].id !== centerElement) {
          document
            .querySelector(`.item-${data[key][key].id}`)
            .classList.add("completed-card-wrapper");
        }
      });
    }

    //Add completed class to completed right diagonal
    if (rightDiagonalCompleted) {
      rows.forEach((element, key) => {
        if (data[key][data.length - key - 1].id !== centerElement) {
          document
            .querySelector(`.item-${data[key][data.length - key - 1].id}`)
            .classList.add("completed-card-wrapper");
        }
      });
    }

    if (
      rowCompleted ||
      colCompleted ||
      (leftDiagonalCompleted && !leftDiagonal) ||
      (rightDiagonalCompleted && !rightDiagonal)
    ) {
      showReward();
      if (rightDiagonalCompleted && !rightDiagonal) {
        setRightDiagonal(true);
      }
      if (leftDiagonalCompleted && !leftDiagonal) {
        setLeftDiagonal(true);
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

  return (
    <div data-testid="home">
      <Confetti
        ref={confettiRef}
        gravity={0.3}
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
                  empty={rowCenter === key && colCenter === k}
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
