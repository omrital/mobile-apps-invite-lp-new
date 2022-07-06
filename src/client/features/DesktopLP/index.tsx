import React from 'react';
import QRCode from 'react-qr-code';
import {Box, Image, Dropdown, Input, Button, TextButton} from 'wix-style-react';
import {inviteDetailsPresenter as presenter} from './services/inviteDetailsPresenter';
import {config} from './config';
import PhoneIllustration from './components/PhoneIllustration';
import {inviteDetailsService} from './services/inviteDetails';
import {InviteDetails} from './config/types';
import {i18n} from "../../../locale/i18n";
//@ts-ignore
import styles from './index.scss';

type State = {
  countryCode: number,
  phoneNumber: string,
  inviteDetails: InviteDetails
}

export default class DesktopLP extends React.Component<{}, State> {

  state: State = {
    countryCode: 0,
    phoneNumber: '',
    inviteDetails: config.defaults.inviteDetails as InviteDetails
  };

  componentDidMount(): void {
    inviteDetailsService.get({inviteCode: config.defaults.inviteCode1stExample})
      .then((data: any) => {
        console.log('LP', 'inviteDetails success', JSON.stringify(data));
        this.setState({inviteDetails: data});
      }).catch((error: any) => {
        console.log('LP', 'inviteDetails failed', JSON.stringify(error));
    });
  }

  renderInviteForm = () => {
    return (
      <Box height="100%" width="60%" paddingTop="70px" marginLeft="140px" marginRight="0px" backgroundColor="#CCC0" direction="vertical">
        <Image height="15px" width="80px" src={presenter.getAppLogo(this.state.inviteDetails)} fit="cover" transparent/>
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
        <strong className={styles.mainTitle}>{presenter.getMainTitle(this.state.inviteDetails)}</strong>
        <Box paddingTop="20px">
          <strong className={styles.secondaryTitle}>{presenter.getSubtitle(this.state.inviteDetails)}</strong>
        </Box>
        <Box paddingTop="20px">
          <strong className={styles.description}>{presenter.getDescription(this.state.inviteDetails)}</strong>
        </Box>
      </Box>
    );
  };

  renderQrCode = () => {
    return (
      <Box width="200px" direction="vertical" paddingTop="50px" marginLeft="40px" backgroundColor="#0000">
        <strong className={styles.qrCodeHint}>{i18n('lp.desktop.title.qr-code')}</strong>
        <div className={styles.qrBox} style={{backgroundImage: `url(${config.assets.QR_CODE_FRAME})`}}>
          <QRCode value="http://www.wix.com/omri.tal13" size={72}/>
        </div>
      </Box>
    )
  };

  renderSendSmsView = () => {
    return (
      <Box direction="vertical" paddingTop="72px" backgroundColor="#EEE0">
        <strong className={styles.phoneHint}>{i18n('lp.desktop.title.phone')}</strong>
        <Box direction="horizontal" paddingTop="25px" backgroundColor="#EEE0">
          <Box width="91px" marginRight="10px">
            <Dropdown
              initialSelectedId={this.state.countryCode}
              onSelect={({ id }) => this.setState({ countryCode: id as number})}
              options={presenter.getCountryCodes()}
            />
          </Box>
          <Input placeholder="Phone number" onChange={this.onChange} value={this.state.phoneNumber} />
          <div className={styles.sendBox1}>
            <div className={styles.sendBox2}>
              <Button skin="dark" priority="secondary">{i18n('lp.desktop.button.send')}</Button>
            </div>
            <Button skin="light">{i18n('lp.desktop.button.send')}</Button>
          </div>
        </Box>
      </Box>
    );
  };

  renderPhoneIllustration = () => {
    return (
      <Box height="500px" width="500px" marginTop="40px" backgroundColor="#FFF0">
        <PhoneIllustration inviteDetails={this.state.inviteDetails}/>
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
            <TextButton size="tiny" skin="light" underline="always">{i18n('lp.desktop.button.learn-more')}</TextButton>
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
