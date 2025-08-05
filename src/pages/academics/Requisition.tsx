import React from 'react';

const StudentRequisitions: React.FC = () => {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-2">Student Requisitions</h1>
      <h2 className="text-xl font-semibold mb-6 text-blue-600">
        New Requisition
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Code</th>
              <th className="border p-2 text-left">Date</th>
              <th className="border p-2 text-left">Requisition Type</th>
              <th className="border p-2 text-left">Semester</th>
              <th className="border p-2 text-left">Status</th>
              <th className="border p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td
                className="border p-4 text-center italic text-gray-500"
                colSpan={6}
              >
                No Records Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentRequisitions;
