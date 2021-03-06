import React from 'react';
import {Box, Image} from 'wix-style-react';
import {inviteDetailsPresenter as presenter} from '../services/inviteDetailsPresenter';
import {InviteDetails} from "../config/types";
//@ts-ignore
import styles from './phone-illustration.scss';

type Props = {
  inviteDetails: InviteDetails
}

export default class PhoneIllustration extends React.Component<Props> {

  renderCoverImage = () => {
    const {inviteDetails} = this.props;
    return (
      <div style={{position: 'absolute', height: "100px", width: "197px", marginTop: "29px", marginLeft: presenter.getMarginLeft(inviteDetails).coverImage, opacity: 0.9}}>
        <Image src={presenter.getCoverImage(inviteDetails)} fit="cover" borderRadius={'20px 20px 0px 0px'}/>
      </div>
    );
  };

  renderPlaceImageFrame = () => {
    const {inviteDetails} = this.props;
    return (
      <div style={{position: 'absolute', height: "80px", width: "80px", marginTop: "74px", marginLeft: presenter.getMarginLeft(inviteDetails).placeImageFrame}}>
        <Image src={presenter.getPlaceImageFrame()} fit="cover" transparent/>
      </div>
    );
  };

  renderPlaceImage = () => {
    const {inviteDetails} = this.props;
    return (
      <div style={{position: 'absolute', height: "57px", width: "57px", marginTop: "83px", marginLeft: presenter.getMarginLeft(inviteDetails).placeImage}}>
        <Image src={presenter.getPlaceImage(inviteDetails)} fit="cover"/>
      </div>
    );
  };

  renderPlaceTitle = () => {
    const {inviteDetails} = this.props;
    return (
      <div style={{position: 'absolute', height: "100px", width: "197px", marginTop: "155px", marginLeft: presenter.getMarginLeft(inviteDetails).placeTitle}}>
        <strong className={styles.placeTitle}>{inviteDetails.placeName}</strong>
      </div>
    );
  };

  renderItemFrame = () => {
    return (
      <div style={{position: 'absolute', height: "190px", width: "260px", marginTop: "175px", marginLeft: "150px", padding: "10px", backgroundColor: "#0000"}}>
        <Image src={presenter.getItemFrame()} transparent/>
      </div>
    );
  };

  renderItemImage = () => {
    const {inviteDetails} = this.props;
    return (
      <div style={{position: 'absolute', height: "119px", width: "215px", marginTop: "198px", marginLeft: "184px", borderRadius: "10px"}}>
        <Image src={presenter.getItemImage(inviteDetails)} fit="cover" borderRadius={"10px"}/>
      </div>
    );
  };

  renderItemDetails = () => {
    const {inviteDetails} = this.props;
    return (
      <div style={{position: 'absolute', height: "119px", width: "215px", display: "flex", flexDirection: "column", marginTop: "328px", marginLeft: "184px", borderRadius: "10px"}}>
        {inviteDetails.vertical !== 'stores' && <strong className={styles.itemDescription}>{presenter.getItemIllustrationText(inviteDetails)}</strong>}
        <strong className={styles.itemName}>{inviteDetails.itemName}</strong>
        {inviteDetails.vertical === 'stores' && <strong className={styles.itemDescription}>{presenter.getItemIllustrationText(inviteDetails)}</strong>}
      </div>
    );
  };

  render = () => {
    const {inviteDetails} = this.props;
    return (
      <Box height="500px" width="500px">
        <Image height="100%" width="100%" src={presenter.getPhoneIllustration(inviteDetails)} fit="contain" transparent/>
        {inviteDetails.coverImageUrl && this.renderCoverImage()}
        {this.renderPlaceImageFrame()}
        {this.renderPlaceImage()}
        {this.renderPlaceTitle()}
        {inviteDetails.inviteLevel === "2nd" && this.renderItemFrame()}
        {inviteDetails.inviteLevel === "2nd" && this.renderItemImage()}
        {inviteDetails.inviteLevel === "2nd" && this.renderItemDetails()}
      </Box>
    );
  };
}
