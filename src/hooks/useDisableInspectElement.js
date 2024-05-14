import { useEffect } from 'react';

const useDisableInspectElement = () => {
    useEffect(() => {
        const handleContextMenu = (event) => {
            event.preventDefault();
        };

        const handleKeyDown = (event) => {
            if (event.keyCode === 123 || // F12
                (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) || // Ctrl + Shift + I/J
                (event.ctrlKey && event.keyCode === 85)) { // Ctrl + U
                event.preventDefault();
            }
        };

        // Attach the event listeners
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup function
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
};

export default useDisableInspectElement;
