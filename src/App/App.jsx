import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SideMenu from "../components/SideMenu";
import { makeStyles } from "@mui/styles";
import Header from "../components/Header";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "312px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div>
      <SideMenu></SideMenu>
      <div className={classes.appMain}>
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
