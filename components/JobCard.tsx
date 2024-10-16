import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import ChipSelect from "./Status";

export function JobCard({ job }: any) {
  return (
    <Card
      sx={{
        width: "100%", // Take the full width of the parent container
        margin: "20px 0", // Margin for spacing between cards
        bgcolor: "rgb(30, 30, 30)",
        color: "#fff",
      }}
    >
      <CardContent
        sx={{
          display: "flex", // Set card content as a flex container
          justifyContent: "space-between", // Space between content and icons
          alignItems: "center", // Center vertically
        }}
      >
        {/* Job information on the left */}
        <Box>
          <Typography variant="h5" component="div">
            {job.companyName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="gray">
            {job.position}
          </Typography>
          <Typography variant="body2">Start Date: {job.startDate}</Typography>
          <Typography variant="body2">
            Applied On: {job.applicationDate}
          </Typography>
        </Box>

        {/* Icons on the right */}
        <Box
          sx={{
            display: "flex", // Flex container for icons
            gap: 1, // Space between icons
          }}
        >
            <IconButton aria-label="share">
                <ChipSelect status = {job} />
            </IconButton>
            <IconButton aria-label="share">
                <EditIcon sx={{ color: "#fff" }} />
            </IconButton>
            <IconButton aria-label="delete">
                <DeleteIcon sx={{ color: "#fff" }} />
            </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
