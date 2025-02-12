"use client";
import { chartData } from "@/data";
import React, { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

const Chart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <PieChart width={350} height={350}>
      <Pie
        data={chartData}
        cx="50%"
        cy="50%"
        innerRadius={80}
        outerRadius={140}
        dataKey="value"
        paddingAngle={2}
        clipPathId="recharts-fixed-clip"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;
