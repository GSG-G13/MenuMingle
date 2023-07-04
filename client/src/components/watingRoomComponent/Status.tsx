import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Order is received', 'Order is being prepared', 'Order is Ready'];

const Status = () => {
  return (
    <Box sx={{ width: 'calc(100% - 20px);', marginLeft: '20px' }}>
      <Stepper activeStep={1} orientation="vertical">
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
export default Status;
