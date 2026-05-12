export interface PromptEntry {
  id: string;
  title: string;
  category: 'comercial' | 'financeiro' | 'operacional' | 'marketing' | 'juridico' | 'rh' | 'pessoal';
  goal: string;
  template: string;
  notes?: string;
}

export const prompts: PromptEntry[] = [
  {
    id: 'analise-vendas-q',
    title: 'Diagnóstico de funil comercial',
    category: 'comercial',
    goal: 'Identificar gargalos no funil e propor 3 ações com impacto em R$',
    template: `Você é Head de Vendas com 15 anos em SaaS B2B.

<contexto>
Empresa: [DESCRIÇÃO 1 LINHA]
MRR: R$ [X]
Equipe comercial: [N] vendedores
Período da análise: [PERÍODO]
</contexto>

<dados>
[ANEXAR PLANILHA / EXPORT DE CRM]
</dados>

<tarefa>
1. Mapeie o funil completo (etapas, volumes, conversões)
2. Identifique os 3 gargalos críticos
3. Para cada gargalo: hipótese de causa + impacto em R$/mês + ação dos próximos 7 dias
4. Compare vendedores entre si — encontre o outlier (positivo e negativo)
5. Identifique 1 padrão oculto que ninguém viu nos últimos 90 dias
</tarefa>

<formato>
- Resumo executivo (5 bullets com R$)
- Tabela do funil
- 3 gargalos com plano de ação
- Comparativo por vendedor
- Padrão oculto destacado
</formato>

Pense passo a passo. Mostre raciocínio antes da conclusão.`,
  },
  {
    id: 'projecao-runway',
    title: 'Projeção de runway + 3 cortes não-óbvios',
    category: 'financeiro',
    goal: 'Saber quanto tempo o caixa dura e onde cortar sem matar crescimento',
    template: `Você é CFO experiente em startups série A/B.

<contexto>
Caixa atual: R$ [X]
Burn médio dos últimos 6 meses: R$ [Y]/mês
Receita atual: R$ [Z]/mês com crescimento de [%]/mês
Funcionários: [N], sendo [N] em engenharia
</contexto>

<dados>
[ANEXAR PLANILHA DRE OU FLUXO DE CAIXA]
</dados>

<tarefa>
1. Calcule runway nos 3 cenários: pessimista (sem crescimento), realista (crescimento atual), otimista (+ 50%)
2. Identifique 3 cortes não-óbvios que liberam pelo menos R$ [META]/mês sem matar produto
3. Para cada corte: economia em R$, risco operacional, prazo de implementação
4. Aponte 1 alavanca de receita esquecida (revenue leak)
</tarefa>

<formato>
- 3 cenários de runway com tabela mensal
- 3 cortes priorizados (alto impacto / baixo risco primeiro)
- Revenue leak destacado em vermelho
- Recomendação final: cortar ou levantar?
</formato>`,
  },
  {
    id: 'email-triage',
    title: 'Triagem diária da caixa de entrada',
    category: 'pessoal',
    goal: 'Limpar inbox em 10 minutos, sem perder o importante',
    template: `Você é meu chief of staff. Anexei minha caixa de entrada das últimas 24h.

<filtros>
Importante = decisão de cliente, pagamento, sócio, time direto, ou prazo &lt; 48h
Informativo = newsletter, atualização de produto, marketing
Spam = óbvio
</filtros>

<tarefa>
1. Classifique cada email em: AGIR / RESPONDER / LER / ARQUIVAR / SPAM
2. Para AGIR: liste em ordem de prioridade com 1 linha de contexto
3. Para RESPONDER: rascunhe resposta de 2-3 linhas (tom direto, profissional)
4. Identifique padrões: quem mais consome meu tempo essa semana?
</tarefa>

<formato>
| Prioridade | De | Assunto | Ação | Resposta sugerida |
|---|---|---|---|---|

Padrões observados ao final.`,
  },
  {
    id: 'analise-churn',
    title: 'Diagnóstico de churn',
    category: 'comercial',
    goal: 'Entender por que clientes cancelam — em fato, não em achismo',
    template: `Você é especialista em Customer Success em SaaS.

<contexto>
Negócio: [SETOR]
Ticket médio: R$ [X]
Churn nos últimos 3 meses: [N] clientes ([%])
Tempo médio de retenção dos churnados: [N] dias
</contexto>

<dados>
[ANEXAR PLANILHA: data de assinatura, plano, motivo de cancelamento, NPS último]
</dados>

<tarefa>
1. Segmente os churnados por: tempo de uso, plano, fonte de aquisição
2. Identifique padrões: qual segmento churna mais?
3. Analise motivos declarados — quais são verdadeiros vs eufemismos
4. Calcule LTV real vs LTV esperado
5. Proponha 3 intervenções com impacto mensurável em 60 dias
</tarefa>

<formato>
- Heatmap de segmentos (texto)
- Top 5 motivos REAIS
- LTV gap em R$
- Plano de 60 dias`,
  },
  {
    id: 'revisao-contrato',
    title: 'Revisão de contrato comercial',
    category: 'juridico',
    goal: 'Achar cláusulas de risco em contrato sem advogado disponível',
    template: `Você é advogado contratualista sênior brasileiro, especializado em contratos B2B.

<contexto>
Contrato com: [NOME]
Valor: R$ [X]
Prazo: [Y]
Objeto: [DESCREVER]
</contexto>

<documento>
[ANEXAR PDF / TEXTO DO CONTRATO]
</documento>

<tarefa>
1. Identifique cláusulas de risco DESEQUILIBRADO contra minha empresa
2. Verifique multa, rescisão, exclusividade, propriedade intelectual, confidencialidade
3. Compare com prática de mercado para esse tipo de contrato
4. Sinalize cláusulas ambíguas que podem virar interpretação contra mim
5. Sugira ajustes de redação (texto pronto pra contraproposta)
</tarefa>

<formato>
- Lista de riscos por severidade (alto/médio/baixo)
- Para cada: cláusula original, problema, redação alternativa
- Resumo: assinar como está, negociar pontos X/Y/Z, ou rejeitar?
</formato>

ATENÇÃO: este é parecer técnico assistivo, não substitui advogado para questões críticas.`,
  },
  {
    id: 'copy-landing',
    title: 'Copy de landing page que converte',
    category: 'marketing',
    goal: 'Headline + subheadline + CTA que falam com o cliente certo',
    template: `Você é copywriter direto, especialista em SaaS B2B.

<contexto>
Produto: [NOME]
O que faz: [1 LINHA]
Para quem: [PERFIL DE CLIENTE IDEAL]
Diferencial real: [O QUE NINGUÉM MAIS FAZ]
Dor principal do cliente: [DOR]
</contexto>

<tarefa>
Crie 5 variações de:
1. Headline (máx 7 palavras) — promessa direta, sem clichê
2. Subheadline (máx 2 linhas) — quem é e o que muda
3. CTA (máx 3 palavras) — verbo de ação + benefício

Para cada variação, declare o ângulo (autoridade, urgência, transformação, prova social, contraste).
</tarefa>

<restricoes>
- ZERO uso de: "revolucionário", "inovador", "transformar", "ecossistema", "potencializar"
- Pretensão = 0
- Linguagem de cliente, não de marketing
</restricoes>`,
  },
  {
    id: 'job-desc',
    title: 'Descrição de vaga que atrai bom candidato',
    category: 'rh',
    goal: 'JD honesta, sem 50 requisitos genéricos',
    template: `Você é Head de People em empresa de produto.

<contexto>
Cargo: [NOME]
Senioridade: [JR/PL/SR]
Time: [QUEM ELE REPORTA, QUEM REPORTA A ELE]
Salário: R$ [X] - R$ [Y] + [BENEFÍCIOS]
Modelo: [REMOTO/HÍBRIDO/PRESENCIAL]
Localização: [SE NÃO REMOTO]
</contexto>

<dores>
O que essa pessoa vai resolver nos primeiros 90 dias: [LISTAR]
</dores>

<tarefa>
Escreva uma JD que:
1. Comece pela DOR REAL que o cargo resolve (não "buscamos pessoas apaixonadas...")
2. Liste o que a pessoa fará no D1, D30, D90
3. Inclua MÁXIMO 5 requisitos OBRIGATÓRIOS de verdade
4. Liste o que NÃO precisa (anti-requisitos)
5. Termine com critério honesto de match (você se encaixa se… você NÃO se encaixa se…)
</tarefa>

<restricoes>
Zero clichê: "queremos te conhecer", "fazemos a diferença", "ambiente desafiador"
</restricoes>`,
  },
  {
    id: 'analise-cohort',
    title: 'Análise de coorte (cohort)',
    category: 'comercial',
    goal: 'Ver retenção real ao longo do tempo, não média enganadora',
    template: `Você é analista sênior de produto / growth.

<contexto>
Produto: [TIPO]
Métrica de retenção: [LOGIN / USO DE FEATURE / RECOMPRA / PAGAMENTO]
Granularidade: [DIÁRIA / SEMANAL / MENSAL]
</contexto>

<dados>
[ANEXAR PLANILHA: usuario_id | data_signup | data_atividade]
</dados>

<tarefa>
1. Construa tabela de coorte (linhas: mês de signup, colunas: meses desde signup)
2. Identifique se retenção está melhorando ou piorando coorte após coorte
3. Encontre o ponto de "ativação" — quando a maioria dos retidos engaja primeira vez
4. Compare coortes pagas vs orgânicas (se houver tag de fonte)
5. Recomende 1 mudança no produto que move retenção D7 em ≥5pp
</tarefa>

<formato>
- Tabela de coorte com cor (verde retém, vermelho perde)
- Curva de retenção média (texto descrevendo)
- Insight de ativação
- Recomendação principal`,
  },
  {
    id: 'relatorio-investidor',
    title: 'Update mensal para investidor',
    category: 'financeiro',
    goal: 'Update que investidor abre, lê em 90 segundos e responde',
    template: `Você é o CEO redigindo email mensal para investidores anjos e seed.

<contexto>
Mês: [REFERÊNCIA]
Stage: [SEED/SÉRIE A]
</contexto>

<dados>
MRR atual: R$ [X] (mês anterior: R$ [Y])
Burn: R$ [Z]
Runway: [N] meses
Clientes: [N] (variação)
NPS: [SE TIVER]
Próxima rodada: [QUANDO/QUANTO]
</dados>

<destaques>
[3-5 pontos de progresso/aprendizado/dor]
</destaques>

<tarefa>
Escreva email de update mensal que:
1. Cabe em 1 tela de celular (250-350 palavras)
2. Começa com 3 números (sem rodeio)
3. Tem seção "Boa notícia" (1-2 itens) e "Onde precisamos de ajuda" (1 item)
4. Termina com 1 ASK específico (intro, contratação, conselho)
</tarefa>

<voz>
Direto. Sem hype. Honesto sobre dificuldade. Não vende.
</voz>`,
  },
  {
    id: 'segmenta-cliente',
    title: 'Segmentação automática de base de clientes',
    category: 'comercial',
    goal: 'Achar grupos de clientes com comportamento distinto',
    template: `Você é analista de growth.

<dados>
[ANEXAR PLANILHA: cliente_id | features_usadas | ticket | tempo_de_casa | NPS | indústria | tamanho]
</dados>

<tarefa>
1. Identifique 3-5 segmentos com comportamento distintamente diferente
2. Para cada segmento: tamanho (% da base), ticket médio, retenção, principal característica
3. Nomeie cada segmento (nome que cabe em conversa de equipe)
4. Para cada: o que parar de fazer? O que dobrar?
5. Aponte qual segmento merece time dedicado e qual deveria ser deprecated
</tarefa>

<formato>
- Tabela de segmentos
- Persona em 2 linhas para cada
- Recomendação estratégica
</formato>`,
  },
  {
    id: 'reuniao-summary',
    title: 'Resumo executivo de reunião gravada',
    category: 'operacional',
    goal: 'Transformar 1h de transcrição em ata + ações',
    template: `<contexto>
Tipo de reunião: [SEMANAL/PROJETO/1:1/CLIENTE]
Participantes: [LISTAR]
Objetivo: [POR QUE EXISTIU]
</contexto>

<transcricao>
[COLAR TRANSCRIÇÃO COMPLETA]
</transcricao>

<tarefa>
1. Resumo executivo em 3 bullets (o que aconteceu, não tudo que foi dito)
2. Decisões tomadas (com nome de quem decidiu)
3. Ações combinadas (quem | o quê | até quando)
4. Itens não resolvidos que precisam de outra reunião
5. Tensões implícitas que não foram nomeadas (apenas se óbvio)
</tarefa>

<formato>
| Quem | Ação | Prazo |
</formato>

Tom: ata, não relatório literário.`,
  },
  {
    id: 'pricing-test',
    title: 'Teste de pricing (Van Westendorp simplificado)',
    category: 'comercial',
    goal: 'Achar faixa de preço aceitável por cliente real',
    template: `Você é especialista em pricing de SaaS / produto digital.

<contexto>
Produto: [DESCREVER]
Atual: cobramos R$ [X]/mês
Sentimento: clientes acham caro? barato? não comentam?
</contexto>

<dados>
[ANEXAR RESULTADOS DE PESQUISA OU FEEDBACK SOLTO DE CLIENTE]
</dados>

<tarefa>
Aplique método Van Westendorp:
1. A qual preço esse produto seria CARO DEMAIS?
2. A qual preço seria CARO mas eu pagaria?
3. A qual preço seria BARATO (qualidade boa)?
4. A qual preço seria BARATO DEMAIS (suspeitaria da qualidade)?

Identifique o "Optimal Price Point" e o "Indifference Price Point".
Compare com preço atual.
Recomende: subir, descer, manter, ou criar plano.
</tarefa>`,
  },
  {
    id: 'auditoria-tributaria',
    title: 'Auditoria de NF-e por padrão',
    category: 'financeiro',
    goal: 'Encontrar inconsistências em notas antes do fisco',
    template: `Você é contador tributário com 20 anos de experiência em empresas Simples Nacional / Lucro Presumido.

<dados>
[ANEXAR PLANILHA DE NF-E EMITIDAS]
</dados>

<tarefa>
1. Identifique NF-e com CFOP inconsistente com o objeto da empresa
2. Sinalize CST/CSOSN destoante do padrão
3. Liste valores fora da curva (3+ desvios padrão do ticket médio)
4. Encontre clientes/CNPJs com perfil de risco (matriz/filial trocada, MEI recebendo NF de serviço alta)
5. Sugira regularização proativa onde aplicável
</tarefa>

<formato>
- 5 categorias de risco, com NFs específicas listadas
- Ranking por urgência
- Plano de regularização sem multa
</formato>

ATENÇÃO: análise técnica, não substitui contador. Use para detectar antes do fisco detectar.`,
  },

  // ============== COMERCIAL ==============
  {
    id: 'proposta-comercial',
    title: 'Proposta comercial pronta em 5 minutos',
    category: 'comercial',
    goal: 'Gerar proposta personalizada que fecha — não template genérico',
    template: `Você é vendedor sênior B2B. Escreva proposta comercial que parece feita à mão pra esse cliente.

<contexto_cliente>
Empresa: [NOME]
Setor: [SETOR]
Tamanho aproximado: [PORTE]
Dor declarada na reunião: [DOR ESPECÍFICA]
Decisor: [NOME E CARGO]
Concorrente que estão considerando: [SE SOUBER]
</contexto_cliente>

<nossa_oferta>
Produto/serviço: [DESCREVER]
Preço: R$ [X] (modelo: mensal / one-time / variável)
Prazo de entrega: [PRAZO]
Diferencial real vs concorrente: [DIFERENCIAL]
</nossa_oferta>

<tarefa>
Gere proposta com:
1. Saudação personalizada (não "Prezado(a)")
2. Diagnóstico em 2 parágrafos — mostre que entendeu a dor deles
3. Solução proposta — fale do problema deles primeiro, da nossa solução depois
4. Investimento — apresente preço com âncora e justificativa
5. Próximos passos com prazos
6. P.S. com algo memorável
</tarefa>

<voz>
Direta, profissional, sem termos de marketing. Como executivo escrevendo para outro executivo.
</voz>

Tamanho: máximo 1 página A4.`,
  },
  {
    id: 'cold-email-b2b',
    title: 'Cold email que abre porta',
    category: 'comercial',
    goal: 'Email frio que tem resposta > 15%, não os 2% genérico',
    template: `Você é SDR com taxa de resposta acima de 20% em cold outbound B2B.

<target>
Empresa-alvo: [NOME]
Cargo do decisor: [CARGO]
Setor: [SETOR]
Trigger event (motivo de contatar AGORA): [EVENTO RECENTE]
</target>

<nossa_solucao>
O que vendemos: [1 LINHA]
Resultado típico para clientes parecidos: [MÉTRICA CONCRETA]
Caso de cliente similar: [NOMEAR]
</nossa_solucao>

<tarefa>
Escreva email cold de máximo 100 palavras com:
1. Assunto de 4-6 palavras que NÃO parece email de venda
2. Primeira linha: referência específica ao trigger event (não elogio genérico)
3. Conexão entre o problema deles e o caso real
4. CTA pequeno: pergunta direta ou janela de 15 min
5. Assinatura simples
</tarefa>

<proibido>
"Espero que esteja bem"
"Passando para apresentar"
"Inovador", "revolucionário", "potencializar"
Falar de quantos clientes temos
</proibido>

Devolva 3 variações com ângulos diferentes (autoridade · curiosidade · contraste).`,
  },
  {
    id: 'follow-up-comercial',
    title: 'Sequência de follow-up que reativa lead',
    category: 'comercial',
    goal: 'Cliente sumiu depois da reunião — 5 emails que reabrem conversa',
    template: `Você é AE experiente. Cliente sumiu depois de proposta enviada há [N] dias. Escreva sequência de 5 follow-ups.

<contexto>
Cliente: [NOME]
Último contato: [DATA + RESUMO]
Proposta: [VALOR + ESCOPO]
Razão hipotética do silêncio: [SE SOUBER]
</contexto>

<tarefa>
Sequência de 5 emails, espaçados:
- Email 1 (D+3): check-in simples, valor adicional
- Email 2 (D+7): caso de cliente similar
- Email 3 (D+14): conteúdo relevante (estudo, artigo)
- Email 4 (D+21): "break-up" honesto + pergunta direta
- Email 5 (D+45): nova abordagem com ângulo diferente

Para cada: assunto + corpo de 80-150 palavras.
</tarefa>

<voz>
Profissional, não chato. Sem "só passando para saber". Cada email entrega valor próprio.
</voz>`,
  },
  {
    id: 'qualificacao-lead',
    title: 'Script de qualificação BANT em 5 perguntas',
    category: 'comercial',
    goal: 'Descobrir se vale gastar tempo com lead em 10 min de call',
    template: `Você é Head of Sales. Crie roteiro de qualificação para call de 10 minutos com lead que entrou pelo site.

<nossa_solucao>
Vendemos: [DESCRIÇÃO]
Ticket médio: R$ [X]
Cliente ideal: [PERFIL]
Sinais de "não-cliente": [O QUE FILTRA]
</nossa_solucao>

<tarefa>
Crie roteiro com:
1. Abertura de 30s (quebra-gelo + agenda da call)
2. 5 perguntas BANT específicas (Budget, Authority, Need, Timing) — não genéricas
3. Para cada pergunta: o que escutar = vai bem · sinal vermelho · pergunta de aprofundamento
4. Tabela de scoring: 0-3 pontos por pergunta, total > X = qualificado
5. 3 frases de fechamento dependendo do score
</tarefa>

<formato>
- Abertura
- Perguntas com critério de avaliação
- Matriz de scoring
- Fechamento por cenário
</formato>`,
  },
  {
    id: 'objecoes-vendas',
    title: 'Banco de respostas para objeções comuns',
    category: 'comercial',
    goal: 'Ter resposta de bolso para "tá caro", "vou pensar", "já tenho fornecedor"',
    template: `Você é vendedor expert em SaaS B2B. Construa banco de respostas para as 8 objeções mais comuns no setor [SETOR].

<contexto>
Produto: [DESCRIÇÃO]
Ticket: R$ [X]
Diferencial real: [DIFERENCIAL]
</contexto>

<tarefa>
Para cada objeção, responda em 3 etapas:
1. EMPATIA: validar a preocupação sem ser bajulador
2. REENQUADRAMENTO: mudar a perspectiva sem mentir
3. PRÓXIMO PASSO: ação concreta pra avançar

Cubra essas 8 objeções:
- "Está caro"
- "Vou pensar"
- "Já tenho fornecedor"
- "Não é prioridade agora"
- "Preciso falar com meu sócio"
- "Manda por email que eu vejo"
- "Não conheço sua empresa"
- "E se eu cancelar?"
</tarefa>

<voz>
Honesta. Sem manipulação. Empresário inteligente reconhece truque barato e desconfia.
</voz>`,
  },

  // ============== FINANCEIRO ==============
  {
    id: 'precificacao-produto-novo',
    title: 'Precificação de produto novo (sem chutar)',
    category: 'financeiro',
    goal: 'Definir preço com base em valor + concorrência + margem',
    template: `Você é especialista em pricing strategy de SaaS / produto digital.

<produto>
Nome: [PRODUTO]
O que faz: [DESCRIÇÃO]
Custo unitário (CMV): R$ [X]
Investimento de desenvolvimento: R$ [Y]
Volume esperado em 12m: [N] unidades
</produto>

<mercado>
Concorrentes diretos e preços conhecidos:
1. [CONCORRENTE A]: R$ [X]
2. [CONCORRENTE B]: R$ [Y]
3. [CONCORRENTE C]: R$ [Z]

Nosso diferencial vs concorrência: [O QUE MUDA]
Público-alvo: [PERSONA]
Sensibilidade a preço deste público: [BAIXA / MÉDIA / ALTA]
</mercado>

<tarefa>
1. Calcule preço mínimo (cobre custo + margem alvo)
2. Calcule preço de mercado (mediana concorrentes)
3. Calcule preço de valor (quanto vale para o cliente em economia/ganho)
4. Recomende 3 cenários: penetração · seguir mercado · premium
5. Para cada: receita projetada, margem unitária, posicionamento
6. Sugira estratégia de teste (qual cobrar nos primeiros 90 dias)
</tarefa>

<formato>
- Tabela com 3 cenários (preço · margem · receita 12m · posicionamento)
- Recomendação final com justificativa
- Plano de teste e métrica de decisão
</formato>`,
  },
  {
    id: 'fluxo-caixa-13semanas',
    title: 'Fluxo de caixa projetado 13 semanas',
    category: 'financeiro',
    goal: 'Saber se aguenta os próximos 90 dias sem buscar capital',
    template: `Você é controller financeiro. Construa fluxo de caixa rolling de 13 semanas (90 dias).

<dados_iniciais>
Caixa atual: R$ [X]
Crédito disponível: R$ [Y] (limite cheque especial / capital de giro)
</dados_iniciais>

<entradas_recorrentes>
Receita média semanal: R$ [X]
Sazonalidade: [DESCREVER se houver]
Recebimentos atrasados a vir: R$ [X] (semana esperada)
</entradas_recorrentes>

<saidas_recorrentes>
Folha + encargos: R$ [X] / mês (dia [Y])
Aluguel + condomínio: R$ [X] / mês (dia [Y])
Fornecedores fixos: R$ [X] / mês
Impostos: R$ [X] / mês (DAS / PIS / COFINS / IR conforme regime)
Outros fixos: R$ [X]
</saidas_recorrentes>

<saidas_pontuais>
[LISTAR investimentos, compras, antecipações dos próximos 90 dias]
</saidas_pontuais>

<tarefa>
1. Construa tabela 13 semanas com: saldo inicial · entradas · saídas · saldo final
2. Identifique semanas com saldo < 0 (alerta vermelho)
3. Calcule saldo mínimo projetado e em qual semana
4. Sugira ações: antecipar receita · postergar pagamento · captar capital
5. Recomende reserva mínima de caixa para a operação
</tarefa>

<formato>
- Tabela de 13 semanas
- Resumo: melhor semana · pior semana · saldo final esperado
- 3 ações priorizadas se houver alerta
- Política de caixa mínimo
</formato>`,
  },
  {
    id: 'analise-margem',
    title: 'Análise de margem por produto/serviço',
    category: 'financeiro',
    goal: 'Descobrir o que dá lucro de verdade e o que vende mas não rende',
    template: `Você é controller. Identifique quais produtos/serviços dão lucro real e quais consomem margem escondida.

<contexto>
Empresa: [DESCRIÇÃO]
Modelo: [produto físico / SaaS / serviço]
Faturamento mensal: R$ [X]
</contexto>

<dados>
[ANEXAR PLANILHA: produto/serviço | preço de venda | custo direto | volume mês]
</dados>

<custos_indiretos>
Custos fixos mensais totais: R$ [X]
Comissões: [POLÍTICA]
Custos variáveis ocultos: [tipo cartão, frete, devolução, garantia]
</custos_indiretos>

<tarefa>
1. Calcule margem bruta real por linha (preço - custo direto - variáveis ocultos)
2. Rateie custos indiretos por % de receita
3. Calcule margem líquida real por linha
4. Identifique 3 vencedores (alta margem, alto volume)
5. Identifique 3 vampiros (vendem muito mas margem negativa após rateio)
6. Sugira: parar de vender X · subir preço Y · reduzir custo Z
</tarefa>

<formato>
- Tabela ranqueada por margem líquida
- Top 3 e Bottom 3 com análise
- 3 recomendações com impacto em R$/mês
</formato>`,
  },
  {
    id: 'comparacao-fornecedor',
    title: 'Comparação de fornecedor / SaaS subscription',
    category: 'financeiro',
    goal: 'Decidir entre alternativas considerando custo + risco + lock-in',
    template: `Você é COO experiente em decidir contratos de fornecedor.

<contexto>
Categoria: [O QUE ESTÁ COMPRANDO — CRM, contabilidade, transporte, etc]
Uso previsto: [VOLUME / USUÁRIOS / OPERAÇÕES]
Orçamento mensal disponível: R$ [X]
</contexto>

<alternativas>
1. FORNECEDOR A: [proposta + preço + prazo + condições]
2. FORNECEDOR B: [proposta + preço + prazo + condições]
3. FORNECEDOR C: [proposta + preço + prazo + condições]
</alternativas>

<tarefa>
Para cada fornecedor, analise:
1. Custo total em 12m e 36m (incluindo onboarding, treino, migração)
2. Cláusulas críticas: rescisão, reajuste, lock-in, exclusividade
3. Risco operacional se quebrar (continuidade, dado)
4. Tempo de implementação real (não o prometido)
5. Pontos cegos (o que parece bom mas não é)

Compare em matriz e recomende escolhido + 2 condições de saída.
</tarefa>

<formato>
- Matriz comparativa (preço · risco · prazo · lock-in)
- Recomendação justificada
- 2 cláusulas que devem entrar em negociação
</formato>`,
  },

  // ============== OPERACIONAL ==============
  {
    id: 'sop-processo',
    title: 'SOP (Standard Operating Procedure) de processo',
    category: 'operacional',
    goal: 'Documentar processo crítico para a equipe replicar sem você',
    template: `Você é COO. Escreva SOP claro para o processo abaixo.

<processo>
Nome: [O QUE É]
Responsável atual: [QUEM FAZ HOJE]
Frequência: [DIÁRIA / SEMANAL / EVENTUAL]
Tempo estimado por execução: [DURAÇÃO]
Quando o resultado vai pra qual pessoa/sistema: [HANDOFFS]
</processo>

<descreva_brevemente_como_voce_faz>
[3-5 LINHAS DESCREVENDO O QUE VOCÊ FAZ HOJE]
</descreva_brevemente_como_voce_faz>

<tarefa>
Construa SOP com:
1. OBJETIVO: 1 frase do resultado esperado
2. QUEM EXECUTA: cargo + skills necessárias
3. PRÉ-REQUISITOS: acessos, dados, ferramentas
4. PASSO A PASSO: cada passo com ação clara + tempo + ferramenta
5. CHECKPOINTS: o que conferir antes de avançar
6. SAÍDA ESPERADA: formato, qualidade, prazo
7. ESCALAÇÕES: quando NÃO seguir o SOP e chamar alguém
8. INDICADORES: como medir se está saindo bem (KPI do processo)
</tarefa>

<formato>
Markdown, numerado, com checklist no final.
</formato>`,
  },
  {
    id: 'crise-resposta',
    title: 'Plano de resposta a crise (cliente, mídia, time)',
    category: 'operacional',
    goal: 'Estancar sangramento em 24h quando algo grave acontece',
    template: `Você é Chief of Staff. Acabou de acontecer uma crise. Monte plano de resposta de 24h.

<situacao>
O que aconteceu: [DESCRIÇÃO DOS FATOS]
Quando: [DATA E HORA]
Quem foi afetado: [CLIENTES / FUNCIONÁRIOS / PARCEIROS]
Tamanho do impacto: [QUANTITATIVO]
Já é público? [SIM/NÃO]
Risco se vazar/escalar: [LISTAR]
</situacao>

<tarefa>
Monte plano em 4 horizontes:
1. PRIMEIRAS 4 HORAS: contenção imediata
   - Quem precisa saber agora (lista de stakeholders)
   - O que comunicar e o que NÃO dizer
   - Quem fala em nome da empresa
   - Ações de bloqueio para impedir piora

2. PRIMEIRAS 24 HORAS:
   - Comunicado oficial (escreva o draft)
   - Resposta para clientes afetados (email/mensagem template)
   - Briefing para o time (script de all-hands)
   - Resposta para mídia/redes se aparecer

3. PRÓXIMOS 7 DIAS:
   - Acompanhamento com afetados
   - Análise de causa raiz
   - Medidas corretivas

4. POST-MORTEM:
   - O que aprendemos
   - Mudanças permanentes no processo
</tarefa>

<voz>
Honesta, responsável, sem juridiquês. Não esconder o problema, mas não apavorar.
</voz>`,
  },
  {
    id: 'kpi-mensal',
    title: 'Painel de KPIs mensal do negócio',
    category: 'operacional',
    goal: 'Definir os 8-12 números que importam de verdade',
    template: `Você é COO sênior. Defina painel de KPIs do meu negócio.

<negocio>
O que vendemos: [DESCRIÇÃO]
Modelo: [B2B SaaS / B2C / serviço / produto]
Faturamento mensal: R$ [X]
Equipe: [TAMANHO E ÁREAS]
Principal desafio nos próximos 6 meses: [DESAFIO]
</negocio>

<tarefa>
Defina painel com 8-12 KPIs distribuídos em:
1. AQUISIÇÃO (3 KPIs): custo, volume, qualidade do que entra
2. CONVERSÃO (2 KPIs): % e velocidade
3. RETENÇÃO (2 KPIs): churn e expansão
4. SAÚDE FINANCEIRA (3 KPIs): margem, runway, eficiência
5. PESSOAS (1-2 KPIs): produtividade ou turnover

Para cada KPI:
- Nome
- Fórmula exata
- Onde coletar (sistema/planilha)
- Meta sugerida
- Quem é dono
- Frequência de revisão
- Trigger de alerta (quando virar problema)
</tarefa>

<formato>
Tabela markdown + visão narrativa de 5 linhas explicando POR QUE esses são os certos para o negócio descrito.
</formato>`,
  },
  {
    id: 'onboarding-cliente',
    title: 'Fluxo de onboarding de novo cliente',
    category: 'operacional',
    goal: 'Cliente passa do contrato assinado ao primeiro valor em 7 dias',
    template: `Você é Customer Success Manager. Desenhe fluxo de onboarding de novo cliente.

<contexto>
Produto/serviço: [DESCRIÇÃO]
Time-to-value típico: [QUANTO TEMPO ATÉ CLIENTE VER RESULTADO]
Principais dúvidas que cliente novo sempre tem: [LISTAR 3-5]
Maior motivo de churn nos primeiros 90 dias: [SE SOUBER]
</contexto>

<tarefa>
Construa fluxo D-0 a D+30 com:
- D-0 (contrato assinado): boas-vindas + próximos passos claros
- D+1 a D+3: kickoff técnico (quem participa, agenda, entregas)
- D+4 a D+7: primeiro uso real + check-in
- D+8 a D+14: revisão e ajuste
- D+15 a D+30: consolidação e expansão

Para cada etapa:
- Email/mensagem (escreva o texto)
- Ação interna (quem do nosso time faz o quê)
- O que cliente precisa entregar
- Ferramenta usada
- Critério de sucesso

Inclua 2 pontos de "alarme" — sinais de que está dando errado.
</tarefa>`,
  },
  {
    id: 'auditoria-fornecedor',
    title: 'Checklist de due diligence de fornecedor',
    category: 'operacional',
    goal: 'Validar fornecedor antes de assinar contrato grande',
    template: `Você é COO. Escreva checklist completo de due diligence para fornecedor de [CATEGORIA].

<contexto>
Categoria: [TI / logística / contábil / jurídico / outros]
Valor do contrato: R$ [X] / ano
Criticidade: [BAIXA / MÉDIA / ALTA / MISSION-CRITICAL]
Tempo disponível para diligence: [DIAS]
</contexto>

<tarefa>
Construa checklist dividido em 5 frentes:
1. JURÍDICA: CNPJ ativo, sócios, processos, certidões
2. FINANCEIRA: capacidade, dependência, histórico
3. OPERACIONAL: clientes atuais, capacidade real, SLA histórico
4. TÉCNICA / QUALIDADE: certificações, processos, ferramentas
5. SEGURANÇA / COMPLIANCE: LGPD, dados, continuidade

Para cada item:
- O que verificar
- Como (perguntar / pedir documento / consultar fonte pública)
- Bandeira vermelha (o que indica problema)
- Quem do meu time é responsável por checar

Finalize com matriz de aprovação (quais critérios são obrigatórios vs opcionais).
</tarefa>`,
  },

  // ============== MARKETING ==============
  {
    id: 'briefing-agencia',
    title: 'Briefing para agência ou freelancer',
    category: 'marketing',
    goal: 'Briefing que evita 80% das idas e voltas',
    template: `Você é Head of Marketing. Escreva briefing claro pra agência/freelancer.

<projeto>
Tipo: [campanha / site / vídeo / ID visual / outro]
Objetivo de negócio: [O QUE QUERO ALCANÇAR]
KPI principal: [MÉTRICA DE SUCESSO]
Prazo: [DEADLINE]
Orçamento: R$ [X]
</projeto>

<contexto>
Empresa: [1 LINHA]
Produto/serviço: [1 LINHA]
Público-alvo: [PERSONA ESPECÍFICA]
Posicionamento: [COMO QUEREMOS SER VISTOS]
Concorrentes principais: [LISTAR + LINKS]
Referências do que gostamos: [LINKS / IMAGENS]
Anti-referências (o que NÃO queremos): [LINKS / IMAGENS]
</contexto>

<tarefa>
Briefing com:
1. Resumo executivo (1 parágrafo)
2. Objetivos de negócio + métricas
3. Público-alvo detalhado
4. Mensagem-chave (1 frase)
5. Tom de voz desejado
6. Entregáveis específicos com formato e dimensões
7. Prazos e marcos
8. Restrições (legal, marca, técnicas)
9. Critério de aprovação interna
10. Quem decide o quê
</tarefa>

<voz>
Tão específico que sobra pouco para interpretação. Imagens valem mais que adjetivos.
</voz>`,
  },
  {
    id: 'plano-conteudo-90d',
    title: 'Plano de conteúdo 90 dias',
    category: 'marketing',
    goal: 'Calendário editorial realista que não morre na semana 2',
    template: `Você é Content Strategist. Crie plano de conteúdo de 90 dias.

<contexto>
Empresa: [NOME E O QUE FAZ]
Público-alvo: [PERSONA]
Canais ativos: [BLOG / LINKEDIN / INSTA / YOUTUBE / NEWSLETTER]
Capacidade real de produção: [N peças/semana — SEJA HONESTO]
Objetivo nos 90 dias: [AUMENTAR LEAD / AUTORIDADE / SEO / NPS / OUTRO]
</contexto>

<temas_pilares>
[3-5 grandes temas que dominamos]
</temas_pilares>

<tarefa>
Construa calendário 90d com:
1. Estrutura por mês: tema dominante + ângulos secundários
2. Para cada peça: título · canal · formato · objetivo · CTA · quem produz
3. Repurpose explícito: cada peça grande vira 3-5 menores
4. Equilíbrio 70/20/10: educacional / autoridade / promocional
5. Datas estratégicas do calendário (sazonais, do setor)
6. 5 ideias-coringa para mês fraco

Não pode prometer mais que a capacidade real informada.
</tarefa>

<formato>
Tabela semanal markdown + resumo de 5 linhas no final explicando a tese.
</formato>`,
  },
  {
    id: 'pitch-investidor',
    title: 'Pitch de 1 minuto para investidor',
    category: 'marketing',
    goal: 'Captar atenção em elevator pitch sem soar genérico',
    template: `Você é founder. Escreva pitch de 1 minuto (~150 palavras) para investidor angel/seed.

<negocio>
Nome: [EMPRESA]
O que faz: [1 LINHA HUMANA]
Estágio: [IDEIA / MVP / EARLY REVENUE / GROWTH]
Métricas-chave: [MRR / USUÁRIOS / CRESCIMENTO]
Mercado endereçável (TAM): [SE SOUBER]
Diferencial real vs concorrente: [O QUE NINGUÉM MAIS FAZ]
Time fundador: [BREVE]
</negocio>

<contexto_investidor>
Tipo: [ANJO / FUNDO SEED / FUNDO SÉRIE A]
Foco do investidor: [SETOR PREFERIDO SE SOUBER]
Tese de investimento: [SE SOUBER]
</contexto_investidor>

<tarefa>
Pitch estruturado em 4 atos:
1. HOOK (10s): problema importante e doloroso
2. SOLUÇÃO (15s): como resolvemos diferente
3. TRAÇÃO (15s): prova que funciona
4. ASK (20s): quanto, em que estágio, para que

Devolva 2 versões:
- Versão escrita (para email/deck)
- Versão falada (com cadência natural, pausas, ênfase)
</tarefa>

<proibido>
"Disruptivo", "revolucionário", "Uber de X", "ecossistema"
Mencionar todos os concorrentes
Acabar com "obrigado pela atenção"
</proibido>`,
  },
  {
    id: 'analise-concorrente',
    title: 'Análise estratégica de concorrente',
    category: 'marketing',
    goal: 'Mapear concorrente para encontrar brecha estratégica',
    template: `Você é estrategista. Analise concorrente do meu setor.

<contexto>
Minha empresa: [NOME + O QUE FAZ]
Concorrente analisado: [NOME + URL]
Por que estou olhando: [DECISÃO PENDENTE]
</contexto>

<tarefa>
Análise completa em 6 frentes:
1. POSICIONAMENTO: como se descrevem, para quem, qual promessa
2. OFERTA: produtos/serviços, preços públicos, modelo comercial
3. CONTEÚDO E COMUNICAÇÃO: tom, canais, frequência, qualidade
4. SOCIAL PROOF: clientes públicos, cases, NPS visível
5. SINAIS DE TRAÇÃO: contratações recentes, crescimento, presença em eventos
6. FRAQUEZAS APARENTES: reclamações no Reclame Aqui, reviews ruins, gaps de produto

Para cada frente, dê nota 1-5 vs meu negócio.
</tarefa>

<conclusao>
1. 3 coisas que ELES fazem melhor — copiar?
2. 3 brechas estratégicas — onde podemos ganhar?
3. 1 movimento ofensivo recomendado nos próximos 60 dias.
</conclusao>

Pesquise web usando ferramentas disponíveis. Cite fontes.`,
  },
  {
    id: 'nps-analise',
    title: 'Análise de feedback NPS com plano de ação',
    category: 'marketing',
    goal: 'NPS bruto vira ações específicas, não slide de "estamos melhorando"',
    template: `Você é Head of CX. Analise resultados de pesquisa NPS e proponha plano.

<contexto>
Negócio: [DESCRIÇÃO]
Período da pesquisa: [DATAS]
N respostas: [N]
NPS atual: [SCORE]
NPS anterior: [SCORE OU "PRIMEIRA VEZ"]
</contexto>

<dados>
[ANEXAR PLANILHA: nota | comentário | segmento | tempo de cliente]
</dados>

<tarefa>
1. Resumo: distribuição (promotores · neutros · detratores) e score
2. Top 3 elogios (categorias temáticas) com exemplos textuais
3. Top 3 críticas (mesmo formato)
4. Padrão por segmento: quem está mais feliz/triste?
5. Detratores com nome — listar 5 mais críticos para CS contatar
6. 3 problemas estruturais que precisam de mudança de produto
7. 2 problemas de comunicação (não é o produto, é a expectativa)
8. Plano: 5 ações priorizadas com dono, prazo e impacto esperado em NPS
</tarefa>

<formato>
- Distribuição em tabela
- Citações textuais para evidência
- Plano com Gantt visual em texto
</formato>`,
  },

  // ============== JURÍDICO ==============
  {
    id: 'analise-contrato-cliente',
    title: 'Revisão de contrato enviado por cliente',
    category: 'juridico',
    goal: 'Cliente mandou minuta — identificar onde estamos sendo apertados',
    template: `Você é advogado contratual sênior, especialista em B2B no Brasil.

<contexto>
Tipo de contrato: [PRESTAÇÃO DE SERVIÇO / SOFTWARE / OUTRO]
Quem mandou: [CLIENTE / FORNECEDOR]
Valor: R$ [X]
Prazo: [Y meses]
Operação descrita: [O QUE VAMOS FAZER POR ELES]
</contexto>

<documento>
[COLAR TEXTO OU REFERENCIAR PDF]
</documento>

<tarefa>
Análise crítica do lado de QUEM RECEBE a minuta:
1. Cláusulas excessivamente favoráveis ao redator
2. Obrigações desproporcionais (multa, garantia, exclusividade)
3. Cessão de direitos abusiva (especialmente PI)
4. Confidencialidade unidireccional ou ambígua
5. Rescisão desequilibrada
6. Foro distante / juízo arbitral desfavorável
7. Ausência de proteções padrão de mercado

Para cada problema:
- Cláusula original (citar)
- Por que é problema
- Redação contraproposta (texto pronto)
- Severidade: NEGOCIÁVEL / DEAL-BREAKER
</tarefa>

<atencao>
Parecer técnico assistivo. Em contratos com risco patrimonial alto, validar com advogado humano antes de assinar.
</atencao>`,
  },
  {
    id: 'termo-uso-privacidade',
    title: 'Termos de Uso + Política de Privacidade (start)',
    category: 'juridico',
    goal: 'Documento-base LGPD compliant para site/app pequeno',
    template: `Você é advogado especializado em LGPD e direito digital brasileiro.

<negocio>
Empresa: [RAZÃO SOCIAL + CNPJ]
Site/app: [URL]
O que coletamos: [DADOS]
Como tratamos: [FINALIDADES]
Onde armazenamos: [PROVIDERS — Supabase, Vercel, etc]
Compartilhamos com: [QUEM E POR QUE]
Cookies: [QUAIS E POR QUE]
Forma de monetização: [GRÁTIS / PAGO / FREEMIUM]
</negocio>

<tarefa>
Gere DOIS documentos:

1. TERMOS DE USO:
   - Aceite e capacidade
   - Descrição do serviço
   - Conta de usuário
   - Conduta proibida
   - Propriedade intelectual
   - Limitação de responsabilidade
   - Pagamento (se aplicável)
   - Rescisão
   - Lei aplicável e foro

2. POLÍTICA DE PRIVACIDADE (LGPD):
   - Controlador (com CNPJ)
   - Bases legais de tratamento
   - Dados coletados (categorias)
   - Finalidades
   - Compartilhamento
   - Retenção
   - Direitos do titular (acesso, correção, eliminação, portabilidade)
   - Canal de contato do encarregado
   - Cookies (detalhamento)
   - Internacional (se transfere dados)
   - Atualizações
</tarefa>

<formato>
Markdown formal pronto para colocar em /termos e /privacidade do site.
Português jurídico claro, sem ser hermético.
</formato>

<atencao>
Modelo-base. Antes de publicar, revisar com advogado humano para o caso específico.
</atencao>`,
  },
  {
    id: 'notificacao-extrajudicial',
    title: 'Notificação extrajudicial de cobrança',
    category: 'juridico',
    goal: 'Cobrar formalmente cliente inadimplente antes de partir pra ação judicial',
    template: `Você é advogado civilista. Redija notificação extrajudicial de cobrança.

<contexto>
Credor: [NOSSA EMPRESA — razão social e CNPJ]
Devedor: [EMPRESA INADIMPLENTE — razão social e CNPJ]
Origem da dívida: [CONTRATO / FATURA / OUTRO]
Data de vencimento original: [DATA]
Valor principal: R$ [X]
Juros e correção contratual: [TAXA + FÓRMULA]
Tempo de inadimplência: [DIAS]
Tentativas prévias de cobrança: [LISTAR DATAS E CANAIS]
</contexto>

<tarefa>
Notificação extrajudicial com:
1. Identificação completa das partes
2. Histórico objetivo da dívida
3. Discriminação dos valores (principal · juros · correção · total)
4. Prazo para pagamento espontâneo (sugerir 5-10 dias úteis)
5. Conta para pagamento
6. Advertência sobre consequências (negativação, ação judicial, custas, honorários)
7. Local, data, assinatura

Tom: firme, formal, sem ameaça desproporcional. Cita base legal (Código Civil, art. 397 e 405).
</tarefa>

<atencao>
Antes de enviar, revisar com advogado humano se o valor for relevante.
</atencao>`,
  },

  // ============== PESSOAS / RH ==============
  {
    id: 'feedback-construtivo',
    title: 'Feedback construtivo difícil',
    category: 'rh',
    goal: 'Dar feedback duro sem destruir relação',
    template: `Você é coach de liderança. Ajude a preparar feedback difícil para colaborador.

<contexto>
Colaborador: [NOME / CARGO]
Tempo na empresa: [TEMPO]
Relação atual: [BOA / TENSA / ESTRANHA]
Conversa: [FORMAL 1:1 / INFORMAL / DEMISSÃO PROXIMA]
</contexto>

<comportamento_problema>
O que está acontecendo (FATOS, não interpretação): [LISTAR EVENTOS ESPECÍFICOS]
Impacto observado no time / cliente / negócio: [DESCREVER]
Quantas vezes já foi abordado antes: [N]
</comportamento_problema>

<resultado_desejado>
O que precisa mudar especificamente: [LISTAR]
Prazo para mudança: [QUANTO TEMPO]
Consequência se não mudar: [SER HONESTO]
</resultado_desejado>

<tarefa>
Roteiro do 1:1 com:
1. Abertura: criar contexto, não fazer suspense
2. Fatos: descrever EVENTOS ESPECÍFICOS (sem rótulos)
3. Impacto: como afeta o time/cliente
4. Pergunta aberta: o que está acontecendo do lado dele?
5. Expectativa clara: comportamento esperado
6. Combinado: prazo, follow-up, suporte
7. Encerramento: reafirmar que acredita na pessoa OU dar saída se for o caso

Inclua: 3 respostas possíveis dele e como reagir.
</tarefa>

<voz>
Direta, respeitosa, sem agressão. Sem "feedback sandwich" fake.
</voz>`,
  },
  {
    id: 'job-description',
    title: 'JD (Job Description) que atrai os bons',
    category: 'rh',
    goal: 'Vaga que filtra os medianos e atrai os top',
    template: `Você é Head of People. Escreva JD que atrai candidato sênior+.

<vaga>
Cargo: [CARGO]
Senioridade: [JR/PL/SR/Staff/Head]
Modelo: [REMOTO/HÍBRIDO/PRESENCIAL — cidade]
Salário (faixa): R$ [X-Y] + [BENEFÍCIOS]
Time: [TAMANHO E ESTRUTURA]
Reporta para: [CARGO]
</vaga>

<contexto_empresa>
O que fazemos: [1 LINHA]
Por que essa vaga existe: [PROBLEMA REAL, NÃO "ESTAMOS CRESCENDO"]
Cultura real (não a do site): [3 TRAÇOS]
</contexto_empresa>

<top_3_entregas_em_12m>
1. [ENTREGA CONCRETA]
2. [ENTREGA CONCRETA]
3. [ENTREGA CONCRETA]
</top_3_entregas_em_12m>

<tarefa>
JD com:
1. Headline atraente (não "Vaga de X")
2. Por que a vaga existe (problema real)
3. O que entrega nos primeiros 12 meses
4. Como medimos sucesso (KPIs concretos)
5. Match: comportamentos (não certificados)
6. ANTI-match: quem NÃO se encaixa (filtro positivo)
7. Processo seletivo claro (3-4 etapas, prazos)
8. Faixa salarial pública
9. Benefícios reais
10. Por que NÃO trabalhar aqui (honesto)
</tarefa>

<proibido>
"Buscamos profissional dinâmico"
"Ambiente desafiador"
"Plano de carreira agressivo"
"Vestir a camisa"
</proibido>`,
  },
  {
    id: 'entrevista-roteiro',
    title: 'Roteiro de entrevista comportamental (STAR)',
    category: 'rh',
    goal: 'Descobrir se candidato é bom de verdade ou bom de entrevista',
    template: `Você é hiring manager experiente. Crie roteiro de entrevista comportamental.

<vaga>
Cargo: [CARGO]
Top 3 competências críticas: [LISTAR]
Estágio: [PRIMEIRA / FINAL]
Tempo disponível: [DURAÇÃO]
</vaga>

<tarefa>
Roteiro de [DURAÇÃO] com:

1. ABERTURA (5 min):
   - Quebra-gelo
   - Apresentação curta da agenda

2. EXPLORATÓRIO (10 min):
   - 3 perguntas sobre experiência recente que mais ensinou

3. COMPORTAMENTAL STAR (25 min):
   - Para cada competência crítica, 1 pergunta no formato "conte sobre uma vez que..."
   - Para cada pergunta: o que escutar (Situation, Task, Action, Result) e sinais vermelhos
   - 1 pergunta de "fracasso" — como reage a derrota

4. TÉCNICA (15 min):
   - 2 perguntas que só quem fez o trabalho responde
   - 1 cenário hipotético com decisão difícil

5. PERGUNTAS DO CANDIDATO (10 min):
   - O que a qualidade das perguntas dele diz sobre ele

6. ENCERRAMENTO (5 min):
   - Próximos passos claros
   - Prazo de retorno

Para cada bloco: o que é verde, amarelo, vermelho na resposta.
</tarefa>`,
  },
  {
    id: 'plano-desenvolvimento',
    title: 'PDI (Plano de Desenvolvimento Individual)',
    category: 'rh',
    goal: 'PDI que vira ação real, não slide de RH',
    template: `Você é coach corporativo. Construa PDI para colaborador.

<colaborador>
Nome / cargo / tempo de empresa: [DADOS]
Avaliação atual: [FORÇA E GAPS PRINCIPAIS]
Aspiração declarada (próximos 18 meses): [O QUE QUER FAZER]
Tempo disponível para desenvolvimento: [HORAS/SEMANA]
</colaborador>

<contexto>
Estratégia da empresa para próximos 12 meses: [3 PRIORIDADES]
Vaga que pode existir em 12-18 meses para essa pessoa: [SE HOUVER]
</contexto>

<tarefa>
PDI 12 meses dividido em 4 ciclos trimestrais:
1. PARA CADA TRIMESTRE:
   - 1 objetivo de impacto no negócio
   - 1 objetivo de desenvolvimento técnico
   - 1 objetivo de desenvolvimento comportamental
   - Como mediremos resultado
   - Suporte da empresa (curso, mentor, projeto)

2. TOOLS:
   - Cursos recomendados (gratuitos + pagos com link)
   - Livros (top 3, não 10)
   - Mentor sugerido (interno ou externo)

3. ACOMPANHAMENTO:
   - 1:1 semanal com gestor — pauta padrão
   - Revisão trimestral formal — formato

4. SE NÃO ANDAR:
   - Bandeira amarela (3 meses): conversa franca
   - Bandeira vermelha (6 meses): decisão sobre encaixe
</tarefa>`,
  },

  // ============== PRODUTIVIDADE PESSOAL ==============
  {
    id: 'priorizacao-semana',
    title: 'Priorização da semana (regra 1-3-5)',
    category: 'pessoal',
    goal: 'Decidir o que fazer e o que NÃO fazer essa semana',
    template: `Você é meu chief of staff. Ajude a priorizar a semana.

<contexto>
Hoje é [DIA DA SEMANA]
Próximo evento crítico: [O QUE / QUANDO]
Energia atual: [BOA / MÉDIA / BAIXA]
Reuniões já agendadas essa semana: [HORAS]
</contexto>

<entrada_bruta>
[DESPEJE TUDO O QUE ESTÁ NA SUA CABEÇA — tarefas, ideias, follow-ups, problemas, oportunidades]
</entrada_bruta>

<tarefa>
1. CATEGORIZE cada item: URGENTE / IMPORTANTE / DELEGÁVEL / DESCARTÁVEL
2. APLIQUE 1-3-5:
   - 1 tarefa BIG (resultado importante, 2+ horas)
   - 3 tarefas MEDIUM (1 hora cada)
   - 5 tarefas SMALL (15-30 min cada)
3. IDENTIFIQUE:
   - O que não fazer essa semana (explicar por quê)
   - O que delegar e para quem
   - O que vale agendar tempo no calendário
4. SUGIRA ROTINA:
   - Manhã (foco profundo)
   - Tarde (reuniões e respostas)
   - Sexta (revisão)
5. ALERTA:
   - O que pode dar errado se essa semana virar caos
</tarefa>

<formato>
Lista clara, sem florear. Cada item com tempo estimado.
</formato>`,
  },
  {
    id: 'leitura-rapida',
    title: 'Resumo executivo de artigo/livro denso',
    category: 'pessoal',
    goal: 'Não ter que ler 30 páginas para captar a ideia central',
    template: `Você é meu pesquisador. Sintetize esse material denso.

<material>
[COLAR TEXTO OU LINK]
</material>

<tarefa>
Resumo em camadas:
1. TL;DR em 1 frase (o que mudou na minha cabeça depois disso)
2. 3 ideias principais (cada uma em 1 parágrafo curto)
3. Citações textuais que VALEM guardar (máx 5)
4. O que isso muda na prática para meu negócio
5. Quem mais devia ler isso (e por quê)
6. Crítica honesta — o que NÃO convenceu
</tarefa>

<formato>
Markdown. Sem floreio acadêmico. Linguagem de operador.
</formato>`,
  },
  {
    id: 'preparacao-reuniao',
    title: 'Preparação de reunião importante',
    category: 'pessoal',
    goal: 'Não entrar em reunião crítica sem mapa mental claro',
    template: `Você é meu chief of staff. Prepare-me para reunião importante.

<reuniao>
Com quem: [NOMES + CARGOS + EMPRESA]
Quando: [DATA + HORÁRIO]
Duração prevista: [MIN]
Lugar: [FÍSICO / ZOOM]
Tipo: [VENDA / NEGOCIAÇÃO / CRISE / INVESTIDOR / SÓCIO / PARCERIA]
</reuniao>

<contexto>
Histórico com essa pessoa/empresa: [O QUE JÁ ACONTECEU]
Última interação: [DATA + RESUMO]
O que essa pessoa quer de mim: [SE SOUBER]
O que EU quero dessa reunião: [RESULTADO DESEJADO]
</contexto>

<tarefa>
Brief de pré-reunião:
1. CONTEXTO em 3 bullets (relação, status, sinais recentes)
2. AGENDA SUGERIDA (objetivos claros)
3. PERGUNTAS-CHAVE que devo fazer (não óbvias)
4. PONTOS A EVITAR (assuntos minados, datas sensíveis)
5. CENÁRIOS DE RESPOSTA:
   - Cenário A: vai bem — próximo passo
   - Cenário B: tenso — como conduzir
   - Cenário C: trava completa — saída digna
6. MATERIAIS A LEVAR (deck, planilha, números)
7. PERGUNTAS QUE ELES PROVAVELMENTE FAZEM + RESPOSTAS PRONTAS
8. FOLLOW-UP imediato (próximas 24h)
</tarefa>`,
  },
  {
    id: 'decisao-dificil',
    title: 'Framework para decisão difícil',
    category: 'pessoal',
    goal: 'Decisão importante onde nenhum caminho é óbvio',
    template: `Você é mentor experiente. Ajude a estruturar uma decisão difícil.

<decisao>
O que estou decidindo: [DESCREVER]
Por que é difícil: [O QUE TRAVA]
Prazo para decidir: [QUANDO]
Reversível? [SIM / NÃO / PARCIALMENTE]
Quem é afetado: [LISTAR]
</decisao>

<opcoes_consideradas>
1. [OPÇÃO A]
2. [OPÇÃO B]
3. [OPÇÃO C — se tiver]
</opcoes_consideradas>

<contexto_pessoal>
Como me sinto agora: [HONESTO]
O que me faria arrepender em 12 meses: [QUAL CENÁRIO]
Já passei por algo parecido antes? [O QUE APRENDI]
</contexto_pessoal>

<tarefa>
Estruture análise em 6 frentes:
1. CRITÉRIOS DE DECISÃO — quais variáveis pesam mais
2. MATRIZ — cada opção × cada critério com nota 1-5
3. CENÁRIOS — para cada opção, melhor caso · base · pior caso
4. INVERSÃO — se eu já tivesse decidido [OPÇÃO X], por que estaria errado?
5. QUEM DEVIA TER VOZ — pessoas afetadas que ainda não consultei
6. PRINCIPLES — qual princípio meu (de negócio ou pessoal) está em jogo

Termine com:
- Recomendação fundamentada
- 1 pergunta crítica que ainda preciso responder antes
- Sinal para PAUSA — quando NÃO decidir ainda faz sentido
</tarefa>`,
  },

  // ============== AMPLIAÇÃO: CASOS PRÁTICOS ADICIONAIS ==============
  {
    id: 'canvas-modelo-negocio',
    title: 'Business Model Canvas a partir de descrição',
    category: 'operacional',
    goal: 'Modelo de negócio estruturado em 1 página partindo de 1 parágrafo',
    template: `Você é estrategista de negócio. Construa Business Model Canvas a partir da descrição abaixo.

<descricao_do_negocio>
[1-3 PARÁGRAFOS DESCREVENDO O QUE VOCÊ FAZ, PARA QUEM, COMO COBRA]
</descricao_do_negocio>

<tarefa>
Devolva canvas completo com 9 blocos:
1. SEGMENTOS DE CLIENTE — quem paga (com perfil específico)
2. PROPOSTA DE VALOR — o que muda na vida deles
3. CANAIS — como chegam até você
4. RELACIONAMENTO — como você os mantém
5. FONTES DE RECEITA — quais cobranças e modelo
6. RECURSOS-CHAVE — o que precisa pra operar
7. ATIVIDADES-CHAVE — o que você faz no dia a dia
8. PARCERIAS-CHAVE — quem você precisa ao lado
9. ESTRUTURA DE CUSTO — onde sai o dinheiro

Para cada bloco:
- O que você descreveu (cite a frase ou inferência)
- 1 gap óbvio (algo que está implícito mas precisa ser explícito)
- 1 risco principal
</tarefa>

<formato>
Tabela markdown com 9 linhas + 1 parágrafo de "leitura cruzada" mostrando inconsistências entre blocos.
</formato>`,
  },
  {
    id: 'analise-cac-ltv',
    title: 'Análise CAC × LTV × Payback',
    category: 'financeiro',
    goal: 'Saber se o canal de aquisição compensa — sem viés de quem rodou a campanha',
    template: `Você é growth analyst sênior.

<contexto>
Negócio: [SaaS / e-commerce / serviço]
Ticket médio: R$ [X] / mês ou R$ [X] / pedido
Margem bruta: [Y]%
Retenção média: [Z] meses ou [Z]% YoY
</contexto>

<dados>
[ANEXAR planilha por canal: investimento · leads · clientes · receita gerada · período]
</dados>

<tarefa>
1. Calcule CAC por canal (investimento ÷ clientes adquiridos)
2. Calcule LTV por canal (ticket × margem × retenção média)
3. Calcule LTV/CAC e payback em meses
4. Sanity check:
   - Algum canal com LTV/CAC &gt; 5? Provavelmente erro de medição (ou ouro escondido)
   - Algum canal com payback &gt; 18 meses? Risco de capital
5. Recomende: dobrar onde · cortar onde · investigar onde
6. Aponte custo escondido não considerado (folha do CS, devolução, custo de processamento)
</tarefa>

<formato>
- Tabela: canal · CAC · LTV · ratio · payback · veredito
- Top 3 ações priorizadas
- 1 pergunta de auditoria (o que pode estar errado nos números)
</formato>`,
  },
  {
    id: 'roteiro-demo-produto',
    title: 'Roteiro de demo de 15 minutos por persona',
    category: 'comercial',
    goal: 'Demo que fecha, não tour de funcionalidade',
    template: `Você é AE veterano. Construa roteiro de demo de 15 min.

<contexto>
Produto: [DESCRIÇÃO]
Persona alvo desta demo: [CARGO + SETOR + TAMANHO EMPRESA]
Dor principal dela: [DOR ESPECÍFICA]
Decisor final: [SE OUTRA PESSOA]
Concorrente que está sendo considerado: [SE SOUBER]
</contexto>

<tarefa>
Roteiro estruturado:

1. ABERTURA (2 min)
   - Reconfirmar agenda
   - Reconfirmar dor + impacto em R$
   - Setting expectation: "ao final, você decide se faz sentido próxima conversa"

2. DEMO ESPECÍFICA (10 min)
   - Mostrar APENAS 3 features ligadas DIRETO à dor declarada
   - Para cada: aqui é o antes (pain) · aqui é como resolvemos · aqui é o ROI mensurável
   - Pular o resto. Ferramenta tem mais 50 features, demo não é tour.

3. PROVA SOCIAL (1 min)
   - 1 caso de cliente parecido (não 10) — nome, métrica, prazo

4. ESPECIFICIDADE (1 min)
   - "Pelo que vi até aqui, isso resolveria seu X em Y tempo?"
   - Forçar resposta concreta

5. PRÓXIMO PASSO (1 min)
   - Não "vou mandar email". Marcar reunião com decisor.
   - Data, hora, agenda da próxima.

Para cada bloco, escreva o que falar e o que NÃO falar.
</tarefa>`,
  },
  {
    id: 'plano-recuperacao-cliente',
    title: 'Win-back de cliente que cancelou (últimos 90d)',
    category: 'comercial',
    goal: 'Reabrir conversa com cliente perdido sem parecer carente',
    template: `Você é CS Manager experiente em reativação.

<contexto>
Cliente: [NOME + perfil]
Cancelou em: [QUANTOS DIAS ATRÁS]
Motivo declarado: [O QUE ELE DISSE]
Motivo real provável: [SUA HIPÓTESE]
Tempo total de uso antes de cancelar: [PERÍODO]
Última nota NPS: [SE TIVER]
Valor de contrato anterior: R$ [X]
</contexto>

<tarefa>
Plano de win-back em 3 etapas:

1. DIAGNÓSTICO (semana 1)
   - Email pessoal (escreva o draft): 3-4 linhas, sem pitch, perguntando o que poderia ter sido melhor.
   - Resposta esperada: confirma motivo ou revela outro.

2. OFERTA (semana 2)
   - Se motivo foi preço: oferta específica (50% off 3 primeiros meses, sem permanência).
   - Se motivo foi feature: confirma se o que ele queria existe agora — vídeo demo de 90s.
   - Se motivo foi atendimento: nova pessoa do nosso time atende ele exclusivo.
   - Para cada caso, escreva email/mensagem com o gancho.

3. CONVITE (semana 3)
   - Reunião de 30 min — sem compromisso de compra. Honesto.
   - Se aceitar: agenda clara do que vai discutir.

Critério de parada:
- Sem resposta após 3 toques → arquiva por 6 meses.
- Resposta negativa firme → arquiva. Não insiste.
</tarefa>`,
  },
  {
    id: 'comunicado-aumento-preco',
    title: 'Email + FAQ anunciando reajuste sem churn',
    category: 'marketing',
    goal: 'Aumentar preço sem perder mais que 10% da base',
    template: `Você é CMO experiente em pricing communication.

<contexto>
Produto: [NOME]
Preço atual: R$ [X] / mês
Preço novo: R$ [Y] / mês (aumento de [%])
Último reajuste: [QUANDO]
Justificativa real do aumento: [CUSTO, FEATURE NOVA, INFLAÇÃO]
Carência sugerida pra clientes atuais: [Y MESES ANTES DO NOVO PREÇO]
</contexto>

<tarefa>
Gere DOIS materiais:

1. EMAIL para clientes ativos:
   - Assunto: claro, sem suspense (não "Uma novidade importante!")
   - Abertura: agradecer pelo tempo de cliente (com dado real — "há 14 meses conosco")
   - O QUE muda + QUANDO + QUANTO
   - POR QUE (1-2 frases honestas — sem "para servir melhor")
   - O QUE NÃO muda (manter ancoragem)
   - Como conversar se for desafio (canal direto, não "responda este email")
   - PS com gesto de boa fé (ex: grandfathered se pagar antes de X)

2. FAQ INTERNA pro time de CS:
   - Top 8 objeções esperadas
   - Resposta padrão para cada (3 níveis de desconto autorizado)
   - O que NÃO ceder
   - Quando escalar pra você

Tom: honesto, firme, profissional. Sem desculpa nem agressão.
</tarefa>`,
  },
  {
    id: 'politica-home-office',
    title: 'Política de home office / híbrido (clara, não ambígua)',
    category: 'rh',
    goal: 'Regra clara que reduz fricção e cobrança',
    template: `Você é Head of People. Escreva política de remoto/híbrido.

<contexto>
Empresa: [TAMANHO + SETOR]
Cultura atual: [REMOTA / HÍBRIDA / PRESENCIAL]
Realidade: [QUANTOS DIAS NO ESCRITÓRIO HOJE NA PRÁTICA]
Decisão que se quer comunicar: [MUDAR PARA HÍBRIDO 3x · MANTER 100% REMOTO · OUTRO]
Motivo: [POR QUÊ — SEJA HONESTO]
</contexto>

<tarefa>
Política em 8 seções:

1. ESPÍRITO da política (1 parágrafo claro do "por quê")
2. REGRA OBJETIVA (quantos dias, quais dias, com flexibilidade)
3. EXCEÇÕES previsíveis (tem filho · mora longe · trabalha viajando · cliente em outra cidade)
4. RESPONSABILIDADES do colaborador (sinalizar com X dias · participar de reuniões críticas)
5. RESPONSABILIDADES da empresa (não cobrar fora do horário · café e infra no escritório)
6. INFRAESTRUTURA DE HOME OFFICE (auxílio · setup mínimo · responsabilidade legal)
7. O QUE ACONTECE se não cumprir (escalação clara, sem zona cinzenta)
8. REVISÃO da política (em quanto tempo será revisada)

Tom: respeitoso mas firme. Cada regra justificada. Zero "vista a camisa".
</tarefa>`,
  },
  {
    id: 'plano-loi-aquisicao',
    title: 'LOI / Term Sheet enxuta para M&A early stage',
    category: 'juridico',
    goal: 'Acordo de intenções claro antes de gastar tempo em due diligence',
    template: `Você é advogado de M&A com 15 anos em early stage no Brasil.

<contexto>
Negócio em discussão: [aquisição majoritária / parceria estratégica / aquisição de carteira]
Alvo: [NOME + CNPJ + faturamento]
Comprador: [QUEM]
Valor indicativo: R$ [X]
Forma de pagamento: [À VISTA / EARN-OUT / AÇÕES / MISTO]
Prazo desejado pra fechar: [QUANDO]
</contexto>

<tarefa>
LOI (Letter of Intent) enxuta em 8 cláusulas:

1. PARTES envolvidas (qualificação completa)
2. OBJETO da operação (1-2 parágrafos do que se compra)
3. PREÇO indicativo + forma de pagamento + condições
4. EXCLUSIVIDADE durante a due diligence (quanto tempo, quanto vale, multa em caso de quebra)
5. CONFIDENCIALIDADE recíproca (escopo e tempo)
6. CONDIÇÕES PRECEDENTES ao closing (DD financeira, fiscal, trabalhista, contratos)
7. PRAZO da LOI (vigência + auto-renovação ou não)
8. LEI APLICÁVEL e foro

Mais:
- 1 parágrafo de "NON-BINDING" exceto pelas cláusulas X e Y (geralmente exclusividade e confidencialidade)
- Local, data, espaço pra assinatura
</tarefa>

<atencao>
LOI é instrumento delicado. Antes de assinar, advogado humano obrigatório. Modelo é referência.
</atencao>`,
  },
  {
    id: 'diagnostico-reuniao-improdutiva',
    title: 'Auditoria da agenda da semana',
    category: 'pessoal',
    goal: 'Cortar 30-40% das reuniões sem perder o que importa',
    template: `Você é executive coach. Analise a agenda da minha semana e proponha cortes.

<contexto>
Cargo: [SEU CARGO]
Tamanho do time direto: [N]
Horas em reunião na semana passada: [X horas]
Sentimento atual: [SUFOCADO / NORMAL / OK]
</contexto>

<agenda>
[LISTAR REUNIÕES DA SEMANA — título, duração, participantes, frequência (recorrente ou pontual)]
</agenda>

<tarefa>
Para cada reunião, classifique:

1. ESSENCIAL — mantém como está
2. REDUZIR — corta tempo pela metade (1h → 30min)
3. DELEGAR — alguém do time vai sem você
4. CANCELAR — pode virar email/Slack

Critério de decisão:
- Você toma decisão na reunião? Se não, é tour de status. CANCELAR.
- Aparece info que só você pode resolver? Se sim, ESSENCIAL.
- Você poderia ler ata e ter o mesmo resultado? DELEGAR.

Devolva:
- Agenda redesenhada (com cortes aplicados)
- Horas/semana liberadas
- 1 parágrafo de comunicação pro time sobre as mudanças
- 1 risco do plano (alguma reunião que parece dispensável mas tem função social)
</tarefa>`,
  },
];

export const promptCategories = [
  { id: 'comercial', label: 'Comercial' },
  { id: 'financeiro', label: 'Financeiro' },
  { id: 'operacional', label: 'Operações' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'juridico', label: 'Jurídico' },
  { id: 'rh', label: 'Pessoas' },
  { id: 'pessoal', label: 'Produtividade pessoal' },
] as const;
