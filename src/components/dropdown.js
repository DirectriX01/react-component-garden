import { useState } from 'react';

const DropDown = ({options, value, onChange}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const optionSelect = (option) => {
        setIsOpen(false);
        console.log(option);
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div key={option.value} className="hover:bk-sky-100 rounded p-1 cursor-pointer" onClick={() => optionSelect(option)}>
                {option.label}
            </div>
        );
    });

    // const content = selection ? selection : "Select an option";
    return (
        <div className='w-48 relvative'>
            <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>{value?.label || 'Select..'}</div>
             {   isOpen && <div className='absolute top-full border rounded p-3'>{renderedOptions}</div>}
        </div>
                            
    );
};

export default DropDown;