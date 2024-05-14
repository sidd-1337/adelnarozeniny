import React, {useState, useEffect, useRef} from 'react';
import {Container, Grid, Paper, TextField, Button, Modal, IconButton} from '@mui/material';
import bcrypt from 'bcryptjs';
import './BirthdayPage.css';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FloatingHearts from './FloatingHearts';
import ModalAlert from './ModalAlert';
import img1 from './flowers/img1.png';
import img2 from './flowers/img(20).png';
import img3 from './flowers/img(3).png';
import img4 from './flowers/img(4).png';
import img5 from './flowers/img(5).png';
import img6 from './flowers/img(6).png';
import img7 from './flowers/img(7).png';
import img8 from './flowers/img(8).png';
import img9 from './flowers/img(9).png';
import img10 from './flowers/img(10).png';
import img11 from './flowers/img(11).png';
import img12 from './flowers/img(12).png';
import img13 from './flowers/img(13).png';
import img14 from './flowers/img(14).png';
import img15 from './flowers/img(15).png';
import img16 from './flowers/img(16).png';
import img17 from './flowers/img(17).png';
import img18 from './flowers/img(18).png';
import img19 from './flowers/img(19).png';
import FlowerMessage1 from './FlowerMessages/FlowerMessage1';
import FlowerMessage2 from './FlowerMessages/FlowerMessage2';
import FlowerMessage3 from './FlowerMessages/FlowerMessage3';
import FlowerMessage4 from './FlowerMessages/FlowerMessage4';
import FlowerMessage5 from './FlowerMessages/FlowerMessage5';
import FlowerMessage6 from './FlowerMessages/FlowerMessage6';
import FlowerMessage7 from './FlowerMessages/FlowerMessage7';
import FlowerMessage8 from './FlowerMessages/FlowerMessage8';
import FlowerMessage9 from './FlowerMessages/FlowerMessage9';
import FlowerMessage10 from './FlowerMessages/FlowerMessage10';
import FlowerMessage11 from './FlowerMessages/FlowerMessage11';
import FlowerMessage12 from './FlowerMessages/FlowerMessage12';
import FlowerMessage13 from './FlowerMessages/FlowerMessage13';
import FlowerMessage14 from './FlowerMessages/FlowerMessage14';
import FlowerMessage15 from './FlowerMessages/FlowerMessage15';
import FlowerMessage16 from './FlowerMessages/FlowerMessage16';
import FlowerMessage17 from './FlowerMessages/FlowerMessage17';
import FlowerMessage18 from './FlowerMessages/FlowerMessage18';
import FlowerMessage19 from './FlowerMessages/FlowerMessage19';

