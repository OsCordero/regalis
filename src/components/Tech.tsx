import React from "react";

export default function Tech() {
  return (
    <>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <h1 className="mb-3 text-3xl font-bold leading-tight text-center text-gray-900 md:text-4xl">
          Regalis was built using
        </h1>
        <br />
        <br />
        <div className="grid grid-cols-2 gap-24 mb-16 text-center lg:grid-cols-4">
          <div className="flex items-center justify-center">
            <img
              src="/logos/moralis-logo.png"
              alt="Moralis Logo"
              className="block object-contain h-24"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/logos/chainlink-logo.png"
              alt="Chainlink Logo"
              className="block object-contain h-24"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/logos/ipfs-logo.png"
              alt="IPFS Logo"
              className="block object-contain h-24"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/logos/polygon-logo.png"
              alt="Polygon Logo"
              className="block object-contain h-24"
            />
          </div>
        </div>
      </section>
    </>
  );
}
