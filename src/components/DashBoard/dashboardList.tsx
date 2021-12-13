import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import UserIcon from '@material-ui/icons/Person';

import Home from '@material-ui/icons/Home';
import Book from '@material-ui/icons/MenuBook';
import Donate from '@material-ui/icons/AttachMoney';
import Advertise from '@material-ui/icons/Business';
import PeopleIcon from '@material-ui/icons/People';

export const  DashboardList = (
           <div>              
                <ListItem button>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary=" Home" />
                </ListItem>

                <ListItem button>
                <ListItemIcon>
                    <Book />
                </ListItemIcon>
                <ListItemText primary="Books" />
                </ListItem>

                <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Sketchers" />
                </ListItem>

           </div>
);

export const DashboardListTwo = (
           <div>              
                <ListItem button>
                <ListItemIcon>
                    <Donate/>
                </ListItemIcon>
                <ListItemText primary="Donations" />
                </ListItem>

                <ListItem button>
                <ListItemIcon>
                    <Advertise />
                </ListItemIcon>
                <ListItemText primary="Advertise" />
                </ListItem>

            </div>
);

export const DashboardListThree = (
            <div>              
                <ListItem button>
                <ListItemIcon>
                    <UserIcon />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
                </ListItem>

            </div>
);

            