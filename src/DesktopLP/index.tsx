import React from 'react';
import {Box, Image, Heading, Text, Dropdown, Input, Button} from 'wix-style-react';
import QRCode from 'react-qr-code';
import styles from './index.scss';

const lp_background_spaces = '/lp_background_spaces.png';
const PHONE_ILLUSTRATION = 'phone_Illustration_spaces.png';
const LOGO = 'logo_spaces.png';

type State = {
  countryCode: number,
  phoneNumber: string
}

export default class DesktopLP extends React.Component<{}, State> {

  state: State = {
    countryCode: 0,
    phoneNumber: '',
  };

  renderInviteForm = () => {
    return (
      <Box height="100%" width="60%" paddingTop="70px" marginLeft="140px" marginRight="60px" backgroundColor="#CCC0" direction="vertical">
        <Image height="15px" width="80px" src={LOGO} fit="cover" transparent/>
        {this.renderInviteDescription()}
        <Box direction="horizontal">
          {this.renderSendSmsView()}
          <Box height="100px" width="1px" paddingTop="0px" marginLeft="30px" marginTop="70px" backgroundColor="#CCC5"/>
          {this.renderQRcode()}
        </Box>
      </Box>
    );
  };

  renderInviteDescription = () => {
    return (
      <Box direction="vertical" paddingTop="26px" backgroundColor="#EEE0">
        <strong className={styles.mainTitle}>Join “Kicksmini”</strong>
        <Box paddingTop="20px">
          <strong className={styles.secondaryTitle}>Secondary Line</strong>
        </Box>
        <Box paddingTop="20px">
          <strong className={styles.description}>Download the Spaces by Wix app and join “Kicksmini” to check out their
            blog on the go and stay updated with new posts.</strong>
        </Box>
      </Box>
    );
  };

  renderQRcode = () => {
    return (
      <Box direction="vertical" paddingTop="50px" paddingLeft="40px" backgroundColor="#EEE0">
        <strong className={styles.hint}>Or scan to download</strong>
        <div style={{marginLeft: "10px", marginTop: "15px"}}>
          <QRCode value="http://www.wix.com/omri.tal13" size={91}/>
        </div>
      </Box>
    )
  };

  renderSendSmsView = () => {
    return (
      <Box direction="vertical" paddingTop="72px" backgroundColor="#EEE0">
        <strong className={styles.hint}>Enter your phone number to get a download link</strong>
        <Box direction="horizontal" paddingTop="22px" backgroundColor="#EEE0">
          <Box width="91px" marginRight="10px">
            <Dropdown
              initialSelectedId={this.state.countryCode}
              onSelect={({ id }) => this.setState({ countryCode: id })}
              options={[
                { id: 0, value: '972' },
                { id: 1, value: '155' },
                { id: 2, value: '66' },
                { id: 3, value: '424' }
              ]}
            />
          </Box>
          <Input placeholder="Phone number" onChange={this.onChange} value={this.state.phoneNumber} />
          <div style={{marginLeft: "10px"}}>
            <div style={{position: "absolute"}}>
              <Button skin="dark" priority="secondary">Send</Button>
            </div>
            <Button skin="light">Send</Button>
          </div>
        </Box>


      </Box>
    );
  };

  renderPhoneIllustration = () => {
    return (
      <Box height="100%" width="40%" marginTop="70px" backgroundColor="#FFF0">
        <Image height="80%" width="100%" src={PHONE_ILLUSTRATION} fit="contain" transparent/>
      </Box>
    );
  };

  onChange = (event) => {
    const { value } = event.target;
    if (value.length < 12) {
      this.setState({phoneNumber: this.getDisplayValue(value)});
    }
  };

  getDisplayValue = (value) => {
    const [, group1, group2, group3] = value
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,3})(\d{0,4})/);
    return (
      (!group2 ? group1 : group1 + ' ') + group2 + (group3 ? '-' + group3 : '')
    );
  };

  render = () => {
    return (
      <Box height="100vh" padding="0" margin="-8px" backgroundColor="F00">
        <div style={{
          backgroundImage: `url(${lp_background_spaces})`,
          width: '100%',
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <Box height="90vh" width="100%" direction="horizontal" backgroundColor="#FFF0">
            {this.renderInviteForm()}
            {this.renderPhoneIllustration()}
          </Box>
        </div>
      </Box>
    );
  };
}
