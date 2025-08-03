import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const Profile = () => {
  const basicInfo = {
    regNo: 'SC2023/00123',
    name: 'John Doe',
    idNo: '12345678',
    gender: 'Male',
    address: 'Egerton, Njoro',
    email: 'john.doe@student.egerton.ac.ke',
    dob: '2002-04-15',
    campus: 'Njoro Main Campus',
  };

  const academicInfo = {
    currentProgramme: 'BSc Computer Science',
    attemptedUnits: 30,
    registeredUnits: 28,
  };

  const feePayment = {
    feeBalance: 'Ksh 15,000',
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Personal Profile</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Info */}
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
              <ul className="space-y-2">
                {Object.entries(basicInfo).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}:
                    </span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Info */}
            <div className="bg-white p-4 shadow rounded">
              <h3 className="text-lg font-semibold mb-3">
                Academic Information
              </h3>
              <ul className="space-y-2">
                {Object.entries(academicInfo).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}:
                    </span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fee Payment */}
            <div className="bg-white p-4 shadow rounded md:col-span-2">
              <h3 className="text-lg font-semibold mb-3">Fee Payment</h3>
              <ul className="space-y-2">
                {Object.entries(feePayment).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}:
                    </span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
