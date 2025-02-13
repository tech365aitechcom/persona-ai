"use client";
import { chartData } from "@/data";
import React, { useEffect, useState } from "react";
import { Cell, Label, Pie, PieChart } from "recharts";

const Chart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <PieChart width={380} height={450}>
      <Pie
        data={chartData}
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={180}
        dataKey="value"
        paddingAngle={0}
        startAngle={370}
        endAngle={10}
        clipPathId="recharts-fixed-clip"
      >
        {chartData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.color}
            stroke="#D6ECFF" // Light blue border around each pie slice
            strokeWidth={12} // Thickness of border
          />
        ))}
        {/* Centered Text */}
        <Label
          value="$PRSNA"
          position="center"
          fontSize={28}
          fontWeight="bold"
          fill="#B0BEC5"
        />
      </Pie>
    </PieChart>
  );
};

export default Chart;
