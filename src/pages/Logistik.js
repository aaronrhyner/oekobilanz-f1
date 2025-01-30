import React from "react";
import {Card, CardContent, Tooltip, Typography, Button} from "@mui/material";
import {Flight, Cloud, SmartDisplay} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";

import Quiz from "./Quiz";

const LogisticsPage = () => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                padding: "24px",
                maxWidth: "900px",
                margin: "auto",
                backgroundColor: "#f4f4f9",
                borderRadius: "12px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                }}
            >
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: "#4b7543",
                        color: "#fff",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        fontSize: "16px",
                        marginRight: "auto",
                    }}
                    onClick={() => navigate("/")} // Navigiert zur vorherigen Seite
                >
                    Zurück
                </Button>
                <Typography
                    variant="h4"
                    component="h1"
                    style={{
                        fontWeight: "bold",
                        color: "#333",
                        textAlign: "center",
                        flexGrow: 1,
                    }}
                >
                    Logistik
                </Typography>
            </div>

            <Card style={{marginBottom: "24px", borderRadius: "12px", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)"}}>
                <CardContent>
                    <Typography variant="body1" style={{lineHeight: 1.8, color: "#555"}}>
                        Die Logistik macht etwas weniger als die Hälfte des gesamten CO₂-Ausstosses der Formel 1 aus, in
                        Zahlen sind das <strong>109'285.2 Tonnen CO₂</strong>.
                    </Typography>
                    <div style={{display: "flex", gap: "24px", marginTop: "24px", justifyContent: "center"}}>
                        <Tooltip
                            title="Dafür könntest du 624’486’857 stunden videos Streamen, das sind 71’288 Jahre durchgehendes Streaming!!"
                            arrow
                            PopperProps={{
                                modifiers: [
                                    {
                                        name: "offset",
                                        options: {
                                            offset: [0, 10],
                                        },
                                    },
                                ],
                            }}
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        fontSize: "1rem",
                                        backgroundColor: "#4b7534",
                                        color: "white",
                                    },
                                },
                            }}
                        >
                            <SmartDisplay style={styles.icon}/>
                        </Tooltip>
                        <Tooltip
                            title="Dafür könntest du 42'032 mal von Zürich nach New York und zurück fliegen."
                            arrow
                            PopperProps={{
                                modifiers: [
                                    {
                                        name: "offset",
                                        options: {
                                            offset: [0, 10],
                                        },
                                    },
                                ],
                            }}
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        fontSize: "1rem",
                                        backgroundColor: "#4b7534",
                                        color: "white",
                                    },
                                },
                            }}
                        >
                            <Flight style={styles.icon}/>
                        </Tooltip>
                        <Tooltip
                            title="Dafür kannst du 25’415’162’790 Anfragen bei ChatGPT absetzen. Das sind 2’541 Tage ChatGPT weltweit, wenn durchschnittlich 10 Millionen abfragen pro Tag abgesetzt werden."
                            arrow
                            PopperProps={{
                                modifiers: [
                                    {
                                        name: "offset",
                                        options: {
                                            offset: [0, 10],
                                        },
                                    },
                                ],
                            }}
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        fontSize: "1rem",
                                        backgroundColor: "#4b7534",
                                        color: "white",
                                    },
                                },
                            }}
                        >
                            <Cloud style={styles.icon}/>
                        </Tooltip>
                    </div>
                </CardContent>
            </Card>

            <Card style={{marginBottom: "24px", borderRadius: "12px", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)"}}>
                <CardContent>
                    <Typography variant="h6" component="h2" gutterBottom style={{fontWeight: "bold", color: "#444"}}>
                        Die Herausforderung der Motorhomes
                    </Typography>
                    <Typography variant="body1" style={{lineHeight: 1.8, color: "#555"}}>
                        Ganz schön viel nur für das anliefern von Gütern die an einem solchen Rennwochende gebraucht
                        werden.
                        Oft vergisst man, dass nicht nur die Autos mittransportiert werden müssen, sondern auch die so
                        genannten Motorhomes. Die Motorhomes sind Container in denen während eines Rennwochendes die
                        Büros aufgebauen werden, die Küche sein wird, der Schlafplatz der Fahrer und Mitarbeiter und
                        vieles mehr.
                    </Typography>
                    <Typography variant="body1" style={{marginTop: "16px", lineHeight: 1.8, color: "#555"}}>
                        Nicht nur brauchen diese viel Platz und sind schwer, was die Umweltbelastung gleich nochmals
                        erhöht sondern müssen diese Container auch durchgehend mit Strom versorgt werden. 2022 jedoch,
                        hat die Formel 1 ebenfalls im Reglement angepasst, dass die mitgebrache Fracht um 32% reduziert
                        wird.
                    </Typography>
                </CardContent>
            </Card>

            <Card style={{borderRadius: "12px", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", marginBottom: "24px",}}>
                <CardContent>
                    <Typography variant="h6" component="h2" gutterBottom style={{fontWeight: "bold", color: "#444"}}>
                        Nachhaltige Initiativen der Formel 1
                    </Typography>
                    <Typography variant="body1" style={{lineHeight: 1.8, color: "#555"}}>
                        Damit der Anteil der Logistik immer weiter sinkt, arbeitet die Formel 1 stetig daran um
                        umweltfreundlichere Lösungen zu finden.
                    </Typography>
                    <Typography variant="body1" style={{marginTop: "16px", lineHeight: 1.8, color: "#555"}}>
                        Ab 2023 werden bei allen europäischen Rennen nur noch DHL-Trucks verwendet, die mit Biofuel,
                        einem umweltfreundlichen Sprit auf Basis von pflanzlichem Öl, laufen. Diese Massnahme allein hat
                        in der Rennsaison 2023 die CO₂-Emissionen um <strong>83%</strong> reduziert.
                    </Typography>
                    <Typography variant="body1" style={{marginTop: "16px", lineHeight: 1.8, color: "#555"}}>
                        Seit 2024 werden für interkontinentale Rennen Flugzeuge der DHL mit SAF (Sustainable Aviation
                        Fuel) eingesetzt, was den CO₂-Ausstoss um weitere <strong>80%</strong> senkt.
                    </Typography>
                </CardContent>
            </Card>

            <Card style={{borderRadius: "12px", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)"}}>
                <CardContent>
                    <Typography variant="body1" style={{marginTop: "16px", lineHeight: 1.8, color: "#555"}}>
                        Gut aufgepasst? Teste dein Wissen!
                    </Typography>
                    <Typography variant="body1" style={{marginTop: "16px", lineHeight: 1.8, color: "#555"}}>
                        <Quiz/>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

const styles = {
    icon: {
        fontSize: 40,
        color: "#8d1304",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
    },
    iconHover: {
        transform: "scale(1.2)",
    },
};

export default LogisticsPage;
