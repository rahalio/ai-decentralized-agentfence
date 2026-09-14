/**
 * Delegations Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/delegations.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type DelegationEdge = components["schemas"]["DelegationEdge"];
export type DelegationEdgeListData = components["schemas"]["DelegationEdgeListData"];
export type DelegationGraph = components["schemas"]["DelegationGraph"];
export type DelegationGraphNode = components["schemas"]["DelegationGraphNode"];
export type DelegationInheritance = components["schemas"]["DelegationInheritance"];
export type DelegationEdgeCreateRequest = components["schemas"]["DelegationEdgeCreateRequest"];
export type Delegation = operations["listDelegationEdges"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateDelegationEdgeRequestInput = NonNullable<operations["createDelegationEdge"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListDelegationEdgesParams = NonNullable<operations["listDelegationEdges"]["parameters"]["query"]>;
export type GetDelegationGraphParams = NonNullable<operations["getDelegationGraph"]["parameters"]["query"]>;
export type GetDelegationEdgeParams = operations["getDelegationEdge"]["parameters"]["path"];
export type GetDelegationInheritanceParams = operations["getDelegationInheritance"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListDelegationEdgesResponse = operations["listDelegationEdges"]["responses"]["200"]["content"]["application/json"];
export type CreateDelegationEdgeResponse = operations["createDelegationEdge"]["responses"]["201"]["content"]["application/json"];
export type GetDelegationGraphResponse = operations["getDelegationGraph"]["responses"]["200"]["content"]["application/json"];
export type GetDelegationEdgeResponse = operations["getDelegationEdge"]["responses"]["200"]["content"]["application/json"];
export type GetDelegationInheritanceResponse = operations["getDelegationInheritance"]["responses"]["200"]["content"]["application/json"];


