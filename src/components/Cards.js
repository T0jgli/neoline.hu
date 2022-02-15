import { HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { containerAnimation, itemAnimation } from "./animations";

function Cards() {
    return (
        <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
            className="grid xl:grid-cols-3 grid-cols-1 -mx-4 gap-8 mb-16 px-8 md:px-0 shadow-sm"
            style={{ placeItems: "center" }}
        >
            <motion.div variants={itemAnimation} className="relative flex-shrink-0 max-w-xl overflow-hidden rounded-3xl hover:brightness-90 duration-300 card">
                <img src="./img/contibus.jpg " alt="Contibus buszok" className="absolute inset-0 w-full h-full object-cover object-bottom" />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"></div>
                <div className="relative h-96 max-w-[768px] p-12 flex flex-col justify-between items-start">
                    <div>
                        <h2 className="font-medium text-white title">
                            <HiChevronRight className="inline" /> Buszbérlés
                        </h2>
                        <p className="mt-3 w-2/3 text-3xl font-semibold tracking-tight text-white">Cégünk autóbusz bérbeadással is foglalkozik.</p>
                    </div>
                    <a
                        href="https://contibus.hu"
                        rel="noreferrer"
                        target="_blank"
                        className="px-4 py-3 rounded-lg bg-white text-slate-900 text-sm font-medium duration-300 shadow-sm hover:bg-gray-200 hover:shadow-md"
                    >
                        contibus.hu
                    </a>
                </div>
            </motion.div>
            <motion.div variants={itemAnimation} className="relative flex-shrink-0 max-w-xl overflow-hidden rounded-3xl hover:brightness-90 duration-300 card">
                <img
                    src="./img/tengerpart.jpg"
                    alt="Kalandozás utazási iroda tengerpart"
                    className="absolute inset-0 w-full h-full object-cover object-bottom"
                />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"></div>
                <div className="relative h-96 max-w-[768px] p-12 flex flex-col justify-between items-start">
                    <div>
                        <h2 className="font-medium text-white title">
                            <HiChevronRight className="inline" /> Utazási iroda
                        </h2>
                        <p className="mt-3 w-2/3 text-3xl font-semibold tracking-tight text-white">
                            Városlátogatások, körutazások, tengerparti üdülések, nyaralások.
                        </p>
                    </div>
                    <a
                        href="https://kalandozas.hu"
                        rel="noreferrer"
                        target="_blank"
                        className="px-4 py-3 rounded-lg bg-white text-slate-900 text-sm font-medium duration-300 shadow-sm hover:bg-gray-200 hover:shadow-md"
                    >
                        kalandozas.hu
                    </a>
                </div>
            </motion.div>
            <motion.div variants={itemAnimation} className="relative flex-shrink-0 max-w-xl overflow-hidden rounded-3xl hover:brightness-90 duration-300 card">
                <img src="./img/teherauto.jpg" alt="Conti-trans teherautó" className="absolute inset-0 w-full h-full object-cover object-bottom" />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-black/75"></div>
                <div className="relative h-96 max-w-[768px] p-12 flex flex-col justify-between items-start">
                    <div>
                        <h2 className="font-medium text-white title">
                            <HiChevronRight className="inline" /> Teherszállítás
                        </h2>
                        <p className="mt-3 w-2/3 text-3xl font-semibold tracking-tight text-white">4db tehergépjárművel is rendelkezünk.</p>
                    </div>
                    <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="px-4 py-3 rounded-lg bg-white text-slate-900 text-sm font-medium duration-300 shadow-sm hover:bg-gray-200 hover:shadow-md"
                    >
                        HAMAROSAN
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Cards;
