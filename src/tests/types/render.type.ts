import { ReactNode } from "react";
import { DataRouter } from "react-router";

export interface IRender {
	paths?: string[],
	element?: ReactNode,
	router?: DataRouter
}