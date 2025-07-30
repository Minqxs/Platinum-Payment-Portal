import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const DocumentUploadPage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const handleUpload = () => {
    // TODO: Upload files to backend
    alert(`Uploading ${files.length} files (mock)`);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Upload Documents
        </Typography>

        <input
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          style={{ marginBottom: 16 }}
        />

        {files.length > 0 && (
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Selected files:</Typography>
            <List dense>
              {files.map((file, idx) => (
                <ListItem key={idx}>
                  <ListItemText primary={file.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        <Button
          variant="contained"
          disabled={files.length === 0}
          onClick={handleUpload}
        >
          Upload Files
        </Button>
      </Paper>
    </Container>
  );
};

export default DocumentUploadPage;
