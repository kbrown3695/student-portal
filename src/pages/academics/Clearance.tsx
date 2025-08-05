import React, { useState } from 'react';

const ClearanceRequest: React.FC = () => {
  // Replace this with actual user context
  const user = {
    regNo: '517/08160/23',
    fullName: 'John Doe',
    telephone: '0712345678',
    email: 'john.doe@students.egerton.ac.ke',
    programme: '317 (Bachelor of Science in Applied Computer Science)',
  };

  const [formData, setFormData] = useState({
    nationalId: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...user,
      ...formData,
    };
    console.log('Submitting:', payload);
    // submit to backend here
  };

  return (
    <div className="p-6 font-sans max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Clearance Request</h1>
      <h2 className="text-xl font-semibold mb-6 text-black">
        New Clearance Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Registration No */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Registration No
            </label>
            <div className="p-2 border rounded bg-gray-50">{user.regNo}</div>
          </div>

          {/* National ID (editable) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              National ID
            </label>
            <input
              type="text"
              name="nationalId"
              value={formData.nationalId}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Telephone (readonly) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telephone
          </label>
          <div className="p-2 border rounded bg-gray-50">{user.telephone}</div>
        </div>

        {/* Programme */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Programme
          </label>
          <div className="p-2 border rounded bg-gray-50">{user.programme}</div>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <div className="p-2 border rounded bg-gray-50">{user.fullName}</div>
        </div>

        {/* Address (editable) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="p-2 border rounded bg-gray-50">{user.email}</div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Make Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClearanceRequest;
