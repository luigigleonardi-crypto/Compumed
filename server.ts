import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API router
  app.post('/api/recommend', async (req, res) => {
    const { purpose } = req.body;
    if (!purpose || typeof purpose !== 'string' || !purpose.trim()) {
      return res.status(400).json({ error: 'Você precisa dizer para que usará o PC.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'undefined' || apiKey === 'null' || apiKey === 'MY_GEMINI_API_KEY') {
      // Fallback local robusto construindo com base em palavras-chave se não houver chave de API
      const input = purpose.toLowerCase();
      let name = 'PC Compumed Entrada-Estudo';
      let price = 1650;
      let specs = 'Processador Intel Core i3, 8GB RAM, SSD 256GB, Vídeo Integrado';
      let desc = 'Configuração focada em tarefas essenciais do dia a dia, como navegação rápida na internet, estudos, edição de documentos fiscais e vídeos leves. Excelente custo-benefício.';

      if (input.includes('jogo') || input.includes('jogar') || input.includes('gamer') || input.includes('gta') || input.includes('fifa') || input.includes('valorant') || input.includes('lol') || input.includes('fortnite')) {
        name = 'PC Compumed Gamer Pro';
        price = 4130;
        specs = 'Processador AMD Ryzen 5, Placa B550, 16GB RAM, SSD 512GB, NVIDIA RTX 3060 12GB';
        desc = 'Esta máquina Gamer Pro foi planejada para rodar seus jogos modernos (incluindo FIFA, Valorant, GTA V) em alta resolução com ótima fluidez e sem travamentos.';
      } else if (input.includes('trabalho pesado') || input.includes('after') || input.includes('photoshop') || input.includes('edição') || input.includes('cad') || input.includes('autocad') || input.includes('3d') || input.includes('programar')) {
        name = 'PC Compumed Workstation Elite';
        price = 5600;
        specs = 'Processador AMD Ryzen 7, Placa B650, 32GB RAM, SSD 1TB, NVIDIA RTX 4060 8GB';
        desc = 'Excelente para engenharia, modelagem AutoCAD, editores de vídeo no After Effects ou Premiere e desenvolvimento Web. Muita memória para abrir dezenas de tarefas juntas sem lentidão.';
      } else if (input.includes('barato') || input.includes('escritório') || input.includes('trabalho') || input.includes('simples')) {
        name = 'PC Compumed Escritório Rápido';
        price = 2150;
        specs = 'Processador Intel Core i5, Placa H610, 16GB RAM, SSD 512GB, Vídeo Integrado Ultra HD';
        desc = 'PC desenhado para empresas e home-office de alto rendimento. Com 16GB de RAM e SSD de alta velocidade para iniciar o Windows em segundos e alternar entre planilhas e sistemas de forma instantânea.';
      }

      return res.json({ name, price, desc, specs });
    }

    try {
      // Usar Lazy initialization e o SDK oficial @google/genai como demandado nas guidelines
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: `O usuário quer montar um computador adaptado para o seguinte uso: "${purpose}".
Como você é especialista certificado em hardware de computador da nossa conceituada loja COMPUMED, você deve sugerir a melhor máquina.
O preço do PC em Reais (BRL) sugerido deve ser compatível com a realidade do mercado brasileiro em 2026.
Você DEVE obrigatoriamente responder APENAS com um formato JSON válido, sem cercas de markdown (não inclua carácteres como \`\`\`json no início ou no fim), contendo:
{
  "name": "Nome sugerido para este modelo de PC",
  "price": preco_em_numero_sem_r$_como_4200,
  "desc": "Explicação curta, de fácil entendimento (sem termos difíceis ou jurídicos) sobre o porquê de cada componente ser perfeito para este uso.",
  "specs": "Especificações detalhadas principais das peças em uma única linha (ex: Processador Intel i5, Placa H610, 16GB RAM, SSD 512GB, Placa RTX 3060)"
}`,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const text = response.text || '';
      // Limpa possíveis marcações acidentais de markdown
      const cleanText = text.replace(/```json/gi, '').replace(/```/g, '').trim();
      const data = JSON.parse(cleanText);
      
      // Valida que o JSON contém os campos necessários
      if (data && typeof data.name === 'string' && typeof data.price === 'number') {
        return res.json(data);
      }
      throw new Error('Formato inválido retornado pelo modelo');

    } catch (err) {
      console.error('Erro na chamada do Gemini:', err);
      // Fallback em caso de erro no modelo ou na rede
      return res.json({
        name: 'PC Sob Medida Compumed',
        price: 3450,
        desc: 'Montamos a configuração balanceada perfeita para o que você precisa usando as melhores marcas do nosso estoque físico.',
        specs: 'Processador Intel Core i5 / Ryzen 5, Placa-mãe de alta durabilidade, 16GB RAM, SSD 512GB NVMe, Gabinete refrigerado'
      });
    }
  });

  // Vite ou arquivos estáticos
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Compumed Server] Rodando com sucesso na porta ${PORT}`);
  });
}

startServer();
