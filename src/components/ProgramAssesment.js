import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { makeStyles, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import AssesmantDialog from "./AssesmentDialog";
import CurriculumDialog from "./CurriculumDialog";

const useStyles = makeStyles((theme) => ({
    dNone: {
        display: 'none'
    }
}))

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


const Accordion = withStyles({
    root: {
        border: "1px solid rgba(0, 0, 0, .125)",
        // boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
        "&$expanded": {
            margin: "auto",
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: "rgba(0, 0, 0, .03)",
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: 56,
        },
    },
    content: {
        "&$expanded": {
            margin: "12px 0",

        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const ProgramAssesment = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (

        <div>
            <div className="d-flex align-items-center justify-content-between mb-2">
                <div>
                    <h2 className={classes.dNone}>Program Assesment</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div>
                    <Button variant="outlined" color="primary" className="mr-2 px-4">
                        View
                    </Button>
                    <Button variant="outlined" color="primary">
                        Add Block
                    </Button>
                </div>
            </div>
            <Accordion
                square
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography className="w-100">
                        <div className="d-flex align-items-center justify-content-between w-100">
                            <div>
                                Block #1
                            </div>
                            <div>
                                <IconButton color="primary">
                                    <span class="material-icons-outlined">
                                        cancel
                                    </span>
                                </IconButton>
                                <IconButton color="primary">
                                    <span class="material-icons-outlined" >
                                        edit
                                    </span>
                                </IconButton>
                            </div>
                        </div>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="w-100">
                        <div className="main-question-section pt-3 pb-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="w-25">
                                    <TextField id="select" label="Question Type" size="small" variant="outlined" className="w-100" select>
                                        <MenuItem value="Department 1">Radio</MenuItem>
                                        <MenuItem value="Department 2">Descriptive</MenuItem>
                                        <MenuItem value="Department 3">Short Q/A</MenuItem>
                                        <MenuItem value="Department 4">Q/A</MenuItem>
                                    </TextField>
                                </div>
                                <div>
                                    <Button variant="outlined" color="primary">
                                        <span class="material-icons mr-2">
                                            add
                                    </span>
                                    Add Question
                                </Button>
                                </div>
                            </div>

                            <div className="question py-5 border-bottom">
                                <h6>Question # 1</h6>
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <TextField id="departments" size="small" variant="outlined" className="w-100"
                                            defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                            InputProps={{ readOnly: true }} />
                                    </div>
                                    <div className="col">
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    </div>
                                    <div className="col">
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    </div>
                                    <div className="col">
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    </div>
                                    <div className="col">
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-5 mb-3 text-right">
                            <Button variant="contained" color="primary" className="w-25" disableElevation>
                                Next
                            </Button>
                        </div>



                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                square
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Collapsible Group Item #2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                        lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                square
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Collapsible Group Item #3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                        lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
                </AccordionDetails>
            </Accordion>




            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Open dialog
      </Button>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={fullWidth}
                    maxWidth={maxWidth}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Program Assesment
        </DialogTitle>
                    <DialogContent dividers>
                        <AssesmantDialog />
                        {/* <CurriculumDialog/> */}
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Save changes
          </Button>
                    </DialogActions>
                </Dialog>
            </div>


        </div>





    );
};

export default ProgramAssesment;
