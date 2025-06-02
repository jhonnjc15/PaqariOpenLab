import { useState, useEffect } from "react";
import { humanize } from "@lib/utils/textConverter";
import * as Icon from "react-feather";
import React from 'react';

const HomepageTab = ({ homepage_tab: { tab_list, title, description } }) => {
  const [tab, setTab] = useState(0);
  const [fade, setFade] = useState(true);

  // Manejar el cambio de tab con fade
  const handleTabChange = (index) => {
    if (index === tab) return; // no cambia si es el mismo tab

    // Primero hacer fade out
    setFade(false);

    // Después de la transición (300ms), cambiar tab y hacer fade in
    setTimeout(() => {
      setTab(index);
      setFade(true);
    }, 200);
  };

  return (
    <div className="tab gx-5 row items-center">
      <div className="lg:col-7 lg:order-2">
        <div className="tab-content">
          {tab_list.map((item, index) => (
            <div
              key={index}
              className={`tab-content-panel ${
                tab === index ? "active" : undefined
              }`}
              style={{
                opacity: tab === index && fade ? 1 : 0,
                transition: "opacity 300ms ease-in-out",
                position: tab === index ? "relative" : "absolute",
                pointerEvents: tab === index ? "auto" : "none",
              }}
            >
              <img
                className="w-full
                          h-[300px]      sm:h-[400px]      md:h-[500px]      lg:h-[600px]      xl:h-[700px]
                          object-contain"
                src={item.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
        <div className="text-container">
          <h2 className="lg:text-4xl">{title}</h2>
          <p className="mt-4">{description}</p>
          <ul className="tab-nav mt-8 border-b-0">
            {tab_list.map((item, index) => {
              const FeatherIcon = Icon[humanize(item.icon)];
              return (
                <li
                  key={index}
                  className={`tab-nav-item ${
                    tab === index ? "active" : undefined
                  }`}
                  onClick={() => handleTabChange(index)}
                >
                  <span className="tab-icon mr-3">
                    <FeatherIcon />
                  </span>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomepageTab;