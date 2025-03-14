import React, { useEffect, useState } from "react";
import { fetchEventsData } from "./retrieveEvents";

const HomePage = () => {
  const [updates, setUpdates] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEventsData();
      setUpdates(
        data || [
          {
            id: 1,
            name: "Unable to fetch",
            description: "Sunshine",
            date: "2021-10-10",
            href: "https://sunshine.iith.ac.in",
          },
        ]
      );
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white overflow-hidden py-10 lg:py-12 text-center">
      <div className="text-black font-semibold text-lg">Upcoming Events</div>
      <div className="text-left flex flex-wrap gap-4 p-6 justify-center text-lg">
        {updates.map((update) => (
          <EachEventBlock
            key={update.id}
            name={update.name}
            date={update.date}
            description={update.description}
            time={update.time}
          />
        ))}
      </div>
    </div>
  );
};

const EachEventBlock = (props: {
  name: string;
  date: string;
  description: string;
  time: string;
}) => {
  return (
    <div className="bg-gray-100 flex-grow text-black border-l-8 border-gray-800 rounded-md px-3 py-2 w-full md:w-5/12 lg:w-3/12">
      <div className="font-semibold text-medium">{props.name}</div>
      <div className="text-gray-700 text-sm pt-1 flex justify-between">
        <div>{props.date}</div>
        <div>{props.time}</div>
      </div>
      <div className="text-gray-400 text-sm pt-2">{props.description}</div>
    </div>
  );
};

export default HomePage;
