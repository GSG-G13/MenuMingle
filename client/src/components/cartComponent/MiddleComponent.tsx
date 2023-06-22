import * as core from '@mui/material';

const { Typography, Stack } = core;

const MiddleComponent = ({ name, price }) => {
  return (
    <>
      <Stack>
        <img
          src="https://cdn.discordapp.com/attachments/1113720646581616660/1120246167624757249/meal.png"
          alt="alternative img"
        />
      </Stack>
      <Stack direction="column" spacing={1}>
        <Typography variant="subtitle2" component="p">
          {name}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {price}
        </Typography>
      </Stack>
    </>
  );
};

export default MiddleComponent;
