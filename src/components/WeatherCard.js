import React from "react";
import { useEffect, useState } from "react";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowDown,
  UilArrowUp,
} from "@iconscout/react-unicons";

function WeatherCard({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
    dt,
    name,
    country,
  },
}) {
  const KELVIN = 273;
  return (
    <div className="card text-bg-light mb-6">
      <div className="card-header">
        <p>Weather Update</p>
      </div>
      <div className="card-body">
        <div>
          <p>{formatToLocalTime(dt, timezone)}</p>
        </div>
        <div className="card-text">
        <div className="row" style={{display:'flex',alignItems:'center'}}>
          <div className="col-sm-4">
            <h1>{`${temp.toFixed() - KELVIN}°`}</h1>
          </div>
          <div className="col-sm-4">
            <h5 class="card-title">{`${name}, ${country}`}</h5>
              <div className="flex ">
                <p>{details}</p>
              </div>
                <img src={iconUrlFromCode(icon)} style={{marginTop: '-20px', marginBottom:'-20px' }} alt="" />
          </div>              
          <div className="col-sm-4">
                  <div className="flex " style={{padding: '5px'}}>
                    <UilTemperature size={18} />
                    Real feel:
                    <span>{`${feels_like.toFixed() - KELVIN}°`}</span>
                  </div>
                  <div className="flex " style={{padding: '5px'}}>
                    <UilTear size={18} />
                    Humidity:
                    <span>{`${humidity.toFixed()}%`}</span>
                  </div>
                  <div className="flex " style={{padding: '5px'}}>
                    <UilWind size={18} />
                    Wind:
                    <span>{`${speed.toFixed()} km/h`}</span>
                  </div>
          </div>
        </div>
        </div>
        </div>
       <div className="card-footer bg-transparent row">
              <div class="col-sm-3">
                <UilSun />
                <p>
                  SunRise:{" "}
                  <span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
                </p>
              </div>
              <div class="col-sm-3">
                <UilSunset />
                <p>
                  SunSet:{" "}
                  <span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
                </p>
              </div>
              <div class="col-sm-3">
                <UilArrowUp />
                <p>
                  High: <span>{`${temp_max.toFixed() - KELVIN}°`}</span>
                </p>
              </div>
              <div class="col-sm-3">
                <UilArrowDown />
                <p>
                  Low: <span>{`${temp_min.toFixed() - KELVIN}°`}</span>
                </p>
              </div>
       </div>
    </div>
  );
}

export default WeatherCard;
