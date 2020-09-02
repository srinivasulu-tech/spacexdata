import React, {Component} from "react";
import ReactDOM from "react-dom";

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';


import App from "./App";
import { CardMedia } from "@material-ui/core";




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
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.flight_number}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.mission_name}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.mission_id}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.upcoming}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.launch_year}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.launch_date_unix}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.launch_date_utc}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.launch_date_local}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.is_tentative}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.tentative_max_precision}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.tbd}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.launch_window}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.rocket_id}
           </CardContent>
         </Card>        
         ))},
         {this.state.spacexlaunchs.map((data) => (
         <Card >
            <CardMedia image={data.flickr_images}>              
            </CardMedia>
          <CardContent> 
              {data.rocket_name}
           </CardContent>
         </Card>        
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
