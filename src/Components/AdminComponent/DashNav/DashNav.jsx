import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  BookOpenIcon,
  ArrowDownOnSquareStackIcon,
} from "@heroicons/react/24/solid";
import { FaHourglassStart } from "react-icons/fa";
import React from "react";
import { Drawer, IconButton } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import './style.css'

export function DrawerDefault() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <div className="w-100vh bg-[#64ccc5] h-fit block lg:hidden p-2">
        <IconButton onClick={openDrawer} className="bg-[#141e46]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </IconButton>
      </div>
      <Drawer open={open} onClose={closeDrawer} className="p-4 bg-[#141E46] ">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" className="text-white">
            Admin Panel
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <Card className="h-screen bg-[#141E46]  text-white w-full max-w-[16rem] rounded-none shadow-xl shadow-blue-gray-900/5">
          <List>
            <NavLink to={"/dashboard/dashHome"}>
              <ListItem className="text-white text-right">
                <ListItemPrefix className="">
                  <PresentationChartBarIcon className="h-5 w-5 text-white" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </NavLink>
            <ListItem className="text-white">
              <ListItemPrefix>
                <BookOpenIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              Cash Book
            </ListItem>
            <ListItem className="text-white">
              <ListItemPrefix>
                <ArrowDownOnSquareStackIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              Recent Entry
            </ListItem>

            <ListItem className="text-white">
              <ListItemPrefix>
                <FaHourglassStart className="h-5 w-5 text-white" />
              </ListItemPrefix>
              Pending Works
            </ListItem>
            <ListItem className="text-white">
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  className="rounded-full text-white bg-gray-700"
                />
              </ListItemSuffix>
            </ListItem>
            <NavLink to={"/dashboard/dashProfile"}>
              <ListItem className="text-white">
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5 text-white" />
                </ListItemPrefix>
                Profile
              </ListItem>
            </NavLink>
            <ListItem className="text-white">
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem className="text-white">
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </React.Fragment>
  );
}
export function DashNav() {
  return (
    <div>
      <DrawerDefault></DrawerDefault>
      <Card className="h-screen bg-[#141E46] hidden lg:block text-white w-full max-w-[16rem] rounded-none shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5">Repair Center</Typography>
        </div>
        <List>
          <NavLink to={"/dashboard/dashHome"}>
            <ListItem className="text-white text-right">
              <ListItemPrefix className="">
                <PresentationChartBarIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <span className="hidden md:block">Dashboard</span>
            </ListItem>
          </NavLink>

          <ListItem className="text-white">
            <ListItemPrefix>
              <BookOpenIcon className="h-5 w-5 text-white" />
            </ListItemPrefix>
            Cash Book
          </ListItem>
          <ListItem className="text-white">
            <ListItemPrefix>
              <ArrowDownOnSquareStackIcon className="h-5 w-5 text-white" />
            </ListItemPrefix>
            Recent Entry
          </ListItem>

          <ListItem className="text-white">
            <ListItemPrefix>
              <FaHourglassStart className="h-5 w-5 text-white" />
            </ListItemPrefix>
            Pending Works
          </ListItem>
          <ListItem className="text-white">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5 text-white" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                className="rounded-full text-white bg-gray-700"
              />
            </ListItemSuffix>
          </ListItem>
          <NavLink to={"/dashboard/dashProfile"}>
            <ListItem className="text-white">
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              Profile
            </ListItem>
          </NavLink>
          <ListItem className="text-white">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5 text-white" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem className="text-white">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5 text-white" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </div>
  );
}
