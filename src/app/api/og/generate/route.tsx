import { ImageResponse } from "next/og";
import { baseURL, person } from "@/resources";

export const runtime = "nodejs";

export async function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Portfolio";

  async function loadGoogleFont(font: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}`
    const css = await (await fetch(url)).text()
    const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)

    if (resource) {
      const response = await fetch(resource[1])
      if (response.status == 200) {
        return await response.arrayBuffer()
      }
    }

    throw new Error('failed to load font data')
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "4rem",
        background: "linear-gradient(135deg, #151515 0%, #1a1a1a 50%, #0f0f0f 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
          opacity: 0.3,
        }}
      />
      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {person.firstName.charAt(0)}{person.lastName.charAt(0)}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "white",
                lineHeight: 1,
              }}
            >
              {person.name}
            </span>
            <span
              style={{
                fontSize: "1.5rem",
                color: "#a0a0a0",
                lineHeight: 1,
              }}
            >
              {person.role}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "white",
              lineHeight: 1.2,
              textWrap: "balance",
              maxWidth: "100%",
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontSize: "2rem",
              color: "#d0d0d0",
              lineHeight: 1.4,
              textWrap: "balance",
              maxWidth: "80%",
            }}
          >
            Desenvolvedor Full Stack com foco em Segurança
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: "1rem",
                height: "1rem",
                borderRadius: "50%",
                background: "#10b981",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: "1.5rem",
                color: "#a0a0a0",
              }}
            >
              Disponível para projetos
            </span>
          </div>
          <span
            style={{
              fontSize: "1.5rem",
              color: "#a0a0a0",
            }}
          >
            buenodevsec.com.br
          </span>
        </div>
      </div>
    </div>,
    {
      width: 1280,
      height: 720,
      fonts: [
        {
          name: "Inter",
          data: await loadGoogleFont('Inter:wght@400;600;700'),
          style: "normal",
        },
      ],
    },
  );
}