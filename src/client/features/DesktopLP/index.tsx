import React from 'react';
import styles from './index.scss';
import QRCode from 'react-qr-code';
import {Box, Image, Dropdown, Input, Button, TextButton} from 'wix-style-react';
import {inviteDetailsPresenter as presenter} from './services/inviteDetailsPresenter';
import {config, inviteDetails} from '../../config';
import PhoneIllustration from './components/PhoneIllustration';
import {inviteDetailsService} from '../../../server/services/inviteDetails';

type State = {
  countryCode: number,
  phoneNumber: string
}

export default class DesktopLP extends React.Component<{}, State> {

  state: State = {
    countryCode: 0,
    phoneNumber: '',
  };

  componentDidMount(): void {
    inviteDetailsService.get({inviteCode: "YVDKFT"})
      .then((data: any) => {
        alert(JSON.stringify(data));
      }).catch((error: any) => {
        alert(JSON.stringify(error));
    });
  }

  renderInviteForm = () => {
    return (
      <Box height="100%" width="60%" paddingTop="70px" marginLeft="140px" marginRight="0px" backgroundColor="#CCC0" direction="vertical">
        <Image height="15px" width="80px" src={presenter.getAppLogo(inviteDetails)} fit="cover" transparent/>
        {this.renderInviteDescription()}
        <Box direction="horizontal">
          {this.renderSendSmsView()}
          <Box height="100px" width="1px" paddingTop="0px" marginLeft="30px" marginTop="70px" backgroundColor="#CCC5"/>
          {this.renderQrCode()}
        </Box>
      </Box>
    );
  };

  renderInviteDescription = () => {
    return (
      <Box direction="vertical" paddingTop="26px" backgroundColor="#EEE0">
        <strong className={styles.mainTitle}>Join “{inviteDetails.title}”</strong>
        <Box paddingTop="20px">
          <strong className={styles.secondaryTitle}>{inviteDetails.subtitle}</strong>
        </Box>
        <Box paddingTop="20px">
          <strong className={styles.description}>{inviteDetails.description}</strong>
        </Box>
      </Box>
    );
  };

  renderQrCode = () => {
    return (
      <Box width="200px" direction="vertical" paddingTop="50px" marginLeft="40px" backgroundColor="#0000">
        <strong className={styles.qrCodeHint}>Or scan to download</strong>
        <div className={styles.qrBox} style={{backgroundImage: `url(${config.assets.QR_CODE_FRAME})`}}>
          <QRCode value="http://www.wix.com/omri.tal13" size={72}/>
        </div>
      </Box>
    )
  };

  renderSendSmsView = () => {
    return (
      <Box direction="vertical" paddingTop="72px" backgroundColor="#EEE0">
        <strong className={styles.phoneHint}>Enter your phone number to get a download link</strong>
        <Box direction="horizontal" paddingTop="25px" backgroundColor="#EEE0">
          <Box width="91px" marginRight="10px">
            <Dropdown
              initialSelectedId={this.state.countryCode}
              onSelect={({ id }) => this.setState({ countryCode: id as number})}
              options={[
                { id: 0, value: '972' },
                { id: 1, value: '155' },
                { id: 2, value: '66' },
                { id: 3, value: '424' }
              ]}
            />
          </Box>
          <Input placeholder="Phone number" onChange={this.onChange} value={this.state.phoneNumber} />
          <div className={styles.sendBox1}>
            <div className={styles.sendBox2}>
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
      <Box height="500px" width="500px" marginTop="40px" backgroundColor="#FFF0">
        <PhoneIllustration/>
      </Box>
    );
  };

  renderFooter = () => {
    return (
      <Box height="70px" width="100%" marginTop="0px" backgroundColor="#EEE2">
        <Box height="100%" width="100%" marginLeft="140px" marginRight="140px" marginTop="20px" backgroundColor="#0000" direction="horizontal">
          <Image height="26px" width="110px" src={config.assets.LOGO_GOOGLE_PLAY} fit="cover" transparent/>
          <Image height="26px" width="95px" src={config.assets.LOGO_APPLE} fit="cover" transparent/>
          <Box height="26px" width="1px" marginLeft="30px" marginRight="30px" backgroundColor="#FFF"/>
          <Box marginTop="4px">
            <TextButton size="tiny" skin="light" underline="always">Learn more about Spaces By Wix</TextButton>
          </Box>
        </Box>
      </Box>
    );
  };

  onChange = (event: any) => {
    const { value } = event.target;
    if (value.length < 12) {
      this.setState({phoneNumber: this.getDisplayValue(value)});
    }
  };

  getDisplayValue = (value: any) => {
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
        <div className={styles.mainBox} style={{backgroundImage: `url(${config.assets.LP_BACKGROUND_SPACES})`}}>
          <Box height="90vh" width="100%" direction="horizontal" backgroundColor="#FFF0">
            {this.renderInviteForm()}
            {this.renderPhoneIllustration()}
          </Box>
          {this.renderFooter()}
        </div>
      </Box>
    );
  };
}
