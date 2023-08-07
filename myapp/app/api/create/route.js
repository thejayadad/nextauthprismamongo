import { NextResponse } from "next/server";
import prisma from "../../../libs/prismadb"
import { getCurrentUser } from "../../../actions/getCurrentUser";


export async function POST(request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json(401);
  }
  try {
    const body = await request.json();  
  const { name, description, imageSrc } = body;
    const listing = await prisma.listing.create({
      data: {
        name,
        imageSrc,
        description,
        userId: currentUser.id,
      },
    });

    return NextResponse.json(listing);
  } catch (error) {
    console.error('Error creating listing:', error);
    return NextResponse.json(500);
  }
}
