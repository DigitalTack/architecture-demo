import type { ProductId } from "@/domain/entities/Product"

export type Cart = Record<ProductId, number>