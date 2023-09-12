import React from "react";

interface MessageCardProps {
  message: string;
  user: string;
}

const MessageCard: React.FC<MessageCardProps> = ({ message, user }) => {
  return (
    <div className={`flex gap-2 ${user === "me" && "flex-row-reverse"} my-4`}>
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-white rounded-full">{/* {user} */}</div>
          <div>

          <div className="bg-white w-fit p-4 text-center rounded-md">
            {message}
          </div>
          <div className="flex text-xs mt-2">
            <h4>Richal Panel</h4>
            <p> - Mar 05, 2:22 AM </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
