import CodeIcon from "@mui/icons-material/Code";
import DashboardIcon from "@mui/icons-material/Dashboard";
import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export interface Service {
  name: string;
  comp: React.FunctionComponent;
}

interface Props {
  components: Service[];
}

function ServicesLayout({ components }: Props) {
  const [service, setService] = useState<Service | undefined>(components.length > 0 ? components[0] : undefined);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleServiceChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, selectedService: Service) => {
    setService(selectedService);
    setDrawerOpen(false);
  };

  const ActiveService: any = service?.comp;
  return (
    <div>
      {/* Render the drawer */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ minWidth: "200px" }}>
          <ListItem onClick={() => setDrawerOpen(false)}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItem>
          {components.map(({ name }) => (
            <ListItem key={name} onClick={(event: any) => handleServiceChange(event, components.find((v) => v.name === name)!)}>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Render the selected component as a JSX element */}
      {service && <ActiveService />}

      {/* Render the drawer button */}
      <div onClick={() => { setDrawerOpen(true) }}
        style={{ top: 0, position: "absolute", margin: "5px", padding: "10px", background: "#dedede", borderRadius: "10px" }}>
        <DashboardIcon />
      </div>

    </div>
  );
}

export default ServicesLayout;
