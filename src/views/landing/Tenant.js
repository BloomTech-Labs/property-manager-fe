import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';
import payment from '../../assets/img/rentpay.gif';
import maintenance from '../../assets/img/maintenance.gif';
import paymentHistory from '../../assets/img/paymentHistory.gif';
import room from '../../assets/img/rentroom.gif';

const Tenant = () => {
  const styles = {
    media: {
      height: 0,
      paddingTop: '40%',
      marginTop: '10'
    }
  };

  return (
    <div className="renterView">
      <div className="tenant-contents">
        <Card className="tenant-content">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                PAY RENT BILL
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Pay your rent from anywhere any time 24/7. Have roommate? No
                worries our payment system handles split payments and saves you
                the headache and your time.
              </Typography>
            </CardContent>
            <CardMedia image={payment} title="payment" style={styles.media} />
          </CardActionArea>
        </Card>
        <Card className="tenant-content">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                REVIEW STATEMENTS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                You can review the last 12 months of payments. Check the due
                date of your monthly payments.
              </Typography>
            </CardContent>
            <CardMedia
              image={paymentHistory}
              title="rent payment history"
              style={styles.media}
            />
          </CardActionArea>
        </Card>
      </div>
      <div className="tenant-contents">
        <Card className="tenant-content">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                REQUEST MAINTENANCE
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Whether it’s a burnt-out light bulb, a faulty sink or a flooded
                bathroom, maintenance problems are inevitable. If you do run
                into a maintenance problem, PropMan made maintenance requests
                simple, fast, and reliable.
              </Typography>
            </CardContent>
            <CardMedia
              image={maintenance}
              title="maintenance"
              style={styles.media}
            />
          </CardActionArea>
        </Card>
        <Card className="tenant-content">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                REVIEW AVAILABLE ROOMS
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The tenant portal provides you available rooms and its monthly
                rent price.
              </Typography>
            </CardContent>
            <CardMedia image={room} title="rooms" style={styles.media} />
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Tenant;
