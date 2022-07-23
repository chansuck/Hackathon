import * as React from "react";
import Box from "@mui/material/Box";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import CheckBoxOutlineBlankIcon  from '@mui/icons-material/CheckBoxOutlineBlank';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function RequirementList() {


    return (<Box sx={{ width: '80%', bgcolor: 'background.paper', marginLeft: '20%' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CheckBoxOutlineBlankIcon  />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CheckBoxOutlineBlankIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CheckBoxOutlineBlankIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CheckBoxOutlineBlankIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CheckBoxOutlineBlankIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>

    );
}