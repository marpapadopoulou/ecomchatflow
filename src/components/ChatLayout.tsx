
import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import Sidebar from "./Sidebar";
import ProductCarousel from "./ProductCarousel";

const ChatLayout = () => {
  const [message, setMessage] = useState("");
  const { theme, setTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your shopping assistant. What are you looking for today?",
      products: [],
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: message, products: [] },
      {
        role: "assistant",
        content: "I understand you're looking for something special. Here are some recommendations that might interest you:",
        products: [
          { id: 1, name: "Premium Watch", price: "$299", image: "/placeholder.svg" },
          { id: 2, name: "Leather Bag", price: "$199", image: "/placeholder.svg" },
          { id: 3, name: "Sunglasses", price: "$149", image: "/placeholder.svg" },
        ],
      },
    ]);
    setMessage("");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden`}>
        <Sidebar />
      </div>
      <main className="flex-1 flex flex-col">
        <header className="h-16 glass flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <img
                src="/lovable-uploads/e8addeab-7737-41f4-9c9f-0e6070c3cab7.png"
                alt="ShopChat Logo"
                className="h-8 w-8"
              />
              <h1 className="text-xl font-semibold">ShopChat</h1>
            </div>
          </div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                } animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl message-bubble ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "glass"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  {msg.products?.length > 0 && <ProductCarousel products={msg.products} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 glass">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="flex gap-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-background rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChatLayout;
