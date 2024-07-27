"use client";
import React from "react";
import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "@/lib/animations";

function Base() {
  return (
    <motion.div
      className="min-w-screen min-h-screen left-0 top-0 flex flex-col justify-center items-center inset-0 z-50 bg-no-repeat bg-center bg-cover motion"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(./img/bg.jpg)",
      }}
      variants={itemAnimation}
      initial="initial"
      animate="visible"
    >
      <h1 className="hidden">Neoline KFT. buszbérlés, utazási iroda, teherszállítás</h1>
      <div className="relative flex flex-col items-center justify-center flex-1 w-full">
        <section className="pt-14 pb-10 px-5 w-full">
          <div className="">
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="visible"
              className="grid xl:grid-cols-5 grid-cols-1 -mx-4 gap-8 mb-16 px-8 md:px-0 shadow-sm motion"
              style={{ placeItems: "center" }}
            >
              <motion.a
                href="https://contibus.hu"
                rel="noreferrer"
                target="_blank"
                variants={itemAnimation}
                className="relative flex-shrink-0  overflow-hidden rounded-3xl hover:brightness-90 duration-300 card motion"
              >
                <img src="./img/contibus.jpg " alt="Contibus buszok" className="absolute inset-0 w-full h-full object-cover object-bottom" />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"></div>
                <div className="relative h-96 w-80 md:w-60 2xl:w-80 p-8 2xl:p-12 flex flex-col justify-between items-center">
                  <h2
                    className="mt-3 w-full text-3xl
                         md:text-2xl 2xl:text-3xl font-semibold tracking-tight text-white uppercase"
                  >
                    Autóbuszbérlés
                  </h2>
                </div>
              </motion.a>
              <motion.a
                href="https://kalandozas.hu"
                rel="noreferrer"
                target="_blank"
                variants={itemAnimation}
                className="relative flex-shrink-0  overflow-hidden rounded-3xl hover:brightness-90 duration-300 card motion"
              >
                <img
                  src="./img/tengerpart.jpg"
                  alt="Kalandozás utazási iroda tengerpart"
                  className="absolute inset-0 w-full h-full object-cover object-bottom"
                />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"></div>
                <div className="relative h-96 w-80 md:w-60 2xl:w-80 p-8 2xl:p-12 flex flex-col justify-between items-start">
                  <h2
                    className="mt-3 w-full h-full text-3xl
                         md:text-2xl 2xl:text-3xl font-semibold tracking-tight text-white uppercase"
                  >
                    Utazási iroda
                  </h2>
                </div>
              </motion.a>
              <motion.a
                href="https://neoline-contitrans.hu"
                rel="noreferrer"
                target="_blank"
                variants={itemAnimation}
                className="relative flex-shrink-0  overflow-hidden rounded-3xl hover:brightness-90 duration-300 card motion"
              >
                <img src="./img/teherauto.jpg" alt="Conti-trans teherautó" className="absolute inset-0 w-full h-full object-cover object-bottom" />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"></div>
                <div className="relative h-96 w-80 md:w-60 2xl:w-80 p-8 2xl:p-12 flex flex-col justify-between items-start">
                  <h2
                    className="mt-3 w-full h-full text-3xl
                         md:text-2xl 2xl:text-3xl font-semibold tracking-tight text-white uppercase"
                  >
                    Teherszállítás
                  </h2>
                </div>
              </motion.a>
              <motion.a
                href="https://neoline-contitrans.hu/towing"
                rel="noreferrer"
                target="_blank"
                variants={itemAnimation}
                className="relative flex-shrink-0  overflow-hidden rounded-3xl hover:brightness-90 duration-300 card motion"
              >
                <img src="./img/teherautomentes.jpg" alt="Conti-trans teherautó" className="absolute inset-0 w-full h-full object-cover object-bottom" />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"></div>
                <div className="relative h-96 w-80 md:w-60 2xl:w-80 p-8 2xl:p-12 flex flex-col justify-between items-start">
                  <h2
                    className="mt-3 w-full h-full text-3xl
                         md:text-2xl 2xl:text-3xl font-semibold tracking-tight text-white uppercase"
                  >
                    Autóbusz és kamion mentés
                  </h2>
                </div>
              </motion.a>
              <motion.a
                href="https://contibus.hu#services"
                rel="noreferrer"
                target="_blank"
                variants={itemAnimation}
                className="relative flex-shrink-0  overflow-hidden rounded-3xl hover:brightness-90 duration-300 card motion"
              >
                <img src="./img/csomagpont.png" alt="Conti-trans teherautó" className="absolute inset-0 w-full h-full object-cover object-bottom" />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"></div>
                <div className="relative h-96 w-80 md:w-60 2xl:w-80 p-8 2xl:p-12 flex flex-col justify-between items-start">
                  <h2
                    className="mt-3 w-full h-full text-3xl
                         md:text-2xl 2xl:text-3xl font-semibold tracking-tight text-white uppercase"
                  >
                    Csomagpont
                  </h2>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
      <motion.div variants={itemAnimation} initial="hidden" animate="visible" className="motion">
        <p className="text-white opacity-30 ">
          © {new Date().getFullYear()} Copyright: Neoline X{" "}
          <a rel="noreferrer" target="_blank" href="https://kvlk.hu/">
            tojglee
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Base;
