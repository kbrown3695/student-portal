import React from 'react';

const CourseEvaluation: React.FC = () => {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">Course Evaluation</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Action</th>
              <th className="border p-2 text-left">Unit Code</th>
              <th className="border p-2 text-left">Unit Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td
                className="border p-2 text-center italic text-gray-500"
                colSpan={3}
              >
                No Registered Units for evaluation found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseEvaluation;
