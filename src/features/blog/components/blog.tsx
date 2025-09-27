import { Box, Button, Chip, Grid, Link, Stack, Typography } from "@mui/material";

export default function Blog() {
  return (
          <Box
            id="blogs"
            sx={{
              minHeight: "100vh",
              px: 4,
              py: 10,
              textAlign: "center",
              bgcolor: "#1f2329",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "#57f2e5", fontWeight: "bold", mb: 1 }}
            >
              0
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: "#57f2e5",
                fontWeight: "bold",
                borderBottom: "2px solid #57f2e5",
                display: "inline-block",
                pb: 0.5,
                mb: 1,
              }}
            >
              Blogs
            </Typography>

            <Typography
              variant="caption"
              sx={{
                display: "block",
                mb: 4,
                fontFamily: "monospace",
              }}
            >
              My thoughts on technology and business, welcome to subscribe
            </Typography>

            <Box
              sx={{
                height: "1px",
                bgcolor: "#ccc",
                opacity: 0.3,
                my: 2,
              }}
            />

            {/* Blog Card */}
            <Grid
              container
              spacing={4}
              justifyContent="center"
              alignItems="center"
              sx={{ px: { xs: 0, md: 10 }, textAlign: "left" }}
            >
              {/* Image */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box
                  component="img"
                  src="/Programming-bg.jpg"
                  alt="blog image"
                  sx={{ width: "50%", borderRadius: 2 }}
                />
              </Grid>

              {/* Text */}
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography variant="h6" sx={{ color: "#57f2e5", mb: 1 }}>
                  What does it take to become a web developer?
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Web development, also known as website development,
                  encompasses a variety of tasks and processes involved in
                  creating websites for the Internet...
                </Typography>
                <Link href="#">
                  <Typography variant="body2" sx={{ color: "#57f2e5" }}>
                    Read More &gt;&gt;
                  </Typography>
                </Link>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ mt: 2, flexWrap: "wrap" }}
                >
                  <Chip label="Web Developer" size="small" />
                  <Typography variant="caption">
                    <strong>Text</strong> Sinan
                  </Typography>
                  <Typography variant="caption">
                    <strong>Date</strong> 10.Oct.2023
                  </Typography>
                  <Typography variant="caption">
                    <strong>Read</strong> 1 Min
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            <Box
              sx={{
                height: "1px",
                bgcolor: "#ccc",
                opacity: 0.3,
                my: 6,
              }}
            />

            {/* Buttons */}
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#57f2e5",
                  color: "#000",
                  borderRadius: "30px",
                  px: 4,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#7ff9ef",
                  },
                }}
              >
                View More
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#57f2e5",
                  borderColor: "#57f2e5",
                  borderRadius: "30px",
                  px: 4,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#2b2f36",
                    borderColor: "#7ff9ef",
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
      )} 