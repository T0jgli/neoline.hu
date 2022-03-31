import { motion } from "framer-motion";
import { HiOutlineX } from "react-icons/hi";
import { itemAnimation } from "./components/animations";
import Cards from "./components/Cards";
function App() {
    return (
        <div className="App">
            <motion.div
                className="min-w-screen min-h-screen left-0 top-0 flex flex-col justify-center items-center inset-0 z-50 bg-no-repeat bg-center bg-cover"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(./img/bg.jpg)",
                }}
                variants={itemAnimation}
                initial="hidden"
                animate="visible"
            >
                <h1 className="hidden">Neoline KFT. buszbérlés, utazási iroda, teherszállítás</h1>
                <div className="relative flex flex-col items-center justify-center flex-1 w-full">
                    <section className="pt-14 pb-10 px-5 w-full">
                        <div className="">
                            <Cards />
                        </div>
                    </section>
                </div>
                <motion.div variants={itemAnimation} initial="hidden" animate="visible">
                    <p className="text-white opacity-30 ">
                        © {new Date().getFullYear()} Copyright: Neoline <HiOutlineX className="inline" />{" "}
                        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/kovalikadam/">
                            tojglee
                        </a>
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default App;
