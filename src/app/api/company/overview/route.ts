import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();

  const profile = await prisma.companyOverview.findFirst({
    where: {
      companyId: data.companyId,
    },
  });
  //upsert = menambah data jika data belum pernah dibuat, jika sudah ada data maka akan dilakukan update pada data sebelumnya
  const result = await prisma.companyOverview.upsert({
    where: {
      companyId: data.companyId,
      id: profile?.id || "",
    },
    update: data,
    create: data,
  });

  return NextResponse.json(result);
}
