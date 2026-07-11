import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Mock API Form Submission received:", body);
    
    // Simulate short network delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: "Form submission received successfully (mock).",
      receivedData: body,
    });
  } catch (error: unknown) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { success: false, message: "Invalid payload received." },
      { status: 400 }
    );
  }
}
