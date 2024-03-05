import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export default function CustomRadioGroup({ data }) {
    return (
        <FormControl sx={{ width: "100%" }} >

            <label
                htmlFor={`input`}
                className={`block w-full text-center text-sm font-medium text-gray-700 "opacity-50" 
                                    `}
                style={{
                    fontSize: "12px",
                    pointerEvents: "none",
                }}
            >
                {data.title}
            </label>

            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={`${data.value[0]}`}
                name="radio-buttons-group"
            >
                <div className='flex items-center justify-evenly ' >
                    {
                        data.value.map((val, index) => {
                            return (
                                <FormControlLabel
                                    sx={{
                                        fontSize: "1px",
                                        pointerEvents: "none",

                                    }}
                                    disabled value={val} control={<Radio />} label={val} />
                            );
                        })
                    }
                </div>
            </RadioGroup>
        </FormControl>
    );
}