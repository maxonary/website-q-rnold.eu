import express from 'express';
//same as const express = require('express');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Welcome to qr-nold. My name is Arnold and I am a QR code generator.');
    }
);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`http://localhost:${port}`);
    }
);

