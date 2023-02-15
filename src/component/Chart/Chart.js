import { ChartBar } from "./ChartBar";
import "./Chart.css";

export const Chart = (props) => {
  const chartData = props.datapoints.map((item) => (
    <ChartBar
      key={item.label}
      value={item.value}
      maxValue={null}
      label={item.label}
    />
  ));
  return <div className="chart">{chartData}</div>;
};
