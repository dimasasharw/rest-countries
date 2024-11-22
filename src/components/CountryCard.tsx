import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CountryCardProps {
  country: any;
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Card sx={{
      width: 260,
      backgroundColor: '#E7E5E4',
      transition: 'none', // Disable any hover transition
      '&:hover': {
        boxShadow: 'none', // Prevent box-shadow changes on hover
        transform: 'none', // Prevent scale/transform effects on hover
      },
    }} >
      <CardMedia
        component="img"
        sx={{
          minHeight: 180,
          maxHeight: 180,
          objectFit: 'contain',
          // backgroundColor: '#f5f5f5', // Add a neutral background color
          padding: '0.5rem', // Add padding to give space around irregular shapes
        }}
        image={country?.flags?.png}
        title={`${country?.name?.common} flag`}
      />
      <CardContent
        sx={{ height: 150 }}
      >
        <Typography gutterBottom variant="h5" component="div"
          sx={{ height: 60 }}
        >
          {country?.name?.common}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'left' }}>
          <strong>Region:</strong> {country?.region || 'N/A'}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'left' }}>
          <strong>Capital:</strong> {country?.capital?.[0] || 'N/A'}
        </Typography>
      </CardContent>
    </Card>
  );
}