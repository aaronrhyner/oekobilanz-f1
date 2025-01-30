import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FlipCard = styled(Card)(({ flipped }) => ({
    width: 270,
    height: 180,
    perspective: '1000px',
    transformStyle: 'preserve-3d',
    position: 'relative',
    transition: 'transform 0.6s',
}));

const CardInner = styled('div')(({ flipped }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
    transform: flipped ? 'rotateY(180deg)' : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const CardFront = styled(CardContent)({
    position: 'absolute',
    backfaceVisibility: 'hidden',
    backgroundColor: '#8d1304', // Farbe für die Vorderseite
    color: '#FEFAE0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    textAlign: 'center',
});

const CardBack = styled(CardContent)({
    position: 'absolute',
    transform: 'rotateY(180deg)',
    backfaceVisibility: 'hidden',
    backgroundColor: '#4b7543', // Farbe für die Rückseite
    color: '#FEFAE0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    textAlign: 'center',
});

const FlashCards = ({ question, answer }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <FlipCard onClick={handleFlip} flipped={flipped}>
            <CardInner flipped={flipped}>
                <CardFront>
                    <Typography variant="h6" component="div">
                        {question}
                    </Typography>
                </CardFront>
                <CardBack>
                    <Typography variant="h6" component="div">
                        {answer}
                    </Typography>
                </CardBack>
            </CardInner>
        </FlipCard>
    );
};

const Flashcards = () => {
    const cards = [
        { question: 'British GP', answer: 'Silverstone ist komplett durch grüne Energie und mithilfe von 2746 Solar Panels betrieben worden.' },
        { question: 'Bahrain GP', answer: 'Seit 2024 nur mit Solarstrom betrieben. Zusätzlich über 100000 Petflaschen eingespart durch Auffüllstationen für Wasser.' },
        { question: 'Singapur GP', answer: 'Will ab dem Jahr 2025 in 50% der Generatoren grüner Sprit brauchen. Bis 2028 wollen sie 100% grüner Sprit verwenden.' },
    ];

    return (
        <div style={styles.FlashCardsDiv}>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                {cards.map((card, index) => (
                    <FlashCards key={index} question={card.question} answer={card.answer} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    FlashCardsDiv: {
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '15px',
        flexWrap: 'wrap',
    },
}

export default Flashcards;