
import { User, MessageSquare } from "lucide-react";

const Sidebar = () => {
  const recentChats = [
    { id: 1, title: "Summer Collection", date: "2h ago" },
    { id: 2, title: "Casual Wear", date: "Yesterday" },
    { id: 3, title: "Formal Attire", date: "2 days ago" },
  ];

  return (
    <aside className="w-80 h-full glass border-r border-border/50 flex flex-col animate-slide-in">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <MessageSquare className="h-6 w-6 text-primary" />
          <h2 className="font-semibold">Recent Chats</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {recentChats.map((chat) => (
            <button
              key={chat.id}
              className="w-full p-3 flex flex-col items-start gap-1 rounded-lg hover:bg-accent transition-colors text-left"
            >
              <span className="text-sm font-medium">{chat.title}</span>
              <span className="text-xs text-muted-foreground">{chat.date}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-border/50">
        <button className="w-full p-3 flex items-center gap-3 rounded-lg hover:bg-accent transition-colors">
          <User className="h-5 w-5" />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">Premium Member</span>
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
