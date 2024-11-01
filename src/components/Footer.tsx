"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    setDateTime(new Date());
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="my-4 text-white sm:text-base text-sm ">
      <div className="flex justify-between">
        {dateTime ? (
          <p>
            {dateTime.toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p>
        ) : null}
      </div>
      <p>&copy;2024 Saurav Sharma || All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
