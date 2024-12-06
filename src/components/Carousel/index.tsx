import eact, { ReactNode } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import React from "react";

interface CarouselProps {
  list: any[];
  labelProperty: string;
  contentProperty?: string;
  contentListProperty?: string;
  componentToRender?: (item: any) => ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({
  list,
  labelProperty,
  contentProperty,
  contentListProperty,
  componentToRender = () => null,
}) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = list?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          bgcolor: theme.palette.secondary.main,
          color: "white",
        }}
      >
        <Typography>{list?.[activeStep]?.[labelProperty]}</Typography>
      </Paper>
      <Box
        sx={{
          minHeight: 255,
          width: "100%",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {contentProperty && list?.[activeStep]?.[contentProperty]}
        {contentListProperty &&
          list?.[activeStep]?.[contentListProperty]?.map((item: any) => {
            return componentToRender(item);
          })}
      </Box>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ backgroundColor: theme.palette.secondary.main }}
        nextButton={
          <Button
            sx={{ color: "white" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            sx={{ color: "white" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};