const BirthdayPage = () => {
    const flowerSize = { width: 70, height: 70 };
    const existingPositions = [];
    const checkOverlap = (rect1, rect2) => {
        return !(
            rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom
        );
    };

    const generateRandomPosition = (existingPositions, flowerSize) => {
        let position;
        let attempts = 0;
        const maxAttempts = 7000; // Increase the maximum attempts

        do {
            position = {
                top: Math.random() * 85, // Ensure the flowers stay within the viewport
                left: Math.random() * 85, // Ensure the flowers stay within the viewport
            };

            const newRect = {
                top: position.top * window.innerHeight / 100,
                left: position.left * window.innerWidth / 100,
                right: (position.left + flowerSize.width) * window.innerWidth / 100,
                bottom: (position.top + flowerSize.height) * window.innerHeight / 100,
            };

            const overlapping = existingPositions.some(existingRect => checkOverlap(existingRect, newRect));

            if (!overlapping) {
                existingPositions.push(newRect);
                break;
            }

            attempts++;
        } while (attempts < maxAttempts);

        return {
            top: `${position.top}vh`,
            left: `${position.left}vw`,
        };
    };


    const [flowers] = useState([
        { src: img1, passwordHash: '$2a$12$Lv8K.F6Y7vAakS56Ne81CuixckVekBug4QSRSHA2XA.3J47nrYhfu', message: 'Message for Flower 1', component: <FlowerMessage1/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img2, passwordHash: '$2a$12$Lv8K.F6Y7vAakS56Ne81CuixckVekBug4QSRSHA2XA.3J47nrYhfu', message: 'Message for Flower 2', component: <FlowerMessage2/>, position: generateRandomPosition(existingPositions, flowerSize)  },
        { src: img3, passwordHash: '$2a$12$1P4jE/pzkXp7/g9kZ3JqC.Ds/SdjbkXTrZjcLf8J7z2vZB8yFZPPO', message: 'Message for Flower 3', component: <FlowerMessage3/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img4, passwordHash: '$2a$12$Ptyk0V1JnM0g6OFEdPN0pu5Kxu6ozjq0LUFA/r12pm4CwckNPgEZS', message: 'Message for Flower 4', component: <FlowerMessage4/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img5, passwordHash: '$2a$12$fs5p3Q62f2J2K8e/u6CkeOlyI18xGFs5n8y/pwa7J/FkxJW2E8ELO', message: 'Message for Flower 5', component: <FlowerMessage5/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img6, passwordHash: '$2a$12$B3eBv5SDZ8mT8x/8X3WQ.e1Hc.6iRULRpA/p5ftcz.ZfCeu6ntrL6', message: 'Message for Flower 6', component: <FlowerMessage6/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img7, passwordHash: '$2a$12$zRu19OMpExv4uVeS8/FlC.ebUP6mFoa7km5sZ5tA/O/jtSO07F.mK', message: 'Message for Flower 7', component: <FlowerMessage7/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img8, passwordHash: '$2a$12$.kpH64FkM0JH7YPJ6VRL1uZbbjF3ULBaj6y/k0oj7lG.K0YcL7/.a', message: 'Message for Flower 8', component: <FlowerMessage8/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img9, passwordHash: '$2a$12$K8UNN6LkZL91JzUbUe.pfu2Xul3V.k3v41Kld1HlqV4Z8AldH17ye', message: 'Message for Flower 9', component: <FlowerMessage9/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img10, passwordHash: '$2a$12$kX2Qy5b4W9NLKkGeU5WyHu8cUl3XpkIaS5iZPl5HptW8bVTAop9ke', message: 'Message for Flower 10', component: <FlowerMessage10/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img11, passwordHash: '$2a$12$jiPB4F6VSiOUoOQKHhI7Reu3eQ0w5hE/S8Gbld4VRnnk8xTGymDAy', message: 'Message for Flower 11', component: <FlowerMessage11/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img12, passwordHash: '$2a$12$kh1J0K9y4kh/LeaaAEZ6Ee5BqS0cfUXFX3B84VoRxlKfuMGgglz0.', message: 'Message for Flower 12', component: <FlowerMessage12/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img13, passwordHash: '$2a$12$7EMIWnvU7EBK1edP3wI9WOmiz0ROnQ3tSBHR4hWRgHgKIBYa.NAX.', message: 'Message for Flower 13', component: <FlowerMessage13/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img14, passwordHash: '$2a$12$RKZmV5T92UJrSk7Q3OmdnOg.e1kJKoVDotA72NrE0Z/DQJYwivYBO', message: 'Message for Flower 14', component: <FlowerMessage14/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img15, passwordHash: '$2a$12$GI5lhD0/z6Jl9IQk.Ds0O./.xZ64MbB3O8vW69ZfHcRjEDtXLfShO', message: 'Message for Flower 15', component: <FlowerMessage15/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img16, passwordHash: '$2a$12$A3qkx2H9oTAJ8OFZ9W8SEuUgtuJ/uwQjkB7PUZRmJ6udDRB.gGm2K', message: 'Message for Flower 16', component: <FlowerMessage16/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img17, passwordHash: '$2a$12$uTc89YrHJ7YDa2Rrc5Yr8eI/sDfJ3mTXzWQ4Sm5IH95MsisxWj3XG', message: 'Message for Flower 17', component: <FlowerMessage17/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img18, passwordHash: '$2a$12$Rf5B/ZXbK8q5L5gbsFH0SOvLNmKuT5G7qaI6zHd/y3m3QIGaVgO/q', message: 'Message for Flower 18', component: <FlowerMessage18/>, position: generateRandomPosition(existingPositions, flowerSize) },
        { src: img19, passwordHash: '$2a$12$ecybeG/ojEMutAEF.1FGSe0w1zOPlJt17JD9F.Ci/b5zJQ8C/jzTC', message: 'Message for Flower 19', component: <FlowerMessage19/>, position: generateRandomPosition(existingPositions, flowerSize) },
    ]);

    const [showMessage, setShowMessage] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordEntered, setPasswordEntered] = useState(false);
    const [currentMessage, setCurrentMessage] = useState('');
    const [currentComponent, setCurrentComponent] = useState('');
    const [selectedFlowerIndex, setSelectedFlowerIndex] = useState(null);
    const modalRef = useRef();

    useEffect(() => {
        const storedPassword = localStorage.getItem('birthdayPagePassword');
        if (storedPassword) {
            setPasswordEntered(true);
        }
    }, []);

    const handleFlowerClick = (index) => {
        setShowMessage(true);
        setCurrentMessage(flowers[index].message);
        setSelectedFlowerIndex(index);
    };
    const handleHelpClick = () => {
        modalRef.current.open()
    };

    const handleSubmit = () => {
        if (selectedFlowerIndex !== null) {
            const flower = flowers[selectedFlowerIndex];
            if (bcrypt.compareSync(password, flower.passwordHash)) {
                setShowPopup(true);
                localStorage.setItem('birthdayPagePassword', password);
                setPasswordEntered(true);
                setShowMessage(false);
                setCurrentComponent(flower.component);
            } else {
                modalRef.current.open();
            }
        }
    };

    const handleClose = () => {
        setShowMessage(false);
        setShowPopup(false);
        setPassword('');  // Clear the password field
    };
    return (
        <body>
        <IconButton className="help-button" onClick={handleHelpClick}>
            <HelpOutlineIcon fontSize="large" />
        </IconButton>
        <FloatingHearts />
        <Container className="bg">
            <Grid container spacing={3} justifyContent="space-between" alignItems="center" style={{ width: '100%', height: '100%' }}>
                {flowers.map((flower, index) => (
                    <img
                        key={index}
                        src={flower.src}
                        alt={`Flower ${index + 1}`}
                        className="flower"
                        style={{ position: 'absolute', top: flower.position.top, left: flower.position.left }}
                        onClick={() => handleFlowerClick(index)}
                    />
                ))}
                <Grid item xs={12} sm={8} md={8} container justifyContent="center" alignItems="center">
                    {showMessage && (
                        <Modal open={showMessage} onClose={handleClose}>
                            <Paper elevation={3} style={{
                                padding: '50px',
                                textAlign: 'center',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                borderRadius: '20px',
                                backgroundColor: 'rgb(253 215 203)',
                                color: 'rgb(178 108 108)',
                                border: '4px solid #f7b7a3',
                                marginBottom: '10px'
                            }}>
                                <h3 style={{ marginBottom: '20px' }}>{currentMessage}</h3>
                                <TextField
                                    type="password"
                                    label="Enter password"
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
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                    <Button
                                        variant="contained"
                                        style={{ backgroundColor: '#f7b7a3', color: '#7e3b3b', borderRadius: '10px', marginRight: '25px', marginTop: '10px' }}
                                        onClick={handleSubmit}
                                        className="submit-button"
                                    >
                                        Submit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        style={{ backgroundColor: '#f7b7a3', color: '#7e3b3b', borderRadius: '10px', marginTop: '10px'  }}
                                        onClick={handleClose}
                                        className="submit-button"
                                    >
                                        Close
                                    </Button>
                                </div>
                            </Paper>
                        </Modal>
                    )}
                    {showPopup && (
                        <Modal open={showPopup} onClose={handleClose}>
                            <Paper elevation={3} style={{
                                padding: '50px',
                                textAlign: 'center',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                borderRadius: '20px',
                                backgroundColor: 'rgb(253 215 203)',
                                color: 'rgb(178 108 108)',
                                border: '4px solid #f7b7a3',
                                marginBottom: '10px'
                            }}>
                                <h3 style={{ marginTop: '-25px' }}>Zadala si správné heslo ❤️</h3>
                                <div style={{marginTop:'30px'}}> {currentComponent}</div>
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: '#f7b7a3', color: '#7e3b3b', borderRadius: '10px', marginBottom: '-25px'  }}
                                    onClick={handleClose}
                                    className="submit-button"
                                >
                                    Close
                                </Button>
                            </Paper>
                        </Modal>
                    )}
                </Grid>

            </Grid>
            <ModalAlert
                ref={modalRef}
                title="Špatné heslo:/"
                content="Bohužel, toto není to správné heslo, zkus to ještě jednou."
            />
        </Container>
        </body>
    );
};

export default BirthdayPage;
