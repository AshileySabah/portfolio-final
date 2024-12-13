import { Button, Grid, TextField } from "@mui/material";

export const Formulario = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label="Nome" variant="outlined" size="small" fullWidth />
      </Grid>
      <Grid item xs={12} sm={12} md={7}>
        <TextField label="E-mail" variant="outlined" size="small" fullWidth />
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <TextField label="Telefone" variant="outlined" size="small" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Como posso ajudar?"
          variant="outlined"
          multiline
          rows={4}
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" fullWidth>
          Enviar
        </Button>
      </Grid>
    </Grid>
  );
};
