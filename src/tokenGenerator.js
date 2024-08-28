import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
} from '@mui/material';

function TokenGenerator() {
  const [blueTokens, setBlueTokens] = useState(0);
  const [bluePrefix, setBluePrefix] = useState('');
  const [bluePerRow, setBluePerRow] = useState(0);
  const [redTokens, setRedTokens] = useState(0);
  const [redPrefix, setRedPrefix] = useState('');
  const [redPerRow, setRedPerRow] = useState(0);
  const [tokens, setTokens] = useState([]);

  const handleGenerate = () => {
    const newTokens = [];

    // Generate Blue Tokens
    for (let i = 1; i <= blueTokens; i++) {
      newTokens.push({ color: 'blue', label: `${bluePrefix}${i}` });
    }

    // Generate Red Tokens
    for (let i = 1; i <= redTokens; i++) {
      newTokens.push({ color: 'red', label: `${redPrefix}${i}` });
    }

    setTokens(newTokens);
  };

  const handleClear = () => {
    setBlueTokens(0);
    setBluePrefix('');
    setBluePerRow(0);
    setRedTokens(0);
    setRedPrefix('');
    setRedPerRow(0);
    setTokens([]);
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h6" gutterBottom>
        Token Generator App
      </Typography>

      <TextField
        label="Number of Blue Tokens"
        type="number"
        fullWidth
        margin="normal"
        value={blueTokens}
        onChange={(e) => setBlueTokens(Number(e.target.value))}
      />
      <TextField
        label="Blue Token Prefix"
        fullWidth
        margin="normal"
        value={bluePrefix}
        onChange={(e) => setBluePrefix(e.target.value)}
      />
      <TextField
        label="Blue Tokens per Row"
        type="number"
        fullWidth
        margin="normal"
        value={bluePerRow}
        onChange={(e) => setBluePerRow(Number(e.target.value))}
      />

      <TextField
        label="Number of Red Tokens"
        type="number"
        fullWidth
        margin="normal"
        value={redTokens}
        onChange={(e) => setRedTokens(Number(e.target.value))}
      />
      <TextField
        label="Red Token Prefix"
        fullWidth
        margin="normal"
        value={redPrefix}
        onChange={(e) => setRedPrefix(e.target.value)}
      />
      <TextField
        label="Red Tokens per Row"
        type="number"
        fullWidth
        margin="normal"
        value={redPerRow}
        onChange={(e) => setRedPerRow(Number(e.target.value))}
      />

<Button variant="contained" onClick={handleGenerate} style={{ marginRight: '10px', backgroundColor: 'lightgray', color:'black',  border: '2px solid black', textTransform: 'none' }}>
  Generate
</Button>
<Button variant="contained" onClick={handleClear} style={{ backgroundColor: 'lightgray', color:'black',  border: '2px solid black', textTransform: 'none'}}>
  Clear
</Button>


      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {tokens.map((token, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={Math.floor(12 / (token.color === 'blue' ? bluePerRow : redPerRow))}
            key={index}
          >
            <Box
              style={{
                backgroundColor: token.color,
                color: '#000',
                padding: '10px',
                textAlign: 'center',
                borderRadius: '4px',
                width: '100px', // Set width for square shape
                height: '100px', // Set height equal to width
                display: 'flex', // Center content horizontally and vertically
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {token.label}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TokenGenerator;
