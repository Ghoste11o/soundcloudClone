import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Auth = () => {
  return (
    <IconButton className="header__auth">
      <AccountCircleIcon className="header__auth-icon" />
    </IconButton>
  );
};