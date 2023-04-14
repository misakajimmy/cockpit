import React, { useState } from "react";

import cockpit from "cockpit";
import { Button, Nav, NavItem, NavList } from "@patternfly/react-core";
import { ExclamationCircleIcon } from "@patternfly/react-icons";

const _ = cockpit.gettext;

/*
 * React component showing users tabs
 * Required props:
 *  - onChange:
 *      When different tab is selected this callback is called
 */
export const UserTabs = (props) => {
    const { onChange, activeTab, tabErrors } = props;
    const user_tabs = {
        user: _("用户管理"),
        role: _("角色管理"),
        service: _("功能管理"),
    };
    const [activeItem, setActiveItem] = useState(activeTab);

    return (
        <Nav variant="tertiary" id="user-page-filter"
             onSelect={result => { setActiveItem(result.itemId); onChange(result.itemId) }}>
            <NavList>
                {Object.keys(user_tabs).map(key => {
                    return (
                        <NavItem itemId={key}
                                 key={key}
                                 preventDefault
                                 isActive={activeItem == key}>
                            <Button variant="link" component="a" style={{ "--pf-c-button--m-link--Color": "var(--pf-global--Color--200)", "--pf-c-nav__link--m-current--Color": "var(--pf-global--Color--100)", "--pf-c-nav__link--hover--Color": "var(--pf-global--Color--200)" }}>
                                {user_tabs[key]}
                                {tabErrors[key] ? <ExclamationCircleIcon className="ct-exclamation-circle" /> : null}
                            </Button>
                        </NavItem>
                    );
                })}
            </NavList>
        </Nav>
    );
};
