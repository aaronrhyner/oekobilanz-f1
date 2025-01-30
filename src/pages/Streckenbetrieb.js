import React from "react";
import {Button, Card, CardContent, Typography} from "@mui/material";
import FlashCards from "./FlashCards";
import {useNavigate} from "react-router-dom";

const Streckenbetrieb = () => {
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
                    Streckenbetrieb
                </Typography>
            </div>
            <Card
                style={{
                    marginBottom: "24px",
                    borderRadius: "12px",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <CardContent>
                    <Typography variant="body1" style={{lineHeight: 1.8, color: "#555"}}>
                        Im Durchschnitt kommen an ein Rennwochenende <strong>268'465 Zuschauer</strong> die
                        Königsklasse des
                        Motorsports Live zu erleben. Um diese tausende von Zuschauern Versorgen zu können braucht es
                        unmengen an Infrastruktur wie Tribünen, Transportmöglichkeiten, Toiletten, Versorgung und
                        Unterhaltung abseits vom Rennen. All diese Dinge über 3-4 Tage zu betreiben ist ein riesiger
                        Aufwand der sehr viel Co2 aussstösst.
                    </Typography>
                </CardContent>
            </Card>

            <Card
                style={{
                    marginBottom: "24px",
                    borderRadius: "12px",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h2"
                        gutterBottom
                        style={{fontWeight: "bold", color: "#444"}}
                    >
                        Infrastruktur
                    </Typography>
                    <Typography variant="body1" style={{lineHeight: 1.8, color: "#555"}}>
                        Abgesehen von den Zuschauern, muss auch für die Rennteams und deren Mitarbeiter reichlich
                        Infrastruktur mitgebracht werden. Dazu gehören Dinge wie wie Motorhomes, Garagen der Teams, die
                        Pitwall, der Paddock und die Zentrale über die die TV Übertragungen laufen.
                    </Typography>
                </CardContent>
            </Card>

            <Card
                style={{
                    marginBottom: "24px",
                    borderRadius: "12px",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h2"
                        gutterBottom
                        style={{fontWeight: "bold", color: "#444"}}
                    >
                        Neue Systeme
                    </Typography>
                    <Typography variant="body1" style={{lineHeight: 1.8, color: "#555"}}>
                        Doch ab 2025 sollten diese Faktoren des Co2 Ausstosses bei europäischen Rennen nicht mehr ins
                        Gewicht fallen, denn ab 2025 werden alle europäischen Rennstrecken mit einem neuen Energiesystem
                        versorgt. Dieses System, welches von der Aggreko bereitgestellt wird, nutzt erneuerbare Energien
                        wie Solarpanels, Batteriespeichersysteme, Biokraftstoffe und hydriertes Pflanzenöl.
                        Aufgrund dieses Systems müssen die Teams und die Rennleitung keine eigenen Generatoren
                        mitbringen sondern die ganze Strecke hat ein Einheitliches System.
                    </Typography>
                    <Typography variant="body1" style={{lineHeight: 1.8, color: "#555"}}>
                        2023 wurden in Österreich erstmals Tests mit diesem System gemacht und es konnten über 90% der
                        Co2 Emissionen im vergleich zum Vorjahr eingespart werden.
                    </Typography>
                </CardContent>
            </Card>

            <Card
                style={{
                    marginBottom: "24px",
                    borderRadius: "12px",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h2"
                        gutterBottom
                        style={{fontWeight: "bold", color: "#444"}}
                    >
                        Einige Strecken haben die Sache aber in eigene Hand genommen
                    </Typography>

                    <FlashCards/>

                </CardContent>
            </Card>

            <Card
                style={{
                    marginBottom: "24px",
                    borderRadius: "12px",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h2"
                        gutterBottom
                        style={{fontWeight: "bold", color: "#444"}}
                    >
                        Effizienzsteigerungen bei Reisen und Teams
                    </Typography>
                    <Typography variant="body1" style={{lineHeight: 1.8, color: "#555"}}>
                        Ein Faktor, welcher von der Formel 1 selber entschieden bei allen Rennen besser wird, sind die
                        Reisen und die Versorgung der Mitarbeiter. Seit dem Jahr 2022 reisen im Schnitt 150 Mitarbeiter
                        weniger pro Rennen mit also maximal noch 80 Mitarbeiter pro Team.
                    </Typography>
                </CardContent>
            </Card>


        </div>
    );
};

export default Streckenbetrieb;
