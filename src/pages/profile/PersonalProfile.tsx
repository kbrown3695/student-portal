import { useNavigate } from 'react-router-dom';

const PersonalProfile = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/dashboard/dashboard#');
  };

  return (
    <div
      className="min-h-screen bg-gray-50 p-6 cursor-pointer"
      onClick={handleProfileClick}
    >
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="relative">
            <img
              src="/avatar.jpg"
              alt="Student Avatar"
              className="w-20 h-20 rounded-full border-4 border-gray-100 object-cover"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-gray-500 text-sm">Student Profile Overview</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Basic Info */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Basic Information
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium text-gray-500">Reg. No:</span>{' '}
                <span className="text-gray-800"></span>
              </p>
              <p>
                <span className="font-medium text-gray-500">Name:</span>{' '}
                <span className="text-gray-800"> NICHOLAS</span>
              </p>
              <p>
                <span className="font-medium text-gray-500">ID No:</span>{' '}
                <span className="text-gray-800">Gender</span>
              </p>
              <p>
                <span className="font-medium text-gray-500">Gender:</span>{' '}
                <span className="text-gray-800">Male</span>
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Address
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium text-gray-500">Email:</span>{' '}
                <span className="text-gray-800">
                  
                </span>
              </p>
              <p>
                <span className="font-medium text-gray-500">
                  Date Of Birth:
                </span>{' '}
                <span className="text-gray-800">01/01/1970</span>
              </p>
              <p>
                <span className="font-medium text-gray-500">Campus:</span>{' '}
                <span className="text-gray-800">100</span>
              </p>
            </div>
          </div>

          {/* Academic Info */}
          <div className="bg-white p-4 rounded-lg md:col-span-2 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Academic Information
            </h2>
            <div className="text-sm space-y-2">
              <p>
                <span className="font-medium text-gray-500">
                  Current Programme:
                </span>{' '}
                <span className="text-gray-800">
                  Bachelor of Science in Applied Computer Science
                </span>
              </p>
              <p>
                <span className="font-medium text-gray-500">
                  Attempted Units:
                </span>{' '}
                <span className="text-gray-800"></span>
              </p>
            </div>
          </div>

          {/* Fee Info */}
          <div className="bg-white p-4 rounded-lg md:col-span-2 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Fee Payment
            </h2>
            <div className="text-sm">
              <p>
                <span className="font-medium text-gray-500">Fee Balance:</span>{' '}
                <span className="text-gray-800"></span>
              </p>
            </div>
          </div>

         
          {/* Documents */}
          <div className="bg-white p-4 rounded-lg md:col-span-2 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Important Documents
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="py-2 font-medium">File Name</th>
                  <th className="py-2 font-medium">Remarks</th>
                  <th className="py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="py-4 text-center text-gray-400">
                    No Internal Memos found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PersonalProfile;
