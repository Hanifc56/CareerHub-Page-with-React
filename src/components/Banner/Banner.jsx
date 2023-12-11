import { useEffect, useState } from "react";
import HomeBanner from "../HomeBanner/HomeBanner";

const Banner = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setBanner(data));
  }, []);
  return (
    <div>
      <div className="">
        {banner.map((ban) => (
          <HomeBanner ban={ban} key={ban.id}></HomeBanner>
        ))}
      </div>
    </div>
  );
};

export default Banner;
