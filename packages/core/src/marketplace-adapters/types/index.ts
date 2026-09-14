/**
 * Marketplace Adapters Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/marketplace-adapters.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AdapterStatus = components["schemas"]["AdapterStatus"];
export type HaltAck = components["schemas"]["HaltAck"];
export type MarketplaceAdapter = components["schemas"]["MarketplaceAdapter"];
export type MarketplaceAdapterListData = components["schemas"]["MarketplaceAdapterListData"];
export type MarketplaceKind = components["schemas"]["MarketplaceKind"];
export type PartnerAttestation = components["schemas"]["PartnerAttestation"];
export type HaltAckRequest = components["schemas"]["HaltAckRequest"];
export type MarketplaceAdapterCreateRequest = components["schemas"]["MarketplaceAdapterCreateRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RegisterMarketplaceAdapterRequestInput = NonNullable<operations["registerMarketplaceAdapter"]["requestBody"]>["content"]["application/json"];
export type AcknowledgeHaltRequestInput = NonNullable<operations["acknowledgeHalt"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListMarketplaceAdaptersParams = NonNullable<operations["listMarketplaceAdapters"]["parameters"]["query"]>;
export type GetMarketplaceAdapterParams = operations["getMarketplaceAdapter"]["parameters"]["path"];
export type AcknowledgeHaltParams = operations["acknowledgeHalt"]["parameters"]["path"];
export type VerifyPartnerAttestationParams = operations["verifyPartnerAttestation"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListMarketplaceAdaptersResponse = operations["listMarketplaceAdapters"]["responses"]["200"]["content"]["application/json"];
export type RegisterMarketplaceAdapterResponse = operations["registerMarketplaceAdapter"]["responses"]["201"]["content"]["application/json"];
export type GetMarketplaceAdapterResponse = operations["getMarketplaceAdapter"]["responses"]["200"]["content"]["application/json"];
export type AcknowledgeHaltResponse = operations["acknowledgeHalt"]["responses"]["200"]["content"]["application/json"];
export type VerifyPartnerAttestationResponse = operations["verifyPartnerAttestation"]["responses"]["200"]["content"]["application/json"];


