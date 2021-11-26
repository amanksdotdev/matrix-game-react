interface IBoxProps {
  color: string;
  changeColorEvent: Function;
  boxId: string;
}

function Box({ color, changeColorEvent, boxId }: IBoxProps) {
  const styles = {
    height: "50px",
    backgroundColor: color,
    width: "100%",
    border: "1px solid black",
    cursor: "pointer",
  };
  return (
    <div
      id={boxId + ""}
      style={styles}
      onClick={() => {
        changeColorEvent(boxId);
      }}
    ></div>
  );
}

export default Box;
