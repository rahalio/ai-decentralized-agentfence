/**
 * Audits Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/audits.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AuditChainVerifyResult = components["schemas"]["AuditChainVerifyResult"];
export type AuditEvent = components["schemas"]["AuditEvent"];
export type AuditEventListData = components["schemas"]["AuditEventListData"];
export type AuditOutcome = components["schemas"]["AuditOutcome"];
export type AuditChainVerifyRequest = components["schemas"]["AuditChainVerifyRequest"];
export type AuditEventCreateRequest = components["schemas"]["AuditEventCreateRequest"];
export type Event = operations["listAuditEvents"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type AppendAuditEventRequestInput = NonNullable<operations["appendAuditEvent"]["requestBody"]>["content"]["application/json"];
export type VerifyAuditChainRequestInput = NonNullable<operations["verifyAuditChain"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListAuditEventsParams = NonNullable<operations["listAuditEvents"]["parameters"]["query"]>;
export type GetAuditEventParams = operations["getAuditEvent"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListAuditEventsResponse = operations["listAuditEvents"]["responses"]["200"]["content"]["application/json"];
export type AppendAuditEventResponse = operations["appendAuditEvent"]["responses"]["201"]["content"]["application/json"];
export type GetAuditEventResponse = operations["getAuditEvent"]["responses"]["200"]["content"]["application/json"];
export type VerifyAuditChainResponse = operations["verifyAuditChain"]["responses"]["200"]["content"]["application/json"];


