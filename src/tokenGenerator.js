import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
} from '@mui/material';

function TokenGenerator() {
  const [blueTokens, setBlueTokens] = useState(0);
  const [bluePrefix, setBluePrefix] = useState('A');
  const [bluePerRow, setBluePerRow] = useState(0);
  const [redTokens, setRedTokens] = useState(0);
  const [redPrefix, setRedPrefix] = useState('B');
  const [redPerRow, setRedPerRow] = useState(0);
  const [tokens, setTokens] = useState([]);

  // Function to handle numeric input validation
  const handleNumberInput = (setter) => (e) => {
    const value = e.target.value;
    // Check if value is empty or a valid number
    if (value === '' || /^\d*$/.test(value)) {
      setter(Number(value) || 0);
    }
  };

  const handleGenerate = () => {
    let blueTokensArray = [];
    let redTokensArray = [];

    for (let i = 1; i <= blueTokens; i++) {
      if (i % bluePerRow === 1 && i !== 1) {
        blueTokensArray.push({ color: 'blue', label: `${bluePrefix}${i}`, newRow: true });
      } else {
        blueTokensArray.push({ color: 'blue', label: `${bluePrefix}${i}` });
      }
    }

    for (let i = 1; i <= redTokens; i++) {
      if (i % redPerRow === 1 && i !== 1) {
        redTokensArray.push({ color: 'red', label: `${redPrefix}${i}`, newRow: true });
      } else {
        redTokensArray.push({ color: 'red', label: `${redPrefix}${i}` });
      }
    }

    setTokens([...blueTokensArray, ...redTokensArray]);
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

  const blueTokensDisplay = tokens.filter(token => token.color === 'blue');
  const redTokensDisplay = tokens.filter(token => token.color === 'red');

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Token Generator App
      </Typography>

      {/* Blue Tokens Inputs */}
      <Grid container spacing={2} alignItems="center" sx={{ margin: 1 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">No. of Blue Tokens:</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            type="text"
            fullWidth
            value={blueTokens}
            onChange={handleNumberInput(setBlueTokens)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center" sx={{ margin: 1 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">Blue Token Prefix:</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            type="text"
            fullWidth
            value={bluePrefix}
            onChange={(e) => setBluePrefix(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center" sx={{ margin: 1 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">Blue Tokens per Row:</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            type="text"
            fullWidth
            value={bluePerRow}
            onChange={handleNumberInput(setBluePerRow)}
          />
        </Grid>
      </Grid>

      {/* Red Tokens Inputs */}
      <Grid container spacing={2} alignItems="center" sx={{ margin: 1 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">No. of Red Tokens:</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            type="text"
            fullWidth
            value={redTokens}
            onChange={handleNumberInput(setRedTokens)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center" sx={{ margin: 1 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">Red Token Prefix:</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            type="text"
            fullWidth
            value={redPrefix}
            onChange={(e) => setRedPrefix(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center" sx={{ margin: 1 }}>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">Red Tokens per Row:</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            type="text"
            fullWidth
            value={redPerRow}
            onChange={handleNumberInput(setRedPerRow)}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        onClick={handleGenerate}
        sx={{
          margin: 1,
          backgroundColor: 'grey.300',
          color: 'text.primary',
          border: 2,
          borderColor: 'text.primary',
          textTransform: 'none',
        }}
      >
        Generate
      </Button>
      <Button
        variant="contained"
        onClick={handleClear}
        sx={{
          margin: 1,
          backgroundColor: 'grey.300',
          color: 'text.primary',
          border: 2,
          borderColor: 'text.primary',
          textTransform: 'none',
        }}
      >
        Clear
      </Button>

      {/* Blue Tokens Display */}
      <Grid container spacing={2} sx={{ marginTop: 2, marginBottom: 2 }}>
        {blueTokensDisplay.map((token, index) => (
          <Grid
            item
            xs={12 / bluePerRow}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={index}
          >
            <Paper
              sx={{
                backgroundColor: token.color,
                color: '#000',
                padding: 2,
                textAlign: 'center',
                borderRadius: '8px',
                width: '100px',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
              }}
            >
              {token.label}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Red Tokens Display */}
      <Grid container spacing={2} sx={{ marginTop: 2, marginBottom: 2 }}>
        {redTokensDisplay.map((token, index) => (
          <Grid
            item
            xs={12 / redPerRow}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={index}
          >
            <Paper
              sx={{
                backgroundColor: token.color,
                color: '#000',
                padding: 2,
                textAlign: 'center',
                borderRadius: '8px',
                width: '100px',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
              }}
            >
              {token.label}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TokenGenerator;
