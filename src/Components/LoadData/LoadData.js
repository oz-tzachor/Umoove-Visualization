import { useContext, useEffect, useState } from "react";
import "./LoadData.css";
import { dataContext } from "../../context/manageContext";
const LoadData = () => {
  const [students, setStudents] = useState(false);
  const [load, setLoad] = useState(true);
  const data = useContext(dataContext);
  let loadStudents = async () => {
    setLoad(true);
    let req = await fetch("http://localhost:5000/students/pilot", {
      method: "POST",
    });
    let res = await req.json();
    console.log("res", res);
    setStudents(res);
    setLoad(false);
  };
  let loadStudentData = async (_id) => {
    setLoad(true);
    let req = await fetch(`http://localhost:5000/students/${_id}`, {
      method: "POST",
    });
    let res = await req.json();
    console.log("res", res);
    data.setData(res[0]);
    data.setUserLoaded(true);
    // setStudents(res);
  };
  useEffect(() => {
    loadStudents();
  }, []);
  let onStudentClicked = async (_id) => {
    loadStudentData(_id);
  };
  return (
    <>
      {load && <div>loader</div>}
      {!load && (
        <div
          className="index"
          style={{
            // border: "1px solid red",
            margin: "auto",
            marginBottom: "10px",
          }}
        >
          <label>Mode: </label>
          <input
            id="cm"
            name="CM"
            value="CM"
            type="button"
            disabled={data.cmMode}
            style={{
              width: "40px",
              margin: "4px",
              borderRadius: "10px",
              border: data.cmMode ? "4px solid" : "2px solid",
              borderColor: data.cmMode ? "lightGreen" : "grey",
              boxSizing: "border-box",
            }}
            onClick={(e) => {
              data.setMode();
            }}
          ></input>
          <input
            value="PX"
            type="button"
            disabled={!data.cmMode}
            style={{
              margin: "4px",
              borderRadius: "10px",
              width: "40px",
              border: !data.cmMode ? "3px solid" : "2px solid",
              boxSizing: "border-box",
              borderColor: !data.cmMode ? "lightGreen" : "grey",
            }}
            onClick={(e) => {
              data.setMode();
            }}
          ></input>
        </div>
      )}
      {!load && (
        <div
          style={{
            border: "1px solid",
            borderRadius: "10px",
            margin: "auto",
            maxHeight: "80vh",
            overflowX: "auto",
            width: "fit-content",
            padding: "15px",
          }}
        >
          {students &&
            students.map((stu) => {
              return (
                <div
                  onClick={() => {
                    console.log("stu", stu);
                    onStudentClicked(stu._id);
                  }}
                  className="studentDetails"
                  style={{
                    // border: "1px solid red",
                    // height: "250px",
                    width: "300px",
                    margin: "4px",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <div>
                    School: <span>{stu.school}</span>
                  </div>
                  <div>
                    StudentId: <span>{stu.studentId}</span>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};
export default LoadData;
