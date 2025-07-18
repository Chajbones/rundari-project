import AddBtn from "../AddBtn";
import ClassFormModal from "./modals/ClassFormModal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Subjects() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <AddBtn toggleFormOpen={() => setIsFormOpen(!isFormOpen)} />
            <AnimatePresence>
                {isFormOpen && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black backdrop-blur-sm z-40"
                        onClick={() => setIsFormOpen(false)}
                    />
                )}
            </AnimatePresence>
            <ClassFormModal isFormOpen={isFormOpen} 
            toggleFormOpen={() => setIsFormOpen(!isFormOpen)}
            />
        </>
    );
}
