import { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import SearchBar from '../../components/SearchBar';
import { PlusIcon, EyeIcon, PencilIcon } from '@heroicons/react/24/outline';

const Patients = () => {
  const [patients] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '(555) 123-4567',
      lastVisit: '2024-01-15',
      prescriptions: 3,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@email.com',
      phone: '(555) 234-5678',
      lastVisit: '2024-01-20',
      prescriptions: 2,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.j@email.com',
      phone: '(555) 345-6789',
      lastVisit: '2024-01-10',
      prescriptions: 5,
      status: 'Active',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.w@email.com',
      phone: '(555) 456-7890',
      lastVisit: '2024-01-18',
      prescriptions: 1,
      status: 'Inactive',
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Patients</h1>
          <p className="text-gray-600">Manage your patient records</p>
        </div>
        <Button>
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Patient
        </Button>
      </div>

      <Card padding="large">
        <div className="mb-6">
          <SearchBar placeholder="Search patients by name, email, or phone..." />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Contact</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Last Visit</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Prescriptions</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <p className="font-medium text-gray-900">{patient.name}</p>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-600">{patient.email}</p>
                    <p className="text-sm text-gray-600">{patient.phone}</p>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{patient.lastVisit}</td>
                  <td className="py-4 px-4 text-gray-600">{patient.prescriptions}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        patient.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-800 hover:bg-blue-50 rounded">
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-blue-800 hover:bg-blue-50 rounded">
                        <PencilIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Patients;
