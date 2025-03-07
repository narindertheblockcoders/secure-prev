import React from "react";
import { Metadata } from "next";
// import ServiceMain from "@/pages/service/service";

import ServiceMain from "@/pages/service/service";
import { config } from "../../../../config";

export const metadata = {
  title: "Secure 365 - Service page",
};

const ServicePage = async() => {

  const data = await fetch(
    `${config.APP_URL}/secure-plugin/v1/service`,
    {
      cache: "no-store",
    }
  );

  const bannerData = await fetch(
    `${config.APP_URL}/secure-plugin/v1/banner/service`,
    {
      cache: "no-store",
    }
  );
  
  
  const serviceData = await data.json();
  const serviceBannerData = await bannerData.json();

 


  return (
    <ServiceMain serviceData={serviceData} serviceBannerData={serviceBannerData}/>
  );
};

export default ServicePage;
