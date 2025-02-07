import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import connect from "@/utils/db";
import Note from "@/models/Note";
import { NextResponse } from "next/server";


// Get the Notes
export const GET = async (request) => {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await connect();

  try {
    const notes = await Note.find({ userId: session.user.id });
    return new NextResponse(JSON.stringify(notes), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to fetch notes", { status: 500 });
  }
};

// Create Notes
export const POST = async (request) => {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { title, content } = await request.json();

  if (!title || !content) {
    return new NextResponse("Title and content are required", { status: 400 });
  }

  await connect();

  try {
    const newNote = new Note({
      userId: session.user.id,
      title,
      content,
    });

    await newNote.save();
    return new NextResponse("Note created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Failed to create note", { status: 500 });
  }
};

