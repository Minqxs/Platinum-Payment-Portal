import {
  Box,
  Typography,
  Stack,
  Avatar,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";

const API_BASE = "http://localhost:7290";

export const SignatureManager = () => {
  const [signatureUrl, setSignatureUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cacheBuster, setCacheBuster] = useState<number>(Date.now());

  const loadSignature = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/users/me`, {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to fetch user");

      const data = await res.json();
      if (data.signatureImageUrl) {
        setSignatureUrl(
          `${API_BASE}${data.signatureImageUrl}?t=${cacheBuster}`
        );
      } else {
        setSignatureUrl(null);
      }
    } catch (error) {
      alert(error);
    }
  }, [cacheBuster]);

  useEffect(() => {
    loadSignature();
  }, [loadSignature]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("signature", selectedFile);

    try {
      const res = await fetch(`${API_BASE}/api/users/uploadSignature`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      if (!res.ok) throw new Error("Upload failed");

      await res.json();
      setSelectedFile(null);
      setPreview(null);
      alert("Signature uploaded successfully.");

      setCacheBuster(Date.now());
    } catch (err) {
      alert("Failed to upload signature.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <Box
      sx={{ background: "white", p: 4, borderRadius: 2, boxShadow: 2 }}
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
    >
      <Typography variant="h5" gutterBottom>
        Manage Your Signature
      </Typography>

      <Stack direction="row" spacing={4} alignItems="center" mt={2}>
        {/* Current Signature */}
        <Box>
          <Typography variant="body2" gutterBottom>
            Current Signature:
          </Typography>
          {signatureUrl ? (
            <Avatar
              variant="square"
              src={signatureUrl}
              alt="Signature"
              sx={{ width: 200, height: 80, border: "1px solid #ccc" }}
            />
          ) : (
            <Typography>No signature uploaded yet.</Typography>
          )}
        </Box>

        <Box>
          <Typography variant="body2" gutterBottom>
            New Upload:
          </Typography>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            style={{ marginBottom: "8px" }}
          />
          {preview && (
            <Avatar
              variant="square"
              src={preview}
              alt="New Preview"
              sx={{ width: 200, height: 80, border: "1px solid #ccc", mb: 1 }}
            />
          )}
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              onClick={handleUpload}
              disabled={!selectedFile || loading}
            >
              {loading ? <CircularProgress size={24} /> : "Upload"}
            </Button>
            {selectedFile && (
              <Button variant="outlined" onClick={handleClear}>
                Clear
              </Button>
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
