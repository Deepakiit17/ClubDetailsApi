import { Avatar, Card, CardContent, CardHeader, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

function Api() {
  const [data, setData] = useState(null);

  useEffect(() => {
    var token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250YWN0IjoiOTA4NTI5NTg2MCIsImRhdGV0aW1lIjoiMjAyMy0wNS0xNiAwMzo0MTo1NS44Mjg3MjEifQ.XyrYgkn8YM2EbzR4DTpvqYucYv0YmShDfTWYUUhvZ8k");
    // myHeaders.append("Ilp-Club-Id", "ilpclub1001");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://15.206.189.238:8000/ilpapp2/club/details/data", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log("dskoaoaoaoaao", data)
        setData(data)
    })
      .catch(error => console.log('error', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h4">Institute Information</Typography>
      </Grid>
      {data && (
        <Grid item>
          <Card>
            <CardHeader title={data.data.institute_name} />
            <CardContent>
              <Typography variant="body1">
                {data.data.institute_address}
              </Typography>
              <Typography variant="body2">
                Institute Type: {data.data.institute_type}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
      {data && (
        <>
          <Grid item>
            <Typography variant="h4">Club Admin Members</Typography>
          </Grid>
          <Grid item>
            <List>
              {data.data.club_admin_member.map((member) => (
                <ListItem key={member.email}>
                  <ListItemAvatar>
                    <Avatar>{member.name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={member.name}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {member.designation}
                        </Typography>
                        {" — " + member.email}
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item>
            <Typography variant="h4">Club Executive Members</Typography>
          </Grid>
          <Grid item>
            <List>
              {data.data.club_executive_member.map((member) => (
                <ListItem key={member.email}>
                  <ListItemAvatar>
                    <Avatar>{member.name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={member.name}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {member.designation}
                        </Typography>
                        {" — " + member.email}
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item>
            <Typography variant="h4">Club Members</Typography>
          </Grid>
          <Grid item>
            <List>
              {data.data.club_member.map((member) => (
                <ListItem key={member.email}>
                  <ListItemAvatar>
                    <Avatar>{member.name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={member.name}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {member.designation}
                        </Typography>
                        {" — " + member.email}
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </>
      )}
    </Grid>
  );

}

export default Api;
