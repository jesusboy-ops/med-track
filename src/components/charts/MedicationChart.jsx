import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MedicationChart = () => {
  const data = [
    { month: 'Jan', prescriptions: 245, refills: 189 },
    { month: 'Feb', prescriptions: 312, refills: 234 },
    { month: 'Mar', prescriptions: 289, refills: 267 },
    { month: 'Apr', prescriptions: 356, refills: 298 },
    { month: 'May', prescriptions: 423, refills: 345 },
    { month: 'Jun', prescriptions: 398, refills: 321 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="prescriptions" fill="#1E40AF" name="New Prescriptions" />
        <Bar dataKey="refills" fill="#60A5FA" name="Refills" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MedicationChart;
