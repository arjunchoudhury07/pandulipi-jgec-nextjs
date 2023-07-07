import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="pt-10">
      <h4 className="text-center xl:text-left font-semibold pb-10 text-4xl">
        Older Editions of Pandulipi
      </h4>
      <div className="flex flex-col flex-wrap items-center justify-center gap-x-5 gap-y-8 md:flex-row">
        {MoreMagazineDetails.map((details, index) => (
          <div
            key={index}
            class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <div
              class="relative overflow-hidden rounded-t-lg bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                height={300}
                width={300}
                class="rounded-t-lg bg-top"
                src={details.imgLink}
                className="h-96 w-96 md:w-72 object-cover"
                alt=""
              />
              <a href="#!">
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div class="p-4 pb-6 font-semibold">
              <h5 class="leading-tight text-xl text-neutral-800 dark:text-neutral-50">
                {details.name}
              </h5>
              <p class="mb-4 text-lg text-neutral-600 dark:text-neutral-200">
                {details.year}
              </p>
              <Link
                href={details.downloadLink}
                target="_blank"
                class="inline-block rounded bg-slate-800 font-bold px-6 pb-2 pt-2.5 text-xs uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Download
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazineMore;
