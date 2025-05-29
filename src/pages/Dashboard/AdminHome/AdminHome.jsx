import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import { RiAlignItemLeftFill } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
  ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  //custom shapes for the bar charts
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //custom shape for the pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div className="p-4">
      <h2 className="text-center text-2xl md:text-4xl font-semibold mb-6">
        Welcome Back,{" "}
        <span className="text-primary">
          {user?.displayName ? user.displayName : "Admin"}
        </span>
      </h2>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto md:w-11/12 lg:w-9/12">
        <div className="stat shadow-md bg-white rounded-lg p-3 max-w-sm mx-auto">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl text-indigo-500"></FaDollarSign>
          </div>
          <div className="stat-title text-sm">Revenue</div>
          <div className="stat-value text-base font-semibold">
            ${stats?.revenue?.toFixed(2)}
          </div>
          <div className="stat-desc text-xs">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat shadow-md bg-white rounded-lg p-3 max-w-sm mx-auto">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl text-slate-700"></FaUsers>
          </div>
          <div className="stat-title text-sm">Users</div>
          <div className="stat-value text-base font-semibold">
            {stats?.users}
          </div>
          <div className="stat-desc text-xs">↗︎ 400 (22%)</div>
        </div>

        <div className="stat shadow-md bg-white rounded-lg p-3 max-w-sm mx-auto">
          <div className="stat-figure text-secondary">
            <RiAlignItemLeftFill className="text-3xl text-cyan-600"></RiAlignItemLeftFill>
          </div>
          <div className="stat-title text-sm">Menu Items</div>
          <div className="stat-value text-base font-semibold">
            {stats?.menuItems}
          </div>
          <div className="stat-desc text-xs">↗︎ 400 (22%)</div>
        </div>

        <div className="stat shadow-md bg-white rounded-lg p-3 max-w-sm mx-auto">
          <div className="stat-figure text-secondary">
            <FaTruckFast className="text-3xl text-emerald-600" />
          </div>
          <div className="stat-title text-sm">Orders</div>
          <div className="stat-value text-base font-semibold">
            {stats?.orders}
          </div>
          <div className="stat-desc text-xs">↘︎ 90 (14%)</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row justify-around w-full max-w-6xl mx-auto gap-6 items-center mt-10 px-4">
        {/* Bar Chart */}
        <div className="w-full md:w-1/2 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="w-full md:w-1/2 h-[400px]">
        <ResponsiveContainer width="100%" height="100%">

            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius="80%"
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
            </ResponsiveContainer>

        </div>
      </div>
    </div>
  );
};

export default AdminHome;
