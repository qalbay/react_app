import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MenuItem } from '@material-ui/core';


const ProgramCurriculum = () => {
    return (
        <div>
            <div>
                <div className="mb-4">
                    <h2>Program Curriculum</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className="row">
                    <div className="col-md-4 form-group">
                        <TextField label="Program Name" id="program-name" size="small" variant="outlined" className="w-100" />
                    </div>
                    <div className="col-md-4 form-group">
                        <TextField id="select" label="Departments" size="small" variant="outlined" className="w-100" select>
                            <MenuItem value="Department 1">Department 1</MenuItem>
                            <MenuItem value="Department 2">Department 2</MenuItem>
                            <MenuItem value="Department 3">Department 3</MenuItem>
                            <MenuItem value="Department 4">Department 4</MenuItem>

                        </TextField>
                    </div>
                    <div className="col-md-4 form-group">
                        <TextField label="Departments" id="departments" size="small" variant="outlined" className="w-100" />
                    </div>
                    <div className="col-md-4 form-group">
                        <TextField id="select" label="List of cheif companies" size="small" variant="outlined" className="w-100" select>
                            <MenuItem value="Department 1">Cheif company 1</MenuItem>
                            <MenuItem value="Department 2">Cheif company 2</MenuItem>
                            <MenuItem value="Department 3">Cheif company 3</MenuItem>
                            <MenuItem value="Department 4">Cheif company 4</MenuItem>
                        </TextField>
                    </div>
                    <div className="col-md-4 form-group">
                        <TextField label="No. of days" id="days" size="small" variant="outlined" className="w-100" />
                    </div>
                    <div className="col-md-12 form-group">
                        <TextField label="Program Name" id="program-name" size="small" variant="outlined" className="w-100" multiline rows={3} />
                    </div>
                    <div className="col-md-4 offset-md-8 mt-5">
                        <Button variant="contained" color="primary" className="w-100" disableElevation>
                            Next
                            </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProgramCurriculum;