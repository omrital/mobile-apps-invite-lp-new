import React from 'react';
import {Box, Image} from 'wix-style-react';
import {inviteDetailsPresenter as presenter} from '../services/inviteDetailsPresenter';
import {inviteDetails} from '../config';

export default class PhoneIllustration extends React.Component {

  render = () => {
    return (
      <Box height="70vh" width="60vh">
        <Image height="100%" width="100%" src={presenter.getPhoneIllustration(inviteDetails)} fit="contain" transparent/>
        <div style={{position: 'absolute', height: "11vh", width: "11vh", marginTop: "9vh", marginLeft: "8vh"}}>
          <Image src={presenter.getPlaceImageFrame(inviteDetails)} fit="contain" transparent/>
        </div>
        <div style={{position: 'absolute', height: "13vh", width: "28vh", marginTop: "4vh", marginLeft: "13vh", opacity: 0.7}}>
          <Image src={inviteDetails.coverImageUrl} fit="cover" borderRadius={'20px 20px 0px 0px'}/>
        </div>
        <div style={{position: 'absolute', height: "8vh", width: "8vh", marginTop: "10.1vh", marginLeft: "9.5vh"}}>
          <Image src={inviteDetails.placeImageUrl} fit="contain"/>
        </div>
      </Box>
    );
  };
}
