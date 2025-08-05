import React from 'react';

interface RegistrationItem {
  stage: string;
  semester: string;
  unitTaken: number;
  settlementType: string;
  registrationDate: string;
  registerFor: string;
  unpostedCharges: number;
  totalBilled: number;
  financeRegistered: boolean;
}

const RegistrationList: React.FC = () => {
  const registrationData: RegistrationItem[] = [
    {
      stage: 'Y1S1',
      semester: 'S1 2023/2024',
      unitTaken: 7,
      settlementType: '',
      registrationDate: '00/01/1900',
      registerFor: 'Stage',
      unpostedCharges: 0.0,
      totalBilled: 0.0,
      financeRegistered: false,
    },
    {
      stage: 'Y1S2',
      semester: 'S2 2023/2024',
      unitTaken: 8,
      settlementType: '',
      registrationDate: '00/01/1900',
      registerFor: 'Stage',
      unpostedCharges: 0.0,
      totalBilled: 300.0,
      financeRegistered: false,
    },
    {
      stage: 'Y2S1',
      semester: 'S1 2024/2025',
      unitTaken: 7,
      settlementType: 'JP',
      registrationDate: '24/12/2024',
      registerFor: 'Stage',
      unpostedCharges: 0.0,
      totalBilled: 143170.0,
      financeRegistered: false,
    },
    {
      stage: 'Y2S1',
      semester: 'S2 2024/2025',
      unitTaken: 9,
      settlementType: 'JP',
      registrationDate: '25/06/2025',
      registerFor: 'Stage',
      unpostedCharges: 0.0,
      totalBilled: 0.0,
      financeRegistered: false,
    },
    {
      stage: 'Y2S2',
      semester: 'S2 2024/2025',
      unitTaken: 9,
      settlementType: 'JP',
      registrationDate: '25/03/2025',
      registerFor: 'Stage',
      unpostedCharges: 0.0,
      totalBilled: 138570.0,
      financeRegistered: true,
    },
  ];

  const formatCurrency = (value: number): string => {
    if (value === 0) return '0.00';
    return value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Registration List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Stage</th>
              <th className="border p-2 text-left">Semester</th>
              <th className="border p-2 text-left">Unit Taken</th>
              <th className="border p-2 text-left">Settlement Type</th>
              <th className="border p-2 text-left">Registration Date</th>
              <th className="border p-2 text-left">Register For</th>
              <th className="border p-2 text-left">Unposted Charges</th>
              <th className="border p-2 text-left">Total Billed</th>
              <th className="border p-2 text-left">Finance Registered</th>
            </tr>
          </thead>
          <tbody>
            {registrationData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="border p-2">{item.stage}</td>
                <td className="border p-2">{item.semester}</td>
                <td className="border p-2">{item.unitTaken}</td>
                <td className="border p-2">{item.settlementType}</td>
                <td className="border p-2">{item.registrationDate}</td>
                <td className="border p-2">{item.registerFor}</td>
                <td className="border p-2 text-right">
                  {formatCurrency(item.unpostedCharges)}
                </td>
                <td className="border p-2 text-right">
                  {formatCurrency(item.totalBilled)}
                </td>
                <td className="border p-2 text-center">
                  {item.financeRegistered ? 'True' : 'False'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">FINANCE REGISTRATION</h2>
        <div className="mb-4">
          <span className="font-semibold">Registration Semester : </span>
          <span>S1 2025/2026</span>
        </div>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
          Complete Finance Registration
        </button>
      </div>
    </div>
  );
};

export default RegistrationList;
