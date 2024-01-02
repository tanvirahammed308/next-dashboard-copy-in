"use client"

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Image from 'next/image';
import { AccountCircle, Call, ContactSupport, Dock, Help, PeopleAlt, QueryStats, Settings, SpaceDashboard, Work, WorkspacePremium } from '@mui/icons-material';
import { usePathname, useRouter } from 'next/navigation';

const drawerWidth = 240;

//  https://mui.com/material-ui/react-drawer/

function Layout(props) {
  const { window } = props;
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [collapse, setCollapse] = React.useState(false);
  const router=useRouter();
  const pathName=usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleCallapseToggle = () => {
    setCollapse(!collapse);
  };

  const drawer = (
    <div>
      <Toolbar>
      <Typography variant="h6" noWrap component="div">
      <Image
      src="/vercel.svg"
      width={100}
      height={100}
      alt="Picture of the author"
    />
          </Typography>

      </Toolbar>

    
      <List>
        {['Dashboard', 'Analytical', 'Users', 'Projects','Messages','Settings','Profile'].map((text, index) => (
          <ListItem key={text} disablePadding className={pathName.startsWith("/"+ text.toLowerCase()) ? "text-sky-600 bg-slate-700":"text-slate-700"}
          onClick={()=>router.push('/' + text.toLowerCase())}
          
          
          >

            <ListItemButton>
              <ListItemIcon
               className={pathName.startsWith("/"+ text.toLowerCase()) ? "text-sky-600 bg-slate-700":"text-slate-700"}
               >
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {
                  index === 0 && <SpaceDashboard/>
                }
                {
                  index === 1 && <QueryStats/>
                }
                {
                  index === 2 && <PeopleAlt/>
                }
                {
                  index === 3 && <Work/>
                }
                {
                  index === 4 && <MailIcon/>
                }
                {
                  index === 5 && <Settings/>
                }
                {
                  index === 6 && <AccountCircle/>
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem  disablePadding onClick={handleCallapseToggle} 
        className={pathName.startsWith("/help") ? "text-sky-600 bg-slate-700":"text-slate-700"}
        
        
        >
            <ListItemButton>
              <ListItemIcon  className={pathName.startsWith("/help") ? "text-sky-600 bg-slate-700":"text-slate-700"}>
              <Help/>
                
              </ListItemIcon>
              <ListItemText primary={'Help'} />
              {/* // ExpandLessIcon from material icon  */}
              {
                collapse ? <ExpandMoreIcon/> : <ExpandLessIcon/>
              }
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <Collapse  in={collapse} timeout={'auto'} unmountOnExit>
      <List >
        {['Support', 'Contact', 'Docs'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon className={pathName.startsWith("/help" ) ? "text-sky-600 bg-slate-700":"text-slate-700"}>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {
                  index === 0 && <ContactSupport/>
                }
                {
                  index === 1 && <Call/>
                }
                {
                  index === 2 && <Dock/>
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      </Collapse>
      
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor:'#ffffff',
          color:'black'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <main>{children}</main>
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
  children: PropTypes.array,
};

export default Layout;