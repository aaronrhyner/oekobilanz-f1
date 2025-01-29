import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Lueckentext = () => {
    const correctAnswers = [
        "2030",
        "2018",
        ["IPCC", "Intergovernmental Panel on Climate Change"],
        ["Co2 Emissionen", "Emissionen", "co2 Emissionnen"],
        "2026",
        "klimaneutralem Sprit",
        "erneuerbaren Energien",
        ["Transport und Reisen", "Reisen und Transport"]
    ];

    const [answers, setAnswers] = useState(Array(correctAnswers.length).fill(""));
    const [feedback, setFeedback] = useState(Array(correctAnswers.length).fill(null));

    const handleChange = (index, event) => {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
    };

    const checkAnswers = () => {
        setFeedback(
            answers.map((ans, i) => {
                if (Array.isArray(correctAnswers[i])) {
                    return correctAnswers[i].some(correct => correct.toLowerCase() === ans.toLowerCase()) ? "correct" : "incorrect";
                } else {
                    return ans.toLowerCase() === correctAnswers[i].toLowerCase() ? "correct" : "incorrect";
                }
            })
        );
    };

    const showSolutions = () => {
        setAnswers(correctAnswers.map(ans => (Array.isArray(ans) ? ans[0] : ans)));
        setFeedback(Array(correctAnswers.length).fill("correct"));
    };

    const resetAll = () => {
        setAnswers(Array(correctAnswers.length).fill(""));
        setFeedback(Array(correctAnswers.length).fill(null));
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 3,
                maxWidth: 700,
                mx: "auto",
                textAlign: "left",
                mt: 5
            }}
        >
            <Typography variant="h5">Formel 1 – Lückentext</Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
                Die Formel 1 hat sich das Ziel gesetzt, bis zum Jahr
                <TextField
                    error={feedback[0] === "incorrect"}
                    helperText={feedback[0] ? (feedback[0] === "correct" ? "Richtig" : "Falsch") : ""}
                    FormHelperTextProps={{ sx: { color: feedback[0] === "correct" ? "#4b7543" : "error.main" } }}
                    size="small"
                    sx={{ mx: 1 }}
                    value={answers[0]}
                    onChange={(e) => handleChange(0, e)}
                />
                klimaneutral zu werden, um ihr Image als Umweltschänder abzulegen. Bereits im Jahr
                <TextField
                    error={feedback[1] === "incorrect"}
                    helperText={feedback[1] ? (feedback[1] === "correct" ? "Richtig" : "Falsch") : ""}
                    FormHelperTextProps={{ sx: { color: feedback[1] === "correct" ? "#4b7543" : "error.main" } }}
                    size="small"
                    sx={{ mx: 1 }}
                    value={answers[1]}
                    onChange={(e) => handleChange(1, e)}
                />
                wurde in Kooperation mit dem
                <TextField
                    error={feedback[2] === "incorrect"}
                    helperText={feedback[2] ? (feedback[2] === "correct" ? "Richtig" : "Falsch") : ""}
                    FormHelperTextProps={{ sx: { color: feedback[2] === "correct" ? "#4b7543" : "error.main" } }}
                    size="small"
                    sx={{ mx: 1 }}
                    value={answers[2]}
                    onChange={(e) => handleChange(2, e)}
                />
                , die NetZero-Strategie entwickelt. Diese sieht vor, dass alle durch den Sport verursachten
                <TextField
                    error={feedback[3] === "incorrect"}
                    helperText={feedback[3] ? (feedback[3] === "correct" ? "Richtig" : "Falsch") : ""}
                    FormHelperTextProps={{ sx: { color: feedback[3] === "correct" ? "#4b7543" : "error.main" } }}
                    size="small"
                    sx={{ mx: 1 }}
                    value={answers[3]}
                    onChange={(e) => handleChange(3, e)}
                />
                , entweder eingespart oder vollständig kompensiert werden müssen. Ein grosser Punkt in dieser Strategie ist es, dass ab
                <TextField
                    error={feedback[4] === "incorrect"}
                    helperText={feedback[4] ? (feedback[4] === "correct" ? "Richtig" : "Falsch") : ""}
                    FormHelperTextProps={{ sx: { color: feedback[4] === "correct" ? "#4b7543" : "error.main" } }}
                    size="small"
                    sx={{ mx: 1 }}
                    value={answers[4]}
                    onChange={(e) => handleChange(4, e)}
                />
                ausschliesslich Autos mit
                <TextField
                    error={feedback[5] === "incorrect"}
                    helperText={feedback[5] ? (feedback[5] === "correct" ? "Richtig" : "Falsch") : ""}
                    FormHelperTextProps={{ sx: { color: feedback[5] === "correct" ? "#4b7543" : "error.main" } }}
                    size="small"
                    sx={{ mx: 1 }}
                    value={answers[5]}
                    onChange={(e) => handleChange(5, e)}
                />
                zum Einsatz kommen. Gleichzeitig sollen die Produktionsstätten der Teams durch den Einsatz von
                <TextField
                    error={feedback[6] === "incorrect"}
                    helperText={feedback[6] ? (feedback[6] === "correct" ? "Richtig" : "Falsch") : ""}
                    FormHelperTextProps={{ sx: { color: feedback[6] === "correct" ? "#4b7543" : "error.main" } }}
                    size="small"
                    sx={{ mx: 1 }}
                    value={answers[6]}
                    onChange={(e) => handleChange(6, e)}
                />
                nachhaltiger betrieben werden. Darüber hinaus werden Massnahmen ergriffen, um die Emissionen durch
                <TextField
                    error={feedback[7] === "incorrect"}
                    helperText={feedback[7] ? (feedback[7] === "correct" ? "Richtig" : "Falsch") : ""}
                    FormHelperTextProps={{ sx: { color: feedback[7] === "correct" ? "#4b7543" : "error.main" } }}
                    size="small"
                    sx={{ mx: 1 }}
                    value={answers[7]}
                    onChange={(e) => handleChange(7, e)}
                />
                deutlich zu senken.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained" sx={{ backgroundColor: "#4b7543", "&:hover": { backgroundColor: "#3a5c32" } }} onClick={checkAnswers}>
                    Prüfen
                </Button>
                <Button variant="outlined" sx={{ borderColor: "#8d1304", color: "#8d1304", "&:hover": { borderColor: "#6d0f03", color: "#6d0f03" } }} onClick={showSolutions}>
                    Lösungen anzeigen
                </Button>
                <Button variant="outlined" sx={{ borderColor: "#4b7543", color: "#4b7543", "&:hover": { borderColor: "#3a5c32", color: "#3a5c32" } }} onClick={resetAll}>
                    Nochmals
                </Button>
            </Box>
        </Box>
    );
};

export default Lueckentext;
