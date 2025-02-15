import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Send, Mic } from "lucide-react";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  role: "customer" | "rider" | "vendor";
}

interface ChatInterfaceProps {
  messages?: Message[];
  currentUser?: {
    name: string;
    role: "customer" | "rider" | "vendor";
  };
  onSendMessage?: (message: string) => void;
}

const defaultMessages: Message[] = [
  {
    id: "1",
    sender: "John Doe",
    content: "Hi, I'm your delivery rider. I'll be there in 10 minutes.",
    timestamp: "10:30 AM",
    role: "rider",
  },
  {
    id: "2",
    sender: "You",
    content: "Great, thanks for letting me know!",
    timestamp: "10:31 AM",
    role: "customer",
  },
  {
    id: "3",
    sender: "Green Store",
    content: "Your order has been prepared and handed to the rider.",
    timestamp: "10:32 AM",
    role: "vendor",
  },
];

const ChatInterface = ({
  messages = defaultMessages,
  currentUser = { name: "You", role: "customer" },
  onSendMessage = () => {},
}: ChatInterfaceProps) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="w-[350px] h-[500px] flex flex-col bg-white">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Chat</h3>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === currentUser.role ? "justify-end" : "justify-start"}`}
            >
              <div className="flex items-start gap-2 max-w-[80%]">
                {message.role !== currentUser.role && (
                  <Avatar className="w-8 h-8">
                    <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                      {message.sender[0]}
                    </div>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg p-3 ${
                    message.role === currentUser.role
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.role !== currentUser.role && (
                    <p className="text-xs font-medium mb-1">{message.sender}</p>
                  )}
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1"
          />
          <Button size="icon" variant="ghost" className="hover:bg-primary/10">
            <Mic className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;
