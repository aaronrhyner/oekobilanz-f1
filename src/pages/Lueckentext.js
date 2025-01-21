import React, {useState} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";

const Lueckentext = () => {
    const correctAnswers = ["Fahrzeug", "Motor", "Rennen", "Strategie", "Boxenstopp", "Reifen", "Punkte"];
    const [answers, setAnswers] = useState(Array(correctAnswers.length).fill(""));
    const [errors, setErrors] = useState(Array(correctAnswers.length).fill(false));

    const handleChange = (index, event) => {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
    };

    const checkAnswers = () => {
        setErrors(answers.map((ans, i) => ans.toLowerCase() !== correctAnswers[i].toLowerCase()));
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            maxWidth: 700,
            mx: "auto",
            textAlign: "center",
            mt: 5
        }}>
            <Typography variant="h5">Formel 1 – Lückentext</Typography>
            <Typography variant="body1">
                Die Formel 1 ist eine der bekanntesten Motorsportserien der Welt. Jedes{" "}
                <TextField error={errors[0]} helperText={errors[0] ? "Falsch" : ""} size="small"
                           onChange={(e) => handleChange(0, e)}/>{" "}
                ist hochentwickelt und besteht aus tausenden Einzelteilen.
                Der leistungsstarke{" "}
                <TextField error={errors[1]} helperText={errors[1] ? "Falsch" : ""} size="small"
                           onChange={(e) => handleChange(1, e)}/>{" "}
                treibt das Auto an und kann eine Geschwindigkeit von über 350 km/h ermöglichen.
                Eine Saison besteht aus mehreren{" "}
                <TextField error={errors[2]} helperText={errors[2] ? "Falsch" : ""} size="small"
                           onChange={(e) => handleChange(2, e)}/>,
                die auf verschiedenen Strecken weltweit ausgetragen werden.
                Jedes Team entwickelt eine eigene{" "}
                <TextField error={errors[3]} helperText={errors[3] ? "Falsch" : ""} size="small"
                           onChange={(e) => handleChange(3, e)}/>,
                um die besten Chancen auf den Sieg zu haben.
                Während eines{" "}
                <TextField error={errors[4]} helperText={errors[4] ? "Falsch" : ""} size="small"
                           onChange={(e) => handleChange(4, e)}/>{" "}
                wechseln die Mechaniker die{" "}
                <TextField error={errors[5]} helperText={errors[5] ? "Falsch" : ""} size="small"
                           onChange={(e) => handleChange(5, e)}/>{" "}
                und führen kleinere Reparaturen durch.
                Am Ende der Saison gewinnt der Fahrer mit den meisten{" "}
                <TextField error={errors[6]} helperText={errors[6] ? "Falsch" : ""} size="small"
                           onChange={(e) => handleChange(6, e)}/>{" "}
                den Weltmeistertitel.
            </Typography>
            <Button variant="contained" color="primary" onClick={checkAnswers}>
                Prüfen
            </Button>
        </Box>
    );
};

export default Lueckentext;
