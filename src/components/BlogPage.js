import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

// Import images from your assets folder
import nailCare1 from '../assets/img/nail-1.avif';
import nailCare2 from '../assets/img/nail-2.avif';
import nailCare3 from '../assets/img/nail-3.avif';
import nailCare4 from '../assets/img/nail-4.avif';
import nailCare5 from '../assets/img/nail-5.avif';
import nailCare6 from '../assets/img/spa.avif';

const blogPosts = [
  {
    title: "Top 5 Nail Care Tips for Healthy Nails",
    description: "Learn how to keep your nails strong, shiny, and beautiful...",
    image: nailCare1,
  },
  {
    title: "Trending Nail Art Designs in 2025",
    description: "Discover this year's hottest nail art trends...",
    image: nailCare2,
  },
  {
    title: "How to Maintain Your Gel Nails at Home",
    description: "Easy ways to make your gel nails last longer.",
    image: nailCare3,
  },
  {
    title: "Best Nail Care Products of the Year",
    description: "Our top picks for nourishing and strengthening nails.",
    image: nailCare4,
  },
  {
    title: "DIY Nail Art: Easy Designs You Can Try",
    description: "Fun and creative nail art ideas to do at home.",
    image: nailCare5,
  },
  {
    title: "Common Nail Care Mistakes to Avoid",
    description: "Learn what to avoid to keep your nails healthy.",
    image: nailCare6,
  }
];

export default function BlogPage() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#e91e63', fontWeight: 'bold' }}>
        Blog Pink - Nail Care Tips
      </Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, height: '100%' }}>
              <CardMedia
                component="img"
                height="180"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {post.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#e91e63', '&:hover': { backgroundColor: '#d81b60' } }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
