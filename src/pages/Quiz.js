import React, {useState} from "react";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Step,
    StepLabel,
    Stepper,
    Typography,
} from "@mui/material";

const Quiz = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const questions = [
        {
            question: "Who won the 2021 Formula 1 World Championship?",
            options: ["Lewis Hamilton", "Max Verstappen", "Sebastian Vettel", "Charles Leclerc"],
            correctAnswer: "Max Verstappen",
        },
        {
            question: "Which team has won the most Constructors' Championships?",
            options: ["Ferrari", "McLaren", "Red Bull Racing", "Mercedes"],
            correctAnswer: "Ferrari",
        },
        {
            question: "What is the longest F1 circuit on the current calendar?",
            options: ["Silverstone", "Monza", "Spa-Francorchamps", "Circuit de Monaco"],
            correctAnswer: "Spa-Francorchamps",
        },
    ];

    const handleNext = () => {
        if (activeStep < questions.length) {
            setActiveStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prev) => prev - 1);
        }
    };

    const handleChange = (e) => {
        setAnswers({...answers, [activeStep]: e.target.value});
    };

    const calculateResults = () => {
        let correct = 0;
        let incorrect = 0;

        questions.forEach((question, index) => {
            if (answers[index] === question.correctAnswer) {
                correct++;
            } else {
                incorrect++;
            }
        });

        return {correct, incorrect};
    };

    const {correct, incorrect} = calculateResults();

    return (
        <div
            style={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
                minHeight: "100vh",
                textAlign: "center",
            }}
        >
            <Typography variant="h4" gutterBottom>
                Formula 1 Quiz
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel style={{width: "100%"}}>
                {questions.map((_, index) => (
                    <Step key={index}>
                        <StepLabel>Question {index + 1}</StepLabel>
                    </Step>
                ))}
                <Step>
                    <StepLabel>Finish</StepLabel>
                </Step>
            </Stepper>
            {activeStep < questions.length ? (
                <div style={{margin: "20px 0", width: "100%"}}>
                    <FormControl component="fieldset" fullwidth>
                        <FormLabel component="legend">
                            {questions[activeStep].question}
                        </FormLabel>
                        <RadioGroup
                            value={answers[activeStep] || ""}
                            onChange={handleChange}
                            sx={{alignItems: 'center'}}
                        >
                            {questions[activeStep].options.map((option, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={option}
                                    control={<Radio/>}
                                    label={option}
                                    sx={{width: '200px'}}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>
            ) : (
                <div style={{marginTop: "20px"}}>
                    <Typography variant="h5">Quiz Results</Typography>
                    <Typography variant="body1">Correct Answers: {correct}</Typography>
                    <Typography variant="body1">Incorrect Answers: {incorrect}</Typography>
                </div>
            )}
            <div style={{marginTop: "20px"}}>
                {activeStep !== questions.length &&
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        style={{marginRight: "10px"}}
                    >
                        Back
                    </Button>
                }
                {activeStep !== questions.length &&
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                    >
                        {activeStep === questions.length - 1 ? "Finish" : "Next"}
                    </Button>
                }
                {activeStep === questions.length &&
                    <Button
                        variant="contained"
                        color="primary"
                        href={"/"}
                    >
                        Zurück auf die Startseite
                    </Button>
                }
            </div>
        </div>
    );
};

export default Quiz;
