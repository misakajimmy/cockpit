import React, { useState, useEffect, useCallback } from "react";
import {
    Button,
    Flex, FlexItem,
    Select, SelectVariant, SelectOption,
    Page, PageSection, PageSectionVariants,
    Card,
    SearchInput,
    ToggleGroup, ToggleGroupItem,
    Toolbar,
    ToolbarContent,
    ToolbarItem,
    ToolbarFilter,
    ToolbarToggleGroup,
} from '@patternfly/react-core';
import { useEvent, usePageLocation } from "hooks";
import { WithDialogs } from "dialogs.jsx";
import { UserTabs } from './user-tabs.jsx';
import cockpit from "cockpit";
import { AccountsPage } from "./local.js";

const _ = cockpit.gettext;

export const UserPageBody = (props) => {
    const activeTab = props.activeTab;

    console.log(activeTab);
    let page = "page";
    switch (activeTab) {
    case "user`":
        page = <AccountsPage />;
        break;
    case "role":
        page = "role";
        break;
    case "service":
        page = "service";
        break;
    default:
        break;
    }

    return (
        <div>
            {page}
        </div>
    );
};

export const UserPage = () => {
    const [tabErrors, setTabErrors] = useState({});

    const { path, options } = usePageLocation();

    const activeTab = options.type || 'user';

    return (
        <WithDialogs>
            <Page>
                {path.length == 0 &&
                    <PageSection variant={PageSectionVariants.light} type="nav" className="services-header">
                        <Flex>
                            <UserTabs activeTab={activeTab}
                                     tabErrors={tabErrors}
                                     onChange={activeTab => {
                                         cockpit.location.go([], Object.assign(options, { type: activeTab }));
                                     }} />
                            <FlexItem align={{ default: 'alignRight' }} />
                        </Flex>
                    </PageSection>}
                <UserPageBody
                    activeTab={activeTab}
                />
            </Page>
        </WithDialogs>
    );
};
