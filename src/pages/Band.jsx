import { useEffect, useState } from "react";
import { getBands } from "../api/band";
import { Pagination } from "antd";
import { FaFilter } from "react-icons/fa";
const Band = () => {
  const [bands, setBands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    const fetchBands = async () => {
      try {
        setLoading(true);
        const data = await getBands(currentPage, pageSize);
        setBands(data.data.items.$values);
        setTotalItems(data.data.totalCount);
      } catch (error) {
        console.error("Error fetching bands:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBands();
  }, [currentPage]);

  return (
    <div className="p-6 min-h-screen">
      <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4">
          List of blood pressure measuring devices
        </h2>
        <div className="bg-white p-5 rounded-lg shadow-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <input
            type="text"
            placeholder='Search "Patients"'
            className="border border-gray-300 p-3 rounded-lg w-full min-w-0"
          />

          <select className="border border-gray-300 p-3 rounded-lg w-full min-w-0">
            <option>Sort by...</option>
            <option>Name</option>
            <option>Age</option>
          </select>

          <div className="flex items-center w-full min-w-0">
            <input
              type="date"
              className="border border-gray-300 p-3 rounded-lg w-full"
            />
            <button className="bg-green-500 text-white p-3 px-5 rounded-lg ml-2 hover:scale-105 transition">
              <FaFilter />
            </button>
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="py-4 px-6">STT</th>
                  <th className="py-4 px-6">Patient</th>
                  <th className="py-4 px-6">BandBrand</th>
                  <th className="py-4 px-6">Created at</th>
                  {/* <th className="py-4 px-6">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {bands.map((band, index) => (
                  <tr key={band.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6">
                      {(currentPage - 1) * pageSize + index + 1}
                    </td>
                    <td className="py-4 px-6">{band.patient.fullName}</td>
                    <td className="py-4 px-6">{band.bandBrand.nameBrand}</td>
                    <td className="py-4 px-6">
                      {new Date(band.createdTime).toLocaleDateString()}
                    </td>
                    {/* <td className="py-4 px-6">
                      <button className="p-2 bg-gray-200 rounded-full hover:scale-110 transition">
                        <BsThreeDots />
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4 flex justify-center">
              <Pagination
                current={currentPage}
                total={totalItems}
                pageSize={pageSize}
                onChange={(page) => setCurrentPage(page)}
                showSizeChanger={false}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Band;
