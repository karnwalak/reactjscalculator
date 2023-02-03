import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { calculateValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
function App() {
  const [expression,setExpression] = useState(0);
  const calculateValue = (e) => {
    if (expression === 0){
      setExpression(e.toString());
    }else{
      setExpression(expression + e.toString());
    }
  }
  const evaluateString = (str) => {
    setExpression(eval(str));
  }
  const evaluateSquare = (str) => {
    setExpression(str*str);
  }
  const evaluateCube = (str) => {
    setExpression(str * str * str);
  };
  const calearValue = () => {
    setExpression(0);
  }
  return (
    <div className="App container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-5 col-sm-10 col-4">
          <div className="card">
            <div className="card-header bg-primary text-center h1 text-white">
              CALCULATOR
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div
                  className="col-12 col-md-5 col-12 text-end"
                  style={{ height: "100px" }}
                >
                  <span style={{ fontSize: "70px" }} className="mx-3">
                    {expression}
                  </span>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calearValue()}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    C
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue("+-")}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    +-
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue("%")}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    %
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue("/")}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    /
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue(7)}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    7
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue(8)}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    8
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue(9)}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    9
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue("*")}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    *
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue(4)}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    4
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue(5)}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    5
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue(6)}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    6
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue("-")}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    -
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue(1)}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    1
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue(2)}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    2
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue(3)}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    3
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue("+")}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    +
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue(0)}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    0
                  </button>
                </div>
                <div className="col-3 col-md-3 col-sm-3 p-2">
                  <button
                    onClick={() => calculateValue(".")}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    .
                  </button>
                </div>
                <div className="col-2 col-md-2 col-sm-2 p-2">
                  <button
                    onClick={() => evaluateSquare(expression)}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    x<sup>2</sup>
                  </button>
                </div>
                <div className="col-2 col-md-2 col-sm-2 p-2">
                  <button
                    onClick={() => evaluateCube(expression)}
                    className="btn w-75 text-light bg-primary fs-1"
                  >
                    x<sup>3</sup>
                  </button>
                </div>
                <div className="col-2 col-md-2 col-sm-2 p-2">
                  <button
                    onClick={() => evaluateString(expression)}
                    className="btn w-75 text-light bg-danger fs-1"
                  >
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
