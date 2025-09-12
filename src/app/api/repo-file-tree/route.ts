



import { NextRequest, NextResponse } from "next/server";
import { FirestoreService } from "@/firebase/firestoreService";
import { RepositoryDoc } from "@/types/types";




export async function GET(req: NextRequest) {

  const repoName = req.nextUrl.searchParams.get("repoName");

  if (!repoName) {
    return NextResponse.json({ error: "Repository name is required" }, { status: 400 });
  }

  const doc = await FirestoreService.getDoc<RepositoryDoc>("Repositories", repoName)

  if (!doc) {
    return NextResponse.json({ error: "Repository not found" }, { status: 404 });
  }

  const fileTree = doc.fileTree || [];

  return NextResponse.json({ fileTree });
};
