import React, { useState } from "react";
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
            question: "Auf was basiert der umweltfreundliche Sprit, welcher die DHL seit 2023 braucht?",
            options: ["Elektrokraftstoff", "Pflanzenöl", "Algenextrakt", "Tier Kot"],
            correctAnswer: "Pflanzenöl",
        },
        {
            question: "Wie viel CO₂ konnten die Biofuel-Trucks im Jahr 2023 einsparen?",
            options: ["65%", "32%", "90%", "83%"],
            correctAnswer: "83%",
        },
        {
            question: "Welche Massnahme hat 2023 die CO₂-Emissionen der Formel 1 in Europa gesenkt?",
            options: ["Verwendung von Elektrolastwagen", "Kleinere Motorhomes", "Einsatz von Biofuel in DHL-Trucks", "Weniger Rennen in Europa"],
            correctAnswer: "Einsatz von Biofuel in DHL-Trucks",
        },
        {
            question: "Wie viel CO₂ stösst die Logistik der Formel 1 aus??",
            options: ["109'285 Tonnen", "624'488 Tonnen", "254'162 Tonnen", "420'327 Tonnen"],
            correctAnswer: "109'285 Tonnen",
        },
        {
            question: "Warum tragen die Motorhomes der Formel 1 besonders zur Umweltbelastung bei?",
            options: ["Sie verbrauchen sehr viel Strom", "Sie werden nur mit Flugzeugen transportiert", "Sie benötigen eine spezielle Klimaanlage", "Sie erfordern zusätzliche Sicherheitsfahrzeuge"],
            correctAnswer: "Sie verbrauchen sehr viel Strom"
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
        setAnswers({ ...answers, [activeStep]: e.target.value });
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

        return { correct, incorrect };
    };

    const { correct, incorrect } = calculateResults();

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
                Formel 1 Quiz
            </Typography>
            <Stepper
                activeStep={activeStep}
                alternativeLabel
                style={{ width: "100%" }}
                sx={{
                    '.MuiStepIcon-root': {
                        color: "#4b7543",
                        '&.Mui-completed': { color: "#8d1304" },
                        '&.Mui-active': { color: "#8d1304" }
                    }
                }}
            >
                {questions.map((_, index) => (
                    <Step key={index}>
                        <StepLabel>Frage {index + 1}</StepLabel>
                    </Step>
                ))}
                <Step>
                    <StepLabel>Ende</StepLabel>
                </Step>
            </Stepper>
            {activeStep < questions.length ? (
                <div style={{ margin: "20px 0", width: "100%" }}>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel
                            component="legend"
                            sx={{
                                padding: '0 20px',
                                color: '#000', // Textfarbe auf Schwarz setzen
                                '&.Mui-focused': { color: '#000' }, // Schwarz bleibt auch bei Fokus
                            }}
                        >
                            {questions[activeStep].question}
                        </FormLabel>

                        <RadioGroup
                            value={answers[activeStep] || ""}
                            onChange={handleChange}
                            sx={{ alignItems: 'center', padding: '0 20px' }}
                        >
                            {questions[activeStep].options.map((option, index) => (
                                <FormControlLabel
                                    key={index}
                                    value={option}
                                    control={<Radio sx={{ color: "#8d1304", '&.Mui-checked': { color: "#4b7543" } }} />}
                                    label={option}
                                    sx={{ width: '100%', '.MuiFormControlLabel-label': { color: 'inherit' } }}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </div>
            ) : (
                <div style={{ marginTop: "20px" }}>
                    <Typography variant="h5">Auswertung</Typography>
                    <Typography variant="body1">Richtig beantwortet: {correct}</Typography>
                    <Typography variant="body1">Falsch beantwortet: {incorrect}</Typography>
                </div>
            )}
            <div style={{ marginTop: "20px" }}>
                {activeStep !== questions.length &&
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#4b7543", color: "#fff", marginRight: "10px" }}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        Back
                    </Button>
                }
                {activeStep !== questions.length &&
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#8d1304", color: "#fff" }}
                        onClick={handleNext}
                    >
                        {activeStep === questions.length - 1 ? "Auswertung" : "Weiter"}
                    </Button>
                }
                {activeStep === questions.length &&
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#4b7543", color: "#fff" }}
                        href={"/details/3"}
                    >
                        Zurück auf die Startseite
                    </Button>
                }
            </div>
        </div>
    );
};

export default Quiz;