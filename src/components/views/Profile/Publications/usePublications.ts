import { useQuery } from "@tanstack/react-query";
import { IPost } from "./Publications.type";
import axios from "axios";

export const usePublications = () => {

	const queryFn = async (): Promise<IPost[]> => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

		return response.data
	}

	return useQuery({
		queryKey: ['publications'],
		queryFn
	})
};

