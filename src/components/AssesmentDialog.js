import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

const AssesmantDialog = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <div className="border shadow-sm px-3 pt-3 mb-3">
                <div className="row">
                    <div className="col-md-12">
                        <h6 className="question mb-2">Q1. How serious is my disease and condition and how it will affect my home and work life?</h6>
                    </div>

                    <FormControl component="fieldset" className="w-100">
                        <RadioGroup row aria-label="position" name="position" defaultValue="top" className="ml-3 w-100">
                            <div className="row w-100">
                                <div className="col">
                                    <FormControlLabel value="option1" control={<Radio color="primary" />} label="Lorem" />
                                </div>
                                <div className="col">
                                    <FormControlLabel value="option2" control={<Radio color="primary" />} label="ipsum" />
                                </div>
                                <div className="col">
                                    <FormControlLabel value="option3" control={<Radio color="primary" />} label="Lorem Ipsum" />
                                </div>
                                <div className="col">
                                    <FormControlLabel value="option4" control={<Radio color="primary" />} label="Lipsum" />
                                </div>

                            </div>
                        </RadioGroup>
                    </FormControl>

                </div>
            </div>
            <div className="border shadow-sm px-3 pt-3 mb-3">
                <div className="row">
                    <div className="col-md-12">
                        <h6 className="question mb-2">Q2. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                    </div>
                    <FormGroup aria-label="position" className="w-100 ml-3">
                        <div className="row w-100">
                            <div className="col">
                                <FormControlLabel value="option1" control={<Checkbox color="primary" />} label="option1" />
                            </div>
                            <div className="col">
                                <FormControlLabel value="option2" control={<Checkbox color="primary" />} label="option2" />
                            </div>
                            <div className="col">
                                <FormControlLabel value="option3" control={<Checkbox color="primary" />} label="option3" />
                            </div>
                            <div className="col">
                                <FormControlLabel value="option4" control={<Checkbox color="primary" />} label="option4" />
                            </div>
                        </div>
                    </FormGroup>
                </div>
            </div>
            <div className="border shadow-sm px-3 pt-3 mb-3">
                <div className="row">
                    <div className="col-md-12">
                        <h6 className="question mb-2">Q3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</h6>
                    </div>
                    <FormControl component="fieldset" className="w-100">
                        <RadioGroup row aria-label="position" name="position" defaultValue="top" className="ml-3 w-100">
                            <div className="row w-100">
                                <div className="col">
                                    <FormControlLabel value="option1" control={<Radio color="primary" />} label="Lorem" />
                                </div>
                                <div className="col">
                                    <FormControlLabel value="option2" control={<Radio color="primary" />} label="ipsum" />
                                </div>
                                <div className="col">
                                    <FormControlLabel value="option3" control={<Radio color="primary" />} label="Lorem Ipsum" />
                                </div>
                                <div className="col">
                                    <FormControlLabel value="option4" control={<Radio color="primary" />} label="Lipsum" />
                                </div>
                            </div>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <div className="border shadow-sm px-3 pt-3 mb-3">
                <div className="row">
                    <div className="col-md-12">
                        <h6 className="question mb-2">Q2. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                    </div>
                    <FormGroup aria-label="position" className="w-100 ml-3">
                        <div className="row w-100">
                            <div className="col">
                                <FormControlLabel value="option1" control={<Checkbox color="primary" />} label="option1" />
                            </div>
                            <div className="col">
                                <FormControlLabel value="option2" control={<Checkbox color="primary" />} label="option2" />
                            </div>
                            <div className="col">
                                <FormControlLabel value="option3" control={<Checkbox color="primary" />} label="option3" />
                            </div>
                            <div className="col">
                                <FormControlLabel value="option4" control={<Checkbox color="primary" />} label="option4" />
                            </div>
                        </div>
                    </FormGroup>

                </div>
            </div>
            <div className="border shadow-sm px-3 pt-3 mb-3">
                <div className="row">
                    <div className="col-md-12">
                        <h6 className="question mb-2">Q2. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h6>
                    </div>
                    <FormGroup aria-label="position" className="w-100 ml-3">
                        <div className="row w-100">
                            <div className="col">
                                <FormControlLabel value="option1" control={<Checkbox color="primary" />} label="option1" />
                            </div>
                            <div className="col">
                                <FormControlLabel value="option2" control={<Checkbox color="primary" />} label="option2" />
                            </div>
                            <div className="col">
                                <FormControlLabel value="option3" control={<Checkbox color="primary" />} label="option3" />
                            </div>
                            <div className="col">
                                <FormControlLabel value="option4" control={<Checkbox color="primary" />} label="option4" />
                            </div>
                        </div>

                    </FormGroup>

                </div>
            </div>

        </div>
    )
}
export default AssesmantDialog;