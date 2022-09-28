import { Chart, Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
// Chart.register(CategoryScale);

const Graph = (leftX, rightX, leftY, lab) => {
  return (
    <>
    {/* <Line
      color="red"
      typeof="$"
      datasetIdKey="id"
      data={{
        labels: lab,
        datasets: [
          {
            id: 1,
            label: "left x",
            data: leftX,
          },
          {
            id: 2,
            label: "right x",
            data: rightX,
            borderColor: "red",
          },
        ],
      }}
      /> */}
      </>
  );
};
export default Graph;
