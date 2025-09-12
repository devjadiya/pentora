import { Timestamp } from "firebase/firestore";

export type FileTree = {
  name: string;
  path: string;
  url: string;
}


export type RepositoryDoc = {
  repoName: string;
  title: string;
  description: string;
  keywords: string;
  fileTree: FileTree[];
  createdAt: Timestamp
}

export type NestedFileNode =
  | { name: string; type: "folder"; children: NestedFileNode[] }
  | { name: string; type: "file"; path: string; url: string };
