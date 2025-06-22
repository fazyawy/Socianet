import axios from "axios";

import { IPublications } from "./types/publications.type";

class PublicationsService {
	getPublications = async () => {
		return await axios.get<IPublications[]>('https://jsonplaceholder.typicode.com/posts');
	}
}

export default new PublicationsService()