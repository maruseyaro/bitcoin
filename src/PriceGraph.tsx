import { useState } from "react";
import { LineChart, CartesianGrid, Line } from "recharts";

export default function PriceGraph() {
  const [viewMode, setViewMode] = useState<ViewMode>("1mo");

  const data = [
    {
      uv: 1,
      pv: 1,
    },
    {
      uv: 10,
      pv: 10,
    },
  ];

  const createHandleViewModeButtonClick = (viewMode: ViewMode) => () => {
    setViewMode(viewMode);
  };

  return (
    <section>
      <h3>{viewMode}</h3>

      <LineChart width={400} height={400} data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>

      <ul>
        <li>
          <button
            type="button"
            onClick={createHandleViewModeButtonClick("24h")}
          >
            24 hour
          </button>
        </li>
        <li>
          <button type="button" onClick={createHandleViewModeButtonClick("7d")}>
            7 days
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={createHandleViewModeButtonClick("1mo")}
          >
            1 month
          </button>
        </li>
      </ul>
    </section>
  );
}

type ViewMode = "24h" | "7d" | "1mo";
