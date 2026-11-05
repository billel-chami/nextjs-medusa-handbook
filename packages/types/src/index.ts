/**
 * Core Domain Types & Data Transfer Objects (DTOs)
 * Strict Clean Architecture contracts decoupled from database schemas.
 */

// ============================================================================
// 1. Regional & Monetary Types
// ============================================================================

export interface MoneyDTO {
  readonly amount: number; // Stored in cents / smallest currency unit
  readonly currencyCode: string; // ISO 4217, e.g. "usd", "eur", "dzd"
  readonly formatted: string; // Pre-calculated formatted display string
}

export interface RegionDTO {
  readonly id: string;
  readonly name: string;
  readonly currencyCode: string;
  readonly countries: readonly string[]; // ISO 2-letter country codes
  readonly isRtl: boolean; // Indicates if region default locale is RTL
}

// ============================================================================
// 2. Catalog & Discovery Types
// ============================================================================

export interface ProductVariantDTO {
  readonly id: string;
  readonly title: string;
  readonly sku?: string;
  readonly barcode?: string;
  readonly inventoryQuantity: number;
  readonly allowBackorder: boolean;
  readonly prices: readonly MoneyDTO[];
  readonly options: Record<string, string>; // e.g., { "Size": "M", "Color": "Navy" }
}

export interface ProductDTO {
  readonly id: string;
  readonly handle: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly thumbnail?: string;
  readonly images: readonly string[];
  readonly categoryHandle?: string;
  readonly variants: readonly ProductVariantDTO[];
  readonly minPrice: MoneyDTO;
  readonly maxPrice: MoneyDTO;
  readonly createdAt: string;
  readonly updatedAt: string;
}

// ============================================================================
// 3. Cart & Checkout Types
// ============================================================================

export interface CartLineItemDTO {
  readonly id: string;
  readonly variantId: string;
  readonly productTitle: string;
  readonly variantTitle: string;
  readonly thumbnail?: string;
  readonly unitPrice: MoneyDTO;
  readonly quantity: number;
  readonly subtotal: MoneyDTO;
  readonly total: MoneyDTO;
}

export interface ShippingAddressDTO {
  readonly firstName: string;
  readonly lastName: string;
  readonly company?: string;
  readonly address1: string;
  readonly address2?: string;
  readonly city: string;
  readonly countryCode: string;
  readonly province?: string;
  readonly postalCode: string;
  readonly phone?: string;
}

export interface CartDTO {
  readonly id: string;
  readonly regionId: string;
  readonly currencyCode: string;
  readonly items: readonly CartLineItemDTO[];
  readonly shippingAddress?: ShippingAddressDTO;
  readonly shippingTotal: MoneyDTO;
  readonly taxTotal: MoneyDTO;
  readonly discountTotal: MoneyDTO;
  readonly subtotal: MoneyDTO;
  readonly total: MoneyDTO;
  readonly totalQuantity: number;
}

// ============================================================================
// 4. Logistics & Carrier Integration Types
// ============================================================================

export type CarrierCode = "dhl" | "fedex" | "ups" | "local_courier";

export type ShipmentStatus =
  | "pending"
  | "manifested"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "delivery_failed"
  | "returned_to_sender";

export interface TrackingCheckpointDTO {
  readonly timestamp: string;
  readonly status: ShipmentStatus;
  readonly description: string;
  readonly locationCity?: string;
  readonly locationCountry?: string;
}

export interface CarrierTrackingDTO {
  readonly trackingNumber: string;
  readonly carrier: CarrierCode;
  readonly currentStatus: ShipmentStatus;
  readonly estimatedDelivery?: string;
  readonly checkpoints: readonly TrackingCheckpointDTO[];
}

export interface InboundCarrierWebhookDTO {
  readonly eventId: string;
  readonly carrier: CarrierCode;
  readonly trackingNumber: string;
  readonly status: ShipmentStatus;
  readonly eventTimestamp: string;
  readonly signature: string;
  readonly rawPayload: string;
}

// ============================================================================
// 5. Result Monad Envelope (Defensive Error Handling)
// ============================================================================

export type Result<T, E = Error> =
  | { readonly success: true; readonly data: T }
  | { readonly success: false; readonly error: E };

