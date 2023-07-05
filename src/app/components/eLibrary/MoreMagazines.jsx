import Image from "next/image";
import React from "react";
import "./library.css";

const MagazineMore = () => {
  const MoreMagazineDetails = [
    {
      name: "Pandulipi",
      year: "2018",
      imgLink: "/assets/img/2018.png",
      downloadLink:
        "https://drive.google.com/file/d/1VXUfS1A4RPn4Ypzg0k0awX1z-BfZMKNq/view?usp=sharing",
    },
    {
      name: "Pandulipi",
      year: "2016",
      imgLink: "/assets/img/2016.png",
      downloadLink:
        "https://drive.google.com/file/d/1dHOUV7PRCDicqRDW-zdSsq5fRUYgfS9Z/view?usp=sharing",
    },
    {
      name: "Pandulipi",
      year: "2014",
      imgLink: "/assets/img/2014.png",
      downloadLink:
        "https://drive.google.com/file/d/1m670uaJM-PA9zUszX_gcmi8HLwF6OtJQ/view?usp=sharing",
    },
    {
      name: "Pandulipi",
      year: "1990",
      imgLink: "/assets/img/1990.png",
      downloadLink:
        "https://drive.google.com/file/d/1s_jgMnMuoP5V40CTxRxkVqyBNe7yBrHZ/view?usp=sharing",
    },
    {
      name: "Pandulipi",
      year: "1985",
      imgLink: "/assets/img/1985.png",
      downloadLink:
        "https://drive.google.com/file/d/1STzcWm5S18Q1qTLp85QVHzeEhNztuQ3L/view?usp=sharing",
    },
    {
      name: "Pandulipi",
      year: "1982",
      imgLink: "/assets/img/1982.png",
      downloadLink:
        "https://drive.google.com/file/d/1A3DVdFoOKmcLKOzp6Qn4mSCZge4mqDNx/view?usp=sharing",
    },
  ];

  return (
    <div>
      <h4 className="text-center md:text-left md:pl-28">
        Older Editions of Pandulipi
      </h4>
      <div id="row">
        {MoreMagazineDetails.map((details, index) => (
          <div key={index} id="card">
            <div className="relative">
              <Image
                height={100}
                width={100}
                src={details.imgLink}
                alt={details.name}
              />
              <a
                target="_blank"
                href={details.downloadLink}
                id="button"
                className="absolute bottom-20 right-5 rounded-full py-[10px] px-[15px] bg-white shadow-md"
              >
                <span id="download" className="material-symbols-rounded">
                  download
                </span>
              </a>
              <div className="details">
                <p className="text-2xl font-semibold">{details.name}</p>
                <p className="font-bold text-gray-700">{details.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazineMore;
