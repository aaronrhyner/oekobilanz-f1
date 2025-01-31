import React from "react";
import ModelComponent from "../components/ModelComponent";
import textsData from "../data/text.json";
import Footer from "../components/Footer";
import {Box, Button, Typography} from "@mui/material";

const Home = () => {
    return (
        <div style={{...styles.container}}>
            <header style={styles.header}>
                <h1 style={styles.title}>Auswirkungen der Formel 1 auf die Umwelt</h1>
            </header>
            <div style={styles.modelWrapper}>
                <div style={styles.canvasContainer}>
                    <ModelComponent/>
                </div>
            </div>
            <div style={styles.textContainer}>

                <div style={styles.imageTextContainer}>
                    <Typography variant="body1" style={styles.imageText}>
                        Gesamthaft wurden in der 2023 Saison der Formel 1 <strong>223'031 Tonnen</strong> Co2 in die
                        Atmosphäre ausgestossen.
                        <li>
                            <strong>109'285.2 Tonnen</strong> Co2 stammen von der Logistik der Formel 1.
                        </li>
                        <li>
                            <strong>64'678.99 Tonnen</strong> Co2 stammen von den Reisen der Mitarbeitern.
                        </li>
                        <li>
                            <strong>26'763.72 Tonnen</strong> Co2 werden durch den Streckenbetrieb freigesetzt.
                        </li>
                        <li>
                            <strong> 22'303.1 Tonnen</strong> Co2 kommen von den Werken und Büros der Formel 1 Teams.
                        </li>
                        <li>
                            <strong> 1.99 Tonnen</strong> Co2 stammen effektiv von den Rennautos.
                        </li>

                    </Typography>
                    <img
                        src="/pieChartEmission.png"
                        alt="Kuchendiagramm der Co2 Emissionen"
                        style={styles.image}
                    />
                </div>
                {textsData.map((text, index) => (
                    <React.Fragment key={text.id}>
                        <Box style={styles.blockContainer}>
                            <Typography variant="h5" style={styles.blockTitle}>
                                {text.title}
                            </Typography>
                            <Typography variant="body1" style={styles.blockText}>
                                {text.previewText}
                            </Typography>

                            <Button
                                variant="contained"
                                color="primary"
                                style={styles.button}
                                href={`/details/${text.id}`}
                            >
                                ➔
                            </Button>
                        </Box>
                        <Typography variant="h6" style={styles.quote}>
                            {text.quote}
                        </Typography>
                    </React.Fragment>
                ))}
                {/* Additional quotes added throughout the page */}
            </div>
            <div style={{ width: "80%", height: "1px", backgroundColor: "black", margin: "20px 0" }}></div>
            <div style={{width: '100%'}}>
                <Footer/>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f4f8",
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: "#333",
        overflow: "auto",
    },
    header: {
        textAlign: "center",
        marginBottom: "20px",
        marginTop: "20px",
    },
    title: {
        fontSize: "2.5rem",
        margin: "0",
        color: "#ff1e00",
    },
    modelWrapper: {
        width: "80%",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        borderRadius: "15px",
        padding: "20px",
        position: "relative",
    },
    canvasContainer: {
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
    },
    textContainer: {
        width: "80%",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    shortText: {
        marginBottom: "20px",
    },
    imageTextContainer: {
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
    },
    imageText: {
        flex: 1,
        marginRight: "20px",
    },
    image: {
        width: "45%",
        height: "auto",
    },
    summaryText: {
        marginBottom: "20px",
    },
    blockContainer: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
        padding: "15px",
        backgroundColor: "#f9f9f9",
        borderRadius: "25px",
        border: "1px solid #ddd",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    blockTitle: {
        marginBottom: "10px",
        fontWeight: "bold",
        fontSize: "1.2rem",
        color: "#333",
    },
    blockText: {
        marginBottom: "10px",
    },
    button: {
        alignSelf: "flex-end",
        backgroundColor: "#8d1304",
        color: "#fff",
        borderRadius: "20px",
        padding: "5px 15px",
        textTransform: "none",
    },
    quote: {
        textAlign: "center",
        fontStyle: "italic",
        margin: "20px 0",
        color: "#555",
        marginTop: '0px',
        marginBottom: '50px',
        width: '70%'
    },
};

export default Home;
