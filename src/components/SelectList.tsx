import Select from 'react-select'
import { useState } from 'react'

export interface selectOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

export default function SelectList() {
    //Imports from react-select tutorials
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

    const selectOptions: readonly selectOption[] = [
        { value: 'Formula X - 1', label: 'Formula X - 1', color: '#fff', isFixed: true },
        { value: 'Formula X - 2', label: 'Formula X - 2', color: '#0052CC', isDisabled: true },
        { value: 'Formula X - 3', label: 'Formula X - 3', color: '#5243AA' },
        { value: 'Formula X - 4', label: 'Formula X - 4', color: '#FF5630', isFixed: true }
    ];

    return (
        <Select
            placeholder="Formula"
            className="basic-single"
            classNamePrefix="select"
            defaultValue={selectOptions[0]}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
            isRtl={isRtl}
            isSearchable={isSearchable}
            name="color"
            options={selectOptions}
        />
    )
}

