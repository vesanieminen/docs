import '@vaadin/icons';
import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line
import { AppLayout } from '@vaadin/react-components/AppLayout.js';
import { DrawerToggle } from '@vaadin/react-components/DrawerToggle.js';
import { Icon } from '@vaadin/react-components/Icon.js';
import { Tab } from '@vaadin/react-components/Tab.js';
import { Tabs } from '@vaadin/react-components/Tabs.js';
import { Tooltip } from '@vaadin/react-components/Tooltip.js';

function Example() {
  return (
    <AppLayout theme="narrow-drawer">
      <DrawerToggle slot="navbar">
        <Tooltip slot="tooltip" text="Expand menu" position="end" />
      </DrawerToggle>

      {/* tag::snippet[] */}
      <Tabs slot="drawer" orientation="vertical">
        <Tab>
          <a tabIndex={-1}>
            <Icon icon="vaadin:home" />
          </a>
          <Tooltip slot="tooltip" text="Home" position="end" />
        </Tab>

        <Tab>
          <a tabIndex={-1}>
            <Icon icon="vaadin:calendar" />
          </a>
          <Tooltip slot="tooltip" text="Calendar" position="end" />
        </Tab>

        <Tab>
          <a tabIndex={-1}>
            <Icon icon="vaadin:chart" />
          </a>
          <Tooltip slot="tooltip" text="Reports" position="end" />
        </Tab>
      </Tabs>
      {/* end::snippet[] */}
    </AppLayout>
  );
}

export default reactExample(Example); // hidden-source-line
