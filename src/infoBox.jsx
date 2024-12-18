import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    let IMG_URI="https://images.unsplash.com/photo-1500110552734-efdb5e2b4e08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYXJ8ZW58MHx8MHx8fDA%3D";
   
   return(<div>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 160 }}
        image={IMG_URI}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.Location}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}  >
        Weather = {info.Condition} <br></br> 
     <b>Temperature={info.Temperature} &nbsp; &nbsp; FeelsLike={info.Feel_Like}</b><br></br>
        Heat Index= {info.Heat_Index} <br></br>
        Cloud ={info.Cloud} <br></br>
        humidity ={info.humidity} <br></br>
        wind_dir={info.wind_dir} <br></br>
        wind_Speed ={info.wind_Speed} <br></br>
        </Typography>
      </CardContent>
    </Card>
    </div>);
}