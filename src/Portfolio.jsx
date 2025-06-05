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
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafafa' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        
        {/* Header */}
        <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
            <Avatar 
              src="/profilepicture.jpg"
              sx={{ 
                width: 120, 
                height: 120,
                bgcolor: 'primary.main',
                fontSize: '3rem'
              }}
            >
              SR
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                Sachin Ramesh Shet
              </Typography>
              <Typography variant="h5" color="text.secondary">
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
            <Card elevation={1}>
              <CardContent>
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
            <Card elevation={1} sx={{ height: '100%' }}>
              <CardContent>
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
            <Card elevation={1} sx={{ height: '100%' }}>
              <CardContent>
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
            <Card elevation={1}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmojiEvents color="primary" />
                  Certifications
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        Azure Data Engineer Associate
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Microsoft • Issued: January 2023
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        Data engineering expertise on Microsoft Azure platform including data pipelines, transformation, and analytics.
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                        {['Azure Data Factory', 'Databricks', 'Synapse Analytics'].map((skill) => (
                          <Chip key={skill} label={skill} size="small" variant="outlined" />
                        ))}
                      </Box>
                      <Button size="small" variant="outlined" href="#" target="_blank">View Credential</Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        AWS Certified Data Analytics
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Amazon Web Services • Issued: July 2022
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        Specialized certification in designing and maintaining data analytics solutions on AWS.
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                        {['Redshift', 'Glue', 'Kinesis', 'EMR'].map((skill) => (
                          <Chip key={skill} label={skill} size="small" variant="outlined" />
                        ))}
                      </Box>
                      <Button size="small" variant="outlined" href="#" target="_blank">View Credential</Button>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Projects */}
          <Grid item xs={12}>
            <Card elevation={1}>
              <CardContent>
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
            <Card elevation={1}>
              <CardContent sx={{ textAlign: 'center' }}>
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
                  sx={{ mt: 2 }}
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