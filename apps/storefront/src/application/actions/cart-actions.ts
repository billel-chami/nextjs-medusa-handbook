"use server";

import { z } from "zod";
import type { Result } from "@ecom/types";

// ============================================================================
// 1. Zod Boundary Schemas (Strict Input Validation)
// ============================================================================

export const AddToCartSchema = z.object({
  variantId: z.string().min(1, "Variant ID is required"),
  quantity: z
    .number()
    .int("Quantity must be an integer")
    .positive("Quantity must be greater than zero")
    .max(99, "Maximum quantity per line item is 99"),
  cartId: z.string().optional(),
});

export type AddToCartInput = z.infer<typeof AddToCartSchema>;

export interface CartOperationSuccess {
  readonly message: string;
  readonly cartId: string;
  readonly lineItemId: string;
}

// ============================================================================
// 2. Server Action Implementation
// ============================================================================

/**
 * Server Action: Adds an item to the cart with strict boundary validation.
 * Can be invoked directly or via React 19 `useActionState`.
 */
export async function addToCartAction(
  prevState: unknown,
  formDataOrInput: FormData | AddToCartInput
): Promise<Result<CartOperationSuccess, string>> {
  try {
    let rawInput: unknown;

    if (formDataOrInput instanceof FormData) {
      rawInput = {
        variantId: formDataOrInput.get("variantId"),
        quantity: Number(formDataOrInput.get("quantity") || 1),
        cartId: formDataOrInput.get("cartId") || undefined,
      };
    } else {
      rawInput = formDataOrInput;
    }

    // Step 1: Validate input against Zod schema
    const parseResult = AddToCartSchema.safeParse(rawInput);
    if (!parseResult.success) {
      const errorMessage = parseResult.error.issues
        .map((issue) => issue.message)
        .join(", ");
      return {
        success: false,
        error: errorMessage,
      };
    }

    const { variantId, quantity, cartId } = parseResult.data;

    // Step 2: Simulated Medusa workflow call (will link to medusa.carts.createLineItem)
    const simulatedCartId = cartId || `cart_${Date.now()}`;
    const simulatedLineItemId = `item_${Date.now()}_${variantId}`;

    return {
      success: true,
      data: {
        message: `Successfully added ${quantity} item(s) to cart.`,
        cartId: simulatedCartId,
        lineItemId: simulatedLineItemId,
      },
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error";
    return {
      success: false,
      error: message,
    };
  }
}

