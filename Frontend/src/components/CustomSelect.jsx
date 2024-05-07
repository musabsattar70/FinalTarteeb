import { useRef, useState, useEffect } from "react";



export const CustomSelect = ({
    placeHolderText,
    inputValue,
    setInputValue,
    methodIconClass,
    optionsList
}) => {

    const divClickRef = useRef(null);
    const caretClickRef = useRef(null);
    const inputClickRef = useRef(null);

    const [showOptions, setShowOptions] = useState();

    const [visibleOptions, setVisibleOptions] = useState(optionsList);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (divClickRef.current && !divClickRef.current.contains(event.target) &&
          caretClickRef.current !== event.target  &&
          inputClickRef.current !== event.target) {

            setShowOptions(false);
          }
        };
    
        // Attach the event listener to the document body
        document.body.addEventListener('click', handleClickOutside);
    
        // Clean up the event listener when the component unmounts
        return () => {
          document.body.removeEventListener('click', handleClickOutside);
        };
      }, [showOptions, visibleOptions, optionsList]);

    return (

        <div div className="custom_select" >

            <input 
                ref={inputClickRef}
                type="text" 
                placeholder={placeHolderText}
                defaultValue={inputValue}
                key={inputValue}
                onChange={e => {
                    setShowOptions(true)
                    const updatedSearchOptions = optionsList.filter(item => item.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1)
                    setVisibleOptions(updatedSearchOptions)
                }}
            />

            <i
                className={methodIconClass}
                onClick={e => setShowOptions(!showOptions)}
                ref={caretClickRef}
            ></i>


            {showOptions &&
            <div 
                className="custom_select_options_list"
                ref={divClickRef}
            >
                
                {visibleOptions.map((item, index) =>
                    <div 
                        className={item == inputValue ? "custom_select_options_list_selected" : ""}
                        key={index}
                        onClick={e => {
                            setInputValue(item)
                            setShowOptions(false)
                            setVisibleOptions(optionsList)
                        }}
                    >
                        {item}
                    </div>
                )}

            </div>}

        </div >
    );
}