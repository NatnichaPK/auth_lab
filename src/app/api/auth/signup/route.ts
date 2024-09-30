import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const bcrypt = require("bcrypt");
    const hashPassword = await bcrypt.hash(password, 10);

    return NextResponse.json({
      status: true,
      message: "success",
    });
  } catch (e) {
    console.error(e);

    return NextResponse.json({
      status: false,
      message: "login un-success",
    });
  }
}
