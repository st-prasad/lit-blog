import fs from "fs";
import matter from "gray-matter";

export const getParsedMatter = (filePath: string) => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const parsedMatter = matter(fileContents);
  
  return parsedMatter;
};
