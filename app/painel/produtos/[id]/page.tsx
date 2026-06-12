import { PRODUCTS } from "@/lib/data";
import { ProdutoFormClient } from "../ProdutoFormClient";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default async function EditarProdutoPage(props: Props) {
  const params = await props.params;
  const product = PRODUCTS.find((p) => p.id === params.id);
  return <ProdutoFormClient product={product} />;
}
