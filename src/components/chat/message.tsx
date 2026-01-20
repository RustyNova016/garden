import styles from "./chat.module.css";
import { ChatMessage } from "./chat_box";

export type MessageProps = {
    message: ChatMessage,
};

export function Message(props: MessageProps) {
    return <>
        <p className={`${styles.message}`}>{props.message.text}</p>
    </>;
} 