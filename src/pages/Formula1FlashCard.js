import React, { useState } from 'react';
import { Card, CardContent, Typography   } from '@mui/material';
import { styled } from '@mui/material/styles';
import QuestionMarkIcon from '@mui/icons-material/HelpOutline';
import LightbulbIcon from '@mui/icons-material/Lightbulb';


const FlipCard = styled(Card)(({ flipped }) => ({
    width: 300,
    height: 200,
    perspective: '1000px',
    transformStyle: 'preserve-3d',
    position: 'relative',
    transition: 'transform 0.6s',
    transform: flipped ? 'rotateY(180deg)' : 'none',
}));

const CardInner = styled('div')(({ theme, flipped }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
    transform: flipped ? 'rotateY(180deg)' : 'none',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const CardFront = styled(CardContent)({
    position: 'absolute',
    backfaceVisibility: 'hidden',
});

const CardBack = styled(CardContent)({
    position: 'absolute',
    transform: 'rotateY(180deg)',
    backfaceVisibility: 'hidden',
});

const Flashcard = ({ question, answer }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <FlipCard onClick={handleFlip} flipped={flipped}>
            <CardInner flipped={flipped}>
                <CardFront>
                    <Typography variant="h6" component="div" style={{width: '100%'}}>
                        <QuestionMarkIcon style={{color: 'blue'}}/>
                        <br/>
                        {question}
                    </Typography>
                </CardFront>
                <CardBack>
                    <Typography variant="h6" component="div" style={{transform: 'rotateY(180deg)'}}>
                        <LightbulbIcon style={{ color: 'orange' }} />
                        <br/>
                        {answer}
                    </Typography>
                </CardBack>
            </CardInner>
        </FlipCard>
    );
};

const Formula1Flashcards = () => {
    const cards = [
        { question: 'Wer ist der erfolgreichste F1-Fahrer?', answer: 'Lewis Hamilton' },
        { question: 'Wie viele Fahrer befinden sich in einem Team?', answer: 'Zwei Fahrer' },
        { question: 'Was ist ein Grand Prix?', answer: 'Ein F1-Rennen auf einer bestimmten Strecke' },
        // Weitere Karten können hier hinzugefügt werden
    ];

    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {cards.map((card, index) => (
                <Flashcard key={index} question={card.question} answer={card.answer} />
            ))}
        </div>
    );
};

export default Formula1Flashcards;
