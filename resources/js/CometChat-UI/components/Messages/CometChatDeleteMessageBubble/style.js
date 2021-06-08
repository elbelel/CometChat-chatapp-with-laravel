import { CometChat } from "@cometchat-pro/chat";

export const messageContainerStyle = (messageOf) => {
  const alignment =
    messageOf === "sender"
      ? {
          alignSelf: "flex-end",
        }
      : {
          alignSelf: "flex-start",
        };

  return {
    marginBottom: "16px",
    paddingLeft: "16px",
    paddingRight: "16px",
    maxWidth: "65%",
    clear: "both",
    flexShrink: "0",
    ...alignment,
  };
};

export const messageWrapperStyle = (messageOf) => {
  const alignment =
    messageOf === "sender"
      ? {
          display: "flex",
          flexDirection: "column",
        }
      : {};

  return {
    flex: "1 1",
    position: "relative",
    width: "100%",
    ...alignment,
  };
};

export const messageTextWrapperStyle = (theme, messageOf) => {
  const alignment =
    messageOf === "sender"
      ? {
          alignSelf: "flex-end",
        }
      : {
          alignSelf: "flex-start",
        };

  return {
    display: "inline-block",
    borderRadius: "12px",
    padding: "8px 12px",
    alignSelf: "flex-end",
    Width: "100%",
    backgroundColor: `${theme.backgroundColor.secondary}`,
    fontStyle: "italic",
    ...alignment,
  };
};

export const messageTextStyle = (theme) => {
  return {
    fontSize: "14px!important",
    margin: "0",
    lineHeight: "20px!important",
    color: `${theme.color.helpText}`,
  };
};

export const messageInfoWrapperStyle = (messageOf) => {
  const alignment =
    messageOf === "sender"
      ? {
          alignSelf: "flex-end",
        }
      : {
          alignSelf: "flex-start",
        };

  return alignment;
};

export const messageTimeStampStyle = (theme) => {
  return {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: 500,
    lineHeight: "12px",
    textTransform: "uppercase",
    color: `${theme.color.helpText}`,
  };
};

export const messageThumbnailStyle = () => {
  return {
    width: "36px",
    height: "36px",
    margin: "12px 0",
    float: "left",
  };
};

export const messageDetailStyle = (message, messageOf) => {
  let paddingSpace = {};
  if (
    messageOf === "receiver" &&
    message.receiverType === CometChat.RECEIVER_TYPE.GROUP
  ) {
    paddingSpace = {
      paddingLeft: "5px",
    };
  }

  return {
    flex: "1 1",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    ...paddingSpace,
  };
};

export const nameWrapperStyle = (message, messageOf) => {
  let paddingSpace = {};
  if (
    messageOf === "receiver" &&
    message.receiverType === CometChat.RECEIVER_TYPE.GROUP
  ) {
    paddingSpace = {
      padding: "3px 5px",
    };
  }

  return {
    alignSelf: "flex-start",
    ...paddingSpace,
  };
};

export const nameStyle = (theme) => {
  return {
    fontSize: "10px",
    color: `${theme.color.helpText}`,
  };
};
