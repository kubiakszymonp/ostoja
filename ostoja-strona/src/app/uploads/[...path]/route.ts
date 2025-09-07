import { Environment, getEnvironment } from "@/environment";


export async function GET(
  request: Request,
  { params }: { params: { path: string[] } }
) {
  try {
    // Określ aktualne środowisko
    const envConfig = getEnvironment();

    // Skonstruuj ścieżkę do pliku
    const filePath = params.path ? params.path.join("/") : "";
    const backendUrl = `${envConfig.uploadsUrl}/${filePath}`;

    console.log(`[UPLOADS PROXY] GET - Calling URL: ${backendUrl}`);

    // Wyślij request do backendu
    const response = await fetch(backendUrl, {
      method: "GET",
      headers: {
        // Przekaż ważne nagłówki z oryginalnego requestu
        "User-Agent": request.headers.get("User-Agent") || "",
        Accept: request.headers.get("Accept") || "*/*",
        "Accept-Encoding": request.headers.get("Accept-Encoding") || "",
        "Cache-Control": request.headers.get("Cache-Control") || "",
      },
    });

    if (!response.ok) {
      console.error(
        `[UPLOADS PROXY] Backend responded with ${response.status}`
      );
      return new Response("File not found", { status: 404 });
    }

    // Pobierz dane z backendu
    const data = await response.arrayBuffer();

    // Przekaż odpowiedź z odpowiednimi nagłówkami
    return new Response(data, {
      status: response.status,
      headers: {
        "Content-Type":
          response.headers.get("Content-Type") || "application/octet-stream",
        "Content-Length": response.headers.get("Content-Length") || "",
        "Cache-Control":
          response.headers.get("Cache-Control") || "public, max-age=3600",
        ETag: response.headers.get("ETag") || "",
        "Last-Modified": response.headers.get("Last-Modified") || "",
      },
    });
  } catch (error) {
    console.error("[UPLOADS PROXY] Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

// Dodaj obsługę HEAD requestów (dla sprawdzania istnienia plików)
export async function HEAD(
  request: Request,
  { params }: { params: { path: string[] } }
) {
  try {
    const envConfig = getEnvironment();

    const filePath = params.path ? params.path.join("/") : "";
    const backendUrl = `${envConfig.uploadsUrl}/${filePath}`;

    console.log(`[UPLOADS PROXY] HEAD - Calling URL: ${backendUrl}`);

    const response = await fetch(backendUrl, {
      method: "HEAD",
    });

    return new Response(null, {
      status: response.status,
      headers: {
        "Content-Type":
          response.headers.get("Content-Type") || "application/octet-stream",
        "Content-Length": response.headers.get("Content-Length") || "",
        "Cache-Control":
          response.headers.get("Cache-Control") || "public, max-age=3600",
        ETag: response.headers.get("ETag") || "",
        "Last-Modified": response.headers.get("Last-Modified") || "",
      },
    });
  } catch (error) {
    console.error("[UPLOADS PROXY] HEAD Error:", error);
    return new Response(null, { status: 500 });
  }
}
