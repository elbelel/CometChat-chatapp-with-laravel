export const tableRowStyle = (theme) => {
  return {
    border: `1px solid ${theme.borderColor.primary}`,
    display: "table",
    width: "100%",
    tableLayout: "fixed",
    fontSize: "14px",
  };
};

export const tableColumnStyle = () => {
  return {
    padding: "8px",
    width: "100%",
  };
};

export const avatarStyle = () => {
  return {
    display: "inline-block",
    float: "left",
    width: "36px",
    height: "36px",
    marginRight: "8px",
  };
};

export const nameStyle = () => {
  return {
    margin: "10px",
    width: "calc(100% - 50px)",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  };
};

export const selectionColumnStyle = () => {
  return {
    padding: "8px",
    width: "50px",
  };
};

export const selectionBoxStyle = (inactiveStateImg, activeStateImg) => {
  return {
    display: "none",
    label: {
      display: "block",
      cursor: "pointer",
      background: `url(${inactiveStateImg}) right center / 16px no-repeat`,
      "--active-state-background": `url(${activeStateImg}) no-repeat right center`,
      userSelect: "none",
      float: "right",
      padding: ".625em",
    },
  };
};
