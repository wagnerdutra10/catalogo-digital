# Escopo do Produto — Catálogo Digital V1

**Versão:** 2.1  
**Data:** $(date '+%d de %B de %Y')

---

## 1. Visão geral

SaaS de assinatura para lojistas de varejo — foco inicial em moda — que permite criar um catálogo online personalizado e converter visitantes em compradores via WhatsApp. O cliente final monta uma sacola com múltiplos produtos e envia o pedido completo via WhatsApp com mensagem pré-formatada e customizável.

**Posicionamento:** vitrine digital premium. O lojista deve sentir que está à frente da concorrência.

---

## 2. Perfis de usuário

| Perfil | Descrição | Principal necessidade |
|---|---|---|
| Lojista (B2B) | Dono de loja de moda, boutique, revendedora. Paga a mensalidade. | Montar catálogo rápido e receber pedidos organizados sem esforço |
| Cliente final | Comprador que acessa o catálogo via link compartilhado. | Montar sacola, ver total e enviar pedido com um clique |

---

## 3. Telas do produto

### 3.1 Fluxo de autenticação

| Tela | Elementos principais | Status |
|---|---|---|
| Landing page | Hero, dor, como funciona, features, depoimentos, planos, FAQ, CTA final | V1 |
| Cadastro | Seção "Sua conta" + Seção "Sua loja" com preview do slug em tempo real | V1 |
| Escolha de plano | Cards Starter R$49 e Pro R$99. Sem cartão. 14 dias grátis nos dois. | V1 |
| Login | E-mail + senha + link esqueci senha + link cadastro em Gold Dust | V1 |

### 3.2 Painel do lojista

| Tela | Elementos principais | Status |
|---|---|---|
| Dashboard | Resumo (ativos, esgotados, link). Banner de trial durante 14 dias. | V1 |
| Listagem de produtos | Grid com status, toggle ativo/inativo, editar, excluir. Estado vazio. | V1 |
| Cadastro / edição de produto | Upload fotos, nome, preço, categoria (dropdown), cores (swatches + custom), tamanhos, estoque, visibilidade. | V1 |
| Categorias | Lista com editar/excluir + formulário inline "Nova categoria". | V1 |
| Configurações da loja | Logo, nome, cor, WhatsApp, GA ID, Pixel ID, template de mensagem WhatsApp. | V1 |

### 3.3 Catálogo público

| Tela | Elementos principais | Status |
|---|---|---|
| Home do catálogo | Header com logo + ícone da sacola com badge. Pills de categorias. Grid de produtos. | V1 |
| Detalhe do produto | Foto grande, nome, preço, variações, quantidade, botão "Adicionar à sacola" sticky. | V1 |
| Sacola (drawer) | Slide-in lateral com itens, quantidades, subtotais, total e CTA WhatsApp. | V1 |

---

## 4. Funcionalidades do V1

### 4.1 Gestão da loja

| Funcionalidade | Detalhe | Status |
|---|---|---|
| Cadastro da loja | Nome, logo, cor principal | V1 |
| Slug automático | Gerado do nome da loja. Preview em tempo real. Editável. Unicidade validada. | V1 |
| Cadastro de produtos | Foto, nome, descrição, preço, variações | V1 |
| Organização por categorias | Gestão de categorias separada. Dropdown no produto com criação inline. | V1 |
| Controle de estoque básico | Quantidade + flag esgotado. Sem histórico de movimentações. | V1 simplificado |
| Personalização do catálogo | Cor de destaque, logo e nome | V1 |
| Seleção de cores no produto | Paleta de 16 cores preset (swatches) + input de cor customizada | V1 |
| Google Analytics | Lojista cola o ID — script injetado no catálogo | V1 via script |
| Pixel do Facebook | Lojista cola o Pixel ID — script injetado | V1 via script |

### 4.2 Sacola e pedido

| Funcionalidade | Detalhe | Status |
|---|---|---|
| Sacola de produtos | Cliente adiciona múltiplos produtos com variações e quantidades | V1 |
| Drawer da sacola | Slide-in lateral com lista de itens, controles de quantidade e total | V1 |
| Mensagem WhatsApp formatada | Lista numerada com produto, variação, qtd, subtotal por item, total em destaque | V1 |
| Template customizável | Lojista edita o template da mensagem usando variáveis (`{saudacao}`, `{itens}`, `{total}`) | V1 |
| Preview do template | Preview em tempo real com dados mockados na tela de configurações | V1 |
| Variáveis disponíveis | Chips clicáveis para inserir variáveis no template | V1 |

### 4.3 Trial e assinatura

| Funcionalidade | Detalhe | Status |
|---|---|---|
| Trial de 14 dias | Acesso Pro completo. Sem cartão no cadastro. Nos dois planos. | V1 |
| Tela de escolha de plano | Exibida após cadastro. Cobrança só no dia 15. | V1 |
| Banner de trial | No dashboard: dias restantes + CTA "Assinar agora". Some após conversão. | V1 |
| Conversão no dia 15 | Lojista insere cartão. Se não converter, catálogo fica oculto. | V1 |
| Cancelamento | Sem fidelidade. Catálogo oculto até reativação. Dados preservados. | V1 |

