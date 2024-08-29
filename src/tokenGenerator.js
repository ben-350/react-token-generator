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
  const [bluePrefix, setBluePrefix] = useState('');
  const [bluePerRow, setBluePerRow] = useState(0);
  const [redTokens, setRedTokens] = useState(0);
  const [redPrefix, setRedPrefix] = useState('');
  const [redPerRow, setRedPerRow] = useState(0);
  const [tokens, setTokens] = useState([]);

  const handleGenerate = () => {
    const newTokens = [];

    for (let i = 1; i <= blueTokens; i++) {
      newTokens.push({ color: 'blue', label: `${bluePrefix}${i}` });
    }

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
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Token Generator App
      </Typography>

      {/* Blue Tokens Inputs */}
      {['Number of Blue Tokens', 'Blue Token Prefix', 'Blue Tokens per Row'].map((label, index) => (
        <Grid container spacing={2} alignItems="center" sx={{ margin: 1 }} key={index}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1">{label}:</Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              type={label.includes('Number') ? 'number' : 'text'}
              fullWidth
              value={label.includes('Number of Blue Tokens') ? blueTokens : label.includes('Blue Token Prefix') ? bluePrefix : bluePerRow}
              onChange={(e) => {
                if (label.includes('Number of Blue Tokens')) setBlueTokens(Number(e.target.value));
                if (label.includes('Blue Token Prefix')) setBluePrefix(e.target.value);
                if (label.includes('Blue Tokens per Row')) setBluePerRow(Number(e.target.value));
              }}
            />
          </Grid>
        </Grid>
      ))}

      {/* Red Tokens Inputs */}
      {['Number of Red Tokens', 'Red Token Prefix', 'Red Tokens per Row'].map((label, index) => (
        <Grid container spacing={2} alignItems="center" sx={{ margin: 1 }} key={index}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1">{label}:</Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              type={label.includes('Number') ? 'number' : 'text'}
              fullWidth
              value={label.includes('Number of Red Tokens') ? redTokens : label.includes('Red Token Prefix') ? redPrefix : redPerRow}
              onChange={(e) => {
                if (label.includes('Number of Red Tokens')) setRedTokens(Number(e.target.value));
                if (label.includes('Red Token Prefix')) setRedPrefix(e.target.value);
                if (label.includes('Red Tokens per Row')) setRedPerRow(Number(e.target.value));
              }}
            />
          </Grid>
        </Grid>
      ))}

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

      <Grid container spacing={2} sx={{ marginTop: 2, marginBottom: 2, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
  {tokens.filter(token => token.color === 'blue').map((token, index) => (
    <Grid
      item
      xs="auto" 
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
          border: '1px solid #fff',
          boxSizing: 'border-box', 
        }}
      >
        {token.label}
      </Paper>
    </Grid>
  ))}
</Grid>

<Grid container spacing={2} sx={{ marginTop: 2, marginBottom: 2, justifyContent: { xs: 'center', sm: 'flex-start' } }}>
  {tokens.filter(token => token.color === 'red').map((token, index) => (
    <Grid
      item
      xs="auto" 
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
          border: '1px solid #fff',
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
