import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { MenuItem } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import ProgramAssesment from './ProgramAssesment';
import ProgramCurriculum from './ProgramCurriculum';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return (
                <div>
                <div className="mb-4">
                    <h2>Program Creation</h2>
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
            );
        case 1:
            return <ProgramAssesment/>
            ;
        case 2:
            return <ProgramCurriculum/>;
        default:
            return 'Unknown stepIndex';
    }
}

const StepperComponent = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
              </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>

        </div>

    );
}


export default StepperComponent;