---

## 5. Fora do escopo do V1

| Funcionalidade | Motivo | Versão |
|---|---|---|
| Histórico de pedidos | Pedido vai pro WhatsApp — não é capturado no sistema | V2 |
| Status da venda | Depende do histórico de pedidos | V2 |
| Impressão de pedidos | Depende do histórico de pedidos | V2 |
| Múltiplos usuários por loja | Complexidade de permissões desnecessária no MVP | V2 |
| Domínio personalizado | DNS + SSL por tenant — infra adicional | V2 |
| Analytics próprio no painel | GA já cobre no V1 | V2 |
| Integração sacola do Instagram | API Meta exige aprovação — meses de burocracia | Fora |
| App mobile nativo | Web responsiva resolve | Fora |
| Checkout próprio | Vira marketplace — complexidade 10x | Fora |

---

## 6. Modelo de monetização

| | Starter | Pro |
|---|---|---|
| **Preço** | R$ 49/mês | R$ 99/mês |
| Produtos | Até 30 | Ilimitados |
| Categorias | Até 5 | Ilimitadas |
| Fotos por produto | Até 3 | Até 5 |
| GA + Pixel | Incluso | Incluso |
| Template de mensagem | Incluso | Incluso |
| Trial | 14 dias grátis (acesso Pro) | 14 dias grátis |

> O trial concede acesso Pro em ambos os planos. Quem cadastrar mais de 30 produtos durante o trial e escolher Starter no dia 15 precisará remover produtos até o limite.

---

## 7. Fluxo do slug — URL da loja

- Gerado automaticamente a partir do nome da loja no cadastro
- Transformação: lowercase → remoção de acentos → espaços viram hífens → remove especiais
- Exemplo: `"Boutique da Ana!"` → `boutique-da-ana`
- Preview em tempo real ao digitar o nome da loja
- Validação de unicidade — sugestão automática se slug existir (`boutique-da-ana-2`)
- Editável nas configurações com nova validação ao salvar
- Nome da pessoa é interno e **não aparece na URL**

---

## 8. Template padrão da mensagem WhatsApp

```
Olá! Gostaria de fazer um pedido:

01. Produto Exemplo
    Quantidade: 2x | Valor unitário: R$ 50,00
    Tamanho: M
    Cor: Preto
    Subtotal: R$ 100,00

02. Outro Produto
    Quantidade: 1x | Valor unitário: R$ 65,20
    Tamanho: G
    Cor: Branco
    Subtotal: R$ 65,20

━━━━━━━━━━━━━━━━━
*Total: R$ 165,20*
━━━━━━━━━━━━━━━━━
```

**Variáveis disponíveis:** `{saudacao}` · `{itens}` · `{total}`

---

## 9. Comportamentos críticos

| Comportamento | Regra |
|---|---|
| Sacola | Persiste durante a navegação no catálogo. Badge atualiza em tempo real. |
| Mensagem WhatsApp | Construída com todos os itens da sacola no template configurado. Sempre nova aba. |
| Produto esgotado | Oculto se `stock=0` OU `is_active=false`. No painel aparece com badge. |
| Catálogo em trial | Público e ativo durante 14 dias. Banner só no painel. |
| Catálogo após expiração | Oculto (404 ou página de expiração). Dados preservados. |
| Limite do Starter | Ao atingir 30 produtos, botão desabilitado + mensagem de upgrade. |
| Listagem de produtos | Tela padrão ao clicar em "Produtos" no menu — não o formulário de criação. |

---

## 10. Riscos e mitigações

| Risco | Descrição | Mitigação |
|---|---|---|
| Churn no mês 2 | Lojista cadastra e depois abandona | Notificação semanal com dados de acesso via GA. Banner de trial cria urgência. |
| Não conversão no trial | Experimenta mas não assina | E-mail de recuperação no dia 12. Catálogo oculto — não deletado — incentiva reativar. |
| Concorrência com Instagram | Lojistas já usam Instagram Shopping de graça | Pitch: catálogo vai pro WhatsApp (90% abertura vs 5–10% feed). Sacola de pedidos é diferencial. |
| Slug duplicado | Dois lojistas com nome de loja similar | Validação em tempo real + sugestão automática de variação. |

---

## 11. Próximos passos

| # | Etapa | Status |
|---|---|---|
| 1 | Identidade visual | ✅ Concluído — Bold Minimal Premium, Obsidian + Gold Dust |
| 2 | Telas no Claude Design | 🔄 Em andamento — ajustes de sacola, cores, categorias, listagem |
| 3 | Frontend mockado | ⏳ Próximo — Claude Code com dados mockados |
| 4 | Validação com lojistas | ⏳ 5 lojistas de moda locais antes do backend |
| 5 | Backend — Supabase | ⏳ Auth, banco, storage, RLS, limites de plano |
| 6 | Integração de pagamento | ⏳ Stripe ou Pagar.me — cobrança recorrente, trial |
| 7 | Beta fechado | ⏳ 3–5 lojistas em trial para dados reais |
