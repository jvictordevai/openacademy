export interface GlossaryTerm {
  term: string;
  short: string;
  long?: string;
  related?: string[];
  source?: { label: string; url: string };
}

export const glossary: GlossaryTerm[] = [
  {
    term: 'Agente',
    short: 'IA que toma várias decisões em sequência para completar uma tarefa, sem você reagir a cada passo.',
    long: 'Diferente de chatbot, agente recebe um objetivo, planeja etapas, executa ferramentas, e só responde quando termina (ou pede ajuda). Claude Code é um exemplo: você diz "atualiza essas dependências", ele faz tudo.',
    related: ['Tool Use', 'Agent Loop'],
    source: { label: 'Anthropic — Agents', url: 'https://docs.claude.com/en/docs/agents-and-tools/overview' },
  },
  {
    term: 'Agent Loop',
    short: 'Ciclo em que IA pede ferramenta → resultado volta → IA decide se precisa de mais ferramenta.',
    long: 'Repete até a tarefa terminar. É o coração de qualquer agente. Você implementa o loop em código; Claude implementa o raciocínio.',
    related: ['Agente', 'Tool Use'],
  },
  {
    term: 'Adaptive Thinking',
    short: 'Modo do Claude Opus 4.7 em que ele pensa mais ou menos conforme a complexidade da pergunta.',
    long: 'Substitui o "extended thinking" manual dos modelos anteriores. Você passa um `effort` (low/medium/high) e ele decide quanto raciocinar.',
    source: { label: 'Anthropic — Adaptive Thinking', url: 'https://docs.claude.com/en/docs/build-with-claude/adaptive-thinking' },
  },
  {
    term: 'API',
    short: 'Interface programática. Outro sistema fala com o Claude via API quando você quer integrar.',
  },
  {
    term: 'CAC',
    short: 'Customer Acquisition Cost — custo para adquirir um cliente. Marketing + vendas dividido por novos clientes.',
    related: ['LTV', 'Payback'],
  },
  {
    term: 'Chain of Thought (CoT)',
    short: 'Técnica de prompt onde você pede para a IA mostrar o raciocínio antes da resposta.',
    long: 'Frase mágica: "Pense passo a passo antes de responder." Reduz erro lógico significativamente em tarefas complexas.',
    related: ['Prompt Engineering'],
  },
  {
    term: 'Cohort (Coorte)',
    short: 'Grupo de clientes com algo em comum (ex: signup no mesmo mês) acompanhado ao longo do tempo.',
    related: ['Churn', 'Retenção'],
  },
  {
    term: 'Claude',
    short: 'Modelo de IA da Anthropic. Família: Opus, Sonnet, Haiku.',
    source: { label: 'Claude product overview', url: 'https://claude.com/product/overview' },
  },
  {
    term: 'Claude Code',
    short: 'Agente da Anthropic para desenvolvedores. Funciona no terminal, VS Code, JetBrains, desktop e web.',
    source: { label: 'Claude Code docs', url: 'https://code.claude.com' },
  },
  {
    term: 'CLAUDE.md',
    short: 'Arquivo que você coloca na raiz de um projeto. Claude Code lê toda sessão como contexto persistente.',
    long: 'Use para padrões de código, convenções, decisões arquiteturais. Equivale a "onboarding doc" para a IA.',
  },
  {
    term: 'Conector',
    short: 'Ponte oficial entre Claude e outro sistema (Drive, Gmail, HubSpot, etc).',
    long: 'Por baixo é um MCP server. Você não configura nada — clica em Connect, autoriza OAuth, usa.',
    related: ['MCP'],
  },
  {
    term: 'Contexto',
    short: 'Tudo que a IA "lembra" durante uma conversa: prompt do sistema, mensagens, arquivos anexados.',
    related: ['Tokens', 'Janela de contexto'],
  },
  {
    term: 'Cowork',
    short: 'Feature do Claude Desktop que dá acesso a arquivos locais durante a conversa.',
  },
  {
    term: 'CSPM',
    short: 'Cloud Security Posture Management. Auditoria contínua da configuração da sua nuvem.',
    related: ['Aikido', 'Segurança'],
  },
  {
    term: 'CST/CSOSN',
    short: 'Códigos de tributação em nota fiscal brasileira. CST = Lucro Real / Presumido. CSOSN = Simples Nacional.',
  },
  {
    term: 'DAST',
    short: 'Dynamic Application Security Testing. Testa o app rodando — como um invasor faria.',
    related: ['SAST', 'Aikido'],
  },
  {
    term: 'DRE',
    short: 'Demonstrativo de Resultados. Receita, custos, despesas, lucro em um período.',
  },
  {
    term: 'Embedding',
    short: 'Representação numérica (vetor) de texto. Usado em busca semântica e RAG.',
    related: ['RAG', 'Vector store'],
  },
  {
    term: 'Few-shot',
    short: 'Técnica de prompt onde você mostra 2-3 exemplos antes de pedir a tarefa.',
    long: 'IA aprende muito mais por exemplo do que por descrição. Em prompt complexo, dois exemplos dobram a qualidade.',
    related: ['Prompt Engineering', 'Zero-shot'],
  },
  {
    term: 'Function Calling',
    short: 'Sinônimo de Tool Use. IA escolhe e chama funções/APIs durante a resposta.',
  },
  {
    term: 'Hallucination (Alucinação)',
    short: 'IA inventa fato com confiança — geralmente nome, número ou citação.',
    long: 'Defesa principal: pedir fontes, exigir cálculo executado (não estimado), conferir números aleatórios manualmente.',
  },
  {
    term: 'Haiku',
    short: 'Modelo mais rápido e barato da família Claude. Ideal para tarefa repetitiva ou alto volume.',
  },
  {
    term: 'Hooks (Claude Code)',
    short: 'Comandos que rodam automaticamente antes/depois de ações do Claude Code.',
    long: 'Tipos: PreToolUse, PostToolUse, Stop. Exemplo: rodar prettier toda vez que ele edita um arquivo.',
  },
  {
    term: 'IaC',
    short: 'Infrastructure as Code. Configurar nuvem por arquivo (Terraform, CloudFormation), não por console.',
  },
  {
    term: 'Inferência',
    short: 'Cada vez que a IA produz uma resposta. Custo é cobrado por inferência (input + output tokens).',
  },
  {
    term: 'Janela de Contexto',
    short: 'Quantos tokens a IA consegue "ler" de uma vez. Claude Opus 4.7 = 1 milhão.',
    related: ['Tokens', 'Contexto'],
  },
  {
    term: 'LTV',
    short: 'Lifetime Value — quanto um cliente gera de receita durante todo o tempo que fica.',
    related: ['CAC'],
  },
  {
    term: 'MCP',
    short: 'Model Context Protocol. Padrão aberto da Anthropic para conectar IA a sistemas externos.',
    long: 'Análogo ao USB para IA. Você implementa um servidor MCP uma vez; qualquer IA compatível pode usar.',
    source: { label: 'MCP site', url: 'https://modelcontextprotocol.io' },
  },
  {
    term: 'MRR / ARR',
    short: 'Monthly / Annual Recurring Revenue. Receita recorrente mensal/anual em SaaS.',
  },
  {
    term: 'NPS',
    short: 'Net Promoter Score. Métrica de satisfação. -100 a 100. Acima de 50 é excepcional.',
  },
  {
    term: 'OAuth',
    short: 'Protocolo onde você autoriza um app a agir em seu nome sem dar sua senha.',
    long: 'É o que acontece quando você clica "Login com Google". Cada conector usa OAuth para acessar suas contas.',
  },
  {
    term: 'Opus',
    short: 'Modelo mais capaz da família Claude. Use para decisão crítica e análise complexa.',
  },
  {
    term: 'Prefill',
    short: 'Técnica onde você começa a resposta do Claude pra forçar formato (ex: JSON puro).',
  },
  {
    term: 'Prompt',
    short: 'A instrução que você dá à IA. Pode ser uma frase ou várias páginas estruturadas.',
  },
  {
    term: 'Prompt Caching',
    short: 'Feature da API que reusa parte do prompt anterior. Reduz custo em até 90% e latência em até 80%.',
  },
  {
    term: 'Prompt Engineering',
    short: 'Disciplina de escrever prompts que extraem o máximo da IA.',
    related: ['Few-shot', 'Chain of Thought', 'Prefill'],
  },
  {
    term: 'Prompt Injection',
    short: 'Ataque onde texto malicioso (em PDF, planilha, screenshot) tenta sequestrar a IA.',
    long: 'Defesa: nunca dê acesso administrativo a IA agindo sobre input não-confiável sem confirmação humana.',
  },
  {
    term: 'RAG',
    short: 'Retrieval-Augmented Generation. IA busca em base própria antes de responder.',
    long: 'Usado quando você quer respostas baseadas em documentação da sua empresa. Alternativa: passar tudo no contexto (Claude com 1M tokens muitas vezes resolve sem RAG).',
    related: ['Embedding', 'Vector store'],
  },
  {
    term: 'RLS',
    short: 'Row Level Security. Regras de acesso a nível de linha no banco (cada usuário vê só o que é dele).',
    long: 'Critical em apps Lovable/Supabase com múltiplos clientes na mesma base.',
  },
  {
    term: 'Routines (Claude Code)',
    short: 'Tarefas agendadas que rodam na nuvem da Anthropic, mesmo com seu computador desligado.',
  },
  {
    term: 'SAST',
    short: 'Static Application Security Testing. Escaneia código fonte por padrões inseguros.',
    related: ['SCA', 'DAST', 'Aikido'],
  },
  {
    term: 'SCA',
    short: 'Software Composition Analysis. Checa se suas dependências (bibliotecas) têm falha conhecida.',
  },
  {
    term: 'Skills (Claude)',
    short: 'Pastas com instruções, scripts e exemplos que o Claude carrega automaticamente.',
    long: 'Composto por SKILL.md (frontmatter + body) e arquivos opcionais. Progressive disclosure: só carrega o necessário.',
    source: { label: 'Anthropic Skills docs', url: 'https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview' },
  },
  {
    term: 'SKILL.md',
    short: 'Arquivo principal de uma Skill. YAML frontmatter (name + description) + corpo em markdown.',
  },
  {
    term: 'Sonnet',
    short: 'Modelo equilibrado da família Claude. Padrão do claude.ai. Cobre 90% do uso empresarial.',
  },
  {
    term: 'Sub-agente',
    short: 'Instância filha do Claude Code rodando tarefa específica em paralelo com agente principal.',
  },
  {
    term: 'Supabase',
    short: 'Backend-as-a-Service open source. Banco PostgreSQL + autenticação + storage + edge functions.',
    long: 'É o backend padrão do Lovable. Você não precisa entender SQL pra usar — Lovable abstrai.',
  },
  {
    term: 'Tokens',
    short: 'Unidade que IA usa para contar texto. 1 token ≈ 4 caracteres em inglês, ~3 em português.',
    long: 'Cobranças e limites são em tokens. Prompt longo = mais tokens = mais caro e mais lento.',
  },
  {
    term: 'Tool Use',
    short: 'Quando IA chama funções/APIs no meio da resposta para buscar dado ou executar ação.',
    long: 'Existem client tools (executam no seu app) e server tools (rodam na infra da Anthropic, ex: web_search).',
    related: ['Agente', 'Agent Loop'],
  },
  {
    term: 'Tree of Thoughts (ToT)',
    short: 'Técnica avançada onde IA explora várias linhas de raciocínio em paralelo e escolhe a melhor.',
    related: ['Chain of Thought'],
  },
  {
    term: 'Vector Store',
    short: 'Banco especializado em buscar por similaridade semântica (não por palavra exata).',
    related: ['Embedding', 'RAG'],
  },
  {
    term: 'Webhook',
    short: 'URL que recebe notificação automática quando algo acontece em outro sistema.',
    long: 'Ex: Stripe dispara webhook quando uma assinatura é cancelada → seu sistema atualiza acesso do cliente.',
  },
  {
    term: 'XML Tags (em prompt)',
    short: 'Forma de estruturar prompt complexo. Anthropic treinou Claude pra entender bem.',
    long: 'Exemplo: `<contexto>...</contexto> <tarefa>...</tarefa> <formato>...</formato>`. Resultado: respostas mais previsíveis.',
  },
  {
    term: 'ZDR',
    short: 'Zero Data Retention. Anthropic não armazena seus dados após processar.',
    long: 'Disponível em planos Enterprise. Importante para dados regulados (saúde, financeiro, jurídico).',
  },
  {
    term: 'Zen (Aikido)',
    short: 'Firewall em runtime do Aikido. Bloqueia ataques (injection, bots) enquanto seu app está rodando.',
  },
];
