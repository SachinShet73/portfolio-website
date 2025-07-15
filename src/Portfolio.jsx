import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Avatar,
  IconButton,
  Grid,
  Paper,
  Divider,
  Button
} from '@mui/material';
import {
  Email,
  GitHub,
  LinkedIn,
  GetApp,
  Code,
  Work,
  School,
  Build,
  EmojiEvents
} from '@mui/icons-material';

const Portfolio = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fefefe' }}>
      <Container maxWidth="md" sx={{ py: 6 }}>
        
        {/* Header */}
        <Paper elevation={0} sx={{ p: 5, mb: 6, borderRadius: 3, bgcolor: 'white', border: '2px solid #d1d5db' }} className="hover-lift">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
            <Avatar 
              src="/profilepicture.jpg"
              sx={{ 
                width: 100, 
                height: 100,
                bgcolor: 'primary.main',
                fontSize: '2.5rem',
                border: '3px solid #f8f9fa'
              }}
            >
              SR
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1, color: '#1a1a1a' }}>
                Sachin Ramesh Shet
              </Typography>
              <Typography variant="h6" sx={{ color: '#6b7280', fontWeight: 400 }}>
                Big Data and ML Engineer
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
              <IconButton color="primary" href="mailto:your.email@example.com">
                <Email />
              </IconButton>
              <IconButton color="primary" href="https://github.com/yourusername">
                <GitHub />
              </IconButton>
              <IconButton color="primary" href="https://linkedin.com/in/yourusername">
                <LinkedIn />
              </IconButton>
              <IconButton color="primary" href="/resume.pdf">
                <GetApp />
              </IconButton>
            </Box>
          </Box>
        </Paper>

        <Grid container spacing={4}>
          
          {/* About */}
          <Grid item xs={12}>
            <Card elevation={0} sx={{ borderRadius: 3, border: '2px solid #d1d5db' }} className="hover-lift">
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Code color="primary" />
                  About
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  Passionate Big Data and Machine Learning engineer with expertise in building scalable data pipelines and 
                  intelligent systems. I love turning complex data into actionable insights and creating innovative solutions 
                  that drive business value.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Skills */}
          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ height: '100%', borderRadius: 3, border: '2px solid #d1d5db' }} className="hover-lift">
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Build color="primary" />
                  Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {['Python', 'Apache Spark', 'TensorFlow', 'AWS', 'Docker', 'Kafka', 'PostgreSQL', 'React'].map((skill) => (
                    <Chip key={skill} label={skill} variant="outlined" color="primary" />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Experience */}
          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ height: '100%', borderRadius: 3, border: '2px solid #d1d5db' }} className="hover-lift">
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Work color="primary" />
                  Experience
                </Typography>
                <Box>
                  <Typography variant="h6" component="h3">
                    Data Engineer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tech Company • 2022 - Present
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Building scalable data pipelines and ML models for real-time analytics.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Certifications */}
          <Grid item xs={12}>
            <Card elevation={0} sx={{ borderRadius: 3, border: '2px solid #d1d5db' }} className="hover-lift">
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmojiEvents color="primary" />
                  Certifications
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        Introduction to Data Engineering
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Coursera • Issued: July 2025
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        Comprehensive introduction to data engineering concepts, including data pipelines, ETL processes, and data architecture fundamentals.
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                        {['Data Pipelines', 'ETL Processes', 'Data Architecture', 'Python for Data Engineering', 'SQL'].map((skill) => (
                          <Chip key={skill} label={skill} size="small" variant="outlined" />
                        ))}
                      </Box>
                      <Button size="small" variant="outlined" href="https://www.coursera.org/account/accomplishments/verify/APSO9Y96JHDV" target="_blank">View Credential</Button>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Projects */}
          <Grid item xs={12}>
            <Card elevation={0} sx={{ borderRadius: 3, border: '2px solid #d1d5db' }} className="hover-lift">
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Code color="primary" />
                  Featured Projects
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        ML Pipeline Platform
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        End-to-end machine learning platform for model training and deployment.
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button size="small" variant="outlined">Live Demo</Button>
                        <Button size="small" variant="outlined">GitHub</Button>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        Real-time Analytics Dashboard
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Interactive dashboard for monitoring streaming data and KPIs.
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button size="small" variant="outlined">Live Demo</Button>
                        <Button size="small" variant="outlined">GitHub</Button>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact */}
          <Grid item xs={12}>
            <Card elevation={0} sx={{ borderRadius: 3, border: '2px solid #d1d5db' }} className="hover-lift">
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <Email color="primary" />
                  Get in Touch
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Feel free to reach out for collaborations or just a friendly chat!
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href="mailto:your.email@example.com"
                  sx={{ 
                    mt: 3, 
                    px: 4, 
                    py: 1.5, 
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 500,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  startIcon={<Email />}
                >
                  Contact Me
                </Button>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;