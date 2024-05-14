import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

class ModalAlert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    open = () => {
        this.setState({ open: true });
    };

    close = () => {
        this.setState({ open: false });
        if (this.props.onClose) {
            this.props.onClose();
        }
    };

    render() {
        const { title, content, buttonText } = this.props;
        const dialogStyles = {
            borderRadius: '20px', // More rounded corners
            backgroundColor: 'rgb(253 215 203)', // Light peach background
            color: '#7e3b3b', // Dark peach text for readability
            padding: '20px', // More padding for content
            border: '4px solid #f7b7a3', // Stylish border matching the theme
        };

        return (
            <Dialog
                open={this.state.open}
                onClose={this.close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    style: dialogStyles,
                }}
            >
                <DialogTitle id="alert-dialog-title" style={{ color: '#7e3b3b' }}>
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ color: '#7e3b3b' }}>
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.close}
                        style={{ backgroundColor: '#f7b7a3', color: '#7e3b3b', borderRadius: '10px' }}
                        autoFocus
                    >
                        {buttonText || 'OK'}
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default ModalAlert;
