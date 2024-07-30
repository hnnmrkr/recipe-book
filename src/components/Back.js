import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <button className="back-btn" onClick={goBack}>
            Go Back
        </button>
    );
};

export default BackButton;
