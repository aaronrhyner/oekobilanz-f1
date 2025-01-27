import React, {useState} from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

const FlipCard = styled(Card)(({flipped}) => ({
    width: 300,
    height: 200,
    perspective: '1000px',
    transformStyle: 'preserve-3d',
    position: 'relative',
    transition: 'transform 0.6s',
    transform: flipped ? 'rotateY(180deg)' : 'none',
}));

const CardInner = styled('div')(({flipped}) => ({
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
});

const CardBack = styled(CardContent)({
    position: 'absolute',
    transform: 'rotateY(180deg)',
    backfaceVisibility: 'hidden',
    backgroundColor: '#004d8d', // Farbe für die Rückseite
    color: '#FEFAE0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
});

const FlashCards = ({question, answer}) => {
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
        {question: 'Wer ist der erfolgreichste F1-Fahrer?', answer: 'Lewis Hamilton'},
        {question: 'Wie viele Fahrer befinden sich in einem Team?', answer: 'Zwei Fahrer'},
        {question: 'Was ist ein Grand Prix?', answer: 'Ein F1-Rennen auf einer bestimmten Strecke'},
        // Weitere Karten können hier hinzugefügt werden
    ];

    return (
        <div style={styles.FlashCardsDiv}>
            <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                {cards.map((card, index) => (
                    <FlashCards key={index} question={card.question} answer={card.answer}/>
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
        gap: '20px',
        flexWrap: 'wrap',
    },
}

export default Flashcards;