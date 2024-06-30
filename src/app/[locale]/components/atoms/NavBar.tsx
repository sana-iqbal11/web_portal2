"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IoHomeOutline } from "react-icons/io5";
import {
  Avatar,
  Button,
  CardContent,
  CardMedia,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import Spinner from "@/app/[locale]/components/atoms/Spinner";

import MenuNax from "./MenuNax";
import { useUser } from "../../../../../lib/auth";
import { useLocale, useTranslations } from "next-intl";

import { ServicesCards } from "../../constants";
import { usePathname, useRouter } from "next/navigation";

const drawerWidth = 240;
// @ts-ignore
export default function ResponsiveDrawer({ page }) {
  const [loading, setLoading] = React.useState(false); // Set to true if initial loading is required

  const pathName = "/pages/" + usePathname().split("/")[3];
  const t = useTranslations("Service");
  const selectedLocale = useLocale();
  const router = useRouter();
  const { data: user } = useUser();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    React.useState(selectedLocale);

  const [activeItemId, setActiveItemId] = React.useState(pathName);
  const [selectedItem, setSelectedItem] = React.useState({
    text: "main",
    icon: <IoHomeOutline />,
  });
  const [borderColor, setBorderColor] = React.useState("#DDB669");
  const handleChange = (event: any) => {
    const selectedValue = event.target.value;
    if (selectedValue === "ar") {
      setBorderColor("#DDB669");
      setSelectedLanguage("ar");
      router.replace(`/${selectedValue}`);
    } else {
      setBorderColor("#DDB669");
      setSelectedLanguage("en");
      router.replace(`/${selectedValue}`);
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const fetchDataForMenuItem = async (item:any) => {
    return new Promise((resolve, reject) => {
      // Simulate network delay (you can adjust this delay as needed)
      setTimeout(() => {
        // Mock data (replace with your actual data structure)
        const mockData = {
          title: `Page Title - ${item.text}`,
          content: `Content for ${item.text}`,
        };
        resolve(mockData);
      }, 1000); // Simulate 1 second delay
    });
  };
  
  const handleItemClick = async (item:any) => {
    setLoading(true); // Set loading to true when item is clicked
    setActiveItemId(item.link);
    setSelectedItem({ text: item.text, icon: item.icon });
  
    try {
      const data = await fetchDataForMenuItem(item); // Simulate fetching data
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error scenarios if needed
    } finally {
      setLoading(false); // Set loading to false when operation is complete (whether success or error)
    }
  };
  
  

  return (
    <Box
      sx={{
        display: "flex",
        direction: selectedLanguage === "ar" ? "rtl" : "ltr",
      }}
    >
      <CssBaseline />
      <AppBar
        sx={{
          position: "absolute",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mr: selectedLanguage === "ar" ? { sm: `${drawerWidth}px` } : {},
          backgroundColor: "white",
          boxShadow: "none",
          display: "flex",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              color: "black",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                ml: 1,
                mr: 2,
                alignItems: "center",
                display: { md: "flex", sm: "none", xs: "none" },
                fontSize: "16px",
                marginTop: selectedLocale === "ar" ? "0.3rem" : "0.3rem",
                fontWeight: "400",
              }}
            >
              {selectedItem.icon}
              <Box sx={{ ml: 1, mr: 1.6, fontSize: "16px" }}>
                {t(selectedItem.text)}
              </Box>
            </Box>
          </Typography>
          <Avatar
            alt="Avatar"
            src="/avatar.jpg"
            sx={{
              marginLeft: { md: "0", sm: "32px", xs: "32px" },
              marginTop: selectedLocale === "ar" ? "0.3rem" : "0.3rem",
              borderRadius: "4px",
            }}
          />
          <Box
            sx={{
              marginLeft: "35px",
              marginRight: "10px",
              display: { md: "block", sm: "none", xs: "none" },
              marginTop: selectedLocale === "ar" ? "0.3rem" : "0.3rem",
            }}
          >
            <Typography
              className="signin-form"
              sx={{ color: "#173039", fontSize: "14px" }}
            >
              {user?.result?.firstName} {user?.result?.lastName}
            </Typography>
            <Typography
              className="text-font"
              sx={{ color: "#87959A", fontSize: "12px" }}
            >
              {user?.result?.phoneNumber}
            </Typography>
          </Box>

          <Select
            onChange={handleChange}
            defaultValue={selectedLocale}
            sx={{
              marginTop: selectedLocale === "ar" ? "0.3rem" : "0.3rem",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            <MenuItem value="en" sx={{ fontSize: "12px" }}>
              ENG
            </MenuItem>
            <MenuItem value="ar" sx={{ fontSize: "12px" }}>
              العربية
            </MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          anchor={selectedLanguage === "ar" ? "right" : "left"}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <MenuNax
            activeItemId={activeItemId}
            handleItemClick={handleItemClick}
          />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              color: "black",
              position: "relative",
            },
          }}
          open
          anchor={selectedLanguage === "ar" ? "right" : "left"}
        >
          <MenuNax
            activeItemId={activeItemId}
            handleItemClick={handleItemClick}
          />
        </Drawer>
      </Box>
      <Box sx={{ flexGrow: 1, py: 3 }}>
    <Toolbar />
    {loading ? (  // Show spinner if loading is true
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Spinner />
              </Box>
    ) : (
      <React.Fragment>
        {/* Your actual content here */}
        {page}
      </React.Fragment>
    )}
  </Box>
    </Box>
  );
}
