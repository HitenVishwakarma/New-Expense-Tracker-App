import { ChartBar } from "./ChartBar";
import "./Chart.css";

export const Chart = (props) => {
  const dataPointValue = props.datapoints.map((data) => data.value);
  const totalMaximum = Math.max(...dataPointValue);

  const chartData = props.datapoints.map((item) => (
    <ChartBar
      key={item.label}
      value={item.value}
      maxValue={totalMaximum}
      label={item.label}
    />
  ));
  return <div className="chart">{chartData}</div>;
};
