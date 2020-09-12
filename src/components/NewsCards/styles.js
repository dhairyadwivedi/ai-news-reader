import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "left",
    width: "100%",
    height: "45vh",
    padding: "6%",
    marginBottom: "3%",
    borderRadius: 10,
    color: "black",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    boxShadow: "0px 10px 10px rgba(255, 255, 255, 0.1)",
  },
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "500",
  },
  reader: {
    maxWidth: "80%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    },
  },
}));
