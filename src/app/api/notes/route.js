import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import connect from "@/src/utils/db";
import Note from "@/src/models/Note";
import { NextResponse } from "next/server";

// Get the Notes
export const GET = async (request) => {
  const cookieHeader = request.headers.get('cookie')
  console.log('Cookie received in GET ', cookieHeader)
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

// POST - Create Notes
export const POST = async (request) => {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { name, body, tags } = await request.json();

  if (!name || !body) {
    return new NextResponse("Title and body are required", { status: 400 });
  }

  await connect();

  try {
    const newNote = new Note({
      userId: session.user.id,
      name,
      body,
      tags: tags || [],
      archived: false,
    });

    await newNote.save();
    return new NextResponse(JSON.stringify(newNote), { status: 201 });
  } catch (error) {
    console.error('Error creating note:', error);
    return new NextResponse("Failed to create note", { status: 500 });
  }
};


// Update Notes
export const PATCH = async (request) => {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id, title, content, tags, archived } = await request.json();

  if (!id) {
    return new NextResponse("Note ID is required", { status: 400 });
  }

  await connect();

  try {
    const updatedNote = await Note.findOneAndUpdate(
      { _id: id, userId: session.user.id },  // Ensure the note belongs to the user
      { 
        ...(title && { title }),
        ...(content && { content }),
        ...(tags && { tags }),
        ...(archived !== undefined && { archived })
      },
      { new: true }  // Return the updated document
    );
        console.log("Updated Note in DB:", updatedNote);  // Log after updating


    if (!updatedNote) {
      return new NextResponse("Note not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(updatedNote), { status: 200 });
  } catch (error) {
    console.error("Error updating note:", error);
    return new NextResponse("Failed to update note", { status: 500 });
  }
};

// Delete Note
export const DELETE = async (request) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id } = await request.json();  // Get note ID from request body

  if (!id) {
    return new NextResponse("Note ID is required", { status: 400 });
  }

  await connect();

  try {
    const deletedNote = await Note.findOneAndDelete({
      _id: id,
      userId: session.user.id,  // Ensure the note belongs to the logged-in user
    });

    if (!deletedNote) {
      return new NextResponse("Note not found", { status: 404 });
    }

    return new NextResponse("Note deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting note:", error);
    return new NextResponse("Failed to delete note", { status: 500 });
  }
};
