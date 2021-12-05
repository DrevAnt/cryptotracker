import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid #b4c8d3",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      cursor: "pointer",
      background: selected
        ? "linear-gradient(114deg, rgba(65,154,219,1) 28%, rgba(134,29,75,1) 80%)"
        : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        background:
          "linear-gradient(114deg, rgba(65,154,219,1) 28%, rgba(134,29,75,1) 80%)",
        color: "black",
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
