// app/api/file-content/route.ts
import { NextRequest, NextResponse } from "next/server";
import { FirestoreService } from "@/firebase/firestoreService";
import { RepositoryDoc } from "@/types/types";

export async function POST(req: NextRequest) {
    try {
        // Parse JSON body instead of query parameters
        const { filePath, repoName, content } = await req.json();
        

        if (!filePath || !repoName || !content) {
            return NextResponse.json(
                { error: "filePath, repoName, and content are required" },
                { status: 400 }
            );
        }

        // Get repository document
        const doc = await FirestoreService.getDoc<RepositoryDoc>("Repositories", repoName) 

        if (!doc) {
            return NextResponse.json(
                { error: "Repository not found" },
                { status: 404 }
            );
        }

        // Check if file exists in repository
        const fileEntry = doc.fileTree.find(({ path }) => path === filePath);

        if (!fileEntry) {
            return NextResponse.json(
                { error: "File not found in repository" },
                { status: 404 }
            );
        }

        try {
            // Upload the updated file content
            await FirestoreService.uploadFile(
                new Blob([content], { type: "text/plain" }),
                repoName,
                filePath
            );


            return NextResponse.json({
                message: "File updated successfully",
                content
            });

        } catch (error) {
            console.error("Error uploading file:", error);
            return NextResponse.json(
                { error: "Failed to update file content" },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 }
        );
    }
}