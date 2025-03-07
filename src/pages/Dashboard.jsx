import {
  FaUserInjured,
  FaCalendarCheck,
  FaFileMedical,
  FaDollarSign,
} from "react-icons/fa";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

// Dữ liệu cho biểu đồ thu nhập
const earningsData = [
  { name: "Jan", earnings: 30000 },
  { name: "Feb", earnings: 25000 },
  { name: "Mar", earnings: 35000 },
  { name: "Apr", earnings: 50000 },
  { name: "May", earnings: 45000 },
  { name: "Jun", earnings: 55000 },
  { name: "Jul", earnings: 60000 },
  { name: "Aug", earnings: 50000 },
  { name: "Sep", earnings: 40000 },
  { name: "Oct", earnings: 70000 },
  { name: "Nov", earnings: 60000 },
  { name: "Dec", earnings: 40000 },
];

const EarningsReport = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mt-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-700 font-semibold text-lg">Earning Reports</h2>
        <div className="text-green-500 font-semibold bg-green-100 px-3 py-1 rounded-full text-sm">
          +2.4%
        </div>
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={earningsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />

            <XAxis dataKey="name" tick={{ fill: "#9CA3AF" }} tickLine={false} />
            <YAxis
              tick={{ fill: "#9CA3AF" }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "none",
              }}
            />

            <defs>
              <linearGradient id="earningsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#22c55e"
              strokeWidth={2.5}
              fill="url(#earningsGradient)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
const RecentPatients = () => {
  return (
    <div className="w-full flex-grow bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300">
      <h3 className="text-gray-700 font-semibold mb-4">Recent Patients</h3>
      <div className="space-y-4">
        {[
          { name: "Amina Smith", phone: "+1 908 765 432", time: "2:00 PM" },
          { name: "Minahil Khan", phone: "+1 890 123 456", time: "2:00 PM" },
          { name: "Alex Morgan", phone: "+1 908 765 432", time: "2:00 PM" },
          { name: "John Doe", phone: "+1 234 567 890", time: "2:00 PM" },
          { name: "David Beckham", phone: "+1 456 789 123", time: "2:00 PM" },
          { name: "David Beckham", phone: "+1 456 789 123", time: "2:00 PM" },
          { name: "David Beckham", phone: "+1 456 789 123", time: "2:00 PM" },
        ].map((patient, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              {/* Placeholder hình đại diện */}
              <div>
                <p className="text-gray-700 font-semibold">{patient.name}</p>
                <p className="text-sm text-gray-500">{patient.phone}</p>
              </div>
            </div>
            <p className="text-gray-500">{patient.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const stats = [
  {
    id: 1,
    title: "Total Patients",
    value: "1600+",
    change: -45.06,
    color: "text-teal-500",
    icon: <FaUserInjured className="text-teal-500 text-2xl" />,
    chartColor: "#14b8a6",
    data: [50, 70, 80, 60, 90, 100, 80],
  },
  {
    id: 2,
    title: "Appointments",
    value: "130+",
    change: -25.06,
    color: "text-yellow-500",
    icon: <FaCalendarCheck className="text-yellow-500 text-2xl" />,
    chartColor: "#fbbf24",
    data: [30, 50, 40, 70, 60, 80, 50],
  },
  {
    id: 3,
    title: "Prescriptions",
    value: "4160+",
    change: 65.06,
    color: "text-green-500",
    icon: <FaFileMedical className="text-green-500 text-2xl" />,
    chartColor: "#22c55e",
    data: [80, 90, 100, 110, 120, 130, 140],
  },
  {
    id: 4,
    title: "Total Earnings",
    value: "4590$",
    change: -45.06,
    color: "text-red-500",
    icon: <FaDollarSign className="text-red-500 text-2xl" />,
    chartColor: "#ef4444",
    data: [60, 70, 80, 90, 100, 110, 120],
  },
];

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-xl">
        {stats.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-full bg-gray-100">{item.icon}</div>
              <h2 className="text-gray-700 font-semibold">{item.title}</h2>
            </div>

            <h3 className="text-2xl font-bold">{item.value}</h3>

            <div className="mt-2 h-16">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={item.data.map((val, index) => ({
                    name: index,
                    value: val,
                  }))}>
                  <Bar
                    dataKey="value"
                    fill={item.chartColor}
                    radius={[5, 5, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className={`text-sm font-semibold mt-2 ${item.color}`}>
              {item.change < 0 ? "↓" : "↑"} {Math.abs(item.change)}%
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-6 w-full">
        <div className="flex-1 min-w-[60%] lg:min-w-[70%] xl:min-w-[75%]">
          <EarningsReport />
        </div>

        <div className="w-full xl:w-[23%] grow-1 flex-shrink-0">
          <RecentPatients />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
