import { IMessage } from "../Message.type";

export interface IMessageMenu extends Pick<IMessage, "isReceived"> {
	isShow: boolean,
	toggleIsShow: () => void
}