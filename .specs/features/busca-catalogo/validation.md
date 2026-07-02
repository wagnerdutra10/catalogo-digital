# Validation — Busca no Catálogo

**Verdict: ✅ PASS** (com 1 nota de acompanhamento, não bloqueante)

Diff range: `50bab95` (branch `fix/busca-catalogo`).

## Gate

- Suíte completa: **141/141 testes verdes** (`npx vitest run`).
- Typecheck: `npx tsc --noEmit` limpo.

## Per-AC (evidência)

| AC | Descrição | Evidência | Status |
| -- | --------- | --------- | ------ |
| CAT-B01 | Lupa exibe/oculta campo de busca | `StoreHeader.test.tsx`: input ausente quando fechado / presente quando aberto; clique aciona `onToggleSearch` | ✅ |
| CAT-B02 | Filtra por substring do nome, case/accent-insensitive | `filterCatalog`: "VEST"→[a,c]; "vest"→"Véstido"; `normalizeSearch` | ✅ |
| CAT-B03 | Interseção categoria ∩ nome | `filterCatalog(catalog,"Blusas","seda")`→["b"] | ✅ |
| CAT-B04 | Termo em branco = sem filtro | `filterCatalog(...,"   ")`→todos da categoria | ✅ |
| CAT-B05 | Sem correspondência → vazio (estado vazio no client) | `filterCatalog(...,"sapato")`→[] + copy ciente da busca em `CatalogoClient` | ✅ |
| CAT-B06 | Fechar limpa o termo | `toggleSearch` zera `searchQuery` ao fechar (unit no hook via header toggle) | ✅ |

## Discrimination sensor

3 mutantes injetados em `filterCatalog`, todos mortos:

1. substring → igualdade exata: **3 testes falharam** ✅
2. remover normalização de acento no nome: **1 teste falhou** ✅
3. ignorar categoria (quebra interseção): **2 testes falharam** ✅

## Nota de acompanhamento (não bloqueante)

- A barra de pills usa `sticky top-[69px]` (altura do header antigo). Com a busca aberta o header cresce, então, ao rolar, as pills podem sobrepor a base do header. Impacto visual menor, só quando busca aberta + scroll + há pills. Requer verificação em browser (Docker/Supabase estavam fora do ar nesta sessão). Sugerido ajustar offset dinâmico ou mover o input para fora do fluxo sticky se incomodar.

## Preview

Não executado: catálogo depende de Supabase local (Docker offline nesta sessão). Comportamento coberto por testes de componente (render real do `StoreHeader`) + lógica pura. Recomendado 1 passada visual em `/{slug}` com a stack de pé.
