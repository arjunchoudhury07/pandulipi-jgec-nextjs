"use client";
import Image from "next/image";
import React, { useState } from "react";
import Card from "./Card";

const CoreTeam = () => {
  const [show, setShow] = useState(false);
  const [currentInd, setCurrentInd] = useState(null);
  const coreTeamDetails = [
    {
      name: "Uttaran Nath Sarkar",
      designation: "Secretary & Bengali Editor",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/uttaran-nath-sarkar-148498203",
      imgLink: "/assets/team/coreteam/Uttaran.jpeg",
      github: "",
    },
    {
      name: "Sastipada Dan",
      designation: "Cashier & Bengali Editor",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/sastipada-dan-266019203",
      imgLink: "/assets/team/coreteam/Sastipada.jpeg",
      github: "",
    },
    {
      name: "V. Nikhita",
      designation: "Cashier & English Editor",
      department: "Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/in/nikhita28",
      imgLink: "/assets/team/coreteam/V Nikhita.jpeg",
      github: "",
    },
    {
      name: "Wasim Reja",
      designation: "Media, Web & Technical Head",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/wasimreja/",
      imgLink: "/assets/team/coreteam/Wasim Reja.jpeg",
      github: "",
    },
    {
      name: "Bisal Kumar",
      designation: "Strategist & Hindi Editor",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/bisal-kumar-97459122a",
      imgLink: "/assets/team/coreteam/Bisal Kumar.jpeg",
      github: "",
    },
    {
      name: "Protiti Saha",
      designation: "Strategist & Event Head",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/protiti-saha-b91028203/",
      imgLink: "/assets/team/coreteam/Protiti Saha.jpeg",
      github: "",
    },
    {
      name: "Nisha Yadav",
      designation: "Strategist & Hindi Editor",
      department: "Computer Science & Engineering",
      linkedin: "https://www.linkedin.com/in/nisha-yadav-2950351ab/",
      imgLink: "/assets/team/coreteam/Nisha.jpeg",
      github: "",
    },
    {
      name: "Soham Sen",
      designation: "English Editor",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/nuclearcactus/",
      imgLink: "/assets/team/coreteam/Soham Sen.jpeg",
      github: "",
    },
    {
      name: "Tunnisha Dasgupta",
      designation: "English Editor",
      department: "Civil Engineering",
      linkedin: "https://www.linkedin.com/in/tunnisha-das-gupta-a43231204/",
      imgLink: "/assets/team/coreteam/Tunnisha.jpeg",
      github: "",
    },
    {
      name: "Sourav Ghosh",
      designation: "Bengali Editor",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/sourav-ghosh-02b3ba213",
      imgLink: "/assets/team/coreteam/Sourav Ghosh.jpeg",
      github: "",
    },
    {
      name: "Sushant Kumar Gupta",
      designation: "Hindi Editor",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/sushantkumargupta2001",
      imgLink: "/assets/team/coreteam/Sushant Kumar.jpeg",
      github: "",
    },
    {
      name: "Saikat Paikar",
      designation: "Design Head",
      department: "Civil Engineering Department",
      linkedin: "https://www.linkedin.com/in/saikat-paikar-905a70207",
      imgLink: "/assets/team/coreteam/Saikat Parker.jpeg",
      github: "",
    },
    {
      name: "Arka Biswas",
      designation: "Design Head",
      department: "Electrical Engineering",
      linkedin: "https://www.linkedin.com/in/arka-biswas-859428203/",
      imgLink: "/assets/team/coreteam/Arka Biswas.jpeg",
      github: "",
    },
    {
      name: "Soumya Samanta",
      designation: "Artwork Head",
      department: "Civil Engineering Department",
      linkedin: "https://www.linkedin.com/in/soumya-samanta-b55426203",
      imgLink: "/assets/team/coreteam/Soumya Samanta.jpeg",
      github: "",
    },
    {
      name: "Souvik Biswas",
      designation: "Photography Head",
      department: "Electronics & Communication Engineering",
      linkedin: "https://www.linkedin.com/in/souvik-biswas-84b766246/",
      imgLink: "/assets/team/coreteam/Souvik Biswas.jpeg",
      github: "",
    },
    {
      name: "Kushal Ghosh",
      designation: "Photography Head",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/kushaljgec2025/",
      imgLink: "/assets/team/coreteam/Kushal_Ghosh.jpeg",
      github: "",
    },
    {
      name: "Shourjendra Banerjee",
      designation: "Social Media Head & Event Head",
      department: "Information Technology",
      linkedin: "https://www.linkedin.com/in/shourjendra-banerjee-82589422a/",
      imgLink: "/assets/team/coreteam/Shourjendra.jpeg",
      github: "",
    },
    {
      name: "Saikat Sarkar",
      designation: "Social Media Head",
      department: "Mechanical Engineering",
      linkedin: "https://www.linkedin.com/in/saikat-sarkar-259021203",
      imgLink: "/assets/team/coreteam/Saikat Sarkar.jpeg",
      github: "",
    },
  ];

  return (
    <div className="bg-[#EEEEEE] w-full">
      <h1 className="text-center text-5xl p-10 pb-16 text-[#295C7A]">
        Meet the Core Team
      </h1>
      <div>
        <div className="flex max-w-7xl mx-auto justify-center items-center flex-wrap gap-x-20 pb-10 gap-y-4 px-10">
          {coreTeamDetails.map((details, ind) => (
            <div
              key={ind}
              className="flex flex-col items-center justify-start w-48 h-72 gap-4 "
            >
              <div className="relative ">
                <Image
                  height={150}
                  width={150}
                  src={details.imgLink}
                  alt={details.name}
                  className="rounded-full ring-2 ring-blue-700 p-1 mx-auto  w-44 h-44 "
                />
                <button
                  onClick={() => {
                    setShow(true);
                    setCurrentInd(ind);
                  }}
                  className="absolute bottom-4 right-[-3px] rounded-full py-[6px] px-[15px] bg-transparent "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="#0f0f0f"
                    viewBox="0 0 20 20"
                    className="white shadow-md rounded-full"
                  >
                    <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM4.049,9h8.559L10.342,6.735l1.414-1.414,4.735,4.733-4.735,4.734-1.414-1.414L12.718,11H4.049Z" />
                  </svg>
                </button>
              </div>
              <div>
                <p className="text-center font-bold">{details.name}</p>
                <p className="text-center">{details.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Card
        onClose={() => setShow(false)}
        show={show}
        details={coreTeamDetails[currentInd]}
      />
    </div>
  );
};

export default CoreTeam;
