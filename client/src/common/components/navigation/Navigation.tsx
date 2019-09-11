import React, { useState, useEffect } from 'react';
import { NavigationContainer, List, ListItem } from './Navigation.styles';
import { History } from 'history';
import { withRouter } from 'react-router-dom';

export type Link = {
  label: string;
  href: string;
  isActive: true;
}

export type NavigationProps = {
  links: {
    [key: string]: Link
  },
  history: History
};

/**
 * @render react
 * @name Navigation component
 * @description Main navigation for an app.
 * @example
 * <Navigation
 *    links={[
 *      { label: 'Home', href: '/home', isActive: true },
 *      { label: 'Browse', href: 'http://browse.to.somewhere' },
 *      { label: 'My List', href: '/my-list' },
 *      { label: 'Top Picks', href: '/top' },
 *      { label: 'Recent', href: '/recent' }
 *    ]}
 *    />
 */
export const Navigation: React.FC<NavigationProps> = ({ links: initialLinks, history }) => {
  const mapLinks = (links: any) => {
    const mappedLinks: any = {};
    let currentActiveLink = '';

    const formattedLinks = links.map((link: Link) => {
      const { href, isActive } = link;

      mappedLinks[href] = link;

      if (isActive) {
        currentActiveLink = href;
      }
    });

    return {
      mappedLinks,
      currentActiveLink
    };
  };

  const { mappedLinks, currentActiveLink } = mapLinks(initialLinks);
  const [links, setLinks] = useState(mappedLinks);
  const [currentLink, setCurrentLink] = useState(currentActiveLink);

  const onNavigationHandler = async (e: any, href: string) => {
    const updatedLinks: any = { ...links };

    if (currentLink) {
      updatedLinks[currentLink] = {
        ...links[currentLink],
        isActive: false
      }
    }

    updatedLinks[href] = {
      ...links[href],
      isActive: true
    };

    setLinks(links);
    setCurrentLink(currentLink);

    if (history) {
      history.push(href);
    }
  };

  useEffect(() => {
    setLinks(initialLinks);
  }, [initialLinks]);

  return (
    <NavigationContainer>
      <List>
        {Object.values(links).map((link, index) => {
          const { label, href, isActive } = link as Link;

          return (
            <ListItem key={index}
                      isActive={isActive}
                      onClick={(e) => !isActive && onNavigationHandler(e, href)}>
                      {label}
            </ListItem>
          );
        })}
      </List>
    </NavigationContainer>
  );
}

const withRouterTypeless: any = withRouter 
export const NavigationWithRouter = withRouterTypeless(Navigation);
