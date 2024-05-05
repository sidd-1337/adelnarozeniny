// BirthdayPage.js
import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, TextField, Button, Modal, Box, ButtonGroup } from '@mui/material';
import bcrypt from 'bcryptjs'; // Import bcrypt.js library
import './BirthdayPage.css';

const BirthdayPage = () => {
    const [flowers] = useState([
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 1' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 1' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 1' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 1' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 1' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 1' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        { passwordHash: '$2a$10$7z6tB4S3xgNVd9BmuGug6uJG4RfzwZ2vAnGYgS4pxsvS7h9/gB7v2', message: 'Message for Flower 2' },
        // Add more flowers with password hashes and messages as needed
        // Add additional flowers as needed
    ]);

    const [showMessage, setShowMessage] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordEntered, setPasswordEntered] = useState(false);
    const [currentMessage, setCurrentMessage] = useState('');

    useEffect(() => {
        const storedPassword = localStorage.getItem('birthdayPagePassword');
        if (storedPassword) {
            setPasswordEntered(true);
        }
    }, []);

    const handleFlowerClick = (index) => {
        setShowMessage(true);
        setCurrentMessage(flowers[index].message);
    };

    const handleSubmit = () => {
        const flower = flowers.find((flower) => bcrypt.compareSync(password, flower.passwordHash));
        if (flower) {
            setShowPopup(true);
            localStorage.setItem('birthdayPagePassword', password);
            setPasswordEntered(true);
        } else {
            alert('Incorrect password');
        }
    };

    return (
        <Container className="bg">
            <Grid container spacing={3} justifyContent="space-between" alignItems="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={10} md={10} container justifyContent="center" alignItems="center">
                    {showMessage && (
                        <Paper className="message" elevation={3} style={{ padding: '20px', textAlign: 'center', width: '300px' }}>
                            <p>{currentMessage}</p>
                            {!passwordEntered && (
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <TextField
                                        type="password"
                                        label="Enter password"
                                        variant="outlined"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{ marginBottom: '20px' }}
                                    />
                                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                                </Box>
                            )}
                        </Paper>
                    )}
                    <Modal open={showPopup}>
                        <Paper className="popup" elevation={3} style={{ padding: '20px', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <p>More text with some sweet words...</p>
                        </Paper>
                    </Modal>
                </Grid>
                <Grid item xs={15} sm={2} md={2} container justifyContent="flex-end" alignItems="flex-start">
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical button group"
                    >
                        {/* Create flowers dynamically */}
                        {flowers.map((flower, index) => (
                            <Button
                                key={index}
                                variant="outlined"
                                className="flower-button"
                                onClick={() => handleFlowerClick(index)}
                            >
                                Flower {index + 1}
                            </Button>
                        ))}
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BirthdayPage;
