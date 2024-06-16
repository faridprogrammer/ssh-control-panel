import React, { useEffect, useState } from "react";
import axios from "axios";


const Servers = () => {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await axios.get('/api/v1/servers/list');
        setServers(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h4>Servers</h4>
      <div class="relative overflow-x-auto px-10">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                IP:Port
              </th>
              <th scope="col" class="px-6 py-3">
                User Name
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {servers.length == 0 ? <tr >
              <td colSpan={4}><div class="flex justify-center items-center  py-10 px-10"><p>No servers...</p></div> </td>
            </tr> : servers.map((server) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {server.name}
                </th>
                <td class="px-6 py-4">
                  <span>{server.ip}</span>:<span>{server.port}</span>
                </td>
                <td class="px-6 py-4">
                  {server.userName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Servers;
