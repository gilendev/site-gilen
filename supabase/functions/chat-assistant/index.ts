import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Você é o assistente virtual da GILEN Industrial, uma empresa brasileira com mais de 13 anos de experiência em engenharia industrial localizada em São Paulo (Vila Nilo).

SOBRE A EMPRESA:
- Especializada em soluções industriais sob medida
- Planta industrial de 1000m² com CNC, soldagem e pintura eletrostática
- Mais de 10.000 projetos realizados para 50+ clientes ativos

NOSSAS MARCAS:
- Gil Cases e Suportes: Cases, flight cases e suportes técnicos
- Parametrizze: Design paramétrico, fachadas, mobiliário computacional
- Gourmetizze: Churrasqueiras, equipamentos e utensílios gourmet premium
- Comicpets: Produtos premium para pets (arranhadores, comedouros, etc.)
- Design Kids: Mobiliário infantil educativo e seguro

CONTATO:
- Telefones: (11) 2241-3047, (11) 2143-7721
- WhatsApp: (11) 96875-6430
- Email: contato@gilenindustrial.com.br
- Endereço: R. Cirene de Oliveira Laet, 815 - Vila Nilo, SP
- Horário: Segunda a Sexta, 8h às 18h

INSTRUÇÕES:
- Responda sempre em português brasileiro
- Seja cordial, profissional e objetivo
- Para orçamentos, direcione ao WhatsApp ou formulário de contato
- Pode fornecer estimativas gerais mas sempre indique que o valor final depende de análise técnica
- Se não souber algo específico, direcione ao contato da empresa
- Use markdown para formatar respostas quando apropriado`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })),
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Muitas requisições, tente novamente em alguns segundos." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Créditos insuficientes." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Erro no gateway de IA" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
