"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";
import Link from "next/link";

const HeroBannerAi = () => {
  useGSAP(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        fadeAnimation();
      }, 7000);
    }
  }, {});

  // nothing dvvdssv jhbsdcdbsbs

  return (
    <div className="bannersection" id="hero">
      <div id="hero-styles">
      <div
        className="tp-hero-area main-slider banner-ai "
        
        style={{
        //   background: "url(../assets/img/home-01/hero/zipi-bg.jpg)",
        }}
      >
        
        <div className="container p-relative Zindex100">
          <div className="row justify-content-center ">
            <div className="banner-data">
              <div className="tp-hero-title-wrap mb-35 p-relative">
                <div className="tp-hero-title-box text-center p-relative Zindex100">
                  <h1 className="space-title">
                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 8 }}
                        className="p-relative "
                      >
                        {/* Expert<b> Business</b> */}
                        <br />
                        <span className="boldHeading">
                          <b>Secure in This Galaxy </b>
                          <motion.div
                            initial={{ opacity: 0, y: 250 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 8 }}
                            className="p-relative "
                          >
                            <div className="boldHeading">
                              <b> —and the Next</b>{" "}
                             
                            </div>
                          </motion.div>
                        </span>
                      </motion.div>
                    </div>
                  </h1>
                  <h2>From Web Development to Cybersecurity: Chart Your Course with Secure365</h2>
                </div>
                <div className="tp-hero-shape-1 p-relative videoV">
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 7 }}
                className=" space-content p-relative Zindex100"
              >
                {/* <p className="text-center">
                Every journey into the unknown starts with a single launch—make yours a secure one. At Secure365, we’re here to guide your mission through this galaxy and beyond, crafting stellar websites, managing your IT infrastructure, harnessing the power of the cloud, and fortifying your digital defenses. Join us on an odyssey to expand your reach across the cosmic frontier—without ever losing sight of security.
                </p> */}

                <div className="btn_sec flex gap-3 flex-wrap justify-center">
                  {/* <button className="BtnOne btnWrapper"> */}
                    <Link href="/contact-us" className="btn">
                    Start Your Mission
                    </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      

  <div className="bann-imgs-wrap">
      <div className="bann-ai" >
      <img src="/assets/img/home-01/hero/ai-bg.webp" className="hero_parallax layer01"></img>
      <img src="/assets/img/home-01/hero/left-bg.webp" className="hero_parallax layer02"></img>
      <img src="/assets/img/home-01/hero/right-bg.webp" className="hero_parallax layer03"></img>
      <img src="/assets/img/home-01/hero/middle-rock.webp" className="hero_parallax layer04"></img>
      <img src="/assets/img/home-01/hero/light.webp" className="hero_parallax layer05"></img>
      <img src="/assets/img/home-01/hero/center-top.webp" className="hero_parallax layer07"></img>
      </div>
      <img src="/assets/img/home-01/hero/spaceship-foreground.svg" className="curve-overlay"></img>
    </div>
    </div>
    </div>
    </div>
    
  );
};

export default HeroBannerAi;
