import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserGrowthChart = () => {
  const data = [
    { month: 'Jan', patients: 1240, activeUsers: 980 },
    { month: 'Feb', patients: 1398, activeUsers: 1120 },
    { month: 'Mar', patients: 1567, activeUsers: 1289 },
    { month: 'Apr', patients: 1789, activeUsers: 1456 },
    { month: 'May', patients: 2012, activeUsers: 1678 },
    { month: 'Jun', patients: 2234, activeUsers: 1890 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="patients" stroke="#1E40AF" strokeWidth={2} name="Total Patients" />
        <Line type="monotone" dataKey="activeUsers" stroke="#60A5FA" strokeWidth={2} name="Active Users" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthChart;
