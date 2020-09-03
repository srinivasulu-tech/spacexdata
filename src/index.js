import React, {Component} from "react";
import ReactDOM from "react-dom";

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import {flexbox} from '@material-ui/system';
import App from "./App";
import { CardMedia, Typography, Box} from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";




class App1 extends Component {
  
  state = {
    spacexlaunchs: []
  };

  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ spacexlaunchs: response });
      });
  }

  render() {
    return (
      <div>
        <center>
          <h1>SpaceXLaunch Programme</h1>
        </center>
        
        {this.state.spacexlaunchs.map((data) => (
         <flexbox style={{width:'50px',height:'30%'}} className="d-flex p-2 col-example"   display="flex" flexDirection="row" flexWrap="wrap" justifyContent="flex-start" alignItems="flex-start">
         <Box style={{width:'300px',height:'30%'}}>
                  <Card >
                     <CardMedia image={data.flickr_images} style={{height:0,paddingTop:'50'}}>              
                     </CardMedia>
                   <CardContent> 
                       {data.mission_name}
                       <Typography gutterBottom variant="headline" component ="h2">
                          {data.mission_id}
                         </Typography>
                         <Typography gutterBottom variant="headline" component ="h2">
                         {data.launch_year}
                         </Typography>
                         <Typography gutterBottom variant="headline" component ="h2">
                          {data.land_success}
                         </Typography>
                         <Typography gutterBottom variant="headline" component ="h2">
                           {data.launch_success}
                         </Typography>
                    </CardContent>
                  </Card>  
         </Box>
                  </flexbox>
    
         ))}

      </div>
    );
  }
}

export default function SimpleCard() {
  
  
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <App1 /> 
  </React.StrictMode>,
  rootElement
);
