import React from "react";
import {Card, CardContent, Typography, Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Lueckentext from "./Lueckentext";

const NetZero2030 = () => {
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
                    NetZero 2030
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
                        Vom Jahr 2030 an will die Formel 1 als Sport das Image als Umweltschänder Sport endgültig
                        ablegen und lancierte im Jahr 2018 in Zusammenarbeit mit dem Intergovernmental Panel on Climate
                        Change (IPCC) ihre NetZero 2030 Strategie.
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
                      Was bedeutet das?
                    </Typography>
                    <Typography variant="body1" style={{lineHeight: 1.8, color: "#555"}}>
                        Das NetZero Ziel bedeutet, dass für jedes Kilo Co2 welches ausgestossen wurde, auch ein Kilo
                        eingespart oder auf andere Art wieder gutgemacht wird. Das heisst einfach gesagt, der Sport darf
                        nur die Menge an Co2 freisetzen, welche der Atmosphäre zuvor entzogen wurden. Somit kann der
                        Sport weiter Millionen von Menschen begeistern ohne dem Klima zu schaden.
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
                        Klimaneutraler Treibstoff ab 2026
                    </Typography>
                    <Typography variant="body1" style={{lineHeight: 1.8, color: "#555"}}>
                        Im Rahmen der Initiative werden viele Aspekte des Sportes überarbeitet. Zum Beispiel fahren ab
                        2026 die Autos nur noch mit Klimaneutralem Sprit, die Fabriken und Werke der Teams sind mit
                        erneuerbaren Energien Betrieben und es werden ultra Effiziente Technologien eingesetzt, welche
                        die Co2 Emissionen bei Transport und Reisen senken.

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
                        Vorbildrolle im Klimaschutz
                    </Typography>
                    <Typography variant="body1" style={{lineHeight: 1.8, color: "#555"}}>
                        Mit diesem Plan setzt die Formel 1 ein Zeichen für die Nachhaltigkeit und positioniert sich ganz
                        klar im Kampf gegen den Klimawandel und nimmt eine Vorbildrolle für andere weltbekannte
                        Sportarten ein.
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
                        Teste dein Wissen!
                    </Typography>
                    <Typography variant="body1" style={{lineHeight: 1.8, color: "#555"}}>
                       <Lueckentext/>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default NetZero2030;