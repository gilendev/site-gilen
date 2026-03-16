const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Serviço de e-mail não configurado' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const formData = await req.formData();
    const nome = formData.get('nome') as string;
    const empresa = formData.get('empresa') as string;
    const email = formData.get('email') as string;
    const telefone = formData.get('telefone') as string;
    const mensagem = formData.get('mensagem') as string;
    const arquivo = formData.get('arquivo') as File | null;

    if (!nome || !email || !mensagem) {
      return new Response(
        JSON.stringify({ success: false, error: 'Campos obrigatórios: nome, email, mensagem' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Build email HTML
    const htmlContent = `
      <h2>Nova mensagem do site - GILEN Industrial</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Nome</td><td style="padding: 8px; border: 1px solid #ddd;">${nome}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Empresa</td><td style="padding: 8px; border: 1px solid #ddd;">${empresa || '-'}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">E-mail</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Telefone</td><td style="padding: 8px; border: 1px solid #ddd;">${telefone || '-'}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Mensagem</td><td style="padding: 8px; border: 1px solid #ddd;">${mensagem}</td></tr>
      </table>
      ${arquivo ? `<p style="margin-top: 16px;"><strong>Arquivo anexado:</strong> ${arquivo.name} (${(arquivo.size / 1024).toFixed(1)} KB)</p>` : ''}
    `;

    // Prepare attachments
    const attachments: Array<{ filename: string; content: string }> = [];
    if (arquivo && arquivo.size > 0) {
      const arrayBuffer = await arquivo.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      let binary = '';
      for (let i = 0; i < uint8Array.length; i++) {
        binary += String.fromCharCode(uint8Array[i]);
      }
      const base64 = btoa(binary);
      attachments.push({
        filename: arquivo.name,
        content: base64,
      });
    }

    // Send via Resend
    const resendPayload: Record<string, unknown> = {
      from: 'GILEN Industrial <onboarding@resend.dev>',
      to: ['contato@gilenindustrial.com.br'],
      reply_to: email,
      subject: `Contato via Site - ${nome}${empresa ? ` (${empresa})` : ''}`,
      html: htmlContent,
    };

    if (attachments.length > 0) {
      resendPayload.attachments = attachments;
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resendPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      return new Response(
        JSON.stringify({ success: false, error: data.message || 'Erro ao enviar e-mail' }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Email sent successfully:', data.id);
    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
