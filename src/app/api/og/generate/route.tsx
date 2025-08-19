import { ImageResponse } from "@vercel/og";

const person = {
  firstName: "Leandro",
  lastName: "Gabriel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Cybersecurity Specialist & Full Stack Developer",
};

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    let url = new URL(request.url);
    let title = url.searchParams.get("title") || "Portfolio";

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
    },
  );
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
}