import React, { useContext } from "react";
import { ChatContext } from "@/store/store";

function UseChatContext() {
  return useContext(ChatContext);
}

export default UseChatContext;
