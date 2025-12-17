import React from "react";
import MaxTempIcon from "./MaxTempIcon";
import MinTempIcon from "./MinTempIcon";
import HumidityIcon from "./HumidityIcon";
import CloudyIcon from "./CloudyIcon";
import WindIcon from "./WindIcon";

export default function WeatherCondition() {
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        thunderstorm with light drizzle
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>19°</p>
            <MaxTempIcon />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>19°</p>
            <MinTempIcon />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>58%</p>
            <HumidityIcon />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>86%</p>
            <CloudyIcon />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>5km/h</p>
            <WindIcon />
          </div>
        </li>
      </ul>
    </div>
  );
}
