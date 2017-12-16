import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import TermsAndConditions from './termsAndConditions';
import Copyright from './copyright';
import PrivacyPolicy from './privacyPolicy';

const Legal = () => (
  <Tabs>
    <TabList>
      <Tab>Terms and Conditions</Tab>
      <Tab>Copyright</Tab>
      <Tab>Privacy Policy</Tab>
    </TabList>
    <TabPanel>
      <TermsAndConditions />
    </TabPanel>
    <TabPanel>
      <Copyright />
    </TabPanel>
    <TabPanel>
      <PrivacyPolicy />
    </TabPanel>
  </Tabs>
);

export default Legal;
