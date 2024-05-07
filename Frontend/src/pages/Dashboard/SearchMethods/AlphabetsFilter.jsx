import { useEffect, useState } from "react";

export const AlphabetsFilter = ({
    instructors,
    setInstructors,
    setSelectedAlphabetChange,
    setSelectedAlphabetInstructor,
}) => {
    var capitalAlphabets = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    const [selectedAlphabet, setSelectedAlphabet] = useState();

    useEffect(() => {
        if (selectedAlphabet) {
            setSelectedAlphabetChange(selectedAlphabet);

            const filteredInstructors = instructors.filter(
                (instructor) => instructor.FirstName[0] == selectedAlphabet
            );
            setSelectedAlphabetInstructor(filteredInstructors);
        }
    }, [selectedAlphabet]);

    return (
        <div className="alphabet_names">
            {capitalAlphabets.map((item, index) => (
                <span
                    key={index}
                    className={
                        item == selectedAlphabet ? "active_alphabet" : ""
                    }
                    onClick={(e) => setSelectedAlphabet(item)}
                >
                    {item}
                </span>
            ))}
        </div>
    );
};
