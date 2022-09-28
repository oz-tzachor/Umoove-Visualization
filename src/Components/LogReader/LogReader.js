import { useState } from "react";
import data from "./csvjson.json";
import "./LogReader.css";
const LogReader = () => {
  console.log("data", data[0]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  let loopArr = [-2, -1, 0];
  const sliceNumbers = (num, sliceNumInput) => {
    let sliceNum = sliceNumInput || 5;
    return num.toString().slice(0, sliceNum);
  };
  let causes = [];
  let stateColors = {
    PRE_TEST: "#a4d9a4",
    wt_PRE_TEST: "#a4d9a4",
    NO_POINT: "#eb72f8",
    wt_NO_POINT: "#eb72f8",
    PAUSED_FLOW: "#ff3357",
    wt_PAUSED_FLOW: "#ff3357",
    PAUSED_TEST: "red",
    wt_PAUSED_TEST: "red",
    NEW_UNVISIBLE_POINT: "orange",
    wt_NEW_UNVISIBLE_POINT: "orange",
    VISIBLE_POINT: "lightGreen",
    wt_VISIBLE_POINT: "lightGreen",
    wt_MOVING_FAKE_FIXATION: "grey",
  };
  let blocks = ["Eye Data", "Point Data", "Movement"];
  let fixCauses = [
    "fixated",
    "fixation success",
    "looked away",
    "cant fixated",'time'
  ];
  let L_S_Causes = [
    "too quick",
    "looked Possible Success",
    "after success",
    "missed",
    "3 misses",'time'
  ];
  let L_S_T_E_Causes = ["too quick", "looked Possible Success"];
  console.log("causes", causes);
  let generateData = (data) => {
    return (
      <div>
        {data.key}:
        {sliceNumbers(
          data.value,
          data.value.toString().includes("{") ? data.value.length : 4
        )}
      </div>
    );
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "30vw",
            maxHeight: "600px",
            overflow: "auto",
            border: "1px solid red",
            margin: "auto",
          }}
        >
          <label
            style={{
              width: "fit-content",
              border: "1px solid red",
              alignSelf: "center",
              margin: "auto",
            }}
          >
            Flow
          </label>
          {data.map((item, index) => {
            let { state, cause, progress } = item;
            if (!causes.includes(cause)) {
              console.log("not include", cause);
              causes.push(cause);
            }
            return (
              <div style={{ display: "flex" }}>
                <ul
                  className="flowItem"
                  onClick={() => setSelectedIndex(index)}
                  style={{
                    border: "1px solid",
                    borderRadius: "10px",
                    width: "80%",
                    margin: "auto",
                    marginTop: "14px",
                    border: index === selectedIndex ? "5px solid " : "none",

                    // background:
                    //   index === selectedIndex
                    //     ? "aquamarine"
                    //     : stateColors[state],
                    background: stateColors[state],
                  }}
                >
                  <li>Index: {index}</li>
                  <li>State: {state}</li>
                  <li>Cause: {cause}</li>
                  <li>Progress: {progress}</li>
                </ul>
              </div>
            );
          })}
        </div>
        {/* // */}
        <div
          style={{
            width: "60vw",
            minHeight: "600px",
            maxHeight: "600px",
            overflow: "auto",
            border: "1px solid red",
            margin: "auto",
          }}
        >
          <label
            style={{
              width: "fit-content",
              border: "1px solid red",
              margin: "auto",
            }}
          >
            Data
          </label>

          {loopArr.map((num) => {
            let currIndex = selectedIndex + num;
            if (data[currIndex]) {
              if (currIndex === 0) {
              }

              let {
                state,
                cause,
                progress,
                headMovTotalX,
                headMovTotalY,
                inRange,
                fixationminimumFixationTime,
                fixationoverallDist,
                fixationthresh,
                fixationtimeInFixation,
                lookedAwayoverallDist,
                lookedAwaythresh,
                lookedSuccessTooEarlyangleDif,
                lookedSuccessTooEarlyangleDiffThresh,
                lookedSuccessTooEarlyexpectedEyeDistance,
                lookedSuccessTooEarlyoverallDist,
                lookedSuccessangleDiff,
                lookedSuccessangleDiffThresh,
                lookedSuccessoverallDist,
                lookedSuccessexpectedEyeDistance,
                pointInDegY,
                pointInDegX,
                pointInPxX,
                pointInPxY,
                pointIntensity,
                pointSteps,
                time,
                tryPoint,
                diamAvg,
              } = data[currIndex];
              let dataForBlocks = [
                [
                  { key: "Diam", value: diamAvg },
                  {
                    key: "HeadMov",
                    value: `{${sliceNumbers(headMovTotalX)},${sliceNumbers(
                      headMovTotalY
                    )} }`,
                  },
                ],
                [
                  { key: "InDeg", value: `{${pointInDegY},${pointInDegX}}` },
                  { key: "InPx", value: `{ ${sliceNumbers(pointInPxX,4)},${sliceNumbers(pointInPxY,4)} }` },
                  { key: "Intensity", value: pointIntensity },
                  { key: "Steps", value: pointSteps },
                  { key: "try", value: tryPoint },
                  { key: "inRange", value: inRange },
                ],
                [
                  { key: "fixMinTime", value: fixationminimumFixationTime },
                  {
                    key: "fixOverDist",
                    value: fixationoverallDist,
                  },
                  {
                    key: "fixThresh",
                    value: fixationthresh,
                  },
                  {
                    key: "TimeInFix",
                    value: fixationtimeInFixation,
                  },
                  { key: "L_A_OverDist", value: lookedAwayoverallDist },
                  { key: "L_AThresh", value: lookedAwaythresh },
                  {
                    key: "L_S_T_EAngleDiff",
                    value: lookedSuccessTooEarlyangleDif,
                  },
                  {
                    key: "L_S_T_EAngleDiffThresh",
                    value: lookedSuccessTooEarlyangleDiffThresh,
                  },
                  {
                    key: "L_S_T_E_expDist",
                    value: lookedSuccessTooEarlyexpectedEyeDistance,
                  },
                  {
                    key: "L_S_T_E_overDist",
                    value: lookedSuccessTooEarlyoverallDist,
                  },
                  { key: "L_S_angleDiff", value: lookedSuccessangleDiff },
                  {
                    key: "L_S_angleDiffThresh",
                    value: lookedSuccessangleDiffThresh,
                  },
                  { key: "L_S_overDist", value: lookedSuccessoverallDist },
                  {
                    key: "L_S_expDist",
                    value: lookedSuccessexpectedEyeDistance,
                  },
                ],
              ];

              return (
                <div style={{ display: "flex" }}>
                  <ul
                    style={{
                      border: "1px solid",
                      borderRadius: "10px",
                      width: "80%",
                      margin: "auto",
                      marginTop: "14px",
                      minHeight: "100px",
                      fontSize: "13px",
                      border:
                        currIndex === selectedIndex ? "5px solid " : "none",
                      background: stateColors[state],
                    }}
                  >
                    <div
                      className="dataHeader"
                      style={{
                        // border: "1px solid",
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <span>Index: {currIndex}</span>
                      <span>State: {state}</span>
                      <span>cause: {cause}</span>
                      <span>Progress: {progress}</span>
                    </div>
                    <br />

                    <div
                      className="dataBody"
                      style={{
                        border: "1px solid",
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      {blocks.map((block, blockIndex) => {
                        return (
                          <div>
                            <label>{block}</label>
                            <ul>
                              {dataForBlocks[blockIndex].map(
                                (data, dataIndex) => {
                                  let fixOn =
                                    data.key.toString().includes("fix") &&
                                    fixCauses.includes(cause);
                                  let L_S_T_E_On =
                                    data.key.toString().includes("L_S_T_E") &&
                                    L_S_T_E_Causes.includes(cause);
                                  let L_S_On =
                                    data.key.toString().includes("L_S") &&
                                    L_S_Causes.includes(cause);
                                  if (blockIndex === 2) {
                                    if (fixOn) return generateData(data);
                                    if (L_S_T_E_On) return generateData(data);
                                    if (L_S_On) return generateData(data);
                                  } else {
                                    return (
                                      <div>
                                        {data.key}:
                                        {sliceNumbers(
                                          data.value,
                                          data.value.toString().includes("{")
                                            ? data.value.length
                                            : 4
                                        )}
                                      </div>
                                    );
                                  }
                                }
                              )}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </ul>
                </div>
              );
            }
          })}
        </div>
        ;
      </div>
    </>
  );
};
export default LogReader;
