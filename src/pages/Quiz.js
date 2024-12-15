import React from 'react';
import Formula1FlashCard from "./Formula1FlashCard";

const Quiz = () => {
    return (
        <div>

            <div style={styles.FlashCardsDiv}>
                <Formula1FlashCard></Formula1FlashCard>
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
    },
}

export default Quiz;
