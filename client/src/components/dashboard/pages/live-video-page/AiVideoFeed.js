import React from "react";
import Navbar from "../../../Navbar";
import Sidebar from "../../../Sidebar";
import {
  MdNotificationsOff,
  MdDirectionsRun,
  MdNotificationsActive,
  MdDelete,
} from "react-icons/md";
import { useState } from "react";
import { FaDownload, FaShare, FaStar } from "react-icons/fa";

function AiVideoFeed() {
  // Replace 'videoUrl' with the URL of the recorded video.
  const videoUrl = "recorded-video.mp4";

  // Replace 'motionDetails' with an array of objects containing time, location, and type details.
  const motionDetails = [
    { time: "12:34 PM", location: "Front Door", type: "Missed Ring" },
    {
      time: "2:15 PM",
      location: "Backyard",
      type: "Motion",
    },
    {
      time: "4:50 PM",
      location: "Living Room",
      type: "Answered Ring",
    },
    {
      time: "6:20 PM",
      location: "Garage",
      type: "Missed Ring",
    },
    {
      time: "9:05 PM",
      location: "Kitchen",
      type: "Motion",
    },
    { time: "12:34 PM", location: "Front Door", type: "Missed Ring" },
    {
      time: "2:15 PM",
      location: "Backyard",
      type: "Motion",
    },
    {
      time: "4:50 PM",
      location: "Living Room",
      type: "Answered Ring",
    },
    {
      time: "6:20 PM",
      location: "Garage",
      type: "Missed Ring",
    },
    {
      time: "9:05 PM",
      location: "Kitchen",
      type: "Motion",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(motionDetails[0]);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  return (
    <div className="ml-80 mt-20">
      <Navbar />
      <Sidebar />
      <div className="flex flex-row px-2">
        <div className="w-3/4 px-2">
          <div className="w-full flex justify-start font-bold border pl-4 border-black text-[20px] py-2">
            {selectedVideo.location}
          </div>
          <video
            className="w-full"
            controls
            src={videoUrl}
            // You can add more attributes like poster, preload, etc. as needed.
          >
            Your browser does not support the video tag.
          </video>
          <div className="w-full pt-6 flex justify-between">
            {/* code for displaying info */}
            <div className="flex">
              {selectedVideo.type === "Missed Ring" && (
                <MdNotificationsOff className="mr-2 text-red-500" size={30} />
              )}
              {selectedVideo.type === "Motion" && (
                <MdDirectionsRun className="mr-2 text-customColor" size={30} />
              )}
              {selectedVideo.type === "Answered Ring" && (
                <MdNotificationsActive
                  className="mr-2 text-black/20"
                  size={30}
                />
              )}
              <div className="flex flex-col">
                <p className="text-[16px] font-bold"> {selectedVideo.type}</p>
                <p className="text-[14px] text-gray-500">
                  {" "}
                  {selectedVideo.time}
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button>
                {" "}
                <FaStar size={24} className="text-black" />{" "}
              </button>
              <button>
                {" "}
                <FaShare size={24} />{" "}
              </button>
              <button>
                {" "}
                <FaDownload size={24} />{" "}
              </button>
              <button>
                {" "}
                <MdDelete size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4 p-4 border-l border-black ">
          <h2 className="text-xl font-semibold pb-4">Event History</h2>
          {motionDetails.map((event, index) => (
            <div
              key={index}
              className={`py-4 px-2 cursor-pointer ${
                selectedVideoIndex === index && "bg-customColor/20"
              }  ${index === 0 ? "border - t" : "border - b border-t-0"} ${
                index === 0 && "rounded-t-md"
              } ${index === motionDetails.length - 1 && "rounded-b-md"}
               border-customColor flex items-center 
              }`}
              onClick={() => {
                setSelectedVideo(event);
                setSelectedVideoIndex(index);
              }}
            >
              {event.type === "Missed Ring" && (
                <MdNotificationsOff className="mr-2 text-red-500" size={30} />
              )}
              {event.type === "Motion" && (
                <MdDirectionsRun className="mr-2 text-customColor" size={30} />
              )}
              {event.type === "Answered Ring" && (
                <MdNotificationsActive
                  className="mr-2 text-black/20"
                  size={30}
                />
              )}
              <div>
                <p className="text-[14px] text-gray-500">{event.location}</p>
                <p className="text-[16px] font-bold">{event.type}</p>
              </div>
              <div className="ml-auto">
                <p className="text-[10px] text-gray-500">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AiVideoFeed;
