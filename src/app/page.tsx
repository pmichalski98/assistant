import Header from "@/components/Header";
import Messages from "@/components/Messages";
import ChatForm from "@/components/ChatForm";

export default function Home() {
  return (
    <div className="h-screen ">
      <Header />
      <main className=" px-4  ">
        <section className="mb-20 h-[900px] bg-background ">
          <Messages />
        </section>
        <section className="fixed bottom-0 right-0 z-10 mx-auto max-h-52 w-full overflow-y-auto bg-background p-4 ">
          <ChatForm />
        </section>
      </main>
    </div>
  );
}
