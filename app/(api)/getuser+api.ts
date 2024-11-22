import { neon } from "@neondatabase/serverless";

export async function GET(request: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const url = new URL(request.url);
    const clerkId = url.searchParams.get("clerkId");

    // Vérification si `clerkId` est fourni
    if (!clerkId) {
      return Response.json(
        { error: "Missing required query parameter: clerkId" },
        { status: 400 }
      );
    }

    // Requête pour récupérer l'utilisateur
    const response = await sql`
      SELECT id, name, email, clerk_id 
      FROM users 
      WHERE clerk_id = ${clerkId};
    `;

    // Vérification si l'utilisateur existe
    if (response.length === 0) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    // Réponse avec les données de l'utilisateur
    return new Response(
      JSON.stringify({
        data: response[0], // Retourne la première correspondance
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error retrieving user:", error);

    // Gestion des erreurs
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
