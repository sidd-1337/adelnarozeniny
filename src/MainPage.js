import React, { useRef, useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import ModalAlert from './ModalAlert';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Confetti from 'react-confetti';
import './BirthdayPage.css';

const BalloonGame = ({ onComplete }) => {
    const [balloons, setBalloons] = useState(Array.from({ length: 19 }, (_, i) => ({ id: i, popped: false })));

    const popBalloon = (id) => {
        setBalloons(balloons.map(balloon => balloon.id === id ? { ...balloon, popped: true } : balloon));
    };

    const allPopped = balloons.every(balloon => balloon.popped);

    useEffect(() => {
        if (allPopped) {
            onComplete();
        }
    }, [allPopped, onComplete]);

    return (
        <Container className="balloon-game" maxWidth="xs">
            <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '20px', color: '#7e3b3b' }}>
                <h4 className="random-font"> Popni všech svých 19 narozeninových balónků</h4>
            </Typography>
            <Box className="balloon-container">
                {balloons.map(balloon => (
                    <div
                        key={balloon.id}
                        className={`balloon ${balloon.popped ? 'popped' : ''}`}
                        onClick={() => popBalloon(balloon.id)}
                    >
                        🎈
                    </div>
                ))}
            </Box>
        </Container>
    );
};

const MainPage = () => {
    const [password, setPassword] = useState('');
    const [gameComplete, setGameComplete] = useState(false);
    const [showHappyBirthday, setShowHappyBirthday] = useState(false);
    const [showPasswordInput, setShowPasswordInput] = useState(false);
    const modalRef = useRef();
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        if (gameComplete) {
            setShowHappyBirthday(true);
            setTimeout(() => {
                setShowHappyBirthday(false);
                setShowPasswordInput(true);
            }, 3000);
        }
    }, [gameComplete]);

    const handleGameComplete = () => {
        setGameComplete(true);
    };

    const passwordHash = '$2a$12$Z9IXx9KeUeQ11Ww.8PTyXuPNBLQGCKEL/xeU3bgFzNsubwWYuUyB2';

    const checkPassword = () => {
        if (bcrypt.compareSync(password, passwordHash)) {
            login();
            navigate('/birthday-page');
        } else {
            modalRef.current.open();
        }
    };

    return (
        <Container className="bg" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
            {gameComplete && <Confetti />}
            {!gameComplete ? (
                <BalloonGame onComplete={handleGameComplete} />
            ) : showHappyBirthday ? (
                <Typography
                    variant="h2"
                    style={{ textAlign: 'center', marginBottom: '20px', color: '#7e3b3b', animation: 'pop 1s forwards' }}
                    className="happy-birthday"
                >
                   <h2 className="random-font"> Všechno nejlepší Adél!!</h2>
                </Typography>
            ) : showPasswordInput ? (
                <div className="fade-in">
                    <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '30px', color: '#7e3b3b' }}>
                        Zde zadej své heslo z dopisu :)
                    </Typography>
                    <TextField
                        type="password"
                        label="Heslo"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        InputLabelProps={{
                            style: { color: '#7e3b3b' },
                        }}
                        InputProps={{
                            style: { color: '#7e3b3b' },
                        }}
                        className="password-input"
                    />
                    <Button
                        variant="contained"
                        style={{ marginTop: '20px', backgroundColor: '#f7b7a3', color: '#7e3b3b' }}
                        onClick={checkPassword}
                        fullWidth
                        className="submit-button"
                    >
                        Potvrdit
                    </Button>
                </div>
            ) : null}
            <ModalAlert
                ref={modalRef}
                title="Špatné heslo:/"
                content="Bohužel, toto není to správné heslo, zkus to ještě jednou."
            />
        </Container>
    );
};

export default MainPage;
