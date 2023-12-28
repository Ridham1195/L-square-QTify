import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FooterAccordion() {
    const iconStyle = {
        fontFamily: 'Font Awesome 6 Pro',
        fontSize: '40px',
        fontWeight: 900,
        lineHeight: '40px',
        textAlign: 'right',
        color:"#34c94b"
      };

      const textStyle = {
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '30px',
        letterSpacing: '0px',
        textAlign: 'left',
      }
  return (
    <div>
      <Accordion sx={{marginBottom: '22px',borderRadius:"10px"}}>
        <AccordionSummary
        sx={{
            height: '78px',
            borderRadius: '10px',
            border: '1px solid',
            borderColor: 'white',
            color: 'white',
            backgroundColor: 'black',
          }}
          expandIcon={<ExpandMoreIcon style={iconStyle} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={textStyle}>Is Qtify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{textAlign: 'left'}}>
          <Typography style={textStyle}>
          Yes! It is 100% free, and has 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginBottom: '22px',borderRadius:"10px"}}>
        <AccordionSummary
        sx={{
            height: '78px',
            borderRadius: '10px',
            border: '1px solid',
            borderColor: 'white',
            color: 'white',
            backgroundColor: 'black',
          }}
          expandIcon={<ExpandMoreIcon style={iconStyle}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={textStyle}>Can I download and listen songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{textAlign: 'left'}}>
          <Typography style={textStyle}>
          Sorry, unfortunately we don't provide the service to download any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}