import { Separator } from "@/components/ui/separator";

function ChatHeader() {
  return (
    <div className="flex items-center gap-4">
      <Separator className="flex-1/3" />
      <h2 className="uppercase">Chat</h2>
      <Separator className="flex-1/3" />
    </div>
  );
}

export default ChatHeader;
