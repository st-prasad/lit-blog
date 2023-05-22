import fs from 'fs'; //importing fs module from node.js to read files from the file system
import { PostMetaDataType } from './Interfaces';
import { getParsedMatter } from './getParsedMatter';

//after running markdown through gray-matter, you would get an object with a data property containing the metadata (the front matter), and a content property containing the rest of the markdown file.

const getPostMetaData = (): PostMetaDataType[] => { //function to get the metadata of the post
    // const folder = "blogPosts/";
    const files = fs.readdirSync("blogPosts/");//read the files in the folder and store in files

    //filter to only get markdown files
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const postsData = markdownPosts.map((fileName) => {
        const fullPath = `blogPosts/${fileName}`; //get the full path of the file
        const parsedMatter = getParsedMatter(fullPath);
        const matterData = parsedMatter.data;


        return {
            title: matterData.title,
            // description: matterData.data.description,
            date: matterData.date,
            subtitle: matterData.subtitle,
            slug: fileName.replace(".md", ""),
        };
    });
    // const slugs = markdownPosts.map((post) =>  post.replace(".md", "") ); //slugs are the names of the files without the .md extension
    // return slugs;
    return postsData;
}

export default getPostMetaData;