import { useState } from 'react';

const PersonalProfile = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  const goldColor = '#f7b84b';

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6">
        {/* Dashboard Header */}
        <h1
          className="text-2xl font-semibold text-gray-800 mb-8 px-4 py-2 rounded"
          style={{ backgroundColor: goldColor }}
        >
          Basic Information
        </h1>

        {/* Profile Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Avatar */}
          <div className="p-4 rounded-md border border-gray-300 flex flex-col items-center text-center">
            <img
              src="/avatar.jpg"
              alt="Student Avatar"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
            />
            <div className="w-3 h-3 bg-emerald-600 rounded-full border-2 border-white mt-2"></div>
            <p className="mt-2 text-sm text-gray-600">Online</p>
          </div>

          {/* Basic Info */}
          <div className="p-4 rounded-md border border-gray-300">
            {/* <h2 className="text-lg font-medium text-gray-700 mb-4">
              Basic Information
            </h2> */}
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold text-gray-600">Reg. No:</span>{' '}
              
              </p>
              <p>
                <span className="font-semibold text-gray-600">Name:</span>{' '}
                
              </p>
              <p>
                <span className="font-semibold text-gray-600">ID No:</span> -
              </p>
              <p>
                <span className="font-semibold text-gray-600">Gender:</span>{' '}
                Male
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="p-4 rounded-md border border-gray-300">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Address</h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold text-gray-600">Email:</span>{' '}
                
              </p>
              <p>
                <span className="font-semibold text-gray-600">
                  Date Of Birth:
                </span>{' '}
                01/01/1970
              </p>
              <p>
                <span className="font-semibold text-gray-600">Campus:</span> 100
              </p>
            </div>
          </div>
        </div>

        {/* Calendar Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={toggleCalendar}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-md shadow-sm"
          >
            Get Academic Calendar
          </button>
        </div>

        {/* Modal */}
        {showCalendar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-md p-6 w-full max-w-2xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Academic Calendar
                </h3>
                <button
                  onClick={toggleCalendar}
                  className="text-gray-500 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 border">Event Name</th>
                      <th className="py-2 px-4 border">Start Date</th>
                      <th className="py-2 px-4 border">End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        colSpan={3}
                        className="py-6 text-center text-gray-500"
                      >
                        No Records Found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={toggleCalendar}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Academic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 p-4 overflow-hidden max-w-full">
          <div className="p-4 rounded-md border border-gray-300 mt-10">
            <h2
              className="text-lg font-medium text-gray-700 mb-4 px-4 py-2 rounded"
              style={{ backgroundColor: goldColor }}
            >
              Academic Information
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold text-gray-600">
                  Current Programme:
                </span>{' '}
                Bachelor of Science in Applied Computer Science
              </p>
              <p>
                <span className="font-semibold text-gray-600">
                  Attempted Units:
                </span>{' '}
                31
              </p>
              <p>
                <span className="font-semibold text-gray-600">
                  Registered Units:
                </span>{' '}
                0
              </p>
            </div>
          </div>

          {/* Fee Payment */}
          <div className="p-4 rounded-md border border-gray-300 mt-6">
            <h2
              className="text-lg font-medium text-gray-700 mb-4 px-4 py-2 rounded"
              style={{ backgroundColor: goldColor }}
            >
              Fee Payment
            </h2>
            <div className="text-sm">
              <p>
                <span className="font-semibold text-gray-600">
                  Fee Balance:
                </span>{' '}
                
              </p>
              <button className=" w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md shadow-sm">
                Make Payment
              </button>
              <a href='Already Paid?' className="block mt-2 text-blue-600 hover:underline">Already Paid?</a>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="p-4 rounded-md border border-gray-300 mt-6">
          <h2
            className="text-lg font-medium text-gray-700 mb-4 px-4 py-2 rounded"
            style={{ backgroundColor: goldColor }}
          >
            Important Documents
          </h2>
          <table className="w-full text-sm border">
            <thead className="bg-gray-100 text-gray-600">
              <tr className= 'bg-black text-white'>
                <th className="py-2 px-4 border">#</th>
                <th className="py-2 px-4 border">File Name</th>
                <th className="py-2 px-4 border">Remarks</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="py-4 text-center text-red-500">
                  No Internal Memos found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;
