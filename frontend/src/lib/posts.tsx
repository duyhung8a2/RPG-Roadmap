import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
	id: string;
	[key: string]: any;
}

export function getSortedPostsData() {
	// Get file name under /posts
	const filenames = fs.readdirSync(postDirectory);
	const allPostsData = filenames.map((filename) => {
		// Remove ".md" in filename to get id
		const id = filename.replace(/\.md$/, '');

		// Read markdown file as string
		const fullpath = path.join(postDirectory, filename);
		const fileContents = fs.readFileSync(fullpath, 'utf8');

		// Use gray matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine data with id
		return {
			id, 
			...matterResult.data,
		} as PostData;
	});
	
	return allPostsData.sort((a: PostData, b: PostData) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	})
}