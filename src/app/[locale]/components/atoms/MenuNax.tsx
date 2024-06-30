import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import { IoIosLogOut } from "react-icons/io";
import { items } from "../molecules/NavItemList";
import Link from "next/link";
import { Box } from "@mui/material";
import Typography from "./Typography";
import logo from "../../../../../public/Shwra presentation.png";
import { useLocale, useTranslations } from "next-intl";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

interface DrawerProps {
  activeItemId?: any | null;
  handleItemClick?: (item: any) => void;
}

const MenuNax: React.FC<DrawerProps> = ({ activeItemId, handleItemClick }) => {
  const t = useTranslations("DrawerItem");
  const selectedLocale = useLocale();
  const router = useRouter();

  return (
    <div
      style={{
        padding: "0px 11px ",
      }}
    >
      <Image
        src={logo}
        alt="logo"
        className="text-start mt-3"
        style={{
          marginBottom: "18px",
          marginTop: "15px",
        }}
      />
      {items?.map((item) => (
        <Link
          href={`/${selectedLocale}${item.link}`}
          key={item.id}
          className="checkbox-signin"
          style={{
            textDecoration: "none",
            color: "#173039",
            alignItems: "center",
          }}
        >
          <ListItem
            disablePadding
            key={item.id}
            onClick={() => handleItemClick && handleItemClick(item)}
            sx={{
              backgroundColor: activeItemId === item.link ? "#DDB669" : "",
              direction: selectedLocale === "ar" ? "rtl" : "ltr",
              border: activeItemId === item.link ? 0 : "none",
              borderRadius: 2,
              justifyContent: "flex-end",
              alignItems: "center",
              height: "47px",
            }}
          >
            <ListItemIcon
              sx={{
                justifyContent: "center",
                fontSize: "19px",
                color: activeItemId === item.link ? "white" : "#173039",
              }}
            >
              {activeItemId === item.link ? item.iconActive : item.iconInactive}
            </ListItemIcon>
            <ListItemText
              sx={{
                textAlign: "start",
                marginRight: "4px",
                fontSize: "14px",
                textDecoration: "none",
                color: activeItemId === item.link ? "white" : "#173039",
              }}
              primary={t(item.text)}
            />
          </ListItem>
        </Link>
      ))}
      <Box
        sx={{
          marginTop: "4rem",
          direction: selectedLocale === "ar" ? "rtl" : "ltr",
        }}
        onClick={() => {
          deleteCookie("token");
          router.push(`/${selectedLocale}/auth/signin`);
        }}
      >
        <Typography
          variant="h6"
          className="text-start"
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: "#173039",
          }}
        >
          <IoIosLogOut
            style={{
              fontSize: "20px",
              color: "#DDB669",
              marginLeft: "10px",
              marginRight: "12px",
            }}
          />
          {t("sign_out")}
        </Typography>
      </Box>
    </div>
  );
};

export default MenuNax;
