"use client";

import { useState, useEffect } from 'react';

interface ActivityTableProps {
  network?: string;
  wallet?: string;
}

interface Activity {
  name: string;
  date: string;
  status: string;
}

export default function ActivityTable({ network, wallet }: ActivityTableProps) {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        if (network && wallet) {
          console.log('Fetching activities for', network, wallet);
          setActivities([]);
        }
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, [network, wallet]);

  return (
    <div className="w-full">
      <table className="min-w-full bg-gray-900 rounded-lg">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Activity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {activities.length === 0 ? (
            <tr>
              <td colSpan={3} className="px-6 py-4 text-center text-gray-400">
                No activities found
              </td>
            </tr>
          ) : (
            activities.map((activity, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {activity.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {activity.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  {activity.status}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
