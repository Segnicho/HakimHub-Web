import { usePostChatBotMutation } from "@/slices/chat/chat-api";
import { pushMessage } from "@/slices/chat/message-history";
import { ChatResponse } from "@/types/chat/service";
import React from "react";
import { useDispatch } from "react-redux";

interface ServiceProps {
  title: string;
  detail: string;
}

const Service: React.FC<ServiceProps> = ({ title, detail }) => {
  

  return (
    <div className="flex flex-col gap-4 items-center  my-8 max-w-sm text-xl text-center">
      <p className="font-semibold">{title}</p>
      <div className="  text-[1.1rem]  rounded-lg    bg-[rgb(248,246,246)] p-4">
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default Service;
