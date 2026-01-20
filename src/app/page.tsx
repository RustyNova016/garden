import Image from "next/image";
import styles from "./page.module.css";
import { ChatBox } from "@/components/chat/chat_box";
import LoginButton from "@/components/login/login_button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ChatBox></ChatBox>
        
        
      </main>
    </div>
  );
}
